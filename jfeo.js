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
    window.location = "https://www.meteomedia.com/ca/meteo/quebec/deux-montagnes";
})

//  click on dmsa logo and get re-directed

$(".dmsa").on("click",function(){
    window.location = "http://www.dmsa.ca/fr/index.html";
});


// converting english to french on button click

$('#btn').on("click", function () {
    $('#card-title1').html('Classements')
});

$('#btn').on("click", function () {
    $('#card-title2').html('Résultats')
});

$('#btn').on("click", function () {
    $('#card-title3').html('Horaires')
});

$('#btn').on("click", function () {
    $('#card-title4').html('Météo')
});

$('#btn').on("click", function () {
    $('#card-text4').html('7 jours')
});

$('#btn').on("click", function () {
    $('#title1').html('Ligue Mark')
});

$('#btn').on("click", function () {
    $('#display-4').html('Ligue Mark')
});
