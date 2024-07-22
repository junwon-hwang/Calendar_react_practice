import React from 'react'
import styles from '../Calendar/CalendarDate.module.scss'

const CalerdatDate = () => {
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <div className={styles.container}>
      {Array.from(new Array(7)).map((_, index) => (
        <div key={index} className={styles.item}>
          {daysOfWeek[index]}
        </div>
      ))}
    </div>
  )
}

export default CalerdatDate;