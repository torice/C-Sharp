$(function() {
    /* Java video link: https://www.youtube.com/watch?v=RnqAXuLZlaE */

    var presenters = {
        TREVOR: {
            name: 'Trevor Rice',
            link: 'https://www.linkedin.com/in/ricetrevor'
        },
        MATT: {
            name: 'Matthew Crosby',
            link: 'https://www.linkedin.com/in/matthewcrosby'
        },
        SHELBY: {
            name: 'Shelby Speegle',
            link: 'https://www.linkedin.com/in/ricetrevor'
        },
        TEAM: {
            name: 'Team',
            link: ''
        }
    };

    var mainMenuData = [
        {
            presenter: presenters.MATT,
            title: 'C# ~ a history',
            link: 'history.html'
        },
        {
            presenter: presenters.MATT,
            title: 'C#... Why?',
            link: 'why.html'
        },
        {
            presenter: presenters.SHELBY,
            title: 'Comparisons',
            link: 'comparison.html'
        },
        {
            presenter: presenters.TREVOR,
            title: 'Uses of C#',
            link: 'usage.html'
        },
        {
            presenter: presenters.SHELBY,
            title: 'C# Features',
            link: 'features.html'
        },
        {
            presenter: presenters.TEAM,
            title: 'Examples of C#',
            link: 'https://github.com/torice/C-Sharp/tree/develop/codeExample'
        },
        {
            presenter: presenters.TREVOR,
            title: 'GitHub Repo',
            link: 'https://github.com/torice/C-Sharp'
        }
    ];

    $('#left').append(`
        <div class="wrapper">
            <div id="main-menu" class="design-selection">
                <h3>Main Menu:</h3>
                <nav><ul></ul></nav>
            </div>
        </div>
    `);

    var menu = $('#main-menu');
    for (var i = 0; i < mainMenuData.length; i++) {
        var data = mainMenuData[i];
        menu.find('nav ul').append(`
            <li>
                <a href="${data.presenter.link}" class="design-name">${data.presenter.name}</a> presents
                <a href="${data.link}" class="designer-name">
                    <span>${data.title}</span>
                    <span style="">${data.title}</span>
                </a>
            </li>
        `);
    }

    // Insert Stormtrooper.
    var body = $('body');
    body.append('<div id="trooper"></div>');
    var trooper = $('#trooper');

    // Trooper movement.
    var width = body.width();
    var flipped = false;
    body.on('mousemove', function(event) {
        if (!flipped && event.pageX < width / 2) {
            trooper.addClass('flipped');
            flipped = true;
            return;
        }

        if (flipped && event.pageX > width / 2) {
            trooper.removeClass('flipped');
            flipped = false;
        }
    });
});