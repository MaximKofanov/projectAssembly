$(function(){

	// Настройка шаблона
	var templateSettings = {
		classPrice: '', // Вставить класс цены если есть
		classPriceOld: '' // Вставить класс старой цены если есть
	}

  if(templateSettings.classPrice.length > 1){
    $('.'+templateSettings.classPrice+'').addClass('price_main');
  } // Класс для цены
  if(templateSettings.classPriceOld.length > 1){
    $('.'+templateSettings.classPriceOld+'').addClass('price_old');
  } // Класс для старой цены

	$('form').attr('action', '#'); //Заглушки для form action
	$('form').addClass('order_form'); //Доп. класс form
	//$('input').attr('type', 'text'); //type для input
	$('input').prop('required', false); //убрать required в input
	$('form').prepend('<select name="country" id="country" class="country_select"></select>'); //Select для form


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

  for(var i = 0; i < $('input[name="name"]').length; i++){
    if($('input[name="name"]').eq(i).attr('type') !== 'hidden'){
      $('input[name="name"]').eq(i).attr('type', 'text');
    }   
  }
  for(var i = 0; i < $('input[name="phone"]').length; i++){
    if($('input[name="phone"]').eq(i).attr('type') !== 'hidden'){
      $('input[name="phone"]').eq(i).attr('type', 'text');
    }   
  }


});