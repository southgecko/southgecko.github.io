
function trendingGraph(idName, mainName){
    /*var url = window.location.search
    let params = new URLSearchParams(url);
    console.log(url);
    var id = params.get('coin');
    var eCoinName = params.get('name');*/
    var id = idName;
    console.log(mainName);
    console.log(id);
    var api = "https://api.coingecko.com/api/v3/coins/" + id + "/market_chart?vs_currency=usd&days=100";
    fetch(api)
        .then((resp) => resp.json())
        .then(function(thedata){
            var eCoinstock = thedata;
            var name = eCoinstock["prices"].length;
            eCoinArr = new Array();
            eCoinArr[0] = new Array();
            eCoinArr[0][0] = new Array();
            eCoinArr[0][1] = new Array();
            for(var j = 0; j < name; j++){
                eCoinArr[0][0].push(eCoinstock["prices"][j][1]);
                eCoinArr[0][1].push(new Date(parseInt(eCoinstock["prices"][j][0], 10)));
            }
        var par = document.getElementById("graphing");
        var can = document.createElement("canvas");
        can.setAttribute('id', 'big');
        can.classList.add("graphbig");
        Chart.defaults.global.defaultFontColor = 'red';
        Chart.defaults.global.defaultFontSize = 24;
        Chart.defaults.global.defaultFontFamily = "Righteous";
        par.appendChild(can);
        var ctx = document.getElementById('big').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: eCoinArr[0][1],
                datasets: [{
                    label: id,
                    data: eCoinArr[0][0],
                    borderColor: 'red',
                    backgroundColor: 'rgb(0, 0, 0, 0)',
                    borderWidth: 1
                }]
            },
            options: {
                title: {
                    display: true,
                    text: mainName
                },
                legend:{
                    display: false
                },
                scales: {
                    xAxes: [{
                        ticks: {
                            display: false//this will remove only the label
                        },
                        gridLines:{
                            display: false
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: false
                        },
                        gridLines:{
                            display: false
                        }
                    }],
                    animation: {
                        duration: 0 // general animation time
                    },
                    hover: {
                        animationDuration: 0 // duration of animations when hovering an item
                    },
                    responsiveAnimationDuration: 0 // animation duration after a resize
                }
            }
        })
    })
}
