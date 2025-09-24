import React, { useState, useEffect } from 'react'

const CountdownTimer: React.FC = () => {
  const untilEndSale: number = new Date().getTime() + 3 * 24 * 60 * 60 * 1000
  const [timeRemianing, setTimeRemianing] = useState<number>(
    untilEndSale - new Date().getTime()
  )

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const remaining = untilEndSale - now
      setTimeRemianing(remaining > 0 ? remaining : 0)
    }, 1000)

    return () => clearInterval(interval)
  }, [untilEndSale])

  const seconds: number = Math.floor((timeRemianing / 1000) % 60)
  const minutes: number = Math.floor((timeRemianing / (1000 * 60)) % 60)
  const hours: number = Math.floor((timeRemianing / (1000 * 60 * 60)) % 24)
  const days: number = Math.floor(timeRemianing / (1000 * 60 * 60 * 24))

  // const { days, hours, minutes, seconds } = formatTime(timeRemianing)

  return (
    <div>
      <h2 className="mt-5 text-xl font-bold justify-center items-center hover:text-2xl">
        SALE ENDING IN{' '}
      </h2>
      <div className="mt-2 text-xl font-bold flex gap-5 bg-red-600 opacity-85 text-white rounded-2xl justify-center w-50">
        <div>
          <div className="text-xl font-bold">{days} </div>
        </div>
        <div>
          <div className="text-xl font-bold">: {hours} </div>
        </div>
        <div>
          <div className="text-xl font-bold"> :{minutes} </div>
        </div>
        <div>
          <div className="text-xl font-bold"> : {seconds} </div>
        </div>
      </div>
    </div>
  )
}

export default CountdownTimer

//     return (
//       <div className="countdown-display">
//         <div className="countdown-value">
//           {days.toString().padStart(2, '0')}
//           <span>days</span>
//         </div>
//         <div className="countdown-value">
//           {hours.toString().padStart(2, '0')}
//           <span>hours</span>
//         </div>
//         <div className="countdown-value">
//           {minutes.toString().padStart(2, '0')}
//           <span>minutes</span>
//         </div>
//         <div className="countdown-value">
//           {seconds.toString().padStart(2, '0')}
//           <span>seconds</span>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="countdown-timer-container">
//       <h2 className="countdown-name">
//         {countdownStart ? eventName : 'countdown timer'}
//       </h2>
//       <p className="countdown-date">
//         {countdownStart && formatDate(eventDate)}
//       </p>

//       {!countdownStart ? (
//         <form className="countdown-form">
//           <label htmlFor="title">event name</label>
//           <input
//             name="title"
//             type="text"
//             value={eventName}
//             onChange={(e) => setEventName(e.target.value)}
//           />

//           <label htmlFor="date-picker">event date</label>
//           <input
//             name="date-picker"
//             type="date"
//             value={eventDate}
//             onChange={(e) => setEventDate(e.target.value)}
//             onClick={(e) => (e.target.type = 'date')}
//           />
//         </form>
//       ) : (
//         <>
//           {formatTime(timeRemianing)}
//           <div>
//             <button onClick={handleStopCountdown}>stop</button>
//             <button onClick={handleRestCountdown}>stop</button>
//           </div>
//         </>
//       )}
//     </div>
//   )
// }

// export default CountdownTimer
