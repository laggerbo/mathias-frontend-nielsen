import type { SetupStep } from "../types";

export const SETUP_STEPS: SetupStep[] = [
  {
    title: "Install VS Code",
    desc: "The code editor you'll write everything in.",
    href: "https://code.visualstudio.com/download",
    linkText: "Download VS Code",
  },
  {
    title: "Install Git",
    desc: "Tracks your changes and lets you pull code down from GitHub.",
    href: "https://git-scm.com/downloads",
    linkText: "Download Git",
  },
  {
    title: "Install Node.js",
    desc: "Gives you npm, which installs the project's dependencies and runs it.",
    href: "https://nodejs.org/",
    linkText: "Download Node.js",
  },
  {
    title: "Clone the project from GitHub",
    desc: "Download a local copy of the repository so you can run and edit it.",
    href: "https://github.com/laggerbo/mathias-frontend-nielsen",
    linkText: "Open on GitHub",
    code: "git clone https://github.com/laggerbo/mathias-frontend-nielsen.git",
  },
  {
    title: "Install the dependencies",
    desc: "Open the project folder in VS Code, then run this in its terminal to download the packages it needs.",
    href: "https://github.com/laggerbo/mathias-frontend-nielsen#run-it-locally",
    linkText: "See the README",
    code: "cd mathias-frontend-nielsen\nnpm install",
  },
  {
    title: "Run the project",
    desc: "Starts a local dev server. Open the URL it prints (usually http://localhost:5173) in your browser.",
    href: "https://github.com/laggerbo/mathias-frontend-nielsen#run-it-locally",
    linkText: "See the README",
    code: "npm run dev",
  },
];
