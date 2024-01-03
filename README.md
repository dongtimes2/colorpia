![title](https://github.com/dongtimes2/readme_image/assets/98700888/0bb7a867-1ad6-4155-9dac-62336b226701)

# Installing

```sh
$ npm install colorpia
```

&nbsp;

Once the package is installed, you can import the library using import of require approach.

```js
import { Color } from 'colorpia';
```

```js
const { Color } = require('colorpia');
```

# Example

Color data should be included in the constructor function's argument.  
And, that data could be string or number in hexadecimal format, or a list of numbers that contains rgb or rgba information.

If the alpha value is not specified, it's automatically set to 100%.

Rgb, expressed in decimal, ranges from 0 to 255.  
Alpha, expressed in decimal, ranges from 0 to 100.

```js
const red = new Color('#ff0000'); // red: 255, green: 0, blue: 0, alpha: 100(=1.0)
const blue = new Color(0x0000ff); // red: 0, green: 0, blue: 255, alpha: 100(=1.0)
const green = new Color([0, 255, 0]); // red: 0, green: 255, blue: 0, alpha: 100(=1.0)
```

```js
const red = new Color('#ff000080'); // red: 255, green: 0, blue: 0, alpha: 50(=0.5)
const blue = new Color(0x0000ffcc); // red: 0, green: 0, blue: 255, alpha: 80(=0.8)
const green = new Color([0, 255, 0, 20]); // red: 0, green: 255, blue: 0, alpha: 20(=0.2)
```

&nbsp;

It returns a decimal or hexadecimal value in form of each rgba element or array or object.

```js
const color = new Color('#ff0000');

color.red('hex'); // ff
color.red('dec'); // 255

color.green('hex'); // 0
color.green('dec'); // 0

color.blue('hex'); // 0
color.blue('dec'); // 0

color.alpha('hex'); // ff
color.alpha('dec'); // 100

color.object(); // { red: 255, green: 0, blue: 0, alpha: 100 }
color.array(); // [ 255, 0, 0, 100 ]
```

# License

MIT
