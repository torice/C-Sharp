$(function() {
    // Setup ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    var KEY = {};
    KEY.LEFT = 37;
    KEY.RIGHT = 39;
    var keyStates = {};
    keyStates[KEY.LEFT] = false;
    keyStates[KEY.RIGHT] = false;

    document.onkeydown = function (e) {
        keyStates[e.keyCode] = true;
        switch (e.keyCode) {
            case KEY.LEFT:
                previous();
                break;
            case KEY.RIGHT:
                next();
                break;
        }
    };

    document.onkeyup = function (e) {
        keyStates[e.keyCode] = false;
    };

    function next() {
        if (currentId >= maxId) {
            return;
        }

        rightKeyAdvance.find('#right-' + currentId).toggle();
        currentId++;
        rightKeyAdvance.find('#right-' + currentId).toggle();

        if (full) {
            ensureFull(rightKeyAdvance.find('#right-' + currentId));
        } else {
            ensureClosed(rightKeyAdvance.find('#right-' + currentId));
        }
    }

    function previous() {
        if (currentId <= minId) {
            return;
        }

        rightKeyAdvance.find('#right-' + currentId).toggle();
        currentId--;
        rightKeyAdvance.find('#right-' + currentId).toggle();

        if (full) {
            ensureFull(rightKeyAdvance.find('#right-' + currentId));
        } else {
            ensureClosed(rightKeyAdvance.find('#right-' + currentId));
        }
    }


    // Usage ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    var rightKeyAdvance = $('#right-key-advance');

    var minId = 1;
    var maxId = rightKeyAdvance.find('div').length;
    var currentId = minId;
    rightKeyAdvance.find('div').hide();
    rightKeyAdvance.find('#right-' + minId).show();


    // Fullscreen setup. ///////////////////////////////////////////////////////////////////////////////////////////////
    for (var i = 0; i <= maxId; i++) {
        var div = rightKeyAdvance.find('#right-' + i);
        div.append('<span class="toggle">+</span>');
    }

    var full = false;

    function ensureFull(element) {
        $(element).addClass('fullscreen');
        $(element).find('.toggle').text('-');
    }

    function ensureClosed(element) {
        $(element).removeClass('fullscreen');
        $(element).find('.toggle').text('+');
    }

    var toggle = $('#right-key-advance div .toggle');
    toggle.on('click', function() {
        if (full) {
            ensureClosed($(this.parentNode));
        } else {
            ensureFull($(this.parentNode));
        }

        full = !full;
    });
});