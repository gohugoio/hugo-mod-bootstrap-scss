// Import the Bootstrap components we want to use.
// See https://github.com/twbs/bootstrap/blob/main/js/index.umd.js
import Toast from 'js/bootstrap/src/toast';
import Popover from 'js/bootstrap/src/popover';
import Button from 'js/bootstrap/src/button.js';
import Carousel from 'js/bootstrap/src/carousel.js';

(function () {
	let toastElList = [].slice.call(document.querySelectorAll('.toast'));
	let toastList = toastElList.map(function (toastEl) {
		return new Toast(toastEl);
	});

	toastList.forEach(function (toast) {
		toast.show();
	});

	let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
	popoverTriggerList.map(function (popoverTriggerEl) {
		return new Popover(popoverTriggerEl);
	});
})();
