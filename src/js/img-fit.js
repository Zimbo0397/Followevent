(function ($) {

	$.fn.fitImage = function () {
		this.each(function () {
			var lastInterval,
				$holder = $(this),
				$image = $holder.find('img'),
				// image = $image.get(0),
				holderWidth,
				holderHeight,
				imageWidth,
				imageHeight;
				//natWidth = image.naturalWidth,
				//natHeight = image.naturalHeight;
			function fitImg () {
				//if (holderWidth - imageWidth > holderHeight - imageHeight) {
				// console.log(image);
				// console.log(holderHeight);
				// console.log(imageHeight);
				holderWidth = $holder.innerWidth();
				holderHeight = $holder.innerHeight();
				imageWidth = $image.width();
				imageHeight = $image.height();
				if (holderHeight > imageHeight ) {
					$image.css({
						'width': 'auto',
						'height': '100%'
					});
					$image.css({
						'margin-top': 0,
						'margin-left': -(imageWidth - holderWidth) / 2
					});
				} else if (holderHeight <= imageHeight ) {
					$image.css({
						'width': '100%',
						'height': 'auto'
					});
					$image.css({
						'margin-left': 0,
						'margin-top': -(imageHeight - holderHeight) / 2
					});
				}

			}
			if (imageWidth || true) {
				fitImg ();
				//alert()
			} else {
				$image.on('load', function () {
					//natWidth = $image.get(0).naturalWidth;
					//natHeight = $image.get(0).naturalHeight;
					fitImg ();
				});
			}
			$(window).on('resize', function () {
				clearTimeout (lastInterval);
				lastInterval = setTimeout(function () {
					// console.log('fitted')
					holderWidth = $holder.innerWidth();
					holderHeight = $holder.innerHeight();
					imageWidth = $image.width();
					imageHeight = $image.height();
					fitImg();
				}, 100);
			})
		});
	};

})(jQuery);