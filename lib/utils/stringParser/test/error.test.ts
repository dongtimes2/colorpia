import { Color } from '../../../index';

describe('error 테스트', () => {
  test('올바르지 않은 인자 테스트', () => {
    try {
      expect(new Color('wrong'));
    } catch (error) {
      if (error instanceof Error) {
        expect(error.message).toBe('Color code must start with # or 0x');
      }
    }
  });
});
