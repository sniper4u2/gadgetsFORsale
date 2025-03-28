// assets/js/crypto.js
async function fetchETHRate() {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
    const data = await response.json();
    return data.ethereum.usd;
  } catch (error) {
    console.error("Failed to fetch ETH rate:", error);
    return 3400; // Fallback rate
  }
}

async function updateAllPrices() {
  const ethRate = await fetchETHRate();
  const ethPerUSD = 1 / ethRate;
  
  document.querySelectorAll('.product-price').forEach(el => {
    const usdPrice = parseFloat(el.dataset.usd);
    const ethPrice = (usdPrice * ethPerUSD).toFixed(6);
    el.querySelector('.crypto-amount').textContent = `${ethPrice} ETH`;
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', updateAllPrices);
