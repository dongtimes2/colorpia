export const numberParser = (color: number) => {
  let red: number = 0;
  let green: number = 0;
  let blue: number = 0;
  let alpha: number = 0;

  if (color >= 0x00000000 && color <= 0xffffffff) {
    red = (color & 0xff000000) >>> 24;
    green = (color & 0x00ff0000) >>> 16;
    blue = (color & 0x0000ff00) >>> 8;
    alpha = color & 0x000000ff;
  } else {
    throw new Error('Color code must be between 0x00000000 and 0xffffffff');
  }

  if (red < 0 || red > 255) {
    throw new Error('Red value must be between 00 and ff');
  }

  if (green < 0 || green > 255) {
    throw new Error('Green value must be between 00 and ff');
  }

  if (blue < 0 || blue > 255) {
    throw new Error('Blue value must be between 00 and ff');
  }

  if (alpha < 0 || alpha > 255) {
    throw new Error('Alpha value must be between 00 and ff');
  }

  return { red, green, blue, alpha };
};
