;(function(){
	'use strict';

	var	textArea = document.querySelector('.ba-text-area');

		window.addEventListener('keydown',editText);

		function editText(e) {
			var textDiv = document.querySelector('.ba-text-content'),
				textInsideDiv = textDiv.textContent,
				 textInsideArea = textArea.value;
			console.log(e);
		if (e.keyCode == 69 && e.ctrlKey == true && textArea.classList.contains('ba-hide') == true ) {
			e.preventDefault();
			textInsideArea = textInsideDiv;
			textDiv.classList.add('ba-hide');
			textArea.classList.remove('ba-hide');
			textArea.focus();

		}
		else if (e.keyCode == 83 && e.ctrlKey == true && textDiv.classList.contains('ba-hide') == true ) {
				e.preventDefault();
				textArea.classList.add('ba-hide');
				textDiv.classList.remove('ba-hide');
				textDiv.textContent = textInsideArea;

		}
		else if (e.keyCode == 27 ) {
			e.preventDefault();
			textArea.classList.add('ba-hide');
			textDiv.classList.remove('ba-hide');
		}
		}







})();
