import React from "react";
import { Rnd } from "react-rnd";
import '../../windows.scss'
const MacWindow = ({ width = "40vw", height = "40vh", children, windowName, setWindowState }) => {
  const handleClose = () => {
    if (!windowName || !setWindowState) return;
    setWindowState((state) => ({ ...state, [windowName]: false }));
  };

  return (
    <Rnd
    default={{
      width:width,
      height:height,
      x:300,
      y:200,
    }}
    >
      <div className="windows">
        <div className="nav">
            <div className="dots">
                <div
                onClick={handleClose}
                className="dot red"></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>
            </div>
            <div className="title">
                <p>avanshsingh - zsh</p>
            </div>
        </div>
        <div className="main-content">
            {children}
        </div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
