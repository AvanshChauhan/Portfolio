import { useState } from "react";
import "./app.scss";
import Dock from "./coponents/Dock";
import Nav from "./coponents/Nav";
import Cli from "./coponents/windows/Cli";
import Github from "./coponents/windows/Github";
import Note from "./coponents/windows/Note";
import Resume from "./coponents/windows/Resume";
import Spotify from "./coponents/windows/Spotify";
import Mail from "./coponents/windows/Mail";
import Calender from "./coponents/windows/Calender";
import NewWindow from "./coponents/windows/NewWindow";

function App() {
  const [windowState, setWindowState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
    mail: false,
    calender: false,
    newWindow: false,
  });
  return (
    <main>
      <Nav setWindowState={setWindowState} />
      <Dock setWindowState={setWindowState} />
      {windowState.github && <Github windowName="github" setWindowState={setWindowState} />}
      {windowState.note && <Note windowName="note" setWindowState={setWindowState} />}
      {windowState.resume && <Resume windowName="resume" setWindowState={setWindowState} />}
      {windowState.spotify && <Spotify windowName="spotify" setWindowState={setWindowState} />}
      {windowState.cli && <Cli windowName="cli" setWindowState={setWindowState} />}
      {windowState.mail && <Mail windowName="mail" setWindowState={setWindowState} />}
      {windowState.calender && <Calender windowName="calender" setWindowState={setWindowState} />}
      {windowState.newWindow && (
        <NewWindow windowName="newWindow" setWindowState={setWindowState} />
      )}
    </main>
  );
}

export default App;
