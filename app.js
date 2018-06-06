// All ends must have beginnings...
$(document).ready(function(){
// $('#aboutmepage').hide();
$('#portfoliopage').hide();
// Buttons hiding and showing pages.
$("#aboutClick").on("click", function(event) {
    $('#aboutmepage').slideDown();
    $('#portfoliopage').slideUp();
    $(".card").attr('class', 'card animated rotateIn');
});
// fun with animate.css

$("#portfolioClick").on("click", function(event) {
    $('#aboutmepage').slideUp();
    $('#portfoliopage').slideDown();
});
$(".card").on("click", function(event) {
        $(".card").attr('class', 'card');
        $(this).addClass('animated pulse');
        let delay = setTimeout(function() {
            $(".card").removeClass('animated pulse');                  
        }, 2000);        
    });
$("#aboutImage").on("click", function(event) {
    let state = $(this).attr('class');
    if (state == 'responsive-img animated lightSpeedIn'){
        $('#aboutImage').removeClass('animated lightSpeedIn');
        $('#aboutImage').addClass('animated flash infinite');
        let delay = setTimeout(function() {
            $('#aboutImage').removeClass('animated flash infinite');
        }, 2000);
    } else if (state == 'responsive-img'){
        $('#aboutImage').addClass('animated lightSpeedOut');
        let delay = setTimeout(function() {
            $('#aboutImage').removeClass('animated lightSpeedOut');
            $('#aboutImage').addClass('animated lightSpeedIn');
        }, 1000);
        
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