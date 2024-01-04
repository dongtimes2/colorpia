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

  test('string값이 올바르게 반환되어야 합니다', () => {
    expect(new Color('#ffaabb').string('#')).toBe('#ffaabb');
    expect(new Color('#00aabb').string('#')).toBe('#00aabb');
    expect(new Color('#ff00bb').string('#')).toBe('#ff00bb');
    expect(new Color('#ffaa00').string('#')).toBe('#ffaa00');

    expect(new Color('#ffaabb').string('#a')).toBe('#ffaabbff');
    expect(new Color('#00aabb').string('#a')).toBe('#00aabbff');
    expect(new Color('#ff00bb').string('#a')).toBe('#ff00bbff');
    expect(new Color('#ffaa00').string('#a')).toBe('#ffaa00ff');

    expect(new Color('#ffaabb').string('0x')).toBe('0xffaabb');
    expect(new Color('#00aabb').string('0x')).toBe('0x00aabb');
    expect(new Color('#ff00bb').string('0x')).toBe('0xff00bb');
    expect(new Color('#ffaa00').string('0x')).toBe('0xffaa00');

    expect(new Color('#ffaabb').string('0xa')).toBe('0xffaabbff');
    expect(new Color('#00aabb').string('0xa')).toBe('0x00aabbff');
    expect(new Color('#ff00bb').string('0xa')).toBe('0xff00bbff');
    expect(new Color('#ffaa00').string('0xa')).toBe('0xffaa00ff');
  });

  test('number값이 올바르게 반환되어야 합니다', () => {
    expect(new Color('#ffaabb').number()).toBe(16755387);
    expect(new Color('#00aabb').number()).toBe(43707);
    expect(new Color('#ff00bb').number()).toBe(16711867);
    expect(new Color('#ffaa00').number()).toBe(16755200);
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

  test('string값이 올바르게 반환되어야 합니다', () => {
    expect(new Color('#ffaabb00').string('#')).toBe('#ffaabb');
    expect(new Color('#00aabbff').string('#')).toBe('#00aabb');
    expect(new Color('#ff00bbab').string('#')).toBe('#ff00bb');
    expect(new Color('#ffaa000a').string('#')).toBe('#ffaa00');

    expect(new Color('#ffaabb00').string('#a')).toBe('#ffaabb00');
    expect(new Color('#00aabbff').string('#a')).toBe('#00aabbff');
    expect(new Color('#ff00bbab').string('#a')).toBe('#ff00bbab');
    expect(new Color('#ffaa000a').string('#a')).toBe('#ffaa000a');

    expect(new Color('#ffaabb00').string('0x')).toBe('0xffaabb');
    expect(new Color('#00aabbff').string('0x')).toBe('0x00aabb');
    expect(new Color('#ff00bbab').string('0x')).toBe('0xff00bb');
    expect(new Color('#ffaa000a').string('0x')).toBe('0xffaa00');

    expect(new Color('#ffaabb00').string('0xa')).toBe('0xffaabb00');
    expect(new Color('#00aabbff').string('0xa')).toBe('0x00aabbff');
    expect(new Color('#ff00bbab').string('0xa')).toBe('0xff00bbab');
    expect(new Color('#ffaa000a').string('0xa')).toBe('0xffaa000a');
  });

  test('number값이 올바르게 반환되어야 합니다', () => {
    expect(new Color('#ffaabb00').number()).toBe(16755387);
    expect(new Color('#00aabbff').number()).toBe(43707);
    expect(new Color('#ff00bbab').number()).toBe(16711867);
    expect(new Color('#ffaa000a').number()).toBe(16755200);
  });
});
