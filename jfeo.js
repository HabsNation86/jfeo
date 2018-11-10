// click on card body and get re-directed

$(".card-body1").on("click", function(){
    window.location = "http://www.dmsa.ca/en/stats/standing.html?season=1206&subSeason=1207&category=2600";
});

$(".card-body2").on("click", function (){
    window.location = "http://www.dmsa.ca/en/stats/schedule.html?season=1206&subSeason=1207&category=2600";
});

$(".card-body3").on("click", function(){
    alert("Disponible avril/mai 2019");
});

$(".card-body4").on("click", function(){
    window.location = "https://www.theweathernetwork.com/ca/weather/quebec/deux-montagnes";
})

//  click on dmsa logo and get re-directed

$(".dmsa").on("click",function(){
    window.location = "http://www.dmsa.ca/en/index.html";
});


// converting english to french on button click

$('#btn1').on("click", function () {
    $('#card-title1').html('Classements')
});

$('#btn1').on("click", function () {
    $('#card-title2').html('Résultats')
});

$('#btn1').on("click", function () {
    $('#card-title3').html('Horaires')
});

$('#btn1').on("click", function () {
    $('#card-title4').html('Météo')
});

$('#btn1').on("click", function () {
    $('#card-text4').html('7 jours')
});

$('#btn1').on("click", function () {
    $('#headerId').html('Ligue Mark')
});

$('#btn1').on("click", function () {
    $('.display-4').html('Ligue Mark 2019')
});


// Converting French to English


$('#btn2').on("click", function () {
    $('#card-title1').html('Standings')
});

$('#btn2').on("click", function () {
    $('#card-title2').html('Results')
});

$('#btn2').on("click", function () {
    $('#card-title3').html('Schedules')
});

$('#btn2').on("click", function () {
    $('#card-title4').html('Weather')
});

$('#btn2').on("click", function () {
    $('#card-text4').html('7 days')
});

$('#btn2').on("click", function () {
    $('#headerId').html("Mark's League")
});

$('#btn2').on("click", function () {
    $('.display-4').html("Mark's League 2019")
});