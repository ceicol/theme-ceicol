import {
  Badge,
  Channel,
  Packets,
  Scene,
  Server,
  Slots
} from "./chunk-5JXEABAG.mjs";

// src/illustrations/scenes/IllustrationLoadError.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var IllustrationLoadError = () => /* @__PURE__ */ jsxs(Scene, { name: "load-error", children: [
  /* @__PURE__ */ jsx(Channel, { cut: true }),
  /* @__PURE__ */ jsx(Packets, { motion: "stuck", count: 2 }),
  /* @__PURE__ */ jsx(Server, { led: "err" }),
  /* @__PURE__ */ jsx(Slots, {}),
  /* @__PURE__ */ jsx(Badge, { kind: "er", x: 184, y: 111.7, shadow: [184, 158.6, 22.2, 12.8] })
] });
var IllustrationLoadError_default = IllustrationLoadError;
export {
  IllustrationLoadError,
  IllustrationLoadError_default as default
};
