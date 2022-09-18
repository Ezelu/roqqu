import styles from './Header.module.css';
import { IconButton } from '@mui/material';
import NotificationIcon from '../../assets/Notification.svg'



export default function Header({ showLinks = false }) {

  const menuLinks = [ 'Deposit', 'Sell Crypto', 'Transfer' ];





  return (
    <div className={styles.header}>
      <div className={styles.logo_container}>
        <h1> roqqu </h1>
      </div>

      <div className={styles.navigation}>
        {
          showLinks &&
          <aside className={styles.links}>
            <ul>
              {
                menuLinks.map( (link, index) => <li key={index}> {link} </li> )
              }
            </ul>
          </aside>
        }

        <aside className={styles.icons}>
          <IconButton>
            <img src={NotificationIcon} />
          </IconButton>

          <IconButton>
            <img src={NotificationIcon} />
          </IconButton>
        </aside>
      </div>
    </div>
  )
}
