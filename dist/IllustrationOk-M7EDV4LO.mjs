import {
  Badge,
  Channel,
  Ground,
  Plancha,
  Scene,
  Server
} from "./chunk-5JXEABAG.mjs";

// src/illustrations/scenes/IllustrationOk.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var IllustrationOk = () => /* @__PURE__ */ jsxs(Scene, { name: "ok", children: [
  /* @__PURE__ */ jsx(Channel, { lit: true }),
  /* @__PURE__ */ jsx(Server, { led: "ok", was: true }),
  /* @__PURE__ */ jsx(Ground, {}),
  /* @__PURE__ */ jsx(Plancha, { tone: "b", under: "n", motion: "snap" }),
  /* @__PURE__ */ jsx(Badge, { kind: "ok", x: 184, y: 105.3, shadow: [184, 151.2, 22.2, 12.8] })
] });
var IllustrationOk_default = IllustrationOk;
export {
  IllustrationOk,
  IllustrationOk_default as default
};
