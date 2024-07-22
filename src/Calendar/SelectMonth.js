import React from "react";
import styles from "../Calendar/SelectMonth.module.scss";

const SelectMonth = ({ year }) => {
  return (
    <>
      <div className={styles.title}>
        <span className={styles.box}>{`${year}년`}</span>
      </div>
      <div className={styles.container}>
        {Array.from(new Array(12)).map((_, index) => (
          <div key={index} className={styles.item}>
            {index + 1}
          </div>
        ))}
      </div>
    </>
  );
};

export default SelectMonth;