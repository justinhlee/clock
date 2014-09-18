/*global $:false*/
/*jshint indent:2*/

'use strict';

$( document ).ready( function() {
  startTime();

  function startTime() {
    var today=new Date();
    // console.log(today.getDay());
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var ms=today.getMilliseconds();
    m = checkTime(m);
    s = checkTime(s);

    var hoursInMs = h * 3600 * 1000;
    var minutesInMs = m * 60 * 1000;
    var secInMs = s * 1000;


    var totalInMs = hoursInMs + minutesInMs + secInMs + ms;

    // $('#time').html((17 * 3600 * 1000) - (totalInMs) + ' ms');
    // if (m > 49) {
    //     var t = setTimeout(function(){startTime()},29);
    // } else {
    //     var t = setTimeout(function(){startTime()},51);
    // }
    





    $('#time').html(h+''+m+''+s+''+ms);
    var t = setTimeout(function(){startTime()},29);
    // if (ms % 200 == 0 ) {
    //     $('body').css({ "background-color": "white", "color":"rgba(0,0,0,.9)" })
    // } else {
    //     $('body').css({ "background-color": "rgba(0,0,0,.9)","color":"rgba(255, 255, 255, 0.75)" })
     
    // }
    // $('#time').html(h+':'+m+':'+s+''+ms);
    // $('#time').html(h+':'+m+':'+s+''+ms);
    
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}




});