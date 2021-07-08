console.log('hi');
let websocket = new WebSocket('wss://stream.binance.com:9443/ws/etheur@trade');
let stockPriceElement = document.getElementById('stockPrice');

let lastPrice = null;

websocket.onopen = () => {
    console.log('successfully connected');
}


websocket.onclose = (event) => {
    console.log('successfully closed', event);
}

websocket.onerror = (error) => {
    console.log('error', error);
}

websocket.onmessage = (event) => {
    let socketData = JSON.parse(event.data);
    let price = parseFloat(socketData.p).toFixed(2);
    stockPriceElement.innerHTML = price;
    stockPriceElement.style.color = !lastPrice  || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'red';
    lastPrice = price;
}

