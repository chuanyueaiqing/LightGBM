$(function() {
    $('a[href^="./"][href*=".rst"]').attr('href', (i, val) => { return val.replace('.rst', '.html'); });  /* Replace '.rst' with '.html' in all internal links like './[Something].rst[#anchor]' */
    $('.wy-nav-content').each(function () { this.style.setProperty('max-width', 'none', 'important'); });
    $('<style>.closed, .opened {cursor: pointer;} .closed:before, .opened:before {font-family: FontAwesome; display: inline-block; padding-right: 6px;} .closed:before {content: "\\f078";} .opened:before {content: "\\f077";}</style>').appendTo('body');

    var collapsable = ['#build-mpi-version', '#build-gpu-version', '#build-hdfs-version', '#build-java-wrapper'];
    $.each(collapsable, function(i, val) {
        var header = val + ' > :header:first';
        var content = val + ' :not(:first-child)';
        $(header).addClass('closed');
        $(content).hide();
        $(header).click(function() {
            $(header).toggleClass('closed opened');
            $(content).slideToggle(0);
        });
    });
    $('.wy-menu.wy-menu-vertical li a.reference.internal').each(function() {
        var navbarListItem = $(this);
//        var clickHandler = this.onclick;
//        this.onclick = null;

        navbarListItem.click(function() {
            $($(this).attr('href')).parents().each((i, val) => {
                $(val).children('.closed').trigger('click');
            });
        });
//        navbarListItem.click(clickHandler);
    });
});
