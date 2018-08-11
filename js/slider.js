/*
 При нажатии на кнопки слайдера реализовать смену слайдов,
 при этом, если мы находимся на первом слайде и нажимаем кнопу предыдущий,
 то должен показываться последний слайд, и наоборот.
*/

;(function(){
	'use strict';

	$(document).ready(function() {

		var buttonDirectionObject = {
			next: 1,
			prev: -1
		}

		// 1. Найти контейнер слайдера, все слайды и кнопки переключения слайдера

		var sliderContainer = $('.ba-slider__container');
		var slides = $('.ba-slider__item');
		var sliderButtons = $('.ba-slider__button'); // вперед и назад будем находить по data атрибуту
		// var sliderButtonNext = $('.ba-slider__button--next');
		// var sliderButtonPrevious = $('.ba-slider__button--prev');


		// 2. Посчитать кол-во слайдов и инициализировать индекс текущего слайда,
		// получить ширину одного слайда.
		var sliderCount = slides.length;
		var currentSlideIndex = 1;
		var slideWidth = parseInt(slides.css('width'), 10);
		// 3. Навесить обработчики кликов на кнопки переключения слайдов:
		//  - переключать слайды с помощью transform: translateX().
		sliderButtons.on('click', function(event) {
			event.preventDefault();
			
			var buttonDirection = $(this).data('direction');
			var nextSlideIndex = currentSlideIndex + buttonDirectionObject[buttonDirection];

			if (nextSlideIndex === 0) {
				nextSlideIndex = sliderCount
			}

			if (nextSlideIndex > sliderCount) {
				nextSlideIndex = 1
			}

			var translateSize = (1 - nextSlideIndex) * slideWidth
			sliderContainer.css(
				'transform',
				'translateX(' + translateSize + 'px)'
			);
			currentSlideIndex = nextSlideIndex;
		});
	});

})();
