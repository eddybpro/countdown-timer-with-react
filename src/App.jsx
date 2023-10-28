import "./App.css";
import { IconContext } from "react-icons";
import { FaFacebookSquare, FaPinterest, FaInstagram } from "react-icons/fa";
import { useState, useEffect } from "react";

function App() {
  const currentDate = new Date();
  const futureDate = new Date(currentDate);

  futureDate.setDate(currentDate.getDate() + 10);

  const [targetDate, setTargetDate] = useState(futureDate);
  const handleClick = () => {
    setTargetDate(futureDate);
  };
  const calculateTimeRemaining = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const daysVal = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hoursVal = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutesVal = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secondsVal = Math.floor((distance % (1000 * 60)) / 1000);

    const days = `${daysVal}`.length == 1 ? "0" + daysVal : daysVal;
    const hours = `${hoursVal}`.length == 1 ? "0" + hoursVal : hoursVal;
    const minutes = `${minutesVal}`.length == 1 ? "0" + minutesVal : minutesVal;
    const seconds = `${secondsVal}`.length == 1 ? "0" + secondsVal : secondsVal;

    return [days, hours, minutes, seconds];
  };

  const [time, setTime] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <main>
      <h1 className="Title">we&apos;re launching soon</h1>
      <div className="CountdownBox">
        <div>
          <div className="CountdownBox-Bg">
            <button>{time[0]}</button>
          </div>

          <p>days</p>
        </div>
        <div>
          <div className="CountdownBox-Bg">
            <button>{time[1]}</button>
          </div>
          <p>hours</p>
        </div>
        <div>
          <div className="CountdownBox-Bg">
            <button>{time[2]}</button>
          </div>
          <p>minutes</p>
        </div>
        <div>
          <div className="CountdownBox-Bg">
            <button>{time[3]}</button>
          </div>
          <p>seconds</p>
        </div>
      </div>

      <button className="ResetBtn" onClick={handleClick}>
        reset
      </button>

      <div className="SocialIcons">
        <a href="#" aria-label="facebook">
          <IconContext.Provider value={{ className: "socialIcon" }}>
            <div>
              <FaFacebookSquare />
            </div>
          </IconContext.Provider>
        </a>
        <a href="#" aria-label="pintrest">
          <IconContext.Provider value={{ className: "socialIcon" }}>
            <div>
              <FaPinterest />
            </div>
          </IconContext.Provider>
        </a>
        <a href="#" aria-label="instagram">
          <IconContext.Provider value={{ className: "socialIcon" }}>
            <div>
              <FaInstagram />
            </div>
          </IconContext.Provider>
        </a>
      </div>
    </main>
  );
}

export default App;
