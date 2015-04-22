(function($) {
    $.fn.pulsate = function(options) {
        options = options || {};
        var defaults = {
            callback : function() {},
            delay : 1200,
            count : 3,
            minOpacity : 0.5,
            maxOpacity : 1.0,
            bgColor: '',
            color: '',
            speed :'slow'
        };
        var settings = $.extend( {}, defaults, options );
        var callback = options.callback || function() {};
        var delay = options.delay || 1200;
        var count = options.count || 3;
        if (count < 1) {
            count = 999;
        }
        var minOpacity = options.minOpacity || 0.5;
        var maxOpacity = options.maxOpacity || 1.0;
        var bgColor = options.bgColor || '';
        var color = options.color || '';
        var speed = options.speed || 'slow';

        return this.each(function() {
            var $this = $(this);
            var bgColor2 = $this.css('backgroundColor');
            var color2 = $this.css('color');
            if (!bgColor) {
                bgColor = bgColor2;
            }
            if (!color) {
                color = color2;
            }
            for(var i = 0; i < count; ++i) {
                $this = $this
                .animate({
                    backgroundColor: bgColor,
                    color: color,
                    opacity: minOpacity
                }, speed, 'linear')
                .animate({
                    backgroundColor: bgColor2,
                    color: color2,
                    opacity: maxOpacity
                }, speed, 'linear')
                .delay(delay);
            }
            $this = $this
                .animate({
                    backgroundColor: bgColor2,
                    color: color2,
                    opacity: maxOpacity
                }, speed, 'linear')
                .delay(delay, callback);
        });
    };
})(jQuery);
