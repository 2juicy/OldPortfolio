// All ends must have beginnings...
$(document).ready(function(){
// $('#aboutmepage').hide();
$('#portfoliopage').hide();

$("#aboutClick").on("click", function(event) {
    $('#aboutmepage').slideDown();
    $('#portfoliopage').slideUp();
});





$("#portfolioClick").on("click", function(event) {
    $('#aboutmepage').slideUp();
    $('#portfoliopage').slideDown();
});


















// TypeIt
var instance = new TypeIt('.taglineHead', {
    strings: ['Node.js Developer...', 'Video Game Enthusiast...'],
    nextStringDelay: 2000,
    cursor: false,
    breakLines: false,
    loop: true
});
}); // The End...