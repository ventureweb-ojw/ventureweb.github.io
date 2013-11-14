/* --------------------------------------------------

	scrollin parallax fx
	
-------------------------------------------------- */
var ScrollFX = (function ($) {
    var jk = {};
    jk.config = {
    	factor: 0.5,
    	bg: 0,
    	scrolling: true,
    	winY: 0,
    	winH: $(window).outerHeight(),
    	winW: $(window).outerWidth()
    };
    
    jk.init = function () {
    	jk.parallax.init();
    	jk.window();
    };
    jk.window = function () {
    	var $window = $(window);
    	$window.resize(function() {
    		jk.config.winH = $(window).outerHeight();
    		jk.config.winW = $(window).outerWidth();
    	});
    	
    	$window.scroll(function() {
    		jk.config.winY = $(this).scrollTop();
    		setInterval(
    			function(){
    				jk.config.scrolling = true;
    			}
    		, 30);
    		
		});
    	
    };
    jk.parallax = {
    	config : {
    	},    	
    	init : function () {
    		jk.parallax.loop();
    	},
    	animate: function () {
        	jk.config.$backgrounds.each(function(index) {
        		var y = Math.round(($(this).find(".para").offset().top - jk.config.winY) * jk.config.factor + (index+1));
				$(this).find(".para").css({"-webkit-transform": "translateY(" + (y) + "px)"});
				$(this).css({"background-position": "50% " + -(y/8) + "%"});
			});
        },
    	loop : function () {
    		var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    		
    	    if (jk.config.scrolling) {
    	    	jk.parallax.animate();
        		jk.config.scrolling = false;
        		
        	}
        	requestAnimationFrame(jk.parallax.loop);
    	}
    };
    jk.inView = function (elem, percentage) {
        var docViewTop = $(window).scrollTop(),
            docViewBottom = docViewTop + $(window).height(),
            elemTop = $(elem).offset().top,
            elemBottom = elemTop + ($(elem).height() / 100 * percentage);
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop) || (docViewTop - elemTop >= 0));
    };
    return jk;
})(jQuery);
/* --------------------------------------------------

	ui
	
-------------------------------------------------- */
var UI = (function ($) {
    var jk = {};
    jk.config = {
    	winW: $(window).outerWidth(),
    	winH: $(window).outerHeight(),
    	$layout_container: $('.set'),
    	$viewport: $(".viewport"),
    	$nvpMenu_toggle: $(".menu_toggle"),
    };
    jk.init = function () {
    	jk.window();
    	jk.viewport();
    	//jk.layout();
    	jk.ui.nvpMenu();

    };
    jk.viewport = function () {
    	var h = jk.config.winH;    	
    	
    };
    jk.layout = function () {
    	var sizer = Math.floor(jk.config.$layout_container.outerWidth() / 4);
		console.log(sizer);
		jk.config.$layout_container.masonry({
			columnWidth: sizer,
			isFitWidth: true,
			gutter: 0,
			itemSelector: '.panel'
		});
    };
    jk.window = function () {
    	var $window = $(window);
    	
    	$window.resize(function () {
    		jk.config.winH = $window.outerHeight();
    		jk.viewport();
    		//jk.layout();
    	});
    }
  	jk.ui = {
  		nvpMenu : function () {
	  		var _viewport = jk.config.$viewport,
	  			_toggle = jk.config.$nvpMenu_toggle;	  		
	  		_toggle.on("click", this, function(e) {
	  			e.preventDefault();
	  			_viewport.toggleClass("open");
	  		});
	  		
  		}

  	};
  	jk.scrollPage = function (i, o, d) {
		var y = $(i).offset().top - o;
  		$('html, body').animate({
			scrollTop: y
		}, {duration: d, queue: false});
  	};
    return jk;
})(jQuery);

/*
	start it up
*/
// ################################################################################
$(function () {

	UI.init();
	//ScrollFX.init();
	// if video?
	if ($("#vidBG").length) {
		_V_("vidBG").ready(function() {
    		var myPlayer = this;
    		myPlayer.width(window);
       		myPlayer.volume(0);
			myPlayer.play();
		});
	}
	
	var wheight = $( window ).height();
	$('section.full').height(wheight);
	
});