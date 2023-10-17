const toHex = (num: number): string => num.toString(16).padStart(2, '0');

const toRGB = (hexColor: string): [number, number, number] => {
  const [r1, r2, g1, g2, b1, b2] = hexColor.replace('#', '').split('');
  return [
    parseInt(`${r1}${r2}`, 16),
    parseInt(`${g1}${g2}`, 16),
    parseInt(`${b1}${b2}`, 16),
  ];
};
/**
 * @param {number} max 0~256
 * @returns {number}
 */
const random = (max = 256) => Math.floor(Math.random() * max);

const LUMA = [0.2126, 0.7152, 0.0722];

const _moreBrightColor = (target: [number, number, number], bright = 150) => {
  const [r, g, b] = target.map((value, index) => {
    let brightValue = Math.floor(value + bright * LUMA[index]);
    if (value == brightValue) brightValue += Math.floor(bright / 3) || 1;
    return Math.min(255, brightValue);
  });
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

export const getRandomColor = (min = 0, max = 255): string => {
  if (min < 0 || min > 255) min = 0;
  if (max < 0 || max > 255) max = 255;
  const [r, g, b] = [random(), random(), random()];
  const bright = [r, g, b].reduce((a, c, i) => a + c * LUMA[i], 0);
  return min <= bright && bright <= max
    ? `#${toHex(r)}${toHex(g)}${toHex(b)}`
    : getRandomColor(min, max);
};

export const getGradationColors = (
  count = 1,
  startColor = getRandomColor(10, 180),
) => {
  const colors = [startColor];
  while (colors.length < count) {
    colors[colors.length] = _moreBrightColor(
      toRGB(colors[colors.length - 1]),
      Math.floor(200 / count) || 1,
    );
  }
  return colors;
};
