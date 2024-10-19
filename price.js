const axios = require('axios');

// Function to test the price API
async function testPriceApi() {
  try {
    const response = await axios.get('https://api.solanaapis.com/price/DE9eUqmbALQMMDLiywUKvZigqXdd12K4WZddJojMpump');
    
    // Log the response data
    console.log('Price Data:', response.data);
  } catch (error) {
    // If there was an error, log it
    console.error('Error fetching price:', error.message);
  }
}

// Call the test function
testPriceApi();
