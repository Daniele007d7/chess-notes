import style from "./stylesheets-module/homepage.module.css";
import { LoginContext } from "./AuthContext.jsx";
import { useContext, useState } from "react";

import HomeCalendar from "./HPCalendar.jsx";

export default function Homepage() {
  const isLogged = useContext(LoginContext);
  console.log("islogged", isLogged.isLogged);

  if (!isLogged.isLogged) {
    return <h1>non sei autorizzato</h1>;
  }
  return (
    <div>
      <h1>homepage</h1>

      <form id={style["homepage-form"]}>
        <div>
          {" "}
          <HomeCalendar />
        </div>

        <label>did you study chess today?</label>
        <br />
        <input type="checkbox" />
        <label>how much did you study?</label>
        <br />
        <input type="number" />
        <label>what was your focus level?</label>
        <input type="radio" name="focus" value="1" id="1" />
        <label htmlFor="1">1</label>
        <input type="radio" name="focus" value="2" id="2" />
        <label htmlFor="1">2</label>
        <input type="radio" name="focus" value="3" id="3" />
        <label htmlFor="1">3</label>
        <input type="radio" name="focus" value="4" id="4" />
        <label htmlFor="1">4</label>
        <input type="radio" name="focus" value="5" id="5" />
        <label htmlFor="1">5</label>
        <br />
        <label>what are your key take away from this study session?</label>
        <textarea></textarea>
        <button>submit</button>
      </form>
    </div>
  );
}
