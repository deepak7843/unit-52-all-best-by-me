

import { useEffect, useState } from "react";

function Counter({ initialTime = 0 }) {
  // default operator => ES6
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    // it will reduce the time from initial time to 0
    const id = setInterval(() => {
      setTime((prev) => {
        if (prev === 1) { 
          clearInterval(id);
        }
        return prev - 1;
      });
      console.log(`timer called, current value ${time}`);
      // closure
    }, 1000);
  }, []);

  return (
    <div>
      <h1>{time}</h1>
    </div>
  );
}

export default Counter;
