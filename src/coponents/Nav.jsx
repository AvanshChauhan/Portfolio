import { useState } from 'react'
import '../nav.scss'
import DateNtime from './DateNtime'

const Nav = ({ setWindowState }) => {
  const [isWifiOn, setIsWifiOn] = useState(true)

  return (
    <nav>
      <div className="left">
        <div className="apple-icon">
          <img src="/navbar-icon/apple.svg" alt="Apple menu" />
        </div>
        <div className="nav-items">
          <p>Avansh Singh</p>
        </div>
        <div 
        onClick={() => {
            setWindowState((state) => ({ ...state, resume: true }))
          }}
        className="nav-items">
          <p>File</p>
        </div>
        <div 
        onClick={() => {
            setWindowState((state) => ({ ...state, newWindow: true }))
          }}
        className="nav-items">
          <p>Window</p>
        </div>
        <div
          className="nav-items"
          onClick={() => {
            setWindowState((state) => ({ ...state, cli: true }))
          }}
        >
          <p>Terminal</p>
        </div>
      </div>
      <div className="right">
        <div
        onClick={() => {
          setIsWifiOn((state) => !state)
        }}
        className={`nav-icon wifi-status ${!isWifiOn ? 'offline' : ''}`}>
          <img
            src={isWifiOn ? "/navbar-icon/wifi.svg" : "/navbar-icon/wifioff.png"}
            alt={isWifiOn ? "Wi-Fi on" : "Wi-Fi off"}
          />
          {!isWifiOn && <span>Off</span>}
        </div>
        <div className="nav-items">
          <DateNtime />
        </div>
      </div>
    </nav>
  )
}

export default Nav
