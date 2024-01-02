import { Color } from '../index';

describe('error 테스트', () => {
  test('red 오류 반환 테스트(array)', () => {
    try {
      expect(new Color([-1, 255, 255]));
    } catch (error) {
      if (error instanceof Error) {
        expect(error.message).toBe('Red value must be between 0 and 255');
      }
    }
  });

  test('red 오류 반환 테스트(array, alpha)', () => {
    try {
      expect(new Color([-1, 255, 255, 100]));
    } catch (error) {
      if (error instanceof Error) {
        expect(error.message).toBe('Red value must be between 0 and 255');
      }
    }
  });

  test('green 오류 반환 테스트(array)', () => {
    try {
      expect(new Color([255, -1, 255]));
    } catch (error) {
      if (error instanceof Error) {
        expect(error.message).toBe('Green value must be between 0 and 255');
      }
    }
  });

  test('green 오류 반환 테스트(array, alpha)', () => {
    try {
      expect(new Color([255, -1, 255, 100]));
    } catch (error) {
      if (error instanceof Error) {
        expect(error.message).toBe('Green value must be between 0 and 255');
      }
    }
  });

  test('blue 오류 반환 테스트(array)', () => {
    try {
      expect(new Color([255, 255, -1]));
    } catch (error) {
      if (error instanceof Error) {
        expect(error.message).toBe('Blue value must be between 0 and 255');
      }
    }
  });

  test('blue 오류 반환 테스트(array, alpha)', () => {
    try {
      expect(new Color([255, 255, -1, 100]));
    } catch (error) {
      if (error instanceof Error) {
        expect(error.message).toBe('Blue value must be between 0 and 255');
      }
    }
  });

  test('alpha 오류 반환 테스트(array, alpha)', () => {
    try {
      expect(new Color([255, 255, 255, -1]));
    } catch (error) {
      if (error instanceof Error) {
        expect(error.message).toBe('Alpha value must be between 0 and 100');
      }
    }
  });
});
