(function(window, document) {



    // --------------------
    // Elements
    // --------------------

    var $intro = document.querySelector('.s-intro');
    if (!$intro) {
        return;
    }

    var $figure = $intro.querySelector('figure');
    if (!$figure) {
        return;
    }
    // var $image = $intro.querySelector('.image img');
    // var $canvas = $intro.querySelector('.canvas');



    // --------------------
    // Variables
    // --------------------

    var scale = 1;



    // --------------------
    // Figure
    // --------------------

    function figure () {

        var FIGURE_WIDTH = $figure.offsetWidth;
        var FIGURE_MIN_SCALE = 1;

        function resize() {
            scale = Math.min($intro.offsetWidth, 1580) / FIGURE_WIDTH;
            $figure.style.transform = 'scale(' + Math.max(scale, FIGURE_MIN_SCALE) + ')';
        }

        window.addEventListener('resize', resize);
        resize();

    }



    // --------------------
    // Image
    // --------------------

    // function image () {

    //     var IMAGE_WIDTH = $image.offsetWidth;
    //     var IMAGE_MIN_WIDTH = 530;
    //     // var CANVAS_BOTTOM = 64;

    //     function resize() {
    //         var image_width = Math.max(IMAGE_WIDTH * scale, IMAGE_MIN_WIDTH);
    //         // var canvas_bottom = CANVAS_BOTTOM * image_width / IMAGE_WIDTH;
    //         $image.style.width = image_width + 'px';
    //         // $canvas.style.bottom = canvas_bottom + 'px';
    //     }

    //     window.addEventListener('resize', resize);
    //     resize();

    // }



    // --------------------
    // Init
    // --------------------

    figure();
    // $image && image();



})(window, document);