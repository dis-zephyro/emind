//Инициализация плагина
$(window).load(function(){
    $('.sidenav').liLanding();
});


$(".btn-popup").fancybox({
    'padding' : 0,
    'closeBtn' : false
});

$('.btn-close').click(function(){
    $.fancybox.close();
});



$('[data-type="slider-scroller"]').mousemove((function () {
    var
        $scroller = $('[data-type="slider-scroller"]'),
        $img = $('[data-type="slider-image"]'),
        wrapperHeight = parseInt($('[data-type="slider-image-wrapper"]').height()),
        imgHeight = parseInt($img.height()),
        step = (imgHeight - wrapperHeight) / 100;


    return function () {
        //noinspection JSJQueryEfficiency
        var val, top;

        imgHeight = parseInt($img.height());
        step = (imgHeight - wrapperHeight) / 100;

        val = $scroller.val();
        top = val * step;
        top = '-' + top + 'px';

        $img.css('top', top);

        console.log('top', top);
    };
})());





