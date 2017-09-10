$(function(){

	//Начало работы: Скачать сайт > Загрузить картинки скриптом > Загрузить шрифты > 
	// > подгрузить библиотеки 1-ая jquery, 2-ая эта остальные после > Добавить нужным скриптам класс "myScript" >
	// > заполнить обьект templateSettings классами старой и новой цены

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
	// - Загрузка картинок с сайта донора

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


	//Скрипт вызова кнопки , которая скачивает все картинки из стилей
	//Её нужно запустить в console на сайте доноре
	//P.S. если на доноре нет библиотеки jquery, то подключить в консоле : 
	//(function(d,s){s=d.createElement('script');s.src='https://code.jquery.com/jquery-3.1.0.js';(d.head||d.documentElement).appendChild(s)})(document);

	//Начало скрипта
  var counterElementsImageDiv = $('div').length;
  var counterElementsImageSpan = $('span').length;
  var counterElementsImageSection = $('section').length;
  var counterElementsImageLi = $('li').length;
  var counterElementsImageUl = $('ul').length;
  var counterElementsImageA = $('a').length;
  var counterElementsImageP = $('p').length;
  var counterElementsImageHeader = $('Header').length;
  var counterElementsImageFooter = $('Footer').length;
  var counterElementsImageI = $('i').length;
  var arrLinksImage = [];
  var LinkImage;
  var counterImageIteration = 0;
  //Убрать повторяющиеся картинки в готовом массиве
  function removeRepetitionsImg(){
    for(var i = 0; i < arrLinksImage.length; i++){
      for(var j = i+1; j < arrLinksImage.length; j++){
        if(arrLinksImage[i] === arrLinksImage[j]){
          arrLinksImage.splice(j,1);
          i--;
          j--;
        }
      }
    }
  } 
  //Картинки в DIV
  for(var i = 0; i <= counterElementsImageDiv; i++){
    LinkImage = $('div').eq(i).css('background-image');
      if(typeof LinkImage !== "string"){
        continue;
      }else if(LinkImage.slice(0,3) === 'url'){
        arrLinksImage.push(LinkImage.slice(5,-2));
      }
  }
  for(var i = 0; i <= counterElementsImageDiv; i++){
    LinkImage = $('div').eq(i).css('background');
      if(typeof LinkImage !== "string"){
        continue;
      }else if(LinkImage.slice(0,3) === 'url'){
        arrLinksImage.push(LinkImage.slice(5,-2));
      }
  }
  //Картинки в SPAN
  for(var i = 0; i <= counterElementsImageSpan; i++){
    LinkImage = $('span').eq(i).css('background-image');
      if(typeof LinkImage !== "string"){
        continue;
      }else if(LinkImage.slice(0,3) === 'url'){
        arrLinksImage.push(LinkImage.slice(5,-2));
      }
  }
  for(var i = 0; i <= counterElementsImageSpan; i++){
    LinkImage = $('span').eq(i).css('background');
      if(typeof LinkImage !== "string"){
        continue;
      }else if(LinkImage.slice(0,3) === 'url'){
        arrLinksImage.push(LinkImage.slice(5,-2));
      }
  }
  //Картинки в SPAN
  for(var i = 0; i <= counterElementsImageSection; i++){
    LinkImage = $('Section').eq(i).css('background-image');
      if(typeof LinkImage !== "string"){
        continue;
      }else if(LinkImage.slice(0,3) === 'url'){
        arrLinksImage.push(LinkImage.slice(5,-2));
      }
  }
  for(var i = 0; i <= counterElementsImageSection; i++){
    LinkImage = $('Section').eq(i).css('background');
      if(typeof LinkImage !== "string"){
        continue;
      }else if(LinkImage.slice(0,3) === 'url'){
        arrLinksImage.push(LinkImage.slice(5,-2));
      }
  }
  //Картинки в LI
  for(var i = 0; i <= counterElementsImageLi; i++){
    LinkImage = $('li').eq(i).css('background-image');
      if(typeof LinkImage !== "string"){
        continue;
      }else if(LinkImage.slice(0,3) === 'url'){
        arrLinksImage.push(LinkImage.slice(5,-2));
      }
  }
  for(var i = 0; i <= counterElementsImageLi; i++){
    LinkImage = $('li').eq(i).css('background');
      if(typeof LinkImage !== "string"){
        continue;
      }else if(LinkImage.slice(0,3) === 'url'){
        arrLinksImage.push(LinkImage.slice(5,-2));
      }
  }
  //Картинки в UL
  for(var i = 0; i <= counterElementsImageUl; i++){
    LinkImage = $('ul').eq(i).css('background-image');
      if(typeof LinkImage !== "string"){
        continue;
      }else if(LinkImage.slice(0,3) === 'url'){
        arrLinksImage.push(LinkImage.slice(5,-2));
      }
  }
  for(var i = 0; i <= counterElementsImageUl; i++){
    LinkImage = $('ul').eq(i).css('background');
      if(typeof LinkImage !== "string"){
        continue;
      }else if(LinkImage.slice(0,3) === 'url'){
        arrLinksImage.push(LinkImage.slice(5,-2));
      }
  }
  //Картинки в A
  for(var i = 0; i <= counterElementsImageA; i++){
    LinkImage = $('a').eq(i).css('background-image');
      if(typeof LinkImage !== "string"){
        continue;
      }else if(LinkImage.slice(0,3) === 'url'){
        arrLinksImage.push(LinkImage.slice(5,-2));
      }
  }
  for(var i = 0; i <= counterElementsImageA; i++){
    LinkImage = $('a').eq(i).css('background');
      if(typeof LinkImage !== "string"){
        continue;
      }else if(LinkImage.slice(0,3) === 'url'){
        arrLinksImage.push(LinkImage.slice(5,-2));
      }
  }
  //Картинки в P
  for(var i = 0; i <= counterElementsImageP; i++){
    LinkImage = $('p').eq(i).css('background-image');
      if(typeof LinkImage !== "string"){
        continue;
      }else if(LinkImage.slice(0,3) === 'url'){
        arrLinksImage.push(LinkImage.slice(5,-2));
      }
  }
  for(var i = 0; i <= counterElementsImageP; i++){
    LinkImage = $('p').eq(i).css('background');
      if(typeof LinkImage !== "string"){
        continue;
      }else if(LinkImage.slice(0,3) === 'url'){
        arrLinksImage.push(LinkImage.slice(5,-2));
      }
  }
  //Картинки в Header
  for(var i = 0; i <= counterElementsImageHeader; i++){
    LinkImage = $('Header').eq(i).css('background-image');
      if(typeof LinkImage !== "string"){
        continue;
      }else if(LinkImage.slice(0,3) === 'url'){
        arrLinksImage.push(LinkImage.slice(5,-2));
      }
  }
  for(var i = 0; i <= counterElementsImageHeader; i++){
    LinkImage = $('Header').eq(i).css('background');
      if(typeof LinkImage !== "string"){
        continue;
      }else if(LinkImage.slice(0,3) === 'url'){
        arrLinksImage.push(LinkImage.slice(5,-2));
      }
  }
  //Картинки в Footer
  for(var i = 0; i <= counterElementsImageFooter; i++){
    LinkImage = $('Footer').eq(i).css('background-image');
      if(typeof LinkImage !== "string"){
        continue;
      }else if(LinkImage.slice(0,3) === 'url'){
        arrLinksImage.push(LinkImage.slice(5,-2));
      }
  }
  for(var i = 0; i <= counterElementsImageFooter; i++){
    LinkImage = $('Footer').eq(i).css('background');
      if(typeof LinkImage !== "string"){
        continue;
      }else if(LinkImage.slice(0,3) === 'url'){
        arrLinksImage.push(LinkImage.slice(5,-2));
      }
  }
  //Картинки в i
  for(var i = 0; i <= counterElementsImageI; i++){
    LinkImage = $('i').eq(i).css('background-image');
      if(typeof LinkImage !== "string"){
        continue;
      }else if(LinkImage.slice(0,3) === 'url'){
        arrLinksImage.push(LinkImage.slice(5,-2));
      }
  }
  for(var i = 0; i <= counterElementsImageI; i++){
    LinkImage = $('i').eq(i).css('background');
      if(typeof LinkImage !== "string"){
        continue;
      }else if(LinkImage.slice(0,3) === 'url'){
        arrLinksImage.push(LinkImage.slice(5,-2));
      }
  }
  removeRepetitionsImg();		

  //Кнопка для скачивания картинок
  var counterImageForDownload = 0; 
  $('body').prepend('<a href="" download="" class="downloadImages"><div>Осталось скачать картинок: <span></span></div></a>') 
  $('.downloadImages').css({
  	width:'300px',
  	height:'100px',
  	backgroundColor: 'red',
  	position: 'fixed',
  	top: '10px',
  	left: '10px',
  	zIndex: '1000',
  	borderRadius: '10px',
  	textAlign: 'center',
  	color: '#fff',
  	fontSize: '18px',
  	lineHeight: '4.5'
  });

  $('.downloadImages').on('click', function(){
     if(counterImageForDownload < arrLinksImage.length){
       	$('.downloadImages').attr('href', arrLinksImage[counterImageForDownload]);
      	counterImageForDownload++;
     }else{
     		$('.downloadImages').css('display','none');
       	counterImageForDownload = 0;
     }
    $('.downloadImages div span').html(arrLinksImage.length - counterImageForDownload);  
  });
  //Конец скрипта


});