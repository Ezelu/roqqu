import styles from './Activity.module.css';


import { MdOutlineArrowDownward, MdOutlineArrowUpward } from 'react-icons/md';
import { RiArrowLeftRightLine } from 'react-icons/ri'
import { IconButton } from '@mui/material'


export default function Activity({ activity }) {
  const {type, token, amount, status, date} = activity;


  return (
    <div className={styles.activity}>
      <aside className={styles.icon}>
        { type === 'withdraw' ? <MdOutlineArrowUpward /> :
          type === 'deposit' ? <MdOutlineArrowDownward/> : 
          <RiArrowLeftRightLine /> }
      </aside>

      <aside className={styles.details}>
        <p> 
          {type === 'withdraw' ? "Withdrew" :
          type === 'deposit' ? "Deposit" : "Exchanged"} {token}
        </p>
        <p className={styles.status}> {status} </p>
        <p className={styles.amount}> {amount}{token} </p>
      </aside> 

      <aside className={styles.date}>
        <span> {date} </span>
      </aside>
    </div>
  )
}
