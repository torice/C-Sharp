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
    }

    function previous() {
        if (currentId <= minId) {
            return;
        }

        rightKeyAdvance.find('#right-' + currentId).toggle();
        currentId--;
        rightKeyAdvance.find('#right-' + currentId).toggle();
    }


    // Usage ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    var rightKeyAdvance = $('#right-key-advance');

    var minId = 1;
    var maxId = rightKeyAdvance.find('div').length;
    var currentId = minId;
    rightKeyAdvance.find('div').hide();
    rightKeyAdvance.find('#right-' + minId).show();
});