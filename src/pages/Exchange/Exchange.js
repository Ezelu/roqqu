import { useState, useEffect } from 'react';
import styles from './Exchange.module.css';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Chart from '../../components/Chart/Chart';
import { getOrderBook } from '../../API/binanceAPI';
import { getDecimalPart } from '../../utils/utils';
import bitcoinIcon from '../../assets/bitcoin.svg';
import { LinearProgress } from '@mui/material';
import { MdKeyboardArrowDown } from 'react-icons/md'




export default function Exchange() {

  const data = [
    {
      title: 'Last Price',
      amount: 18372.99,
      token: 'USDT',
      type: 'diff',
    },
    {
      title: 'High',
      amount: 18372.99,
      token: 'USDT'
    },
    {
      title: 'Low',
      amount: 18372.99,
      token: 'USDT',
    },
    {
      title: 'Volume',
      amount: 18372.99,
      token: 'USDT',
    },
    {
      title: '24th Change',
      amount: '+3.04%',
      token: 'USDT',
      type: 'diff',
    },
  ]


  const [asks, setAsks] = useState([]);
  const [bids, setBids] = useState([]);



  // Fetch the Order book data
  useEffect(() => {
    const data = getOrderBook(5)
      .then(res => {
        setAsks(res.asks);
        setBids(res.bids);
      })
      .catch(err => console.log(err))
  }, [])








  return (
    <div>
      <Header showLinks={true} />

      <main>
        <Sidebar />

        <div className={styles.exchange}>
          <section className={styles.cards}>
            <div className={styles.first}>
              <aside style={{flex: 1}}>
                <img src={bitcoinIcon} />
              </aside>
              <aside style={{flex: 3}}>
                <p> BTC /USDT <MdKeyboardArrowDown /> </p>
                <span> Bitcoin </span>
              </aside>
            </div>

            {
              data.map((card, index) => {
                return (
                  <div key={index}>
                    <span> {card.title} </span>
                    <p style={{ color: card?.type == 'diff' ? '#1AC9A0' : 'white'}}> 
                      {card.amount}
                    </p>
                  </div>
                )
              })
            }
          </section>


          <section className={styles.main_container}>
            
            <article className={styles.left}>
              <Chart />
            </article>







            <article className={styles.right}>

              <div className={styles.order_book}> 
                <h3 className={styles.title}> Order Book </h3>
                <div className={styles.table}>
                  <aside className={styles.table_headers}>
                    <p> PRICE(USDT) </p>
                    <p> AMOUNT(BTC) </p>
                    <p> TOTAL (USDT) </p>
                  </aside>

                  { 
                    !asks ?
                    <LinearProgress /> :
                    asks.map((data, index) => {
                      const [ price, quantity ] = data

                      return(
                        <aside className={styles.table_data}>
                          <p className={styles.price}
                          style={{
                            background: `linear-gradient(to right, #F07A642F ${getDecimalPart(price)}%, transparent 0%)`,
                            color: '#FF8686'
                          }}
                          > 
                            {(+price).toFixed(6)}
                          </p>
                          <p> {(+quantity).toFixed(6)} </p>
                          <p> 5.304781 </p>
                        </aside>
                      )
                    })
                  }

                  <h2 className={styles.interceptor}> 128299.304781 USDT </h2>

                  <aside className={styles.table_headers}>
                    <p> PRICE(USDT) </p>
                    <p> AMOUNT(BTC) </p>
                    <p> TOTAL (USDT) </p>
                  </aside>

                  {
                    !asks ?
                    <LinearProgress /> :
                    bids.map((data, index) => {
                      const [price, quantity] = data;

                      return(
                        <aside className={styles.table_data}>
                          <p className={styles.price}
                          style={{
                            background: `linear-gradient(to right, #13A5831C ${getDecimalPart(price)}%, transparent 0%)`,
                            color: '#13A583'
                          }}
                          > 
                            {(+price).toFixed(6)}
                          </p>
                          <p> {(+quantity).toFixed(6)} </p>
                          <p> 5.304781 </p>
                        </aside>
                      )
                    })
                  }
  
                </div>

              </div>
            </article>


          </section>
        </div>
      </main>
    </div>
  )
}
