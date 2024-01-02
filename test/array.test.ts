import { Color } from '../index';

describe('array number 테스트', () => {
  test('red값이 올바르게 반환되어야 합니다', () => {
    const color = new Color([214, 32, 56]);
    expect(color.red('dec')).toBe(214);
    expect(color.red('hex')).toBe('d6');
  });

  test('green값이 올바르게 반환되어야 합니다', () => {
    const color = new Color([214, 32, 56]);
    expect(color.green('dec')).toBe(32);
    expect(color.green('hex')).toBe('20');
  });

  test('blue값이 올바르게 반환되어야 합니다', () => {
    const color = new Color([214, 32, 56]);
    expect(color.blue('dec')).toBe(56);
    expect(color.blue('hex')).toBe('38');
  });

  test('alpha값이 올바르게 반환되어야 합니다', () => {
    const color = new Color([214, 32, 56]);
    expect(color.alpha('dec')).toBe(100);
    expect(color.alpha('hex')).toBe('ff');
  });

  test('array값이 올바르게 반환되어야 합니다', () => {
    const color = new Color([214, 32, 56]);
    expect(color.array('dec')).toEqual([214, 32, 56, 100]);
    expect(color.array('hex')).toEqual(['d6', '20', '38', 'ff']);
  });

  test('object값이 올바르게 반환되어야 합니다', () => {
    const color = new Color([214, 32, 56]);
    expect(color.object('dec')).toEqual({
      red: 214,
      green: 32,
      blue: 56,
      alpha: 100,
    });
    expect(color.object('hex')).toEqual({
      red: 'd6',
      green: '20',
      blue: '38',
      alpha: 'ff',
    });
  });
});

describe('array number alpha 테스트', () => {
  test('red값이 올바르게 반환되어야 합니다', () => {
    const color = new Color([214, 32, 56, 24]);
    expect(color.red('dec')).toBe(214);
    expect(color.red('hex')).toBe('d6');
  });

  test('green값이 올바르게 반환되어야 합니다', () => {
    const color = new Color([214, 32, 56, 24]);
    expect(color.green('dec')).toBe(32);
    expect(color.green('hex')).toBe('20');
  });

  test('blue값이 올바르게 반환되어야 합니다', () => {
    const color = new Color([214, 32, 56, 24]);
    expect(color.blue('dec')).toBe(56);
    expect(color.blue('hex')).toBe('38');
  });

  test('alpha값이 올바르게 반환되어야 합니다', () => {
    const color = new Color([214, 32, 56, 24]);
    expect(color.alpha('dec')).toBe(24);
    expect(color.alpha('hex')).toBe('3d');
  });

  test('array값이 올바르게 반환되어야 합니다', () => {
    const color = new Color([214, 32, 56, 24]);
    expect(color.array('dec')).toEqual([214, 32, 56, 24]);
    expect(color.array('hex')).toEqual(['d6', '20', '38', '3d']);
  });

  test('object값이 올바르게 반환되어야 합니다', () => {
    const color = new Color([214, 32, 56, 24]);
    expect(color.object('dec')).toEqual({
      red: 214,
      green: 32,
      blue: 56,
      alpha: 24,
    });
    expect(color.object('hex')).toEqual({
      red: 'd6',
      green: '20',
      blue: '38',
      alpha: '3d',
    });
  });
});
