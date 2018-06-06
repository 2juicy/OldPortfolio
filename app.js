// All ends must have beginnings...
$(document).ready(function(){
// $('#aboutmepage').hide();
$('#portfoliopage').hide();
// Buttons hiding and showing pages.
$("#aboutClick").on("click", function(event) {
    $('#aboutmepage').slideDown();
    $('#portfoliopage').slideUp();
});
$("#portfolioClick").on("click", function(event) {
    $('#aboutmepage').slideUp();
    $('#portfoliopage').slideDown();
});
$("#aboutImage").on("click", function(event) {
    let state = $(this).attr('class');
    if (state == 'responsive-img animated lightSpeedIn'){
        $('#aboutImage').removeClass('animated lightSpeedIn');
        $('#aboutImage').addClass('animated rubberBand');
    } else {
        $('#aboutImage').removeClass('animated rubberBand');
        $('#aboutImage').addClass('animated lightSpeedIn');
    }
});
// TypeIt
var instance = new TypeIt('.taglineHead', {
    strings: ['Freelance Web Developer...', 'Living in Node.js...'],
    nextStringDelay: 2000,
    cursor: false,
    breakLines: false,
    loop: true
});
}); // The End...