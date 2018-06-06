// All ends must have beginnings...
$(document).ready(function(){
// $('#aboutmepage').hide();
$('#portfoliopage').hide();
// Buttons hiding and showing pages.
$("#aboutClick").on("click", function(event) {
    $('#aboutmepage').slideDown();
    $('#portfoliopage').slideUp();
    $(".card").attr('class', 'card animated rotateIn');
    $('#aboutImage').addClass('animated lightSpeedIn');
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
    let state = $(this).attr('src');
    if (state == 'images/guitar.jpg'){
        $('#aboutImage').addClass('animated lightSpeedOut');
        let delay = setTimeout(function() {
            $('#aboutImage').attr('src', 'images/guitar2.jpeg')
            $('#aboutImage').removeClass('animated lightSpeedOut');
            $('#aboutImage').addClass('animated lightSpeedIn');
        }, 1000);        
    } else {
        $('#aboutImage').addClass('animated lightSpeedOut');
        let delay = setTimeout(function() {
            $('#aboutImage').attr('src', 'images/guitar.jpg')
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