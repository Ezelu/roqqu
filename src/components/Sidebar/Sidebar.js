import { useState } from 'react';
import styles from './Sidebar.module.css';
import fireIcon from '../../assets/Fire.svg';
import bookIcon from '../../assets/Book.svg';
import pulseIcon from '../../assets/Pulse.svg';
import settingIcon from '../../assets/Settings-alt.svg';
import chartIcon from '../../assets/bar chart.svg';
import walletIcon from '../../assets/Wallet.svg';
import notificationIcon from '../../assets/Notification.svg';
import { BsBoundingBox } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';


export default function Sidebar() {

  const sidebarData = [
    {
      icon: fireIcon,
      title: 'Home',
      url: '/'
    },
    {
      icon: chartIcon,
      title: 'Exchange',
      url: '/exchange'
    },
    {
      icon: walletIcon,
      title: 'Wallet',
      url: '#'
    },
    {
      icon: bookIcon,
      title: 'Prices',
      url: '#'
    },
    {
      icon: pulseIcon,
      title: 'Activities',
      url: '#'
    },
    {
      icon: fireIcon,
      title: 'Promotions',
      url: '#'
    },
    {
      icon: settingIcon,
      title: 'Settings',
      url: '#'
    },
    {
      icon: notificationIcon,
      title: 'Notifications',
      url: '#'
    },

  ]


  const navigate = useNavigate();



  return (
    <div className={styles.sidebar}>
      <ul className={styles.nav}>
        {
          sidebarData.map((data, index) => {
            const {icon, title, url} = data;
            
            return (
              <li key={index} className={styles.nav_item} onClick={() => navigate(url)}>
                <a href="" className={styles.nav_link}>
                  <img src={icon} alt={title} />
                  <span className={styles.link_text}> {title} </span>
                </a>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
