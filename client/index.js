/* global pokedex:true*/
/* jshint camelcase:false*/

'use strict';

$(document).ready(init);

function init(){
  $('#getNum').click(getRandom);
}
function getRandom(){
  //var number = 20;
  $.getJSON('https://qrng.anu.edu.au/API/jsonI.php?length=20&type=uint16', function(response){
  console.log(response.data);
  evenOrOdd(response.data);
  
});
}

function evenOrOdd(numbers){
  numbers.map(function(n){
    var nums = numbers[n]%2 ? isEven(n) : isOdd(n);
  });
}

function isEven(number){
  var $even = $('<div>');
  $even.addClass('even');
  $even.text(number);
  $('#evens').append($even);
}

function isOdd(number){
  if (number / 3 === Math.floor(number / 3)){
    var $threes = $('<div>');
    $threes.addClass('three odd');
    $threes.css('background-color','white');
    $('#odds').append($threes);
  }
  else {
  var $odd = $('<div>');
  $odd.addClass('odd');
  $('#odds').append($odd);
  }
}
