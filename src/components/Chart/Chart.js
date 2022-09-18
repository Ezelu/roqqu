import styles from './Chart.module.css'
import { useState } from 'react';
import ChartData from '../ChartData';
import { TbChartCandle } from 'react-icons/tb';
import { HiScale } from 'react-icons/hi';
import { FaChartLine } from 'react-icons/fa';
import { BsCamera, BsArrowsFullscreen } from 'react-icons/bs';
import { AiFillSliders, AiOutlineSetting } from 'react-icons/ai';
import { IoArrowUndoOutline, IoArrowRedoOutline } from 'react-icons/io5';




export default function Chart() {

  const headers_data = ['Price', 'Depth'];
  const [active, setActive] = useState(0);

  const leftActionButtons = [
    { icon: '4h' },
    { icon: <TbChartCandle /> },
    { icon: <HiScale /> },
    { icon: <FaChartLine /> },
    { icon: <IoArrowUndoOutline />, type: 'transparent' },
    { icon: <IoArrowRedoOutline />, type: 'transparent' },
  ];


  const rightActionButtons = [
    { icon: 'Save' },
    { icon: <BsCamera /> },
    { icon: <AiOutlineSetting /> },
    { icon: <BsArrowsFullscreen /> },
  ]



  return (
    <div className={styles.chart}>
      <div className={styles.headers}>
        <ul>
          <li> Chart </li>
          {headers_data.map((link, index) => {
              return (
                <li 
                  key={index}
                  style={{ background: active === index ? '#051955' : 'transparent'}}
                  onClick={() => setActive(index)}
                > 
                  {link}
                </li>
              )
            })}
        </ul>

        <div className={styles.action_buttons}>
          <div>
            {
              leftActionButtons.map((button, index) => {
                return(
                  <aside style={{ background: button.type ? 'transparent' : '#21293E41' }}> 
                    {button.icon} 
                  </aside>
                )} 
              )
            }
          </div>

          <div>
            {
              rightActionButtons.map((button, index) => {
                return(
                  <aside style={{ background: button.type ? 'transparent' : '#21293E41' }}> 
                    {button.icon} 
                  </aside>
                )} 
              )
            }
          </div>
     
        </div>

      </div>


      <div className={styles.chart_data}>
        <ChartData />
      </div>

    </div>
  )
}
