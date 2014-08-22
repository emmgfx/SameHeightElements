/*
 * SameHeightElements.js v1.0.0
 *
 * Author: Josep Viciana
 * Twitter: @emmgfx
 * Blog: http://www.emm-gfx.net
 *
 * Released under the Creative Commons BY-NC license.
 *
 * SameHeightElements is a tiny script that finds the height of a selected
 * elements defined by the jQuery selector and applies the higer value to all
 * the elements. It works pretty well with Bootstrap columns.
 */

 (function($){
    $.fn.sameHeightElements = function() {

    	var heights = this.map(function() {
        	return $(this).height();
        }).get(),

    	maxHeight = Math.max.apply(null, heights);

    	this.each(function() {
            $(this).height(maxHeight);
        });

    };
})(jQuery);
