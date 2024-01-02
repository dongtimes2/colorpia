import { Color } from '../index';

describe('# string 테스트', () => {
  test('red값이 올바르게 반환되어야 합니다', () => {
    const color = new Color('#ffaabb');
    expect(color.red('dec')).toBe(255);
    expect(color.red('hex')).toBe('ff');
  });

  test('green값이 올바르게 반환되어야 합니다', () => {
    const color = new Color('#ffaabb');
    expect(color.green('dec')).toBe(170);
    expect(color.green('hex')).toBe('aa');
  });

  test('blue값이 올바르게 반환되어야 합니다', () => {
    const color = new Color('#ffaabb');
    expect(color.blue('dec')).toBe(187);
    expect(color.blue('hex')).toBe('bb');
  });

  test('alpha값이 올바르게 반환되어야 합니다', () => {
    const color = new Color('#ffaabb');
    expect(color.alpha('dec')).toBe(100);
    expect(color.alpha('hex')).toBe('ff');
  });

  test('array값이 올바르게 반환되어야 합니다', () => {
    const color = new Color('#ffaabb');
    expect(color.array('dec')).toEqual([255, 170, 187, 100]);
    expect(color.array('hex')).toEqual(['ff', 'aa', 'bb', 'ff']);
  });

  test('object값이 올바르게 반환되어야 합니다', () => {
    const color = new Color('#ffaabb');
    expect(color.object('dec')).toEqual({
      red: 255,
      green: 170,
      blue: 187,
      alpha: 100,
    });
    expect(color.object('hex')).toEqual({
      red: 'ff',
      green: 'aa',
      blue: 'bb',
      alpha: 'ff',
    });
  });
});

describe('# string alpha 테스트', () => {
  test('red값이 올바르게 반환되어야 합니다', () => {
    const color = new Color('#ffaabbcc');
    expect(color.red('dec')).toBe(255);
    expect(color.red('hex')).toBe('ff');
  });

  test('green값이 올바르게 반환되어야 합니다', () => {
    const color = new Color('#ffaabbcc');
    expect(color.green('dec')).toBe(170);
    expect(color.green('hex')).toBe('aa');
  });

  test('blue값이 올바르게 반환되어야 합니다', () => {
    const color = new Color('#ffaabbcc');
    expect(color.blue('dec')).toBe(187);
    expect(color.blue('hex')).toBe('bb');
  });

  test('alpha값이 올바르게 반환되어야 합니다', () => {
    const color = new Color('#ffaabbcc');
    expect(color.alpha('dec')).toBe(80);
    expect(color.alpha('hex')).toBe('cc');
  });

  test('array값이 올바르게 반환되어야 합니다', () => {
    const color = new Color('#ffaabbcc');
    expect(color.array('dec')).toEqual([255, 170, 187, 80]);
    expect(color.array('hex')).toEqual(['ff', 'aa', 'bb', 'cc']);
  });

  test('object값이 올바르게 반환되어야 합니다', () => {
    const color = new Color('#ffaabbcc');
    expect(color.object('dec')).toEqual({
      red: 255,
      green: 170,
      blue: 187,
      alpha: 80,
    });
    expect(color.object('hex')).toEqual({
      red: 'ff',
      green: 'aa',
      blue: 'bb',
      alpha: 'cc',
    });
  });
});
