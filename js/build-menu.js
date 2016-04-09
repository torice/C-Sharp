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
        UNCLAIMED: {
            name: 'Unclaimed',
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
            presenter: presenters.SHELBY,
            title: 'C# Features',
            link: 'features.html'
        },
        {
            presenter: presenters.TREVOR,
            title: 'Uses of C#',
            link: 'usage.html'
        },
        {
            presenter: presenters.MATT,
            title: 'C#... Why?',
            link: 'why.html'
        },
        {
            presenter: presenters.SHELBY,
            title: 'Examples of C#',
            link: 'https://github.com/torice/C-Sharp/tree/develop/codeExample'
        },
        {
            presenter: presenters.MATT,
            title: 'Resources for C#',
            link: 'resources.html'
        },
        {
            presenter: presenters.SHELBY,
            title: 'Comparisons',
            link: 'comparison.html'
        },
        {
            presenter: presenters.UNCLAIMED,
            title: 'Project Sources',
            link: 'sources.html'
        },
        {
            presenter: presenters.TREVOR,
            title: 'GitHub Repo',
            link: 'https://github.com/torice/C-Sharp'
        }
    ];

    var secondaryMenuData = [
        {
            title: 'C# Developer Page',
            link: 'https://msdn.microsoft.com/en-US/library/kx37x362.aspx'
        },
        {
            title: 'C# Fundamentals',
            link: 'https://mva.microsoft.com/en-US/training-courses/c-fundamentals-for-absolute-beginners-16169'
        },
        {
            title: 'Tutorials Point',
            link: 'http://www.tutorialspoint.com/csharp/'
        },
        {
            title: 'C# Station',
            link: 'http://www.csharp-station.com/'
        }
    ];

    $('#left').append(`
        <div class="wrapper">
            <div id="main-menu" class="design-selection">
                <h3>Main Menu:</h3>
                <nav><ul></ul></nav>
            </div>
            <div id="secondary-menu" class="design-archives">
                <h3>Learn More:</h3>
                <nav><ul></ul></nav>
            </div>
        </div>
    `);

    var menu, data, i;
    menu = $('#main-menu');
    for (i = 0; i < mainMenuData.length; i++) {
        data = mainMenuData[i];
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

    menu = $('#secondary-menu');
    for (i = 0; i < secondaryMenuData.length; i++) {
        data = secondaryMenuData[i];
        menu.find('nav ul').append(`
            <li>
                <a href="${data.link}" target="_new">
                    ${data.title}
                </a>
            </li>
        `);
    }
});