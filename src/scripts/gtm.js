var or = { track () {} }

// local + login links
const matches = document.querySelectorAll('a[href^="/"], a[href*="https://login.openrm"]')

matches.forEach(function (el) {
    // implement internal link clicks mocking the default outbound clicks:
    // https://support.google.com/analytics/answer/9216061
    el.addEventListener('click', function () {
        gtag('event', 'click', {
            link_classes: el.className,
            link_id: el.id,
            link_url: el.href,
            link_domain: window.location.hostname,
            outbound: false
        })
    })
})


/**
 * Opens a link to nativeforms
 *
 * @param { String } from The origin page which will be passed to Google Analytics
 * @param { String } target Where to display the linked URL
 * @returns { Boolean }
 */

window.contact = function (event) {
    const from = event.target.id;

    if (document.getElementById("intercom-container")) {
        window.Intercom('show');
        gtag('event', 'show_intercom', { link_id: from });
        return false;
    }

    return true;
}
