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

//  click on dmsa logo and get re-directed

$(".dmsa").on("click",function(){
    window.location = "http://www.dmsa.ca/fr/index.html";
});


// Weather Widget


!function (d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (!d.getElementById(id)) { js = d.createElement(s); js.id = id; js.src = 'https://weatherwidget.io/js/widget.min.js'; fjs.parentNode.insertBefore(js, fjs); } }(document, 'script', 'weatherwidget-io-js');