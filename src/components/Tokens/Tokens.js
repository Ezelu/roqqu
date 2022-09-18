import styles from './Tokens.module.css';
import binanceLogo from '../../assets/binance.svg';
import bitcoinLogo from '../../assets/bitcoin.svg';
import tetherLogo from '../../assets/tether.svg';
import ethereumLogo from '../../assets/ethereum.svg';



export default function Tokens () {

  const data = [
    {
      img: bitcoinLogo,
      name: 'bitcoin',
      abbrev: 'BTC',
      amount: 54372.94,
      difference: 2.43
    },
    {
      img: tetherLogo,
      name: 'tether',
      abbrev: 'USDT',
      amount: 1.02,
      difference: 2.43
    },
    {
      img: ethereumLogo,
      name: 'ethereum',
      abbrev: 'ETH',
      amount: 54372.94,
      difference: 2.43
    },
    {
      img: binanceLogo,
      name: 'binance coin',
      abbrev: 'BNB',
      amount: 54372.94,
      difference: 2.43
    },
  ]







  return (
    <>
      {
        data.map(token => {
          const { img, name, abbrev, amount, difference } = token;
          return (
            <div className={styles.token} key={abbrev}>
              <div className={styles.image_container}>
                <img src={img} alt={name} />
              </div>


              <div className={styles.info}>
                <aside>
                  <p> {name} </p>
                  <span> {abbrev} </span> 
                </aside>

                <aside>
                  <p> {amount}USD </p>
                  <span className={styles.difference}> +{difference} </span> 
                </aside>

              </div>
            </div>
          )
        })
      }
    </>
  )

}