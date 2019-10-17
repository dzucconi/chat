import parameters from "queryparams";

export const { skin }: { skin: string } = parameters({
  skin: "default"
});

export interface Skin {
  bg: string;
  fg: string;
  inputFg: string;
  inputBg: string;
  inputBorder: string;
  placeholderFG: string;
  themBg: string;
  themFg: string;
  meBg: string;
  meFg: string;
  cursorFg: string;
  themeColor: string;
  statusBarStyle: "default" | "black-translucent";
}

const SKINS: { [name: string]: Skin } = {
  default: {
    bg: "#fff",
    fg: "#000",
    inputFg: "#000000",
    inputBg: "#fff",
    inputBorder: "#CECED1",
    placeholderFG: "#CECED1",
    themBg: "#E9E9EB",
    themFg: "#000000",
    meBg: "#0B82FE",
    meFg: "#fff",
    cursorFg: "#426BF2",
    themeColor: "#ffffff",
    statusBarStyle: "default"
  },
  dark: {
    bg: "#000",
    fg: "#fff",
    inputFg: "#fff",
    inputBg: "#141414",
    inputBorder: "#545457",
    placeholderFG: "#545457",
    themBg: "#262628",
    themFg: "#fff",
    meBg: "#1287FF",
    meFg: "#fff",
    cursorFg: "#426BF2",
    themeColor: "#000000",
    statusBarStyle: "black-translucent"
  },
  plain: {
    bg: "#fff",
    fg: "#000",
    inputFg: "#000",
    inputBg: "#fff",
    inputBorder: "#fff",
    placeholderFG: "#999",
    themBg: "#fff",
    themFg: "blue",
    meBg: "#fff",
    meFg: "red",
    cursorFg: "#0064d3",
    themeColor: "#ffffff",
    statusBarStyle: "default"
  }
};

export const SKIN = SKINS[skin];
