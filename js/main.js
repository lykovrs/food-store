/**
 * Created by rlykov on 15.08.2014.
 */
$(document).ready(function(){
	//Форма регистрации или авторизаци
	var reg = $(".reg-ent__item");


//	reg.on("click", function(){
//		$(this).toggleClass("reg-ent__item_type_active");
//		$(this).find(".reg-ent__form").fadeToggle();
////		$(this).before.fadeToggle();
//
//	});

//	Всплывающее окно регистрации

	$(".reg-ent__item").popover();


	var data = [
		{ "value": "Сахар", "label": "Сахар" },
		{ "value": "Сайра", "label": "Сайра" },
		{ "value": "Саке", "label": "Саке" },
		{ "value": "Салака", "label": "Салака" },
		{ "value": "Салат", "label": "Салат" },
		{ "value": "Сало", "label": "Сало" },
		{ "value": "Салями", "label": "Салями" }
	];

	$(function () {
		$('.ctrl__input-ing').autocompleter({ source: data, limit: 6 });
	});

});

