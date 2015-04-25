$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 35 // -35 to offset the sticky nav
                }, 1000);
                return false;
            }
        }
    });
});

$(function() { // called when a link in the side menu is clicked, closing the menu
    $('.nav-link').click(function() {
         $('#mobilemenulink').trigger('click');
    });
});

$(function(){ // when the side menu is opened, we need to scroll to top to get to actual menu items
    $('#rightmenubutton').click(function() {
        $('html, body').animate({scrollTop : 0},1000);

    });
});

