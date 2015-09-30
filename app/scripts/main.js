(function($) {
  var project = {};
  project.$carousel = $('[data-component=carousel]');
  project.initCarousel = function($carousel, options) {
    console.log('works')
    if($.fn.slick && $carousel.length) {
      return function() {
        $carousel.slick(options);
      }
    }

  };
  project.init = function() {
    var initCarousel = project.initCarousel(project.$carousel, {
      mobileFirst: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      variableWidth: true
      //centerPadding: '20px'
    });

    $(window).on('load', initCarousel);
  };

  $(project.init);
})(jQuery);
