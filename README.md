## GIXI

> HTML5 canvas based GitHub identicons like pixel/avatar images generator library. Available as jQuery plugin, or native JS.

<img src="https://raw.githubusercontent.com/h2y/gixi/master/examples/screenshot.png" align=center />

Using jQuery library [demo](https://github.com/h2y/gixi/blob/master/examples/jquery-example.html)

Without jQuery [demo](https://github.com/h2y/gixi/blob/master/examples/no-jquery-example.html)

## Installation

Installation via bower

```
bower install https://github.com/h2y/gixi.git#^1.0.1
```

Using JS link

```html
<script src="https://raw.githubusercontent.com/h2y/gixi/master/dist/gixi-min.js"></script>
```

Or download it from current release [gixi-min.js ](https://raw.githubusercontent.com/h2y/gixi/master/dist/gixi-min.js) 3.53Kb

## Usage

### Make identicons using jQuery

-   Download and install _gixi-min.js_ library
-   Use following code to invoke gixification of your dom elements

`<div class="avatar-element"></div>`

```js
// random color and avatar
$('.avatar-element').gixi();

// or custom by settings
$('.avatar-element').gixi({
    color: "hsl(256, 33%, 46%)", //default is random by the seed
    seed:  "generate avatars by this seed" //default is a random string
});
```

-   Or seed by the DOM userdata

`<img data-gixiseed="the username" id="avatar" />`

```js
$("#avatar").gixi({
    // the seed is 'the username', avatar and color is random by it
    // but it will be override by the follow settings
    color: '#f6a',
    seed:  'yes'
});
```

### Make identicons without jQuery

-   Download and install _gixi-min.js_ library
-   Use following code to invoke gixification of your dom elements

```js
/*
*  Generate gixi image for size of 300
*  The seed is 'userdata'
*/
var imageData = new GIXI(300, 'userdata').getImage();

/*
*  Then place it to your DOM element
*/
var element = document.getElementById('gixie');
element.setAttribute('src', imageData);
```

### Browserify, Webpack

```js
var GIXI = require('gixi');
```

## License

MIT

Copyright (c) 2016 Moshel

Forked from [linuxenko/gixi](https://github.com/linuxenko/gixi)
