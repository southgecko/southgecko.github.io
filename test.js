
var eCoinUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
var parent = document.getElementById("stockGraph");

fetch(eCoinUrl)
.then((resp) => resp.json())
.then(function(data){
    var stock = data;
    stock.forEach(item => {
        if(item.current_price <= 1.0){
            return;
        }
        var a = document.createElement("a");
        var div = document.createElement('div')
        var currDiv = document.createElement('div')
        var title = document.createElement("h2");
        var currentPrice = document.createElement("h2");
        var circulatingSupply = document.createElement("h2");
        var priceChange = document.createElement("h2");
        var img = document.createElement("img");
        div.setAttribute('class', 'title-name');
        img.setAttribute('src', item.image);
        img.setAttribute('class', 'image');
        a.setAttribute('id', item.id);
        a.setAttribute('class', 'eCoinDisplay');
        a.setAttribute('href', 'currency?coin=' + item.id + '&name=' + item.name);
        a.setAttribute('target', '_blank');
        title.setAttribute('class', 'title');
        currentPrice.setAttribute('class', 'current-price');
        circulatingSupply.setAttribute('class', 'volume');
        priceChange.setAttribute("class", "priceChange");
        if(item.price_change_24h <= 0){
            currDiv.setAttribute('class', 'negative');
        }else{
            currDiv.setAttribute('class', 'positive');
        }
        //title.appendChild(img);
        title.innerHTML = item.name;
        currentPrice.innerHTML = item.current_price;
        circulatingSupply.innerHTML = item.circulating_supply;
        priceChange.innerHTML = item.price_change_24h.toFixed(2) + " / " + item.price_change_percentage_24h.toFixed(2) + "%";
        currDiv.appendChild(priceChange);
        div.appendChild(img);
        div.appendChild(title);
        a.appendChild(div);
        //a.appendChild(title);
        a.appendChild(currentPrice);
        a.appendChild(circulatingSupply);
        a.appendChild(currDiv);
        parent.appendChild(a);
    });
})




