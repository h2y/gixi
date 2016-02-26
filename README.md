## GIXI

GitHub identicons like pixel/avatar images generator library.
Available as jquery or native library.
GIXI is entirely written using currently available es6 technologies.


## Installation


## Usage

### Make identicons using jQuery

  * Download and install gixi-min.js library <br />
  * Use following code to invoke gixification of your dom elements

```
  $('.avatar-element').gixi();

  // or using custom colors

  var color = "#000";
  $('.avatar-element').gixi(color);
```


### Make identicons without jQuery


  * Download and install gixi-min.js library <br />
  * Use following code to invoke gixification of your dom elements

```
 /*
  *  Generate gixi image for size of 300
  */

  var imageSize = 300;
  var imageData = new GIXI(imageSize).getImage();

  /*
   *  Then place it to your dom element
   */

  var element = document.getElementById('gixie');

  element.setAttribute('src', imageData);

```
