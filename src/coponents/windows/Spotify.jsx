import React from "react";
import MacWindow from "./MacWindow";
import '../../spotify.scss'
const Spotify = ({ windowName, setWindowState }) => {
  return (
    <MacWindow
      height="30vw"
      windowName={windowName}
      setWindowState={setWindowState}
    >
      <div className="spotify-window">
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/1DatcBStkkmYNY6KKvPbv4?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; FullScreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </MacWindow>
  );
};

export default Spotify;
