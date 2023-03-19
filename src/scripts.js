import axios from 'axios';

const container = document.getElementById('crypto-container');

const getCryptoData = async () => {
  try {
    const response = await fetch('https://pro-api.coingecko.com/api/v3');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

const renderCryptoData = async () => {
  const cryptoData = await getCryptoData();
  
  cryptoData.forEach(crypto => {
    const cryptoDiv = document.createElement('div');
    cryptoDiv.innerHTML = `
      <h2>${crypto.name}</h2>
      <p>${crypto.symbol}</p>
      <p>${crypto.current_price}</p>
      <p>${crypto.market_cap_rank}</p>
      <p>${crypto.description}</p>
      <p>${crypto.category}</p>
      <p>${crypto.total_volume}</p>
      <p>${crypto.trade_volume_24h}</p>
    `;
    container.appendChild(cryptoDiv);
  });
}

renderCryptoData();