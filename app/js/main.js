$(function () {
    $('.problems__description').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      });
      $('.problems__services-list').slick({
        slidesToShow: 6,
        slidesToScroll: 0,
        asNavFor: '.slider-for',

      });
})