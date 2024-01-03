import { arrayParser } from './utils/arrayParser/arrayParser';
import { getAlphaPercent } from './utils/getAlphaPercent/getAlphaPercent';
import { numberParser } from './utils/numberParser/numberParser';
import { stringParser } from './utils/stringParser/stringParser';

export class Color {
  private r!: number;
  private g!: number;
  private b!: number;
  private a!: number;

  constructor(colorValue: string | number | number[]) {
    try {
      if (typeof colorValue === 'string') {
        const { red, green, blue, alpha } = stringParser(colorValue);
        this.r = red;
        this.g = green;
        this.b = blue;
        this.a = alpha;
      } else if (typeof colorValue === 'number') {
        const { red, green, blue, alpha } = numberParser(colorValue);
        this.r = red;
        this.g = green;
        this.b = blue;
        this.a = alpha;
      } else if (Array.isArray(colorValue)) {
        const { red, green, blue, alpha } = arrayParser(colorValue);
        this.r = red;
        this.g = green;
        this.b = blue;
        this.a = Math.round((alpha * 255) / 100);
      } else {
        throw new Error(
          'Color data type must be string that starts with # or 0x or array of 3 values',
        );
      }
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }

  public red(type: 'hex' | 'dec') {
    if (type === 'hex') {
      return this.r.toString(16);
    } else if (type === 'dec') {
      return this.r;
    } else {
      return this.r;
    }
  }

  public green(type: 'hex' | 'dec') {
    if (type === 'hex') {
      return this.g.toString(16);
    } else if (type === 'dec') {
      return this.g;
    } else {
      return this.g;
    }
  }

  public blue(type: 'hex' | 'dec') {
    if (type === 'hex') {
      return this.b.toString(16);
    } else if (type === 'dec') {
      return this.b;
    } else {
      return this.b;
    }
  }

  public alpha(type: 'hex' | 'dec') {
    if (type === 'hex') {
      return this.a.toString(16);
    } else if (type === 'dec') {
      return getAlphaPercent(this.a);
    } else {
      return getAlphaPercent(this.a);
    }
  }

  public array(type: 'hex' | 'dec') {
    if (type === 'hex') {
      return [
        this.r.toString(16),
        this.g.toString(16),
        this.b.toString(16),
        this.a.toString(16),
      ];
    } else if (type === 'dec') {
      return [this.r, this.g, this.b, getAlphaPercent(this.a)];
    } else {
      return [this.r, this.g, this.b, getAlphaPercent(this.a)];
    }
  }

  public object(type: 'hex' | 'dec') {
    if (type === 'hex') {
      return {
        red: this.r.toString(16),
        green: this.g.toString(16),
        blue: this.b.toString(16),
        alpha: this.a.toString(16),
      };
    } else if (type === 'dec') {
      return {
        red: this.r,
        green: this.g,
        blue: this.b,
        alpha: getAlphaPercent(this.a),
      };
    } else {
      return {
        red: this.r,
        green: this.g,
        blue: this.b,
        alpha: getAlphaPercent(this.a),
      };
    }
  }
}
