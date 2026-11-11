import {
  Channel,
  Ground,
  Packets,
  Plancha,
  Scene,
  Server
} from "./chunk-5JXEABAG.mjs";

// src/illustrations/scenes/IllustrationProcessing.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var IllustrationProcessing = () => /* @__PURE__ */ jsxs(Scene, { name: "processing", children: [
  /* @__PURE__ */ jsx(Channel, { lit: true }),
  /* @__PURE__ */ jsx(Packets, { motion: "flow", count: 3 }),
  /* @__PURE__ */ jsx(Server, { led: "work", file: true }),
  /* @__PURE__ */ jsx(Ground, {}),
  /* @__PURE__ */ jsx(Plancha, { tone: "b", under: "n", motion: "proc" })
] });
var IllustrationProcessing_default = IllustrationProcessing;
export {
  IllustrationProcessing,
  IllustrationProcessing_default as default
};
