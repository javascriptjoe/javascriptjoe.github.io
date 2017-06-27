/* var cookiecheck = function(){
  if(Cookies.get('DuPoAnim') !== true){
    $('div').addClass('slide-in-left');
    Cookies.set('DuPoAnim', true);
} };
cookiecheck(); */
/* $('.centered').mouseenter(function(){
  $('.centered').fadeOut(800);
});

$('.centered').css('border', 'blue');
*/
$('.ghost').hide();

$('.centered').mouseenter(function(){
  $('.centered').fadeOut(3500, function() {
    $('.ghost').fadeIn(250);
});
});