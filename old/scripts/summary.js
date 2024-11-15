(function () {

    const $summary = document.querySelector('.с-summary');
    if (!$summary) return;

    const $tabs = $summary.querySelectorAll('.с-summary-tab');
    const $links = $summary.querySelectorAll('.с-summary-nav a');

    function click () {
        for (var i = 0; i < $links.length; i++) {
            const self = $links[i] === this;
            // because of IE 11 toggleClass bug
            if (self) {
                $links[i].classList.add('active');
                $tabs[i].classList.add('active');
            }
            else {
                $links[i].classList.remove('active');
                $tabs[i].classList.remove('active');
            }

        }
    }

    for (var i = 0; i < $links.length; i++) {
        $links[i].addEventListener('click', click)
    }

})();