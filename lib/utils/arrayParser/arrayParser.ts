export const arrayParser = (color: number[]) => {
  let red: number = 0;
  let green: number = 0;
  let blue: number = 0;
  let alpha: number = 100;

  if (color.length === 3 || color.length === 4) {
    red = color[0];
    green = color[1];
    blue = color[2];
    alpha = Number.isInteger(color[3]) ? color[3] : 100;
  } else {
    throw new Error('Color array must have rgb or rgba data');
  }

  if (red < 0 || red > 255) {
    throw new Error('Red value must be between 0 and 255');
  }

  if (green < 0 || green > 255) {
    throw new Error('Green value must be between 0 and 255');
  }

  if (blue < 0 || blue > 255) {
    throw new Error('Blue value must be between 0 and 255');
  }

  if (alpha < 0 || alpha > 100) {
    throw new Error('Alpha value must be between 0 and 100');
  }

  return { red, green, blue, alpha };
};
