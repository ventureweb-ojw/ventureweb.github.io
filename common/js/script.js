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
		
	// if video?
	if ($("#vidBG").length) {
		_V_("vidBG").ready(function() {
    		var myPlayer = this;
    		myPlayer.width($(window).outerHeight());
       		myPlayer.volume(0);
			myPlayer.play();
		});
	}
	
	
});