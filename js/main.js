$('a[data-target^="anchor"]').bind('click.smoothscroll', function () {
  var target = $(this).attr('href'),
   bl_top = $(target).offset().top - 5;
  $('body, html').animate({ scrollTop: bl_top }, 700);
  return false;
 });

$('.menu__btn').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('menu__btn--active');
  $('.menu__nav').toggleClass('menu__nav__active');
});

$(document).ready(function(){
   $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 795,
  });
});

$('[data-open-block]').on('click', function() {
  const activeCls = 'is-active';
  $('[data-open-block]').removeClass('active__item');
  $(this).addClass('active__item');
	$('[data-content]').removeClass(activeCls);
  $(`[data-content="${$(this).data('open-block')}"`).addClass(activeCls);
});


