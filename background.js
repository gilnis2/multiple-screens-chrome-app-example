chrome.app.runtime.onLaunched.addListener(function() {

    var disableEsc = function(appWindow){
        appWindow.contentWindow.document.addEventListener('keydown', function(e) {
            if (e.keyCode == 27){
                e.preventDefault();
            }
        });
        appWindow.contentWindow.document.addEventListener('keyup', function(e) {
            if (e.keyCode == 27){
                e.preventDefault();
            }
        });
    };

    // Left window
    chrome.app.window.create('application.html', {
        'frame': 'none', 'resizable': false, 'alwaysOnTop': true
    },
        function(appWindow){
            appWindow.outerBounds.setPosition(0, 0);
            disableEsc(appWindow);
            appWindow.fullscreen();
        }
    );

    // Right window
    chrome.app.window.create('application.html', {
            'frame': 'none', 'resizable': false
        },
        function(appWindow){
            appWindow.outerBounds.setPosition(screen.availWidth, 0);
            disableEsc(appWindow);
            appWindow.fullscreen();
        }
    );

});