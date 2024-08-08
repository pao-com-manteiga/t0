(function() {
    'use strict';
	
	const script = document.createElement('script');
	script.src = 'https://luke-chang.github.io/js-spatial-navigation/spatial_navigation.js';
	script.onload = function() {
		window.SpatialNavigation.init();
		window.SpatialNavigation.makeFocusable();
		window.SpatialNavigation.add({
			selector: 'a, .focusable'
		  });
		window.SpatialNavigation.focus();
	};
	document.head.appendChild(script);
})();
