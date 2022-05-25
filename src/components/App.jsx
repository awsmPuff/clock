import React, { useState } from "react";

function App() {
  const now = new Date().toLocaleTimeString("en-GB");
  const [time, setTime] = useState(now);


  function updateTime() {
    const newTime = new Date().toLocaleTimeString("en-GB");
    setTime(newTime);
  }

  function toggle() {
       document.body.classList.toggle("dark mode"); 
  }

  setInterval(updateTime, 1000);

  return (
    <div className="container">
      {/* <button className="toggle" onClick={toggle}>SWITCH</button> */}
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
