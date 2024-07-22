import React, { useState, useEffect } from "react";
import styles from "../Calendar/Calendar.module.scss";
import CurrentMonthAndDate from "./CurrentMonthAndDate";
import CalendarDate from "./CalendarDate";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const [dayDate, setDayDate] = useState(0);
  const [monthDate, setMonthDate] = useState(0);
  const [lastDayDate, setlastDayDate] = useState(0);


  useEffect(() => {
    const dayOfMonth = 35; 
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
   
    const firstDayInMonth = firstDay.getDay();
    const lastDayInMonth = lastDay.getDate();

    
    setDayDate(firstDayInMonth);
    setMonthDate(lastDayInMonth);

    if(dayOfMonth){   
      const lastEmptyBox = dayOfMonth - (lastDayInMonth + firstDayInMonth);
      setlastDayDate(lastEmptyBox);
    }

  }, [currentMonth, currentYear]);

  const MonthChangeHandler = (increment) => {
    let newMonth = currentMonth + increment;
    let newYear = currentYear;

    if (newMonth < 0) {
      newYear--;
      newMonth = 11;
    } else if (newMonth > 11) {
      newYear++;
      newMonth = 0;
    }
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  return (
    <>
      <div className={styles.title}>
        <CurrentMonthAndDate month={currentMonth} year={currentYear} />
        <div className={styles.button}>
          <button onClick={() => MonthChangeHandler(-1)}>{`<`}</button>
          <button onClick={() => MonthChangeHandler(1)}>{`>`}</button>
        </div>
      </div>

      <CalendarDate />
      <div className={styles.container}>
        {Array.from(new Array(dayDate)).map((_, index) => (
          <div key={index} className={styles.item}></div>
        ))}
        {Array.from(new Array(monthDate)).map((_, index) => (
          <div key={index} className={styles.item}>
            {index + 1}
          </div>
        ))}
        {Array.from(new Array(lastDayDate)).map((_, index) => (
          <div key={index} className={styles.item}></div>
        ))}
      </div>
    </>
  );
};

export default Calendar;
