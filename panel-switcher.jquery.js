// Panel Switcher jQuery plugin
(function( $ ) {
	$.fn.panelSwitcher = function(options) {
		
		// Panel switcher defaults
		var defaults = {
			beat: 500
		}
		var options = $.extend(defaults, options);
		
		return this.each(function() {
			
			var switcher = $(this);
			var beatInstructions = [];
			var nextStep = 0;
			
			// Create the timing instructions for the switch to follow by reading the data-beat-length attribute of the element and its children.
			// Read the data-beat-length of the switch for instructions and create one instruction for each child of element.
			if (switcher.attr('data-beat-length')) {
				var defaultBeat = parseFloat(switcher.attr('data-beat-length'));
				switcher.children().each(function(index) {
					// If the child has data-beat-length attribute, put it in the instructions.
					if ($(this).attr('data-beat-length')) {
						beatInstructions[index] = parseFloat($(this).attr('data-beat-length'));
					}
					else {
					// If it doesn't, use the default beat.
					beatInstructions[index] = defaultBeat;
					}
				});
			}
			
			// A new function to schedule out the display of images. 
			function switchIt(step) {
				
				// Hide all children of the switcher other than the 'step' child.
				switcher.children(':lt(' + step + ')').hide();
				switcher.children(':eq(' + step + ')').show();
				switcher.children(':gt(' + step + ')').hide();
				
				if (nextStep == switcher.children().length - 1) {
					nextStep = 0;
				}
				else{
					nextStep++;
				}
				
				setTimeout(switchIt, (beatInstructions[step] * options.beat), nextStep);
			}
			
			// Get things in motion.
			switchIt(nextStep);
			
		});
	};
})( jQuery );