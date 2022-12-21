import {TweenMax, TimelineMax} from "gsap";
import ScrollMagic from 'scrollmagic';
import {ScrollMagicPluginGsap} from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
'use strict';

$(document).ready(function () {
	/* Scroll 1 */
	var controller1 = new ScrollMagic.Controller();
	var width1 = -($('#scrollTrigger1').get(0).scrollWidth - $('#pinContainer1').width()) + 'px';
	var horzTl1 = new TimelineMax().to('#scrollTrigger1', 1, {x: width1}, 0.3);

	var scene1 = new ScrollMagic.Scene({
		triggerElement: '.using',
		triggerHook: 'onLeave',
		duration: '250%',
	})
		.setPin('.using')
		.setTween(horzTl1)
		.addTo(controller1);

	/* Scroll 2 */
	var controller2 = new ScrollMagic.Controller();
	var width2 = -($('#scrollTrigger2').get(0).scrollWidth - $('#pinContainer2').width()) + 'px';
	var horzTl2 = new TimelineMax().to('#scrollTrigger2', 1, {x: width2}, 0.3);

	var scene2 = new ScrollMagic.Scene({
		triggerElement: '.help',
		triggerHook: 'onLeave',
		duration: '250%'
	}).on('progress', (e) => {
		if (e.progress < 0.25) {
			$('.circle__wrapper').css('transform', 'rotate(0)');
			$('.circle__digits span > span').css('transform', 'rotate(0)');
		} else if (e.progress >= 0.25 && e.progress < 0.5) {
			$('.circle__wrapper').css('transform', 'rotate(-90deg)');
			$('.circle__digits span > span').css('transform', 'rotate(90deg)');
		} else if (e.progress >= 0.5 && e.progress < 0.75) {
			$('.circle__wrapper').css('transform', 'rotate(-180deg)');
			$('.circle__digits span > span').css('transform', 'rotate(180deg)');
		} else if (e.progress >= 0.75) {
			$('.circle__wrapper').css('transform', 'rotate(-270deg)');
			$('.circle__digits span > span').css('transform', 'rotate(270deg)');
		}
	})
		.setPin('.help')
		.setTween(horzTl2)
		.addTo(controller2);

	/* Scroll 3 */
	var controller3 = new ScrollMagic.Controller();
	var width3 = -($('#scrollTrigger3').get(0).scrollWidth - $('#pinContainer3').width()) + 'px';
	var horzTl3 = new TimelineMax().to('#scrollTrigger3', 1, {x: width3}, 0.3)

	var scene3 = new ScrollMagic.Scene({
		triggerElement: '.faq',
		triggerHook: 'onLeave',
		duration: '150%'
	})
		.setPin('.faq')
		.setTween(horzTl3)
		.addTo(controller3);

	/*window.addEventListener('resize', () => {
		window.location.reload();
	});*/

	/* Anchor */
	document.querySelectorAll('.anchor').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();

			if ($('body').hasClass('menu-opened')) {
				$('body').removeClass('menu-opened');
			}

			document.querySelector(this.getAttribute('href')).scrollIntoView({
				behavior: 'smooth'
			});
		});
	});
});
