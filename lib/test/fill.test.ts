import { Color } from '..';

describe('padStart test', () => {
  test('# string red test', () => {
    expect(new Color('#000000').red('hex')).toBe('00');
    expect(new Color('#010000').red('hex')).toBe('01');
    expect(new Color('#020000').red('hex')).toBe('02');
    expect(new Color('#0a0000').red('hex')).toBe('0a');
    expect(new Color('#0f0000').red('hex')).toBe('0f');
    expect(new Color('#0f0a0b').red('hex')).toBe('0f');
  });

  test('# string green test', () => {
    expect(new Color('#000000').green('hex')).toBe('00');
    expect(new Color('#000100').green('hex')).toBe('01');
    expect(new Color('#000200').green('hex')).toBe('02');
    expect(new Color('#000a00').green('hex')).toBe('0a');
    expect(new Color('#000f00').green('hex')).toBe('0f');
    expect(new Color('#0f0a0b').green('hex')).toBe('0a');
  });

  test('# string blue test', () => {
    expect(new Color('#000000').blue('hex')).toBe('00');
    expect(new Color('#000001').blue('hex')).toBe('01');
    expect(new Color('#000002').blue('hex')).toBe('02');
    expect(new Color('#00000a').blue('hex')).toBe('0a');
    expect(new Color('#00000f').blue('hex')).toBe('0f');
    expect(new Color('#120a0f').blue('hex')).toBe('0f');
  });

  test('# string alpha test', () => {
    expect(new Color('#00000000').alpha('hex')).toBe('00');
    expect(new Color('#00000001').alpha('hex')).toBe('01');
    expect(new Color('#00000002').alpha('hex')).toBe('02');
    expect(new Color('#0000000a').alpha('hex')).toBe('0a');
    expect(new Color('#0000000f').alpha('hex')).toBe('0f');
    expect(new Color('#1234560f').alpha('hex')).toBe('0f');
  });

  test('# string array test', () => {
    expect(new Color('#000000').array('hex')).toEqual(['00', '00', '00', 'ff']);

    expect(new Color('#010000').array('hex')).toEqual(['01', '00', '00', 'ff']);
    expect(new Color('#020000').array('hex')).toEqual(['02', '00', '00', 'ff']);
    expect(new Color('#0a0000').array('hex')).toEqual(['0a', '00', '00', 'ff']);
    expect(new Color('#0f0000').array('hex')).toEqual(['0f', '00', '00', 'ff']);

    expect(new Color('#000100').array('hex')).toEqual(['00', '01', '00', 'ff']);
    expect(new Color('#000200').array('hex')).toEqual(['00', '02', '00', 'ff']);
    expect(new Color('#000a00').array('hex')).toEqual(['00', '0a', '00', 'ff']);
    expect(new Color('#000f00').array('hex')).toEqual(['00', '0f', '00', 'ff']);

    expect(new Color('#000001').array('hex')).toEqual(['00', '00', '01', 'ff']);
    expect(new Color('#000002').array('hex')).toEqual(['00', '00', '02', 'ff']);
    expect(new Color('#00000a').array('hex')).toEqual(['00', '00', '0a', 'ff']);
    expect(new Color('#00000f').array('hex')).toEqual(['00', '00', '0f', 'ff']);

    expect(new Color('#00000000').array('hex')).toEqual([
      '00',
      '00',
      '00',
      '00',
    ]);
    expect(new Color('#00000001').array('hex')).toEqual([
      '00',
      '00',
      '00',
      '01',
    ]);

    expect(new Color('#00000002').array('hex')).toEqual([
      '00',
      '00',
      '00',
      '02',
    ]);
    expect(new Color('#0000000a').array('hex')).toEqual([
      '00',
      '00',
      '00',
      '0a',
    ]);
    expect(new Color('#0000000f').array('hex')).toEqual([
      '00',
      '00',
      '00',
      '0f',
    ]);

    expect(new Color('#000000af').array('hex')).toEqual([
      '00',
      '00',
      '00',
      'af',
    ]);
    expect(new Color('#1002aaaf').array('hex')).toEqual([
      '10',
      '02',
      'aa',
      'af',
    ]);
  });

  test('# string object test', () => {
    expect(new Color('#000000').object('hex')).toEqual({
      red: '00',
      green: '00',
      blue: '00',
      alpha: 'ff',
    });
    expect(new Color('#010000').object('hex')).toEqual({
      red: '01',
      green: '00',
      blue: '00',
      alpha: 'ff',
    });
    expect(new Color('#020000').object('hex')).toEqual({
      red: '02',
      green: '00',
      blue: '00',
      alpha: 'ff',
    });
    expect(new Color('#0a0000').object('hex')).toEqual({
      red: '0a',
      green: '00',
      blue: '00',
      alpha: 'ff',
    });
    expect(new Color('#0f0000').object('hex')).toEqual({
      red: '0f',
      green: '00',
      blue: '00',
      alpha: 'ff',
    });

    expect(new Color('#000100').object('hex')).toEqual({
      red: '00',
      green: '01',
      blue: '00',
      alpha: 'ff',
    });
    expect(new Color('#000200').object('hex')).toEqual({
      red: '00',
      green: '02',
      blue: '00',
      alpha: 'ff',
    });
    expect(new Color('#000a00').object('hex')).toEqual({
      red: '00',
      green: '0a',
      blue: '00',
      alpha: 'ff',
    });
    expect(new Color('#000f00').object('hex')).toEqual({
      red: '00',
      green: '0f',
      blue: '00',
      alpha: 'ff',
    });

    expect(new Color('#000001').object('hex')).toEqual({
      red: '00',
      green: '00',
      blue: '01',
      alpha: 'ff',
    });
    expect(new Color('#000002').object('hex')).toEqual({
      red: '00',
      green: '00',
      blue: '02',
      alpha: 'ff',
    });
    expect(new Color('#00000a').object('hex')).toEqual({
      red: '00',
      green: '00',
      blue: '0a',
      alpha: 'ff',
    });
    expect(new Color('#00000f').object('hex')).toEqual({
      red: '00',
      green: '00',
      blue: '0f',
      alpha: 'ff',
    });

    expect(new Color('#00000000').object('hex')).toEqual({
      red: '00',
      green: '00',
      blue: '00',
      alpha: '00',
    });
    expect(new Color('#00000001').object('hex')).toEqual({
      red: '00',
      green: '00',
      blue: '00',
      alpha: '01',
    });
    expect(new Color('#00000002').object('hex')).toEqual({
      red: '00',
      green: '00',
      blue: '00',
      alpha: '02',
    });
    expect(new Color('#0000000a').object('hex')).toEqual({
      red: '00',
      green: '00',
      blue: '00',
      alpha: '0a',
    });
    expect(new Color('#0000000f').object('hex')).toEqual({
      red: '00',
      green: '00',
      blue: '00',
      alpha: '0f',
    });
    expect(new Color('#0120030f').object('hex')).toEqual({
      red: '01',
      green: '20',
      blue: '03',
      alpha: '0f',
    });
  });

  test('0x string test', () => {
    expect(new Color('0x000000').red('hex')).toBe('00');
    expect(new Color('0x010000').red('hex')).toBe('01');
    expect(new Color('0x020000').red('hex')).toBe('02');
    expect(new Color('0x0a0000').red('hex')).toBe('0a');
    expect(new Color('0x0f0000').red('hex')).toBe('0f');

    expect(new Color('0x000100').green('hex')).toBe('01');
    expect(new Color('0x000200').green('hex')).toBe('02');
    expect(new Color('0x000a00').green('hex')).toBe('0a');
    expect(new Color('0x000f00').green('hex')).toBe('0f');

    expect(new Color('0x000001').blue('hex')).toBe('01');
    expect(new Color('0x000002').blue('hex')).toBe('02');
    expect(new Color('0x00000a').blue('hex')).toBe('0a');
    expect(new Color('0x00000f').blue('hex')).toBe('0f');

    expect(new Color('0x00000000').alpha('hex')).toBe('00');
    expect(new Color('0x00000001').alpha('hex')).toBe('01');
    expect(new Color('0x00000002').alpha('hex')).toBe('02');
    expect(new Color('0x0000000a').alpha('hex')).toBe('0a');
    expect(new Color('0x0000000f').alpha('hex')).toBe('0f');

    expect(new Color('0x010000').array('hex')).toEqual([
      '01',
      '00',
      '00',
      'ff',
    ]);
    expect(new Color('0x020000').array('hex')).toEqual([
      '02',
      '00',
      '00',
      'ff',
    ]);
    expect(new Color('0x0a0000').array('hex')).toEqual([
      '0a',
      '00',
      '00',
      'ff',
    ]);
    expect(new Color('0x0f0000').array('hex')).toEqual([
      '0f',
      '00',
      '00',
      'ff',
    ]);

    expect(new Color('0x000100').array('hex')).toEqual([
      '00',
      '01',
      '00',
      'ff',
    ]);
    expect(new Color('0x000200').array('hex')).toEqual([
      '00',
      '02',
      '00',
      'ff',
    ]);
    expect(new Color('0x000a00').array('hex')).toEqual([
      '00',
      '0a',
      '00',
      'ff',
    ]);
    expect(new Color('0x000f00').array('hex')).toEqual([
      '00',
      '0f',
      '00',
      'ff',
    ]);

    expect(new Color('0x000001').array('hex')).toEqual([
      '00',
      '00',
      '01',
      'ff',
    ]);
    expect(new Color('0x000002').array('hex')).toEqual([
      '00',
      '00',
      '02',
      'ff',
    ]);
    expect(new Color('0x00000a').array('hex')).toEqual([
      '00',
      '00',
      '0a',
      'ff',
    ]);
    expect(new Color('0x00000f').array('hex')).toEqual([
      '00',
      '00',
      '0f',
      'ff',
    ]);

    expect(new Color('0x00000000').array('hex')).toEqual([
      '00',
      '00',
      '00',
      '00',
    ]);
    expect(new Color('0x00000001').array('hex')).toEqual([
      '00',
      '00',
      '00',
      '01',
    ]);
    expect(new Color('0x00000002').array('hex')).toEqual([
      '00',
      '00',
      '00',
      '02',
    ]);
    expect(new Color('0x0000000a').array('hex')).toEqual([
      '00',
      '00',
      '00',
      '0a',
    ]);
    expect(new Color('0x0000000f').array('hex')).toEqual([
      '00',
      '00',
      '00',
      '0f',
    ]);
    expect(new Color('0x0f0f0f0f').array('hex')).toEqual([
      '0f',
      '0f',
      '0f',
      '0f',
    ]);

    expect(new Color('0x000000').object('hex')).toEqual({
      red: '00',
      green: '00',
      blue: '00',
      alpha: 'ff',
    });

    expect(new Color('0x010000').object('hex')).toEqual({
      red: '01',
      green: '00',
      blue: '00',
      alpha: 'ff',
    });
    expect(new Color('0x020000').object('hex')).toEqual({
      red: '02',
      green: '00',
      blue: '00',
      alpha: 'ff',
    });
    expect(new Color('0x0a0000').object('hex')).toEqual({
      red: '0a',
      green: '00',
      blue: '00',
      alpha: 'ff',
    });
    expect(new Color('0x0f0000').object('hex')).toEqual({
      red: '0f',
      green: '00',
      blue: '00',
      alpha: 'ff',
    });

    expect(new Color('0x000100').object('hex')).toEqual({
      red: '00',
      green: '01',
      blue: '00',
      alpha: 'ff',
    });
    expect(new Color('0x000200').object('hex')).toEqual({
      red: '00',
      green: '02',
      blue: '00',
      alpha: 'ff',
    });
    expect(new Color('0x000a00').object('hex')).toEqual({
      red: '00',
      green: '0a',
      blue: '00',
      alpha: 'ff',
    });
    expect(new Color('0x000f00').object('hex')).toEqual({
      red: '00',
      green: '0f',
      blue: '00',
      alpha: 'ff',
    });

    expect(new Color('0x000001').object('hex')).toEqual({
      red: '00',
      green: '00',
      blue: '01',
      alpha: 'ff',
    });
    expect(new Color('0x000002').object('hex')).toEqual({
      red: '00',
      green: '00',
      blue: '02',
      alpha: 'ff',
    });
    expect(new Color('0x00000a').object('hex')).toEqual({
      red: '00',
      green: '00',
      blue: '0a',
      alpha: 'ff',
    });
    expect(new Color('0x00000f').object('hex')).toEqual({
      red: '00',
      green: '00',
      blue: '0f',
      alpha: 'ff',
    });

    expect(new Color('0x00000000').object('hex')).toEqual({
      red: '00',
      green: '00',
      blue: '00',
      alpha: '00',
    });
    expect(new Color('0x00000001').object('hex')).toEqual({
      red: '00',
      green: '00',
      blue: '00',
      alpha: '01',
    });
    expect(new Color('0x0000000a').object('hex')).toEqual({
      red: '00',
      green: '00',
      blue: '00',
      alpha: '0a',
    });
    expect(new Color('0x0000000f').object('hex')).toEqual({
      red: '00',
      green: '00',
      blue: '00',
      alpha: '0f',
    });
  });

  test('0x number test', () => {
    expect(new Color(0x00000000).red('hex')).toBe('00');
    expect(new Color(0x01000000).red('hex')).toBe('01');
    expect(new Color(0x02000000).red('hex')).toBe('02');
    expect(new Color(0x0a000000).red('hex')).toBe('0a');
    expect(new Color(0x0f000000).red('hex')).toBe('0f');

    expect(new Color(0x00010000).green('hex')).toBe('01');
    expect(new Color(0x00020000).green('hex')).toBe('02');
    expect(new Color(0x000a0000).green('hex')).toBe('0a');
    expect(new Color(0x000f0000).green('hex')).toBe('0f');

    expect(new Color(0x00000100).blue('hex')).toBe('01');
    expect(new Color(0x00000200).blue('hex')).toBe('02');
    expect(new Color(0x00000a00).blue('hex')).toBe('0a');
    expect(new Color(0x00000f00).blue('hex')).toBe('0f');

    expect(new Color(0x00000000).alpha('hex')).toBe('00');
    expect(new Color(0x00000001).alpha('hex')).toBe('01');
    expect(new Color(0x00000002).alpha('hex')).toBe('02');
    expect(new Color(0x0000000a).alpha('hex')).toBe('0a');
    expect(new Color(0x0000000f).alpha('hex')).toBe('0f');

    expect(new Color(0x010000ff).array('hex')).toEqual([
      '01',
      '00',
      '00',
      'ff',
    ]);
    expect(new Color(0x020000ff).array('hex')).toEqual([
      '02',
      '00',
      '00',
      'ff',
    ]);
    expect(new Color(0x0a0000ff).array('hex')).toEqual([
      '0a',
      '00',
      '00',
      'ff',
    ]);
    expect(new Color(0x0f0000ff).array('hex')).toEqual([
      '0f',
      '00',
      '00',
      'ff',
    ]);

    expect(new Color(0x000100ff).array('hex')).toEqual([
      '00',
      '01',
      '00',
      'ff',
    ]);
    expect(new Color(0x000200ff).array('hex')).toEqual([
      '00',
      '02',
      '00',
      'ff',
    ]);
    expect(new Color(0x000a00ff).array('hex')).toEqual([
      '00',
      '0a',
      '00',
      'ff',
    ]);
    expect(new Color(0x000f00ff).array('hex')).toEqual([
      '00',
      '0f',
      '00',
      'ff',
    ]);

    expect(new Color(0x000001ff).array('hex')).toEqual([
      '00',
      '00',
      '01',
      'ff',
    ]);
    expect(new Color(0x000002ff).array('hex')).toEqual([
      '00',
      '00',
      '02',
      'ff',
    ]);
    expect(new Color(0x00000aff).array('hex')).toEqual([
      '00',
      '00',
      '0a',
      'ff',
    ]);
    expect(new Color(0x00000fff).array('hex')).toEqual([
      '00',
      '00',
      '0f',
      'ff',
    ]);

    expect(new Color(0x00000000).array('hex')).toEqual([
      '00',
      '00',
      '00',
      '00',
    ]);
    expect(new Color(0x00000001).array('hex')).toEqual([
      '00',
      '00',
      '00',
      '01',
    ]);
    expect(new Color(0x00000002).array('hex')).toEqual([
      '00',
      '00',
      '00',
      '02',
    ]);
    expect(new Color(0x0000000a).array('hex')).toEqual([
      '00',
      '00',
      '00',
      '0a',
    ]);
    expect(new Color(0x0000000f).array('hex')).toEqual([
      '00',
      '00',
      '00',
      '0f',
    ]);
    expect(new Color(0x0f0f0f0f).array('hex')).toEqual([
      '0f',
      '0f',
      '0f',
      '0f',
    ]);

    expect(new Color(0x000000ff).object('hex')).toEqual({
      red: '00',
      green: '00',
      blue: '00',
      alpha: 'ff',
    });

    expect(new Color(0x010000ff).object('hex')).toEqual({
      red: '01',
      green: '00',
      blue: '00',
      alpha: 'ff',
    });
    expect(new Color(0x020000ff).object('hex')).toEqual({
      red: '02',
      green: '00',
      blue: '00',
      alpha: 'ff',
    });
    expect(new Color(0x0a0000ff).object('hex')).toEqual({
      red: '0a',
      green: '00',
      blue: '00',
      alpha: 'ff',
    });
    expect(new Color(0x0f0000ff).object('hex')).toEqual({
      red: '0f',
      green: '00',
      blue: '00',
      alpha: 'ff',
    });

    expect(new Color(0x000100ff).object('hex')).toEqual({
      red: '00',
      green: '01',
      blue: '00',
      alpha: 'ff',
    });
    expect(new Color(0x000200ff).object('hex')).toEqual({
      red: '00',
      green: '02',
      blue: '00',
      alpha: 'ff',
    });
    expect(new Color(0x000a00ff).object('hex')).toEqual({
      red: '00',
      green: '0a',
      blue: '00',
      alpha: 'ff',
    });
    expect(new Color(0x000f00ff).object('hex')).toEqual({
      red: '00',
      green: '0f',
      blue: '00',
      alpha: 'ff',
    });

    expect(new Color(0x000001ff).object('hex')).toEqual({
      red: '00',
      green: '00',
      blue: '01',
      alpha: 'ff',
    });
    expect(new Color(0x000002ff).object('hex')).toEqual({
      red: '00',
      green: '00',
      blue: '02',
      alpha: 'ff',
    });
    expect(new Color(0x00000aff).object('hex')).toEqual({
      red: '00',
      green: '00',
      blue: '0a',
      alpha: 'ff',
    });
    expect(new Color(0x00000fff).object('hex')).toEqual({
      red: '00',
      green: '00',
      blue: '0f',
      alpha: 'ff',
    });

    expect(new Color(0x00000000).object('hex')).toEqual({
      red: '00',
      green: '00',
      blue: '00',
      alpha: '00',
    });
    expect(new Color(0x00000001).object('hex')).toEqual({
      red: '00',
      green: '00',
      blue: '00',
      alpha: '01',
    });
    expect(new Color(0x0000000a).object('hex')).toEqual({
      red: '00',
      green: '00',
      blue: '00',
      alpha: '0a',
    });
    expect(new Color(0x0000000f).object('hex')).toEqual({
      red: '00',
      green: '00',
      blue: '00',
      alpha: '0f',
    });
  });
});
