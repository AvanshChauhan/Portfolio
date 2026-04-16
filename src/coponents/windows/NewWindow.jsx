import React from 'react'
import MacWindow from './MacWindow'
import windowImage from '../../assets/window.jpg'
import '../../newWindow.scss'

const NewWindow = ({ windowName, setWindowState }) => {
  return (
    <MacWindow
      height="40vw"
      windowName={windowName}
      setWindowState={setWindowState}
    >
        <div className="new-window">
            <img src={windowImage} alt="Window" />

        </div>
    </MacWindow>
  )
}

export default NewWindow
