import React from "react";
import MacWindow from "./MacWindow";
import TerminalModule from "react-console-emulator";
import "../../cli.scss";
const Terminal = TerminalModule?.default ?? TerminalModule;

const Cli = ({ windowName, setWindowState }) => {
  const commands = {
    about: {
      description: "About me",
      usage: "about",
      fn: () => "Hi! I'm Avansh Singh, a full-stack developer passionate about building elegant web applications.",
    },
    skills: {
      description: "My technical skills",
      usage: "skills",
      fn: () => {
        return `
Frontend: React, JavaScript, CSS, SCSS, HTML, Vite
Backend: Node.js, Express
Tools: Git, ESLint, npm
Other: Web Development, UI/UX, Responsive Design
        `;
      },
    },
    projects: {
      description: "My portfolio projects",
      usage: "projects",
      fn: () => {
        return `
1. Portfolio Website - React + Vite showcase
2. Pixcribe - Text to image generator
3. Respawn - An visual experience for gaming market
4. Wizard - An market agency visual experience
        `;
      },
    },
    experience: {
      description: "My work experience",
      usage: "experience",
      fn: () => {
        return `
        Looking to gain real-world experience 🙂
        `;
      },
    },
    contact: {
      description: "Contact information",
      usage: "contact",
      fn: () => {
        return `
Email: avanshsingh2017@gmail.com
GitHub: https://github.com/AvanshChauhan
LinkedIn: https://www.linkedin.com/in/avansh-singh-90053b24a/
Twitter: @Dudegotattitude
        `;
      },
    },
    resume: {
  description: "Download my resume",
  usage: "resume",
  fn: () => {
    setTimeout(()=>{
      window.open("/av.pdf", "_blank");
    },800)
    return "Opening resume...";
  },
},
    echo: {
      description: "Echo a passed string",
      usage: "echo <string>",
      fn: (...args) => args.join(" "),
    },
  };

  const welcomeMessage = `
╔════════════════════════════════════════╗
║   Welcome to Avansh Singh's Portfolio  ║
║          Command Line Terminal         ║
╚════════════════════════════════════════╝

Type 'help' to see all available commands.
  `;

  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState}>
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel={"avanshsingh:~$"}
          promptLabelStyle={{ color: "#00ff00" }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
