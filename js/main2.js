;(function(){
	'use strict';

	var	textArea = document.querySelector('.ba-text-area');

		window.addEventListener('keyup',editText);
		window.addEventListener('keydown',prevent);
		function prevent(e) {
			 // e.ctrlKey == true ? e.preventDefault();
			if (e.ctrlKey == true ){
			e.preventDefault();}
		}

		function editText(e) {

			var textArea = document.querySelector('.ba-text-area');
			var textDiv = document.querySelector('.ba-text-content');
			var	textInsideDiv = textDiv.textContent;
			var textInsideArea = textArea.value;
			console.log(e);
		if (e.keyCode == 69) {if (e.ctrlKey == true ) {

			textInsideArea = textInsideDiv;
			textDiv.classList.add('ba-hide');
			textArea.classList.remove('ba-hide');
			textArea.focus();

		}}
		else if (e.keyCode == 83 ) {if (e.ctrlKey == true ) {


				textArea.classList.add('ba-hide');
				textDiv.classList.remove('ba-hide');
				textDiv.textContent = textInsideArea;

		}}
		else if (e.keyCode == 27 ) {

			textArea.classList.add('ba-hide');
			textDiv.classList.remove('ba-hide');
			textInsideArea = textInsideDiv;
		}
		}







})();
