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

  test('string값이 올바르게 반환되어야 합니다', () => {
    expect(new Color('0xffaabb').string('#')).toBe('#ffaabb');
    expect(new Color('0x00aabb').string('#')).toBe('#00aabb');
    expect(new Color('0xff00bb').string('#')).toBe('#ff00bb');
    expect(new Color('0xffaa00').string('#')).toBe('#ffaa00');

    expect(new Color('0xffaabb').string('#a')).toBe('#ffaabbff');
    expect(new Color('0x00aabb').string('#a')).toBe('#00aabbff');
    expect(new Color('0xff00bb').string('#a')).toBe('#ff00bbff');
    expect(new Color('0xffaa00').string('#a')).toBe('#ffaa00ff');

    expect(new Color('0xffaabb').string('0x')).toBe('0xffaabb');
    expect(new Color('0x00aabb').string('0x')).toBe('0x00aabb');
    expect(new Color('0xff00bb').string('0x')).toBe('0xff00bb');
    expect(new Color('0xffaa00').string('0x')).toBe('0xffaa00');

    expect(new Color('0xffaabb').string('0xa')).toBe('0xffaabbff');
    expect(new Color('0x00aabb').string('0xa')).toBe('0x00aabbff');
    expect(new Color('0xff00bb').string('0xa')).toBe('0xff00bbff');
    expect(new Color('0xffaa00').string('0xa')).toBe('0xffaa00ff');
  });

  test('number값이 올바르게 반환되어야 합니다', () => {
    expect(new Color('0xffaabb').number()).toBe(16755387);
    expect(new Color('0x00aabb').number()).toBe(43707);
    expect(new Color('0xff00bb').number()).toBe(16711867);
    expect(new Color('0xffaa00').number()).toBe(16755200);
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

  test('string값이 올바르게 반환되어야 합니다', () => {
    expect(new Color('0xffaabb00').string('#')).toBe('#ffaabb');
    expect(new Color('0x00aabbff').string('#')).toBe('#00aabb');
    expect(new Color('0xff00bbab').string('#')).toBe('#ff00bb');
    expect(new Color('0xffaa000a').string('#')).toBe('#ffaa00');

    expect(new Color('0xffaabb00').string('#a')).toBe('#ffaabb00');
    expect(new Color('0x00aabbff').string('#a')).toBe('#00aabbff');
    expect(new Color('0xff00bbab').string('#a')).toBe('#ff00bbab');
    expect(new Color('0xffaa000a').string('#a')).toBe('#ffaa000a');

    expect(new Color('0xffaabb00').string('0x')).toBe('0xffaabb');
    expect(new Color('0x00aabbff').string('0x')).toBe('0x00aabb');
    expect(new Color('0xff00bbab').string('0x')).toBe('0xff00bb');
    expect(new Color('0xffaa000a').string('0x')).toBe('0xffaa00');

    expect(new Color('0xffaabb00').string('0xa')).toBe('0xffaabb00');
    expect(new Color('0x00aabbff').string('0xa')).toBe('0x00aabbff');
    expect(new Color('0xff00bbab').string('0xa')).toBe('0xff00bbab');
    expect(new Color('0xffaa000a').string('0xa')).toBe('0xffaa000a');
  });

  test('number값이 올바르게 반환되어야 합니다', () => {
    expect(new Color('0xffaabb00').number()).toBe(16755387);
    expect(new Color('0x00aabbff').number()).toBe(43707);
    expect(new Color('0xff00bbab').number()).toBe(16711867);
    expect(new Color('0xffaa000a').number()).toBe(16755200);
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

  test('string값이 올바르게 반환되어야 합니다', () => {
    expect(new Color(0xffaabb00).string('#')).toBe('#ffaabb');
    expect(new Color(0x00aabbff).string('#')).toBe('#00aabb');
    expect(new Color(0xff00bbab).string('#')).toBe('#ff00bb');
    expect(new Color(0xffaa000a).string('#')).toBe('#ffaa00');

    expect(new Color(0xffaabb00).string('#a')).toBe('#ffaabb00');
    expect(new Color(0x00aabbff).string('#a')).toBe('#00aabbff');
    expect(new Color(0xff00bbab).string('#a')).toBe('#ff00bbab');
    expect(new Color(0xffaa000a).string('#a')).toBe('#ffaa000a');

    expect(new Color(0xffaabb00).string('0x')).toBe('0xffaabb');
    expect(new Color(0x00aabbff).string('0x')).toBe('0x00aabb');
    expect(new Color(0xff00bbab).string('0x')).toBe('0xff00bb');
    expect(new Color(0xffaa000a).string('0x')).toBe('0xffaa00');

    expect(new Color(0xffaabb00).string('0xa')).toBe('0xffaabb00');
    expect(new Color(0x00aabbff).string('0xa')).toBe('0x00aabbff');
    expect(new Color(0xff00bbab).string('0xa')).toBe('0xff00bbab');
    expect(new Color(0xffaa000a).string('0xa')).toBe('0xffaa000a');
  });

  test('number값이 올바르게 반환되어야 합니다', () => {
    expect(new Color(0xffaabb00).number()).toBe(16755387);
    expect(new Color(0x00aabbff).number()).toBe(43707);
    expect(new Color(0xff00bbab).number()).toBe(16711867);
    expect(new Color(0xffaa000a).number()).toBe(16755200);
  });
});
