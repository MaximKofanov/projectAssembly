$(function(){

	// Данный код подключается после jquery, но до нужных скриптов!
	// Ненужное отключить '//'.
	// Реализованно:
	// - Заглушки для form action
	// - Класс для form "order_form"
	// - type для всех input
	// - Убраны required в input
	// - Заглушки для внешних скриптов, если скрипт нужен - добавь класс "myScript"
	// - Атрибуты input на phone и name, если не атрибут отличается выводит сообщение 'Поменять атрибуты Input!'
	// - Select для form
	// - Стили для select от input
	// - Заглушки на все ссылки

	// Настройка шаблона
	var templateSettings = {
		classPrice: 'x_price_current', // Вставить класс цены если есть
		classPriceOld: '' // Вставить класс старой цены если есть
	}

	$('form').attr('action', '#'); //Заглушки для form action
	$('form').addClass('order_form'); //Доп. класс form
	$('input').attr('type', 'text'); //type для input
	$('input').prop('required', false); //убрать required в input
	$('script[class!="myScript"]').attr('src','#'); //Заглушки для внешних скриптов
	$('form').prepend('<select name="country" id="country" class="country_select"></select>'); //Select для form
	$('a[href*="http"]').attr('href', '#'); //Заглушки на все ссылки
	$('select#country').css({
		width: $('input').css('width'),
		padding: $('input').css('padding'),
		fontSize: $('input').css('font-size'),
		color: $('input').css('color')
	}); // Стили для select от input

	if(templateSettings.classPrice.length > 1){
		$('.'+templateSettings.classPrice+'').addClass('price_main');
	} // Класс для цены
	if(templateSettings.classPriceOld.length > 1){
		$('.'+templateSettings.classPriceOld+'').addClass('price_old');
	} // Класс для старой цены

	(function getNameAndNumber (){
		var counterNameAndNumber = 0;
		var quantityInputName = $('input[name="name"]').length;
		var quantityInputPhone = $('input[name="phone"]').length;
		var sumInput = quantityInputName+quantityInputPhone;
		var quantityForm = $('form').length;
		if((quantityForm*2) !== sumInput){
			alert('Поменять атрибуты Input!');
		}
	})(); //Проверяет атрибуты input на phone и name, если не атрибут отличается выводит сообщение


});