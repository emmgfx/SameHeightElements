# SameHeightElements

SameHeightElements is a tiny script that finds the height of a selected
elements defined by the jQuery selector and applies the highest value to all
the elements. It works pretty well with Bootstrap columns.

***

## Demo

You can see it working on http://jsfiddle.net/a7Lrtrdf/2/, with a sample without the plugin, a sample on the normal way and a sample with the responsive mode.

## How to use

### Normal

Add the the script to your HTML:

    <script type="text/javascript" src="jquery.sameHeightElements.min.js"></script>

And run it with your selector in the jQuery code:

    $(".row .item").sameHeightElements();

### Update on window resize (useful for responsive)

Recalculate all the elements height when the window is resized.

    $(window).resize(function() {
        $(".row .item").sameHeightElements();
    }

### Set minimum window width (useful for responsive)

Disable SameHeightElements if the window width is less than specified value.

    $(".row .item").sameHeightElements({
        minWindowWidth: 479
    });

***

## More info at

http://www.emm-gfx.net/2014/08/jquery-plugin-sameheightelements/
