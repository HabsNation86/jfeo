// click on card body and get re-directed 

$(".card-body1").on("click", function(){
    window.location = "http://www.dmsa.ca/en/stats/standing.html?season=1206&subSeason=1207&category=2600";
});

$(".card-body2").on("click", function (){
    window.location = "http://www.dmsa.ca/en/stats/schedule.html?season=1206&subSeason=1207&category=2600";
});

$(".card-body3").on("click", function(){
    alert("Seulement disponible en mai 2019");
});

$(".dmsa").on("click",function(){
    window.location = "http://www.dmsa.ca/fr/index.html";
});