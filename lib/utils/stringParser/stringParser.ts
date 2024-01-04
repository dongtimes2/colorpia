export const stringParser = (color: string) => {
  let red: number = 0;
  let green: number = 0;
  let blue: number = 0;
  let alpha: number = 255;

  if (color.startsWith('#')) {
    if (color.length === 7 || color.length === 9) {
      red = parseInt(color.slice(1, 3), 16);
      green = parseInt(color.slice(3, 5), 16);
      blue = parseInt(color.slice(5, 7), 16);
      alpha = Number.isInteger(parseInt(color.slice(7, 9), 16))
        ? parseInt(color.slice(7, 9), 16)
        : 255;
    } else {
      throw new Error('Color code must have rgb or rgba data');
    }
  } else if (color.startsWith('0x')) {
    if (color.length === 8 || color.length === 10) {
      red = parseInt(color.slice(2, 4), 16);
      green = parseInt(color.slice(4, 6), 16);
      blue = parseInt(color.slice(6, 8), 16);
      alpha = Number.isInteger(parseInt(color.slice(8, 10), 16))
        ? parseInt(color.slice(8, 10), 16)
        : 255;
    }
  } else {
    throw new Error('Color code must start with # or 0x');
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
