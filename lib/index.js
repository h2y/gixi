import GIXI from './gixi';

if (typeof jQuery !== 'undefined' && jQuery) {
  (function($) {
    $.fn.gixi = function(color) {
      let gxi = new GIXI(this.height());

      if (typeof color !== 'undefined') {
        gxi.fillStyle = color;
      }

      let data = gxi.getImage();

      if (this.prop('tagName') !== 'IMG') {
        this.css({
            'background-image': `url(${data})`
        });
      } else {
        this.attr('src', data);
      }
    }

  })(jQuery);
} else {
 if (typeof window !== 'undefined') {
	  window.GIXI = GIXI;
 } else {
  	module.exports = GIXI;
 }
}

export default GIXI;
