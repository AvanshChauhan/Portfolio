import React from 'react'
import MacWindow from './MacWindow'
import '../../resume.scss'
const Resume = ({ windowName, setWindowState }) => {
  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState}>
        <div className="resume-window">
            <iframe
              src="./av.pdf"
              title="Resume"
              frameBorder="0"
              style={{ width: '100%', height: '100%' }}
            ></iframe>
        </div>
    </MacWindow>
  )
}

export default Resume
