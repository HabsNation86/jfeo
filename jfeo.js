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
    $('#card-title1').html('Classements'),
    $('#card-title2').html('Résultats'),
    $('#card-title3').html('Horaires'),
    $('#card-title4').html('Météo'),
    $('#card-text4').html('7 jours'),
    $('#headerId').html('Ligue Mark'),
    $('.display-4').html('Ligue Mark 2019'),
    $('#headline').html("Vérifiez ici pour l'enregistrement 2019!!!")
});
// Converting French to English


$('#btn2').on("click", function () {
    $('#card-title1').html('Standings'),
    $('#card-title2').html('Results'),
    $('#card-title3').html('Schedules'),
    $('#card-title4').html('Weather'),
    $('#card-text4').html('7 days'),
    $('#headerId').html("Mark's League"),
    $('.display-4').html("Mark's League 2019"),
    $('#headline').html("Check here for 2019 registration info!!!")
});