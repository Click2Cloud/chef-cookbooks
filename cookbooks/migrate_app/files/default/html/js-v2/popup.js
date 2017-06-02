/* <![CDATA[ */
$(document).ready(function() {

  var id = '#dialog';

  //Get the screen height and width
  var maskHeight = $(document).height();
  var maskWidth = $(window).width();

  //Set heigth and width to mask to fill up the whole screen
  $('#mask').css({'width':maskWidth,'height':maskHeight});
 
  //transition effect 
  $('#mask').fadeIn(1000);
  $('#mask').fadeTo("slow",0.5);

  //Get the window height and width
  var winH = $(window).height();
  var winW = $(window).width();
             
  //Set the popup window to center
  $(id).css('top',  winH/2-$(id).height()/2);
  $(id).css('left', winW/2-$(id).width()/2);

  //transition effect
  $(id).fadeIn(2000); 

//if close button is clicked
$('.window .close').click(function (e) {
  //Cancel the link behavior
  e.preventDefault();
 
  $('#mask').hide();
  $('.window').hide();
}); 

//if mask is clicked
$('#mask').click(function () {
  $(this).hide();
  $('.window').hide();
}); 

});


$(document).ready(function() {

if (once_per_session==0)
  loadpopunder()
else
{
if (get_cookie('popunder')==''){
  loadpopunder()
  document.cookie="popunder=yes"
}
}
});

var once_per_session=1
function get_cookie(Name) {
  var search = Name + "="
  var returnvalue = "";
  if (document.cookie.length > 0) {
    offset = document.cookie.indexOf(search)
    if (offset != -1) { // if cookie exists
      offset += search.length
      // set index of beginning of value
      end = document.cookie.indexOf(";", offset);
      // set index of end of cookie value
      if (end == -1)
         end = document.cookie.length;
      returnvalue=unescape(document.cookie.substring(offset, end))
      }
   }
  return returnvalue;
}

function loadornot(){
if (get_cookie('popunder')==''){
loadpopunder()
document.cookie="popunder=yes"
}
}
function loadpopunder(){
var id = '#popup';
  
  //Get the screen height and width
  var maskHeight = $(document).height();
  var maskWidth = $(window).width();

  //Set heigth and width to mask to fill up the whole screen
  $('#mask').css({'width':maskWidth,'height':maskHeight});
 
  //transition effect 
  $('#mask').fadeIn(1000);
  $('#mask').fadeTo("slow",0.8);

  //Get the window height and width
  var winH = $(window).height();
  var winW = $(window).width();
             
  //Set the popup window to center
  $(id).css('top',  winH/2-$(id).height()/2);
  $(id).css('left', winW/2-$(id).width()/2);

  //transition effect
  $(id).fadeIn(2000);
 
  
//if close button is clicked
$('.window .close').click(function (e) {
  //Cancel the link behavior
  e.preventDefault();
 
  $('#mask').hide();
  $('.window').hide();
}); 

//if mask is clicked
$('#mask').click(function () {
  $(this).hide();
  $('.window').hide();
});
}

/*$(function(){
    $('.close').click(function(){      
        $('iframe').attr('src', $('iframe').attr('src'));
    });
});*/
/* ]]> */