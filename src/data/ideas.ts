import type { Idea } from "../types";

export const DEFAULT_IDEAS: Idea[] = [
  { id: "huemoodlight", title: "Hue mood-light DJ", diff: "medium", desc: "Read the tempo and energy of whatever's playing on Spotify, then shift your Hue lights' color and brightness to match the beat.", tried: false },
  { id: "cardscoreboard", title: "Card game scoreboard", diff: "easy", desc: "Track running scores across rounds for games like Skull King or Wizard, with a live leaderboard and a graph of who's winning.", tried: false },
  { id: "sonosentrance", title: "Sonos walk-in trigger", diff: "medium", desc: "Tap an NFC sticker by the door, or use a Hue motion sensor, to auto-resume your favorite Sonos playlist the second you're home.", tried: false },
  { id: "partyqueue", title: "Party queue app", diff: "medium", desc: "Let friends add songs to a shared Spotify queue from their phones during game night, no app install required.", tried: false },
  { id: "cardturns", title: "Card night turn timer", diff: "easy", desc: "A shared screen showing whose turn it is, a countdown per turn, and a bell sound when time's up.", tried: false },
  { id: "nowplayinglights", title: "Now-playing light show", diff: "spicy", desc: "Sync Hue lights to whatever's on Sonos or Spotify in real time, shifting color with the dominant hue of the album art.", tried: false },
  { id: "listeningcapsule", title: "Listening time-capsule", diff: "medium", desc: "Pull your top tracks and artists from the Spotify API each month and turn it into a small visual diary of your taste over time.", tried: false },
  { id: "scenehop", title: "One-tap scene switcher", diff: "easy", desc: "A single button that sets Hue lighting and Sonos volume together for 'focus', 'party', and 'wind-down' modes.", tried: false },
  { id: "citrafficlight", title: "Hue build-status light", diff: "easy", desc: "Turn a Hue bulb red or green depending on whether your latest CI pipeline or deploy just passed or failed.", tried: false },
  { id: "genreroulette", title: "Genre roulette playlist", diff: "easy", desc: "Spin up a surprise ten-track playlist by picking a random genre from your Spotify library and queuing it on Sonos.", tried: false },
];
