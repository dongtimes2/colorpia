import { Color } from '../../../index';

describe('올바르지 않은 인자 테스트', () => {
  test('array의 길이가 올바르지 않을 경우', () => {
    try {
      expect(new Color([]));
    } catch (error) {
      if (error instanceof Error) {
        expect(error.message).toBe('Color array must have rgb or rgba data');
      }
    }
  });
});
