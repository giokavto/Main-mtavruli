let html = document.querySelector('html');
$(document).ready(function() {

    if(html.clientWidth > 576){
        $('#fullpage').fullpage({
            navigation: true,
            navigationPosition: 'right',
        });
    }   
});


// burger
$(document).ready(function() {

    // Menu script
    $("#burger").click(function() {
        $(".anim").toggleClass("active");
    });
    $(".menu__item").click(function() {
        $(".anim").toggleClass("active");
    });
//bottom
 $("#bottom").click(function() {
        $(".anim-bottom").toggleClass("active");
    });
    $(".resourse-down").click(function() {
        $(".anim-bottom").toggleClass("active");
    });

    //Scroll to ID
    $(document).on('click', 'a[href^="#"]', function(e) {
        var id = $(this).attr('href');
        var $id = $(id);
        if ($id.length === 0){return;}
        e.preventDefault();
        //var pos = $id.offset().top - 60;
        var pos = $id.offset().top;
        $('body, html').animate({scrollTop: pos});
    });
});
