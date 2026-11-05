// Codificación EAN-13: devuelve el número completo y las barras (en módulos de 0 a 95).
const L = ['0001101', '0011001', '0010011', '0111101', '0100011', '0110001', '0101111', '0111011', '0110111', '0001011'];
const R = L.map((code) => [...code].map((b) => (b === '0' ? '1' : '0')).join(''));
const G = R.map((code) => [...code].reverse().join(''));
const PARITY = ['LLLLLL', 'LLGLGG', 'LLGGLG', 'LLGGGL', 'LGLLGG', 'LGGLLG', 'LGGGLL', 'LGLGLG', 'LGLGGL', 'LGGLGL'];

export interface Bar {
  x: number;
  w: number;
  guard: boolean;
}

export function checkDigit(d12: string): number {
  const sum = [...d12].reduce((acc, c, i) => acc + Number(c) * (i % 2 ? 3 : 1), 0);
  return (10 - (sum % 10)) % 10;
}

export function ean13(base12: string): { number: string; bars: Bar[] } {
  const number = base12 + checkDigit(base12);
  const parity = PARITY[Number(number[0])];
  let modules = '101';
  for (let i = 1; i < 7; i++) modules += (parity[i - 1] === 'L' ? L : G)[Number(number[i])];
  modules += '01010';
  for (let i = 7; i < 13; i++) modules += R[Number(number[i])];
  modules += '101';

  const bars: Bar[] = [];
  for (let i = 0; i < modules.length; ) {
    if (modules[i] !== '1') {
      i++;
      continue;
    }
    let w = 1;
    while (modules[i + w] === '1') w++;
    bars.push({ x: i, w, guard: i < 3 || (i >= 45 && i < 50) || i >= 92 });
    i += w;
  }
  return { number, bars };
}
