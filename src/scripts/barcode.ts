// Códigos de barras interactivos: el láser los lee y suenan los primeros 8 compases
// del Minueto en sol mayor (BWV Anh. 114), en un arreglo simplificado a dos voces.

type Note = [midi: number, beats: number];

// Mano derecha, compases 1–8 (negra = 1 tiempo).
const MELODY: Note[] = [
  [74, 1], [67, 0.5], [69, 0.5], [71, 0.5], [72, 0.5],
  [74, 1], [67, 1], [67, 1],
  [76, 1], [72, 0.5], [74, 0.5], [76, 0.5], [78, 0.5],
  [79, 1], [67, 1], [67, 1],
  [72, 1], [74, 0.5], [72, 0.5], [71, 0.5], [69, 0.5],
  [71, 1], [72, 0.5], [71, 0.5], [69, 0.5], [67, 0.5],
  [66, 1], [67, 0.5], [69, 0.5], [71, 0.5], [67, 0.5],
  [69, 3],
];

// Mano izquierda: [midi, tiempo de inicio, duración].
const BASS: [number, number, number][] = [
  [55, 0, 2], [57, 2, 1],
  [59, 3, 3],
  [60, 6, 3],
  [59, 9, 3],
  [57, 12, 3],
  [55, 15, 3],
  [62, 18, 1], [59, 19, 1], [55, 20, 1],
  [62, 21, 1], [50, 22, 2],
];

const BEAT = 0.42; // segundos por negra
const TOTAL_BEATS = MELODY.reduce((sum, [, b]) => sum + b, 0);

let ctx: AudioContext | null = null;
let out: GainNode | null = null;

function audio(): AudioContext | null {
  if (ctx) return ctx;
  const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AC) return null;
  ctx = new AC();
  out = ctx.createGain();
  out.gain.value = 0.55;
  const delay = ctx.createDelay();
  delay.delayTime.value = 0.21;
  const feedback = ctx.createGain();
  feedback.gain.value = 0.18;
  out.connect(ctx.destination);
  out.connect(delay);
  delay.connect(feedback);
  feedback.connect(delay);
  delay.connect(ctx.destination);
  return ctx;
}

function tone(midi: number, when: number, seconds: number, level: number) {
  const ac = audio();
  if (!ac || !out) return;
  const freq = 440 * 2 ** ((midi - 69) / 12);
  const env = ac.createGain();
  env.gain.setValueAtTime(0.0001, when);
  env.gain.exponentialRampToValueAtTime(level, when + 0.012);
  env.gain.exponentialRampToValueAtTime(0.0001, when + Math.max(seconds * 1.6, 0.5));
  // Triángulo + un armónico suave: timbre de caja de música.
  for (const [type, mult, amount] of [['triangle', 1, 1], ['sine', 2, 0.18]] as const) {
    const osc = ac.createOscillator();
    const g = ac.createGain();
    osc.type = type;
    osc.frequency.value = freq * mult;
    g.gain.value = amount;
    osc.connect(g).connect(env);
    osc.start(when);
    osc.stop(when + Math.max(seconds * 1.6, 0.5) + 0.05);
  }
  env.connect(out);
}

const calm = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
const players = new Set<HTMLButtonElement>();
let playing = false;
let hoverStep = 0;

function setup(code: HTMLElement) {
  const bars = [...code.querySelectorAll<HTMLElement>('.bar')];
  const laser = code.querySelector<HTMLElement>('.laser');
  const xs = bars.map((b) => Number(b.dataset.x));
  let last = -1;

  const barAt = (module: number) => {
    let found = -1;
    xs.forEach((x, i) => {
      if (module >= x - 0.5) found = i;
    });
    return found;
  };

  function press(i: number) {
    bars.forEach((b, k) => {
      const d = Math.abs(k - i);
      b.classList.toggle('hit', d === 0);
      b.classList.toggle('near', d === 1);
    });
    window.setTimeout(() => {
      bars[i]?.classList.remove('hit');
      bars[i - 1]?.classList.remove('near');
      bars[i + 1]?.classList.remove('near');
    }, 220);
  }

  function placeLaser(px: number) {
    if (laser) laser.style.transform = `translateX(${px}px)`;
  }

  code.addEventListener('pointermove', (e) => {
    if (playing) return;
    const r = code.getBoundingClientRect();
    const px = e.clientX - r.left;
    placeLaser(px);
    laser?.classList.add('on');
    const i = barAt((px / r.width) * 95);
    if (i >= 0 && i !== last) {
      last = i;
      press(i);
      // Pasar el cursor toca el minueto nota por nota.
      const ac = audio();
      if (ac) {
        void ac.resume();
        const [midi, beats] = MELODY[hoverStep % MELODY.length];
        tone(midi, ac.currentTime, beats * BEAT, 0.2);
        hoverStep++;
      }
    }
  });
  code.addEventListener('pointerleave', () => {
    if (!playing) laser?.classList.remove('on');
    last = -1;
  });

  return {
    play(onDone: () => void) {
      const ac = audio();
      if (!ac) return onDone();
      void ac.resume();
      playing = true;
      const start = ac.currentTime + 0.08;
      let beat = 0;
      const width = code.clientWidth;
      for (const [midi, beats] of MELODY) {
        tone(midi, start + beat * BEAT, beats * BEAT, 0.22);
        const at = beat;
        window.setTimeout(() => {
          const i = barAt((at / TOTAL_BEATS) * 95);
          if (i >= 0) press(i);
        }, (at * BEAT + 0.08) * 1000);
        beat += beats;
      }
      for (const [midi, at, beats] of BASS) tone(midi, start + at * BEAT, beats * BEAT, 0.1);

      const total = TOTAL_BEATS * BEAT * 1000;
      laser?.classList.add('on');
      if (calm()) {
        placeLaser(width / 2);
      } else {
        const t0 = performance.now();
        const step = (now: number) => {
          const p = Math.min((now - t0) / total, 1);
          placeLaser(p * code.clientWidth);
          if (p < 1 && playing) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
      window.setTimeout(() => {
        playing = false;
        laser?.classList.remove('on');
        onDone();
      }, total + 400);
    },
  };
}

export function initBarcodes() {
  const controllers = new Map<string, ReturnType<typeof setup>>();
  document.querySelectorAll<HTMLElement>('[data-barcode]').forEach((el) => {
    controllers.set(el.id, setup(el));
  });
  document.querySelectorAll<HTMLButtonElement>('[data-play]').forEach((btn) => {
    players.add(btn);
    btn.addEventListener('click', () => {
      const target = controllers.get(btn.dataset.play ?? '');
      if (!target || playing) return;
      const label = btn.textContent ?? '';
      players.forEach((b) => (b.disabled = true));
      btn.textContent = btn.dataset.playing ?? label;
      target.play(() => {
        players.forEach((b) => (b.disabled = false));
        btn.textContent = label;
      });
    });
  });
}
