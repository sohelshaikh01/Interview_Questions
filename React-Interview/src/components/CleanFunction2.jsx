import {useState, useEffect} from 'react';


const Timer = () => {

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);

        // Cleanup function: Clear interval before unmount or re-run

        return () => {
            clearInterval(interval);
            console.log("Interval Cleared");
        }
    }, [])

  return (
    <div>
      Seconds elapsed: {seconds}
    </div>
  )
}

export default Timer;
