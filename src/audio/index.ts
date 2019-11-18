import { Howl } from "howler";
// @ts-ignore
import type from "./type.mp3";
// @ts-ignore
import space from "./space.mp3";
// @ts-ignore
import backspace from "./backspace.mp3";
// @ts-ignore
import sent from "./sent.mp3";
// @ts-ignore
import received from "./received.mp3";

import { mute } from "../config";

export const audio = {
  // Typing
  type: new Howl({ src: [type], autoplay: false, preload: true, volume: 0.33 }),
  space: new Howl({
    src: [space],
    autoplay: false,
    preload: true,
    volume: 0.33
  }),
  backspace: new Howl({
    src: [backspace],
    autoplay: false,
    preload: true,
    volume: 0.33
  }),
  // Alerts
  sent: new Howl({ src: [sent], autoplay: false, preload: true }),
  received: new Howl({ src: [received], autoplay: false, preload: true })
};

export const play = (key: keyof typeof audio) => {
  if (mute) return;
  return audio[key].play();
};
