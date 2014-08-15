/**
 * Created by rlykov on 15.08.2014.
 */
$(document).ready(function(){
	//Форма регистрации или авторизаци
	var reg = $(".reg-ent__item");


	reg.on("click", function(){
		$(this).toggleClass("reg-ent__item_type_active");
		$(this).find(".reg-ent__form").fadeToggle();
//		$(this).before.fadeToggle();

	});
});

