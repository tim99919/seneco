$(function() {

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});

	$(".mouse-icon").click(function() {
		$("html, body").animate({
			scrollTop : $(".s-adv").offset().top
		}, 800);		
	});

	$('.mfp-gallery').magnificPopup({
		mainClass: 'mfp-zoom-in',
		type: 'image',
		tLoading: '',
		gallery:{
			enabled:true,
		},
		removalDelay: 300,
		callbacks: {
			beforeChange: function() {
				this.items[0].src = this.items[0].src + '?=' + Math.random(); 
			},
			open: function() {
				$.magnificPopup.instance.next = function() {
					var self = this;
					self.wrap.removeClass('mfp-image-loaded');
					setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
				}
				$.magnificPopup.instance.prev = function() {
					var self = this;
					self.wrap.removeClass('mfp-image-loaded');
					setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
				}
			},
			imageLoadComplete: function() { 
				var self = this;
				setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
			}
		}
	});

	$('.s-adv').waypoint(function() {

		$({blurRadius: 5}).animate({blurRadius: 0}, {
			duration: 1200,
			easing: 'swing',
			step: function() {
				$(".s-adv-item h3 span").css({
					"-webkit-filter": "blur("+this.blurRadius+"px)",
					"filter": "blur("+this.blurRadius+"px)"
				});
			}
		});
		var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
		$(".s-adv-item h3 span").each(function() {
			var tcount = $(this).data("count");
			$(this).animateNumber({ number: tcount,
				easing: 'easeInQuad',
				"font-size": "1.875em",
				numberStep: comma_separator_number_step},
				1200);
		});
		this.destroy();
		
	}, {
		offset: '70%'
	});

});
