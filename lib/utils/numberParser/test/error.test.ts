import { Color } from '../../../index';

describe('error 테스트', () => {
  test('올바르지 않은 인자 테스트', () => {
    try {
      expect(new Color(0xffffffffff));
    } catch (error) {
      if (error instanceof Error) {
        expect(error.message).toBe(
          'Color code must be between 0x00000000 and 0xffffffff',
        );
      }
    }
  });
});
