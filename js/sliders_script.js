$.noConflict();

jQuery( document ).ready(function( $ ) {

    'use strict'

    //CheckPositionMobile();

    $('.tp-banner').show().revolution({


        dottedOverlay: "none",

        delay: 3500,

        startwidth: 1170,

        startheight: 960,

        hideThumbs: 200,

        thumbWidth: 100,

        thumbHeight: 50,

        thumbAmount: 5,

        navigationType: "none",

        navigationArrows: "hide",

        navigationStyle: "none",

        navigationInGrid: "off",

        touchenabled: "on",

        onHoverStop: "off",

        swipe_velocity: 0.7,

        swipe_min_touches: 1,

        swipe_max_touches: 1,

        drag_block_vertical: false,

        parallax: "mouse",

        parallaxBgFreeze: "off",

        parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0],

        keyboardNavigation: "off",

        navigationHAlign: "center",

        navigationVAlign: "bottom",

        navigationHOffset: 0,

        navigationVOffset: 20,

        soloArrowLeftHalign: "left",

        soloArrowLeftValign: "center",

        soloArrowLeftHOffset: 20,

        soloArrowLeftVOffset: 0,

        soloArrowRightHalign: "right",

        soloArrowRightValign: "center",

        soloArrowRightHOffset: 20,

        soloArrowRightVOffset: 0,

        shadow: 0,

        fullWidth: "off",

		fullScreenAlignForce:"off",
		
        fullScreen: "off",

        spinner: "spinner4",

        stopLoop: "off",

        stopAfterLoops: -1,

        stopAtSlide: -1,

        shuffle: "off",

        autoHeight: "off",

        forceFullWidth: "off",

        hideThumbsOnMobile: "off",

        hideNavDelayOnMobile: 1500,

        hideBulletsOnMobile: "off",

        hideArrowsOnMobile: "off",

        hideThumbsUnderResolution: 0,

        hideSliderAtLimit: 0,

        hideCaptionAtLimit: 0,

        hideAllCaptionAtLilmit: 0,

        startWithSlide: 0,

        //fullScreenOffsetContainer: "header"

    });

	

	

	

	

	

    

	

	

})(jQuery);

