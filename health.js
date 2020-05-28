
var url = "https://api.coingecko.com/api/v3/global";
var main = document.getElementById("health-main");

fetch(url)
    .then((resp) => resp.json())
    .then(function(data){
        var stock = data;
        console.log(stock);
        main.childNodes[1].innerHTML += " " + stock.data.active_cryptocurrencies;
        main.childNodes[3].innerHTML += " " + stock.data.upcoming_icos;
        main.childNodes[5].innerHTML += " " + stock.data.ongoing_icos;
        main.childNodes[7].innerHTML += " " + stock.data.ended_icos;
        main.childNodes[9].innerHTML += " " + stock.data.markets;
        var chartData = stock.data.market_cap_percentage;
        var chartArray = Object.keys(chartData)
        var dataArr = [];
        var labelArr = [];
        chartArray.forEach(element => {
            dataArr.push(chartData[element]);
            labelArr.push(element)
        });
        var ctx = document.getElementById("pie-chart").getContext('2d');
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: labelArr,
                datasets: [{
                  label: "Market cap %",
                  backgroundColor: ["red", "blue", "green", "orange", "grey", "white", "purple", "brown", "blue", "red"],
                  data: dataArr
                }]
            },
            options: {
                title: {
                  display: true,
                  fontColor: "white",
                  fontFamily: 'Righteous',
                  fontSize: 24,
                  text: 'Market Cap %',
                  responsive: false,
                  maintainAspectRatio: false
                },
                legend: {
                    display: false
                }
              }
        });
    })


