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