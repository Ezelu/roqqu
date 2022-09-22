import axios from 'axios';


const getOrderBook = async (limit) => {
  const API_URL = `https://api.binance.com/api/v3/depth?symbol=BTCUSDT&limit=${limit}`;

  try {
    const { data } = await axios.get(API_URL);
    return data
  }
  catch(err) {
    console.log(err);
    return null
  }
}








export { getOrderBook }