import {
  Badge,
  Channel,
  Ground,
  Packets,
  Plancha,
  Scene,
  Server
} from "./chunk-5JXEABAG.mjs";

// src/illustrations/scenes/IllustrationForbidden.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var IllustrationForbidden = () => /* @__PURE__ */ jsxs(Scene, { name: "forbidden", children: [
  /* @__PURE__ */ jsx(Channel, { was: true }),
  /* @__PURE__ */ jsx(Packets, { motion: "bounce", count: 2 }),
  /* @__PURE__ */ jsx(Server, { led: "ok" }),
  /* @__PURE__ */ jsx(Ground, {}),
  /* @__PURE__ */ jsx(Plancha, { marked: true }),
  /* @__PURE__ */ jsx(Badge, { kind: "wa", symbol: "block", x: 184, y: 105.3, shadow: [184, 151.2, 22.2, 12.8] })
] });
var IllustrationForbidden_default = IllustrationForbidden;
export {
  IllustrationForbidden,
  IllustrationForbidden_default as default
};
