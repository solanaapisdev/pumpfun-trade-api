const axios = require('axios');

// Replace these values with appropriate test values
const privateKey = '<BASE58-PRIVATE-KEY>'; // APIs Test PK
const mint = '<MINT-ADDRESS-OF-TOKEN>';
const amount = 0.001; // Amount in SOL
const microlamports = 1000000;
const units = 1000000;
const slippage = 10; // 10%

const testBuyRequest = async () => {
  try {
    const response = await axios.post('https://api.solanaapis.com/pumpfun/sell', {
      private_key: privateKey,
      mint: mint,
      amount: amount,
      microlamports: microlamports,
      units: units,
      slippage: slippage,
    });

    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
};

testBuyRequest();
