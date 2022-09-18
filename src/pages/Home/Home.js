import { useState } from 'react';
import styles from './Home.module.css';
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar';
import Tokens from '../../components/Tokens/Tokens';
import Activity from '../../components/Activity/Activity';
import bannerImage from '../../assets/Group 13045.svg';
import { BsArrowRight } from 'react-icons/bs'
import { MdKeyboardArrowDown } from 'react-icons/md'



export default function Home() {

  const tabLinks = ['Core Assets', 'Top Gainers', 'Top Losers', 'New'];
  const [active, setActive] = useState(0);
  const activities = [
    {
      type: 'withdraw',
      token: 'USDT',
      amount: 992333.93,
      status: 'complete',
      date: 'Dec 31, 2021'
    },
    {
      type: 'exchange',
      token: 'BTC',
      amount: 992333.93,
      status: 'complete',
      date: 'Dec 31, 2021'
    },
    {
      type: 'deposit',
      token: 'ETH',
      amount: 992333.93,
      status: 'complete',
      date: 'Dec 31, 2021'
    },
  ];




  return (
    <div>
      <Header showLinks={false} />
      <main>
        <Sidebar />

        <div className={styles.home}>
          <section className={styles.left}>
            <div className={styles.banner}>
              <aside className={styles.info}>
                <span> JANUARY 2, 2022 </span>
                <h1> Welcome to Roqqu Decentralized Exchange </h1>
                <p> With an easy-to-use interface, we provide industry-leading security and deep liquidity </p>
                <button> Learn More <BsArrowRight /> </button>
              </aside>

              <aside className={styles.image_container}>
                <img src={bannerImage} alt="banner" />
              </aside>
            </div>



            <div className={styles.tabs}>
              <ul>
                {
                  tabLinks.map((link, index) => {
                    return (
                      <li 
                        key={index} 
                        style={{
                          borderColor: active === index ? '#6E97F5' : 'transparent',
                          color: active === index ? '#6E97F5' : '#91A0CED8',
                        }}
                        onClick={() => setActive(index)}
                      > 
                          {link} 
                      </li>
                    )
                  })
                }

                <li 
                  style={{
                    borderColor: active === tabLinks.length ? '#6E97F5' : 'transparent',
                    color: active === tabLinks.length ? '#6E97F5' : '#91A0CED8',
                  }}
                  onClick={() => setActive(4)}>
                  <p> Market Cap </p> 
                  <MdKeyboardArrowDown />
                </li> 
              </ul>
            </div>

            
            <div className={styles.tokens}>
              <Tokens />
            </div>

          </section>





          <section className={styles.right}>

            <div className={styles.balance}>
              <p className={styles.title}> WALLET BALANCE </p>
              <p className={styles.coin_name}> BTC </p>
              <h1> 0.2993029 </h1>
              <span> 3,700 USD </span>
              <button> Wthdraw </button>
            </div>

            
            <div className={styles.activities}>
              <p className={styles.title}> Latest Activities </p>
              <div>
                {
                  activities.map((activity, index) => {
                    return <Activity key={index} activity={activity} />
                  })
                }
              </div>
            </div>

          </section>
        </div>
      </main>
    </div>
  )
}
