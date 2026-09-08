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
    title: "Find the project on GitHub",
    desc: "Open the repository, then clone it to your machine so you've got a local copy to run and edit.",
    // TODO: swap this for the repo's real URL once it's pushed to GitHub.
    href: "https://github.com",
    linkText: "Open GitHub",
    code: "git clone <paste-the-repository-url-here>",
  },
];
