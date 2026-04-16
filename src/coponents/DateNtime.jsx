import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'

const DateNtime = () => {
  const [time, setTime] = useState(dayjs())

  useEffect(() => {
    const i = setInterval(() => {
      setTime(dayjs())
    }, 1000)
    return () => clearInterval(i)
  }, [])

  return (
    <div>
      {time.format("ddd, D MMM HH:mm")}
    </div>
  )
}

export default DateNtime