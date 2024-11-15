(function(window, document) {



    // --------------------
    // Elements
    // --------------------

    var $html = document.documentElement;
    var $header = document.querySelector('.s-header');

    if ($header.classList.contains("white")) {
        return;
    }



    // --------------------
    // Handlers
    // --------------------

    var checkScroll = function() {
        var scroll = window.scrollY || $html.scrollTop;

        // Page has been scrolled
        if (scroll > 0) {
            // Change color to white, add shadow
            $header.classList.add('white');
            $header.classList.add('shadow');
        }

        // Scroll position is at origin
        else {
            // Restore color, remove shadow
            $header.classList.remove('white');
            $header.classList.remove('shadow');
        }
    };



    // --------------------
    // Init
    // --------------------

    window.addEventListener('scroll', checkScroll);
    checkScroll();



})(window, document);