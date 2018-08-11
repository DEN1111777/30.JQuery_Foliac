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
		var nextSlideIndex;
		var sliderRadioButton = $('.ba-slider__radio-button');
		var activeSliderRadioButton = $('.ba-slider__radio-button--active');
		// 3. Навесить обработчики кликов на кнопки переключения слайдов:
		//  - переключать слайды с помощью transform: translateX().
		sliderButtons.on('click', function(event) {
			event.preventDefault();
			
			var buttonDirection = $(this).data('direction');
			nextSlideIndex = currentSlideIndex + buttonDirectionObject[buttonDirection];


			if (nextSlideIndex === 0) {
				nextSlideIndex = sliderCount
			}

			if (nextSlideIndex > sliderCount) {
				nextSlideIndex = 1
			}

			var nextSliderRadioButton = sliderRadioButton.eq(nextSlideIndex - 1);
			nextSliderRadioButton.addClass('ba-slider__radio-button--active').siblings().removeClass('ba-slider__radio-button--active');

			var translateSize = (1 - nextSlideIndex) * slideWidth
			sliderContainer.css(
				'transform',
				'translateX(' + translateSize + 'px)'
			);
			currentSlideIndex = nextSlideIndex;
		});

		
		// 4. Найти кнопки переключения radio-button, посчитать.
		// - навесить обработчик событий
		sliderRadioButton.on('click', function(event) {
			event.preventDefault();
			
			// Добавлять/убирать класс active кнопкам
			$(this)
				.addClass('ba-slider__radio-button--active')
				.siblings().removeClass('ba-slider__radio-button--active');	

			var activeSliderRadioButtonIndex = sliderRadioButton.index( this ) + 1;
			// activeSliderRadioButtonIndex.addClass('ba-slider__radio-button--active')

			var translateSize = (1 - activeSliderRadioButtonIndex) * slideWidth
				sliderContainer.css(
					'transform',
					'translateX(' + translateSize + 'px)'
				);

			currentSlideIndex = activeSliderRadioButtonIndex;
		});


		
	});

	
})();
