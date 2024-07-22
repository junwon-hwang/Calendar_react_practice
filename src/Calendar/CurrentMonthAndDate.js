import React from 'react'
import styles from '../Calendar/CurrentMonthAndDate.module.scss'

const CurrentMonthAndDate = ({year , month , onClick}) => {
 
  return (
    <span onClick={onClick} className={styles.box}>{`${year}년 ${month+1}월`}</span>
  )
}

export default CurrentMonthAndDate;