// Module settings
var fmodeSettings = {
    'favicon_mode': ['dark', 'light'], // Preset favicon modes
    'selecors': 'link[rel*=icon], link[rel=manifest]', // Preset favicon selectors
    'scheme': '(prefers-color-scheme: dark)' // Preset color scheme
};

// Change favicon source based on color scheme
function changeFavicon(c, m) {
    var l = document.querySelectorAll(fmodeSettings['selecors']);
    for (var i = 0; i < l.length; i++) {
        // Get attribute with favicon source
        var h = l[i].getAttribute('href');
        // Change folder path in favicon source
        l[i].setAttribute("href", h.replace(c, m));
    }
}

// Check color scheme
function checkColorScheme() {
    //Default favicon is light
    var c = true;

    // Check if color scheme is dark mode
    if (window.matchMedia && window.matchMedia(fmodeSettings['scheme']).matches) {
       c = !c;
    }
    // Call function chnageFavicon. Set bool to int
    changeFavicon(fmodeSettings['favicon_mode'][+c], fmodeSettings['favicon_mode'][+!c]);
}

window.onload = checkColorScheme();

window.matchMedia(fmodeSettings['scheme']).addListener(function() {
    checkColorScheme();
});