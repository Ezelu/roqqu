import { useState, useEffect } from 'react';
import axios from 'axios';
import ApexCharts from 'apexcharts';
import ReactApexChart from 'react-apexcharts';
import { LinearProgress } from '@mui/material';




const ApexChart = () => {

  const [rawData, setRawData] = useState([]);


  useEffect(() => {
    const getChart = async () => {
      try{
        const {data} = await axios.get('https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=15m&limit=50');

        let processedCandleSticks = [];
        for(let each of data) {
          processedCandleSticks.push({
              x: new Date(each[0]),
              y: [each[1], each[2], each[3], each[4]]
          })
        }

        setRawData(processedCandleSticks)
      }
      catch(err) {
        console.log(err)
      }
    }

    getChart()
  }, [])



  let chartData = {

    series: [{
      data: rawData
    }],

    options: {
      chart: {
        type: 'candlestick',
        height: 350
      },
      title: {
        text: 'BTC/NGN: 26, 792, 926.87',
        align: 'left'
      },
      xaxis: {
        type: 'datetime'
      },
      yaxis: {
        tooltip: {
          enabled: true,
          fillSeriesColor: false,
          theme: false,
          style: {
            background: '#000000',
            color: '#FFA500'
          }
        }
      }
    },

  }




  // let binanceSocket = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@kline_15m");
  
  // binanceSocket.onmessage = function (event) {	
  //   let message = JSON.parse(event.data);
  
  //   let candlestick = message.k;
  
  //   console.log(candlestick)
  
  //   const new_data = {
  //     x: new Date (candlestick.t),
  //     y: [candlestick.o, candlestick.h, candlestick.l,  candlestick.c]
  //   }


  // chartData.series[0].data.push(new_data)


  // }





  return (
    <div id="chart">
      {
        !rawData ?
        <LinearProgress /> :
        <ReactApexChart options={chartData.options} series={chartData.series} type="candlestick" height={350} />
      }
    </div>
  );
}



export default ApexChart


