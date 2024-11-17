import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import style from "./stylesheets-module/HPCalendar.module.css";

export default function HomeCalendar() {
  const [value, setValue] = useState(new Date());

  const month = value.toLocaleString("default", { month: "long" });
  console.log(month);

  const [showCalendar, setShowCalendar] = useState(false);

  function increaseDate() {
    setValue(new Date(value.setDate(value.getDate() + 1)));
  }

  function decreaseDate() {
    setValue(new Date(value.setDate(value.getDate() - 1)));
  }

  function handleDateChange(selectedDay) {
    setValue(selectedDay);
    setShowCalendar(false);
  }

  return (
    <div className={`${style.date}`}>
      <div id={style["calendar-container"]}>
        <button
          type="button"
          onClick={decreaseDate}
          className={style["change-date-btn"]}
        >
          ⬅
        </button>

        <h2 id={style["h2data"]} onClick={() => setShowCalendar(!showCalendar)}>
          {value.getDate()}
          {" " + month}
          {" " + value.getFullYear()}
        </h2>
        <button
          type="button"
          onClick={() => increaseDate()}
          className={style["change-date-btn"]}
        >
          ⮕
        </button>
      </div>

      {showCalendar && <Calendar onChange={handleDateChange} value={value} />}
    </div>
  );
}
