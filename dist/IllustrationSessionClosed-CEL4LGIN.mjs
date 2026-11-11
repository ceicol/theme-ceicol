import {
  Badge,
  Channel,
  Ground,
  Plancha,
  Scene,
  Server,
  Slots
} from "./chunk-5JXEABAG.mjs";

// src/illustrations/scenes/IllustrationSessionClosed.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var IllustrationSessionClosed = () => /* @__PURE__ */ jsxs(Scene, { name: "session-closed", children: [
  /* @__PURE__ */ jsx(Channel, { unplugged: true, was: true }),
  /* @__PURE__ */ jsx(Server, { led: "ok", port: true }),
  /* @__PURE__ */ jsx(Slots, {}),
  /* @__PURE__ */ jsx("g", { className: "cei-ill-mv-vanish", children: /* @__PURE__ */ jsx(Ground, {}) }),
  /* @__PURE__ */ jsx(Plancha, { tone: "b", motion: "sink" }),
  /* @__PURE__ */ jsx(Badge, { kind: "wa", symbol: "login", x: 184, y: 111.7, shadow: [184, 158.6, 22.2, 12.8] })
] });
var IllustrationSessionClosed_default = IllustrationSessionClosed;
export {
  IllustrationSessionClosed,
  IllustrationSessionClosed_default as default
};
