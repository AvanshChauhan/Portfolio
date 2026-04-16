import React from 'react'
import MacWindow from './MacWindow'
import DateNtime from '../DateNtime'

const Calender = ({ windowName, setWindowState }) => {
  return (
    <MacWindow
      width="24vw"
      height="20vh"
      windowName={windowName}
      setWindowState={setWindowState}
    >
        <DateNtime/>
    </MacWindow>
  )
}

export default Calender
