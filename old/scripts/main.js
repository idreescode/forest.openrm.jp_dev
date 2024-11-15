window.dataLayer = window.dataLayer || [];

window.or = {
    track: function(category, action, label, value) {
        dataLayer.push({
            event: 'interaction',
            eventCategory: category,
            eventAction: action,
            eventLabel: label,
            eventValue: value
        });
    }
};


/**
 * Opens a link to nativeforms
 *
 * @param { String } from The origin page which will be passed to Google Analytics
 * @param { String } target Where to display the linked URL
 * @returns { Boolean }
 */
window.contact = function (from, target) {

    or.track("Navigation", "Contact", from);

    if (document.getElementById("intercom-container")) {
        window.Intercom('show');

        or.track("Intercom Messenger", "Clicked", from);

        return false;
    } else {
        var elem = document.createElement("a");
        elem.href = "https://ie.nativeforms.com/qhXZilzNiJXPmZSbvh3ZkhmZp1Db";

        if (target) elem.target = target;

        elem.click();
        elem.remove();
    }

    return true;
}
