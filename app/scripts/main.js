'use strict';

(function($) {

  /**
   * Project
   */

  var project = {};
  project.$carousel = $('[data-component=carousel]');
  project.$slider = $('[data-component=slider]');

  /**
   * init slick slider/carousel
   * @method
   */
  project.initCarousel = function($carousel, options) {
    if($.fn.slick && $carousel.length) {
      $carousel.slick(options);
    }

  };

  /**
   * Init project
   * @method
   */
  project.init = function() {
    $(window).on('load', function() {
      project.initCarousel(project.$carousel, {
        mobileFirst: true,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              centerMode: true
            }
          }
        ]
      });

      project.initCarousel(project.$slider);
    });
  };

  $(project.init);
})(jQuery);
