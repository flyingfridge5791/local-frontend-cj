// let selectButtonId = document.getElementById('btn');
// let selectButtonTag = document.getElementsByTagName('button');
// let selectButtonClass = document.getElementsByClassName('btnClass');

// //VANLIG JS OVAN.
// // jQUERY NEDAN, notera samma klass och id signs som i CSS

// let selectButtonId = $('#btn');
// let selectButtonTag = $('button');
// let selectButtonClass = $('.btnClass')



$(document).ready(function() {
//här i skriver vi jQuery, MÅSTE ANVÄNDAS

//SKRIVA UT TEXT:
// document.querySelector('#div1').innerText = 'Detta är en text, skriven med javascript';
$('#div1').text('Detta är en text, skriven med jQuery');

//SKRIVA UT HTML
document.querySelector('#div2').innerHTML = '<p>paragraf med javascript</p>';
// $('#div2').html('<p>paragraf med jQuery</p>');

//ÄNDRA CSS
document.getElementById('div1').style.color = '#ff5500'; //vanlig JS
$('#div1').css('color', '#0000ff'); //jQuery

//ÄNDRA CSS MED QUERY SELECTOR
document.querySelector('#div2').style.fontSize = '2rem';
//SAMMA SAK MED jQUERY
$('#div2').css() //OFÄRDIGT

//KOPIERA RESTEN
//FÖRSTÅ
//ADAPT
//OVERCOME




 })