(function () {



    // --------------------
    // Root
    // --------------------

    const $fee = document.querySelector('.fee');
    if (!$fee) return;

    const $rows = select('.fee-row');
    const $head = select('.fee-head');
    const $body = select('.fee-body');



    // --------------------
    // Helpers
    // --------------------

    function select (selector) {
        return Array.from($fee.querySelectorAll(selector));
    }

    function wrap ($nodes, parent) {
        const $parent = document.createElement('div')
        $parent.className = parent;
        $fee.appendChild($parent);
        $nodes.forEach($node => $parent.appendChild($node))
    }

    function toggle ($nodes, value) {
        $nodes.forEach($node => $node.style.display = value ? '' : 'none')
    }

    function toggleClass (name) {
        if ($fee.classList.contains(name)) return;
        const mobile = name === 'fee--mobile';
        $fee.classList.toggle('fee--desktop', !mobile);
        $fee.classList.toggle('fee--mobile', mobile);
        return true;
    }



    // --------------------
    // To mobile
    // --------------------

    function toMobile () {

        if (!toggleClass('fee--mobile')) return;

        const $free = select('.fee-cell:nth-child(2)');
        const $paid = select('.fee-cell:nth-child(3)');

        wrap($free, 'fee-block ui-card');
        wrap($paid, 'fee-block ui-card');

        toggle($head, false);
        toggle($body, false);

    }



    // --------------------
    // To desktop
    // --------------------

    function toDesktop () {

        if (!toggleClass('fee--desktop')) return;

        const $block = select('.fee-block');

        $rows.forEach($row => {
            $row.appendChild($block[0].firstElementChild);
            $row.appendChild($block[1].firstElementChild);
        })

        $fee.removeChild($block[0]);
        $fee.removeChild($block[1]);

        toggle($head, true);
        toggle($body, true);

    }



    // --------------------
    // Resize
    // --------------------

    function resize () {
        if (window.innerWidth > 768) toDesktop();
        else toMobile();
    }

    window.addEventListener('resize', resize);
    resize();



})()