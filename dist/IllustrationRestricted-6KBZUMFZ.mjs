import {
  Badge,
  Channel,
  Ground,
  Plancha,
  Scene,
  Server
} from "./chunk-5JXEABAG.mjs";

// src/illustrations/scenes/IllustrationRestricted.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var IllustrationRestricted = () => /* @__PURE__ */ jsxs(Scene, { name: "restricted", children: [
  /* @__PURE__ */ jsx(Channel, { lit: true }),
  /* @__PURE__ */ jsx(Server, { led: "ok" }),
  /* @__PURE__ */ jsx(Ground, {}),
  /* @__PURE__ */ jsx("g", { className: "cei-ill-mv-press", children: /* @__PURE__ */ jsx(Plancha, { tone: "b", under: "n", motion: "snap", marked: true }) }),
  /* @__PURE__ */ jsx(Badge, { kind: "wa", symbol: "lock", x: 184, y: 105.3, shadow: [184, 151.2, 22.2, 12.8] })
] });
var IllustrationRestricted_default = IllustrationRestricted;
export {
  IllustrationRestricted,
  IllustrationRestricted_default as default
};
