import { useState, useEffect } from 'react';
import axios from 'axios';
import { LinearProgress } from '@mui/material';

import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend,
} from 'chart.js';


ChartJS.register( CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend );







export default function ChartData () {

  const [data, setData] = useState();
  const [days, setDays] = useState(30);
  const [currency, setCurrency] = useState('USD')
  const API_URL = `https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=${currency}&days=${days}`;



  const fetchData = async () => {
    try {
      const {data} = await axios.get(API_URL);
      setData(data.prices)
    }
    catch(err){
      console.log(err)
    }
  }

 


  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days]);



  return (
    <div>
      { !data ?
        <LinearProgress /> :
        <Line
          data={{
            labels: data?.map((coin) => {
              let date = new Date(coin[0]);
              let time =
                date.getHours() > 12
                  ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                  : `${date.getHours()}:${date.getMinutes()} AM`;
              return days === 1 ? time : date.toLocaleDateString();
            }),

            datasets: [
              {
                data: data.map((coin) => coin[1]),
                label: 'BTC / NGN: 26,792,926.87',
                borderColor: "#1AC9A0",
              },
            ],
          }}
          options={{
            elements: {
              point: {
                radius: 1,
              },
            },
          }}
        />
      }
    </div>
  )
}