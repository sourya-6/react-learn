import { useState, useRef } from 'react';

// export default function Stopwatch() {
//   const [startTime, setStartTime] = useState(null);
//   const [now, setNow] = useState(null);
//   const intervalRef = useRef(null);

//   function handleStart() {
//     setStartTime(Date.now());
//     setNow(Date.now());
//     console.log("Date",Date.now())

//     clearInterval(intervalRef.current);
//     console.log("Hey 1",intervalRef.current);
//     intervalRef.current = setInterval(() => {
//       setNow(Date.now());
//     }, 10);
//   }

//   function handleStop() {
//     console.log("Hey 2",intervalRef.current)
//     clearInterval(intervalRef.current);
//   }

//   let secondsPassed = 0;
//   if (startTime != null && now != null) {
//     secondsPassed = (now - startTime) / 1000;
//   }

//   return (
//     <>
//       <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
//       <button onClick={handleStart}>
//         Start
//       </button>
//       <button onClick={handleStop}>
//         Stop
//       </button>
//     </>
//   );
// }
export default function Stopwatch() {
  const timerId = useRef(null);
  const inputRef = useRef(null);

  const startTimer = () => {
    timerId.current = setInterval(() => {
      console.log("Tick...");
    }, 1000);
  };

  const stopTimer = () => {
    inputRef.current.focus()
    clearInterval(timerId.current);
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder='enter name'/>
      <button  onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}
