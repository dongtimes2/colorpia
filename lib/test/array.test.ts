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

  test('string값이 올바르게 반환되어야 합니다', () => {
    expect(new Color([255, 170, 187]).string('#')).toBe('#ffaabb');
    expect(new Color([0, 170, 187]).string('#')).toBe('#00aabb');
    expect(new Color([255, 0, 187]).string('#')).toBe('#ff00bb');
    expect(new Color([255, 170, 0]).string('#')).toBe('#ffaa00');

    expect(new Color([255, 170, 187]).string('#a')).toBe('#ffaabbff');
    expect(new Color([0, 170, 187]).string('#a')).toBe('#00aabbff');
    expect(new Color([255, 0, 187]).string('#a')).toBe('#ff00bbff');
    expect(new Color([255, 170, 0]).string('#a')).toBe('#ffaa00ff');

    expect(new Color([255, 170, 187]).string('0x')).toBe('0xffaabb');
    expect(new Color([0, 170, 187]).string('0x')).toBe('0x00aabb');
    expect(new Color([255, 0, 187]).string('0x')).toBe('0xff00bb');
    expect(new Color([255, 170, 0]).string('0x')).toBe('0xffaa00');

    expect(new Color([255, 170, 187]).string('0xa')).toBe('0xffaabbff');
    expect(new Color([0, 170, 187]).string('0xa')).toBe('0x00aabbff');
    expect(new Color([255, 0, 187]).string('0xa')).toBe('0xff00bbff');
    expect(new Color([255, 170, 0]).string('0xa')).toBe('0xffaa00ff');
  });

  test('number값이 올바르게 반환되어야 합니다', () => {
    expect(new Color([255, 170, 187]).number()).toBe(16755387);
    expect(new Color([0, 170, 187]).number()).toBe(43707);
    expect(new Color([255, 0, 187]).number()).toBe(16711867);
    expect(new Color([255, 170, 0]).number()).toBe(16755200);
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

  test('string값이 올바르게 반환되어야 합니다', () => {
    expect(new Color([255, 170, 187, 0]).string('#')).toBe('#ffaabb');
    expect(new Color([0, 170, 187, 100]).string('#')).toBe('#00aabb');
    expect(new Color([255, 0, 187, 67]).string('#')).toBe('#ff00bb');
    expect(new Color([255, 170, 0, 4]).string('#')).toBe('#ffaa00');

    expect(new Color([255, 170, 187, 0]).string('#a')).toBe('#ffaabb00');
    expect(new Color([0, 170, 187, 100]).string('#a')).toBe('#00aabbff');
    expect(new Color([255, 0, 187, 67]).string('#a')).toBe('#ff00bbab');
    expect(new Color([255, 170, 0, 4]).string('#a')).toBe('#ffaa000a');

    expect(new Color([255, 170, 187, 0]).string('0x')).toBe('0xffaabb');
    expect(new Color([0, 170, 187, 100]).string('0x')).toBe('0x00aabb');
    expect(new Color([255, 0, 187, 67]).string('0x')).toBe('0xff00bb');
    expect(new Color([255, 170, 0, 4]).string('0x')).toBe('0xffaa00');

    expect(new Color([255, 170, 187, 0]).string('0xa')).toBe('0xffaabb00');
    expect(new Color([0, 170, 187, 100]).string('0xa')).toBe('0x00aabbff');
    expect(new Color([255, 0, 187, 67]).string('0xa')).toBe('0xff00bbab');
    expect(new Color([255, 170, 0, 4]).string('0xa')).toBe('0xffaa000a');
  });

  test('number값이 올바르게 반환되어야 합니다', () => {
    expect(new Color([255, 170, 187, 0]).number()).toBe(16755387);
    expect(new Color([0, 170, 187, 100]).number()).toBe(43707);
    expect(new Color([255, 0, 187, 67]).number()).toBe(16711867);
    expect(new Color([255, 170, 0, 4]).number()).toBe(16755200);
  });
});
