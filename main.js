$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1490, 'easeInOutExpo');
        event.preventDefault();
    });
});


$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
