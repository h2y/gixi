import GIXI from './gixi';

if (typeof jQuery !== 'undefined' && jQuery) {
    (function($) {
        $.fn.gixi = function(sets={}) {
            sets.seed = sets.seed || this.data('gixiseed');
            sets.size = sets.size || this.data('gixisize') || this.height();
            sets.size = Math.round(sets.size);
            sets.color = sets.color || this.data('gixicolor');

            let gxi = new GIXI(sets.size, sets.seed);

            if (sets.color !== 'undefined')
                gxi.fillStyle = sets.color;

            let data = gxi.getImage();

            if (this.prop('tagName') !== 'IMG')
                this.css({'background-image': `url(${data})`});
            else
                this.attr('src', data);
        }

    })(jQuery);
} else {
    if (typeof window !== 'undefined')
        window.GIXI = GIXI;
    else
        module.exports = GIXI;
}

export default GIXI;
