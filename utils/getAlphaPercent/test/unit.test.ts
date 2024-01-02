import { getAlphaPercent } from '../getAlphaPercent';

test('단위 환산 테스트', () => {
  expect(getAlphaPercent(255)).toBe(100);
  expect(getAlphaPercent(0)).toBe(0);
  expect(getAlphaPercent(128)).toBe(50);
});
