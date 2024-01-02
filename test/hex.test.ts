import { Color } from '../index';

describe('0x string 테스트', () => {
  test('red값이 올바르게 반환되어야 합니다', () => {
    const color = new Color('0x12f344');
    expect(color.red('dec')).toBe(18);
    expect(color.red('hex')).toBe('12');
  });

  test('green값이 올바르게 반환되어야 합니다', () => {
    const color = new Color('0x12f344');
    expect(color.green('dec')).toBe(243);
    expect(color.green('hex')).toBe('f3');
  });

  test('blue값이 올바르게 반환되어야 합니다', () => {
    const color = new Color('0x12f344');
    expect(color.blue('dec')).toBe(68);
    expect(color.blue('hex')).toBe('44');
  });

  test('alpha값이 올바르게 반환되어야 합니다', () => {
    const color = new Color('0x12f344');
    expect(color.alpha('dec')).toBe(100);
    expect(color.alpha('hex')).toBe('ff');
  });

  test('array값이 올바르게 반환되어야 합니다', () => {
    const color = new Color('0x12f344');
    expect(color.array('dec')).toEqual([18, 243, 68, 100]);
    expect(color.array('hex')).toEqual(['12', 'f3', '44', 'ff']);
  });

  test('object값이 올바르게 반환되어야 합니다', () => {
    const color = new Color('0x12f344');
    expect(color.object('dec')).toEqual({
      red: 18,
      green: 243,
      blue: 68,
      alpha: 100,
    });
    expect(color.object('hex')).toEqual({
      red: '12',
      green: 'f3',
      blue: '44',
      alpha: 'ff',
    });
  });
});

describe('0x string aplha 테스트', () => {
  test('red값이 올바르게 반환되어야 합니다', () => {
    const color = new Color('0x12f344ad');
    expect(color.red('dec')).toBe(18);
    expect(color.red('hex')).toBe('12');
  });

  test('green값이 올바르게 반환되어야 합니다', () => {
    const color = new Color('0x12f344ad');
    expect(color.green('dec')).toBe(243);
    expect(color.green('hex')).toBe('f3');
  });

  test('blue값이 올바르게 반환되어야 합니다', () => {
    const color = new Color('0x12f344ad');
    expect(color.blue('dec')).toBe(68);
    expect(color.blue('hex')).toBe('44');
  });

  test('alpha값이 올바르게 반환되어야 합니다', () => {
    const color = new Color('0x12f344ad');
    expect(color.alpha('dec')).toBe(68);
    expect(color.alpha('hex')).toBe('ad');
  });

  test('array값이 올바르게 반환되어야 합니다', () => {
    const color = new Color('0x12f344ad');
    expect(color.array('dec')).toEqual([18, 243, 68, 68]);
    expect(color.array('hex')).toEqual(['12', 'f3', '44', 'ad']);
  });

  test('object값이 올바르게 반환되어야 합니다', () => {
    const color = new Color('0x12f344ad');
    expect(color.object('dec')).toEqual({
      red: 18,
      green: 243,
      blue: 68,
      alpha: 68,
    });
    expect(color.object('hex')).toEqual({
      red: '12',
      green: 'f3',
      blue: '44',
      alpha: 'ad',
    });
  });
});

describe('0x number 테스트', () => {
  test('red값이 올바르게 반환되어야 합니다', () => {
    const color = new Color(0x55fa3c);
    expect(color.red('dec')).toBe(85);
    expect(color.red('hex')).toBe('55');
  });

  test('green값이 올바르게 반환되어야 합니다', () => {
    const color = new Color(0x55fa3c);
    expect(color.green('dec')).toBe(250);
    expect(color.green('hex')).toBe('fa');
  });

  test('blue값이 올바르게 반환되어야 합니다', () => {
    const color = new Color(0x55fa3c);
    expect(color.blue('dec')).toBe(60);
    expect(color.blue('hex')).toBe('3c');
  });

  test('alpha값이 올바르게 반환되어야 합니다', () => {
    const color = new Color(0x55fa3c);
    expect(color.alpha('dec')).toBe(100);
    expect(color.alpha('hex')).toBe('ff');
  });

  test('array값이 올바르게 반환되어야 합니다', () => {
    const color = new Color(0x55fa3c);
    expect(color.array('dec')).toEqual([85, 250, 60, 100]);
    expect(color.array('hex')).toEqual(['55', 'fa', '3c', 'ff']);
  });

  test('object값이 올바르게 반환되어야 합니다', () => {
    const color = new Color(0x55fa3c);
    expect(color.object('dec')).toEqual({
      red: 85,
      green: 250,
      blue: 60,
      alpha: 100,
    });
    expect(color.object('hex')).toEqual({
      red: '55',
      green: 'fa',
      blue: '3c',
      alpha: 'ff',
    });
  });
});

describe('0x number alpha 테스트', () => {
  test('red값이 올바르게 반환되어야 합니다', () => {
    const color = new Color(0x55fa3c8f);
    expect(color.red('dec')).toBe(85);
    expect(color.red('hex')).toBe('55');
  });

  test('green값이 올바르게 반환되어야 합니다', () => {
    const color = new Color(0x55fa3c8f);
    expect(color.green('dec')).toBe(250);
    expect(color.green('hex')).toBe('fa');
  });

  test('blue값이 올바르게 반환되어야 합니다', () => {
    const color = new Color(0x55fa3c8f);
    expect(color.blue('dec')).toBe(60);
    expect(color.blue('hex')).toBe('3c');
  });

  test('alpha값이 올바르게 반환되어야 합니다', () => {
    const color = new Color(0x55fa3c8f);
    expect(color.alpha('dec')).toBe(56);
    expect(color.alpha('hex')).toBe('8f');
  });

  test('array값이 올바르게 반환되어야 합니다', () => {
    const color = new Color(0x55fa3c8f);
    expect(color.array('dec')).toEqual([85, 250, 60, 56]);
    expect(color.array('hex')).toEqual(['55', 'fa', '3c', '8f']);
  });

  test('object값이 올바르게 반환되어야 합니다', () => {
    const color = new Color(0x55fa3c8f);
    expect(color.object('dec')).toEqual({
      red: 85,
      green: 250,
      blue: 60,
      alpha: 56,
    });
    expect(color.object('hex')).toEqual({
      red: '55',
      green: 'fa',
      blue: '3c',
      alpha: '8f',
    });
  });
});
