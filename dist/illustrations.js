"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/illustrations/parts.tsx
var import_jsx_runtime, PAINT, QUADS, GROUND, Scene, Ground, Faces, Quad, Plancha, Slots, LEDS, Leds, Server, CHANNEL, UNPLUG, Channel, PACKETS, Packets, p, DEFAULT_SYMBOL, Glyph, Badge;
var init_parts = __esm({
  "src/illustrations/parts.tsx"() {
    "use strict";
    import_jsx_runtime = require("react/jsx-runtime");
    PAINT = [0, 1, 3, 2];
    QUADS = [
      {
        l: "M133.6 127.6L132.9 126.8L132.9 119.3L133.6 120.1ZM182.5 155.9L133.6 127.6L133.6 120.1L182.5 148.4ZM184 156.2L182.5 155.9L182.5 148.4L184 148.8Z",
        r: "M235 126.8L234.4 127.6L234.4 120.1L235 119.3ZM234.4 127.6L185.5 155.9L185.5 148.4L234.4 120.1ZM185.5 155.9L184 156.2L184 148.8L185.5 148.4Z",
        top: "M185.5 148.4L184 148.8L182.5 148.4L133.6 120.1L132.9 119.3L133.6 118.4L174.8 94.7L177 93.6L179.7 92.9L182.5 92.5L185.5 92.5L188.3 92.9L190.9 93.6L193.2 94.7L234.4 118.4L235 119.3L234.4 120.1Z",
        contours: "M223.5 122.2L223.9 116.7M196 100.5L185.6 99.1L174.9 98.9M213.8 127.8L215.7 122.2L215.1 118.3L211.8 113.8L204.7 109.4L195.4 106.2L184.4 104.5L173.2 104.4L162.7 105.9M159.5 112L150.1 116.7L144.5 122.2M205.9 132.4L208.4 126.4L207.9 120.3L204.3 116L198.8 112.8L189 109.9L179.5 109L167.8 109.8L159.5 112M164.2 115.7L155.7 119.9L150.7 125.8M197.1 137.4L201 130.7L202 125.9L201 122.2L196.9 118.1L190.7 115.3L181.8 113.7L171.3 114L164.2 115.7M166.4 120.8L160.5 124.8L158.3 130.2M178.4 141.8L181.6 141.3L186.1 139.6L190.9 135.9L194.3 130.3L194.5 127.4L193.5 124.4L188.8 120.7L181.1 118.7L173.4 118.9L166.4 120.8",
        hatch: "M223.2 116.2L208.8 130.7M217.5 112.9L187.4 143M211.8 109.6L179.2 142.2M206 106.3L173.4 138.9M200.3 103L167.7 135.6M194.5 99.7L162 132.3M188.8 96.4L156.2 129M180.1 96.1L150.5 125.7M159.2 107.9L144.7 122.3"
      },
      {
        l: "M188.8 159.5L188.2 158.6L188.2 151.2L188.8 152ZM237.7 187.8L188.8 159.5L188.8 152L237.7 180.3ZM239.2 188.1L237.7 187.8L237.7 180.3L239.2 180.7Z",
        r: "M285.6 159.5L285 161.1L285 153.7L285.6 152ZM285 161.1L283.7 162.7L283.7 155.2L285 153.7ZM283.7 162.7L281.9 164L281.9 156.5L283.7 155.2ZM281.9 164L240.7 187.8L240.7 180.3L281.9 156.5ZM240.7 187.8L239.2 188.1L239.2 180.7L240.7 180.3Z",
        top: "M240.7 180.3L239.2 180.7L237.7 180.3L188.8 152L188.2 151.2L188.8 150.3L237.7 122.1L239.2 121.7L240.7 122.1L281.9 145.8L283.7 147.2L285 148.7L285.6 150.3L285.6 152L285 153.7L283.7 155.2L281.9 156.5Z",
        contours: "M217.5 138L214.5 145.3L215.6 152.2L218.9 156.6L232.2 168.1L236.2 175.1M217.2 164.2L211.8 158.6L209 153.8L208.6 147.7L210.2 142.2M201.3 155L201.3 151.8L203.1 146.3",
        hatch: "M278.5 148.1L264.1 162.5M272.7 144.8L242.6 174.9M267 141.5L234.4 174.1M261.3 138.2L228.7 170.8M255.5 134.9L222.9 167.5M249.8 131.6L217.2 164.2M244 128.3L211.5 160.9M235.8 127.5L205.7 157.5M214.4 139.8L200 154.2"
      },
      {
        l: "M133.6 191.4L132.9 190.5L132.9 183.1L133.6 183.9ZM174.8 215.2L133.6 191.4L133.6 183.9L174.8 207.7ZM177 216.2L174.8 215.2L174.8 207.7L177 208.8ZM179.7 217L177 216.2L177 208.8L179.7 209.5Z",
        m: "M188.3 217L185.5 217.3L185.5 209.9L188.3 209.5ZM182.5 217.3L179.7 217L179.7 209.5L182.5 209.9ZM185.5 217.3L182.5 217.3L182.5 209.9L185.5 209.9Z",
        r: "M235 190.5L234.4 191.4L234.4 183.9L235 183.1ZM234.4 191.4L193.2 215.2L193.2 207.7L234.4 183.9ZM193.2 215.2L190.9 216.2L190.9 208.8L193.2 207.7ZM190.9 216.2L188.3 217L188.3 209.5L190.9 208.8Z",
        top: "M193.2 207.7L190.9 208.8L188.3 209.5L185.5 209.9L182.5 209.9L179.7 209.5L177 208.8L174.8 207.7L133.6 183.9L132.9 183.1L133.6 182.2L182.5 154L184 153.6L185.5 154L234.4 182.2L235 183.1L234.4 183.9Z",
        contours: "M195.1 202.4L188.3 202.8L180.5 202.3L172.2 200.7L166.9 198.9M157.1 193.3L151.7 186.9L149.9 182.7L149.1 177.5M158.6 172L157.9 181.2L159 184.8L162.3 189.3L167.1 192.9L171.1 194.9L178.4 197.1L184.4 197.9L191.8 197.9L199.9 196.6L204.6 195.1L210.5 192.1L214.9 188.2L216.9 185.1L218 180.6L217.5 176.7M174.8 162.7L166.7 173.2L165.4 176.8L165.4 181.1L166.8 184.6L170.7 188.7L176.6 191.7L181.7 193.1L188.1 193.6L196.7 192.6L203.4 190.1L208 186.4L210.4 181.4L209.9 176.8L206.9 172.1L201.8 167.6",
        hatch: "M223.2 180L208.8 194.4M217.5 176.7L187.9 206.3M211.8 173.4L179.2 206M206 170.1L173.4 202.7M200.3 166.8L167.7 199.4M194.5 163.5L162 196.1M188.8 160.2L156.2 192.7M180.6 159.3L150.5 189.4M159.2 171.7L144.7 186.1"
      },
      {
        l: "M83 161.1L82.3 159.5L82.3 152L83 153.7ZM84.3 162.7L83 161.1L83 153.7L84.3 155.2ZM86.1 164L84.3 162.7L84.3 155.2L86.1 156.5ZM127.3 187.8L86.1 164L86.1 156.5L127.3 180.3ZM128.8 188.1L127.3 187.8L127.3 180.3L128.8 180.7Z",
        r: "M179.8 158.6L179.2 159.5L179.2 152L179.8 151.2ZM179.2 159.5L130.2 187.8L130.2 180.3L179.2 152ZM130.2 187.8L128.8 188.1L128.8 180.7L130.2 180.3Z",
        top: "M130.2 180.3L128.8 180.7L127.3 180.3L86.1 156.5L84.3 155.2L83 153.7L82.3 152L82.3 150.3L83 148.7L84.3 147.2L86.1 145.8L127.3 122.1L128.8 121.7L130.2 122.1L179.2 150.3L179.8 151.2L179.2 152Z",
        contours: "M88.9 153.8L90 147.8M135.5 173L132.9 170L128.7 168.2L110.7 166.4M148.4 165.6L144.8 161L138.7 158.1L131.5 157.1L118.5 158.2L113 158L107.8 156.8L104.4 154.4L103.7 152.8L104.2 149.9L106.7 147.1L118.8 139.1L121.7 134.4L123.5 128.5M133.5 128.2L133.4 137.7L136.5 144.4L141.3 148.1L154.4 155.5L158.9 159.5M141.7 133L143.6 138.2L148.8 143.8L155.9 148.2L168.3 154",
        hatch: "M168 148.1L153.6 162.5M162.3 144.8L132.2 174.9M156.5 141.5L123.9 174.1M150.8 138.2L118.2 170.8M145.1 134.9L112.5 167.5M139.3 131.6L106.7 164.2M133.6 128.3L101 160.9M125.3 127.5L95.2 157.5M103.9 139.8L89.5 154.2"
      }
    ];
    GROUND = [
      "M185.5 161.2L184 161.6L182.5 161.2L133.6 132.9L132.9 132.1L133.6 131.2L174.8 107.5L177 106.4L179.7 105.7L182.5 105.3L185.5 105.3L188.3 105.7L190.9 106.4L193.2 107.5L234.4 131.2L235 132.1L234.4 132.9Z",
      "M240.7 193.1L239.2 193.4L237.7 193.1L188.8 164.8L188.2 164L188.8 163.1L237.7 134.9L239.2 134.5L240.7 134.9L281.9 158.6L283.7 160L285 161.5L285.6 163.1L285.6 164.8L285 166.5L283.7 168L281.9 169.3Z",
      "M193.2 220.5L190.9 221.6L188.3 222.3L185.5 222.7L182.5 222.7L179.7 222.3L177 221.6L174.8 220.5L133.6 196.7L132.9 195.9L133.6 195L182.5 166.8L184 166.4L185.5 166.8L234.4 195L235 195.9L234.4 196.7Z",
      "M130.2 193.1L128.8 193.4L127.3 193.1L86.1 169.3L84.3 168L83 166.5L82.3 164.8L82.3 163.1L83 161.5L84.3 160L86.1 158.6L127.3 134.9L128.8 134.5L130.2 134.9L179.2 163.1L179.8 164L179.2 164.8Z"
    ];
    Scene = ({
      name,
      children
    }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 240",
        className: `cei-ill cei-ill-s-${name}`,
        "aria-hidden": "true",
        focusable: "false",
        children
      }
    );
    Ground = ({ without }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "path",
      {
        className: "cei-ill-sh",
        d: GROUND.filter((_, i) => i !== without).join("")
      }
    );
    Faces = ({
      g,
      tone,
      fill,
      marked
    }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { className: `cei-ill-${tone}l`, d: g.l }),
      g.m && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { className: `cei-ill-${tone}m`, d: g.m }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { className: `cei-ill-${tone}r`, d: g.r }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { className: `cei-ill-${tone}t`, d: g.top }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { className: `cei-ill-${tone}e`, d: g.top }),
      fill === "curvas" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { className: `cei-ill-${tone}c`, d: g.contours }),
      fill === "trama" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { className: "cei-ill-nh", d: g.hatch }),
      marked && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { className: "cei-ill-lin", d: g.top })
    ] });
    Quad = ({
      i,
      tone = "n",
      under,
      fill = "curvas",
      motion,
      marked
    }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { className: `cei-ill-q cei-ill-q${i}${motion ? ` cei-ill-mv-${motion}` : ""}`, children: [
      under && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faces, { g: QUADS[i], tone: under, fill }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", { className: under ? "cei-ill-over" : void 0, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faces, { g: QUADS[i], tone, fill, marked }) })
    ] });
    Plancha = ({
      tone,
      under,
      fill,
      motion,
      without,
      marked
    }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: PAINT.filter((i) => i !== without).map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Quad,
      {
        i,
        tone,
        under,
        fill,
        motion,
        marked
      },
      i
    )) });
    Slots = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "path",
      {
        className: "cei-ill-slot",
        d: "M185.5 154.3L184 154.6L182.5 154.3L136.3 127.6L135.7 126.8L136.3 125.9L176.1 102.9L178.1 102L180.3 101.4L182.7 101.1L185.2 101.1L187.7 101.4L189.9 102L191.8 102.9L231.6 125.9L232.3 126.8L231.6 127.6ZM240.7 186.2L239.2 186.5L237.7 186.2L191.6 159.5L191 158.6L191.6 157.8L237.7 131.1L239.2 130.8L240.7 131.1L280.5 154.1L282.1 155.2L283.1 156.5L283.7 157.9L283.7 159.4L283.1 160.8L282.1 162.1L280.5 163.2ZM130.2 186.2L128.8 186.5L127.3 186.2L87.5 163.2L85.9 162.1L84.8 160.8L84.3 159.4L84.3 157.9L84.8 156.5L85.9 155.2L87.5 154.1L127.3 131.1L128.8 130.8L130.2 131.1L176.4 157.8L177 158.6L176.4 159.5ZM191.8 214.4L189.9 215.3L187.7 215.9L185.2 216.2L182.7 216.2L180.3 215.9L178.1 215.3L176.1 214.4L136.3 191.4L135.7 190.5L136.3 189.7L182.5 163L184 162.7L185.5 163L231.6 189.7L232.3 190.5L231.6 191.4Z"
      }
    );
    LEDS = [
      { u: 0, cx: 56.5, cy: 107.1 },
      { u: 1, cx: 56.5, cy: 95.4 },
      { u: 2, cx: 56.5, cy: 83.7 }
    ];
    Leds = ({ led, was }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: LEDS.map(({ u, cx, cy }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "g",
      {
        className: `cei-ill-led cei-ill-led-${led} cei-ill-u${u}${was ? " cei-ill-was" : ""}`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { className: "cei-ill-halo", cx, cy, r: 3.8 }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { className: "cei-ill-dot", cx, cy, r: 1.9 })
        ]
      },
      u
    )) });
    Server = ({
      led,
      was,
      file,
      ghost,
      port
    }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          className: "cei-ill-sh",
          d: "M63.5 119.5L61.1 120L58.8 119.5L35.7 106.1L34.8 104.8L35.7 103.5L64.4 86.9L66.7 86.4L69 86.9L92.1 100.3L93 101.6L92.1 102.9Z"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          className: "cei-ill-dl",
          d: "M35.7 100.8L34.8 99.5L34.8 64.3L35.7 65.6ZM58.8 114.1L35.7 100.8L35.7 65.6L58.8 78.9ZM61.1 114.7L58.8 114.1L58.8 78.9L61.1 79.5Z"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          className: "cei-ill-dr",
          d: "M93 96.3L92.1 97.6L92.1 62.4L93 61.1ZM92.1 97.6L63.5 114.1L63.5 78.9L92.1 62.4ZM63.5 114.1L61.1 114.7L61.1 79.5L63.5 78.9Z"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          className: "cei-ill-dt",
          d: "M63.5 78.9L61.1 79.5L58.8 78.9L35.7 65.6L34.8 64.3L35.7 62.9L64.4 46.4L66.7 45.8L69 46.4L92.1 59.7L93 61.1L92.1 62.4Z"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          className: "cei-ill-de",
          d: "M63.5 78.9L61.1 79.5L58.8 78.9L35.7 65.6L34.8 64.3L35.7 62.9L64.4 46.4L66.7 45.8L69 46.4L92.1 59.7L93 61.1L92.1 62.4Z"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          className: "cei-ill-dsm",
          d: "M34.4 88.3L61.1 103.7L93.5 85.1M34.4 76.5L61.1 92L93.5 73.3"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          className: "cei-ill-ds",
          d: "M36.7 98.1L43.1 101.9L43.1 96.9L36.7 93.2ZM45 102.9L51.4 106.7L51.4 101.7L45 98ZM36.7 86.4L43.1 90.1L43.1 85.2L36.7 81.5ZM45 91.2L51.4 94.9L51.4 90L45 86.3ZM36.7 74.7L43.1 78.4L43.1 73.5L36.7 69.8ZM45 79.5L51.4 83.2L51.4 78.3L45 74.6ZM82 101.3L73.5 106.2L73.5 100.3L82 95.4Z"
        }
      ),
      port && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { className: "cei-ill-port", d: "M74 105L82.5 100.1L82.5 102.9L74 107.8Z" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leds, { led }),
      was && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leds, { led: "work", was: true }),
      file && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "path",
          {
            className: "cei-ill-fsh",
            d: "M72.2 68.5L70.4 69L68.5 68.5L55.6 61.1L54.8 60L55.6 58.9L57.5 57.9L59.3 57.4L61.1 57.9L74.1 65.3L74.8 66.4L74.1 67.5Z"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { className: "cei-ill-mv-feed", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "path",
            {
              className: "cei-ill-ft",
              d: "M55.6 41.9L72.2 51.5L72.2 27.5L67.1 18.7L55.6 12Z"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { className: "cei-ill-ff", d: "M72.2 27.5L67.1 24.5L67.1 18.7Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "path",
            {
              className: "cei-ill-fl",
              d: "M57.9 20.3L69 26.7M57.9 24.5L65.3 28.8M60.7 30.4L69.9 35.7M60.7 34.7L66.2 37.9M57.9 37.3L68.1 43.2"
            }
          )
        ] })
      ] }),
      ghost && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { className: "cei-ill-mv-ghost", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "path",
          {
            className: "cei-ill-gp",
            d: "M55.6 41.9L72.2 51.5L72.2 27.5L67.1 18.7L55.6 12Z"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { className: "cei-ill-gp", d: "M72.2 27.5L67.1 24.5L67.1 18.7" })
      ] })
    ] });
    CHANNEL = {
      whole: {
        l: "M74.4 108.8L74.1 108.3L74.1 106.6L74.4 107.1ZM117.9 133.9L74.4 108.8L74.4 107.1L117.9 132.2ZM118.8 134.1L117.9 133.9L117.9 132.2L118.8 132.4Z",
        r: "M126.7 129.5L126.4 130.1L126.4 128.4L126.7 127.8ZM126.4 130.1L119.7 133.9L119.7 132.2L126.4 128.4ZM119.7 133.9L118.8 134.1L118.8 132.4L119.7 132.2Z",
        top: "M119.7 132.2L118.8 132.4L117.9 132.2L74.4 107.1L74.1 106.6L74.4 106.1L81.1 102.2L82 102L82.9 102.2L126.4 127.3L126.7 127.8L126.4 128.4Z",
        line: "M79.6 105.2L121.2 129.2"
      },
      cut: {
        l: "M74.4 108.8L74.1 108.3L74.1 106.6L74.4 107.1ZM90.1 117.9L74.4 108.8L74.4 107.1L90.1 116.2ZM91.1 118.1L90.1 117.9L90.1 116.2L91.1 116.4ZM103.1 125.4L102.7 124.8L102.7 123.1L103.1 123.7ZM117.9 133.9L103.1 125.4L103.1 123.7L117.9 132.2ZM118.8 134.1L117.9 133.9L117.9 132.2L118.8 132.4Z",
        r: "M99 113.5L98.6 114.1L98.6 112.4L99 111.8ZM98.6 114.1L92 117.9L92 116.2L98.6 112.4ZM92 117.9L91.1 118.1L91.1 116.4L92 116.2ZM126.7 129.5L126.4 130.1L126.4 128.4L126.7 127.8ZM126.4 130.1L119.7 133.9L119.7 132.2L126.4 128.4ZM119.7 133.9L118.8 134.1L118.8 132.4L119.7 132.2Z",
        top: "M92 116.2L91.1 116.4L90.1 116.2L74.4 107.1L74.1 106.6L74.4 106.1L81.1 102.2L82 102L82.9 102.2L98.6 111.3L99 111.8L98.6 112.4ZM119.7 132.2L118.8 132.4L117.9 132.2L103.1 123.7L102.7 123.1L103.1 122.6L109.7 118.8L110.7 118.5L111.6 118.8L126.4 127.3L126.7 127.8L126.4 128.4Z",
        line: "M79.6 105.2L93.5 113.2M108.3 121.7L121.2 129.2"
      }
    };
    UNPLUG = [10.4, 6];
    Channel = ({
      lit,
      cut,
      unplugged,
      was
    }) => {
      const c = CHANNEL[cut ? "cut" : "whole"];
      const body = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { className: "cei-ill-cl", d: c.l }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { className: "cei-ill-cr", d: c.r }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { className: "cei-ill-ct", d: c.top }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { className: lit ? "cei-ill-clit" : "cei-ill-cline", d: c.line }),
        was && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { className: "cei-ill-clit cei-ill-was", d: c.line })
      ] });
      if (!unplugged) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", { children: body });
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", { transform: `translate(${UNPLUG[0]} ${UNPLUG[1]})`, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", { className: "cei-ill-mv-unplug", children: body }) });
    };
    PACKETS = [0, 1, 2];
    Packets = ({
      motion,
      count
    }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: PACKETS.slice(0, count).map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", { className: `cei-ill-mv-${motion} cei-ill-pk${k}`, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "path",
      {
        className: "cei-ill-pk",
        d: "M82.2 107.8L81.3 108L80.4 107.8L77 105.9L76.7 105.3L77 104.8L80.4 102.9L81.3 102.6L82.2 102.9L85.5 104.8L85.9 105.3L85.5 105.9Z"
      }
    ) }, k)) });
    p = (x, y) => `${Math.round(x * 10) / 10} ${Math.round(y * 10) / 10}`;
    DEFAULT_SYMBOL = {
      ok: "check",
      er: "alert",
      in: "question"
    };
    Glyph = ({
      symbol,
      kind,
      x,
      y,
      r
    }) => {
      switch (symbol) {
        case "check":
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "path",
            {
              className: "cei-ill-sym cei-ill-mv-draw",
              pathLength: 1,
              d: `M${p(x - r * 0.4, y + r * 0.02)}L${p(x - r * 0.1, y + r * 0.31)}L${p(x + r * 0.42, y - r * 0.3)}`
            }
          );
        case "alert":
          return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { className: "cei-ill-sym", d: `M${p(x, y - r * 0.44)}L${p(x, y + r * 0.1)}` }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { className: "cei-ill-symf", cx: x, cy: y + r * 0.42, r: r * 0.11 })
          ] });
        case "question":
          return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "path",
              {
                className: "cei-ill-sym",
                d: `M${p(x - r * 0.26, y - r * 0.27)}A${p(r * 0.27, r * 0.27)} 0 1 1 ${p(x + r * 0.02, y + r * 0.07)}L${p(x, y + r * 0.13)}`
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { className: "cei-ill-symf", cx: x, cy: y + r * 0.42, r: r * 0.11 })
          ] });
        case "block": {
          const k = r * 0.27;
          return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { className: "cei-ill-sym", cx: x, cy: y, r: r * 0.4 }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { className: "cei-ill-sym", d: `M${p(x + k, y - k)}L${p(x - k, y + k)}` })
          ] });
        }
        case "lock":
          return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "path",
              {
                className: "cei-ill-sym cei-ill-shackle",
                style: { strokeWidth: r * 0.13 },
                d: `M${p(x - r * 0.2, y - r * 0.08)}L${p(x - r * 0.2, y - r * 0.2)}A${p(r * 0.2, r * 0.2)} 0 0 1 ${p(x + r * 0.2, y - r * 0.2)}L${p(x + r * 0.2, y - r * 0.08)}`
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "rect",
              {
                className: "cei-ill-symf",
                x: x - r * 0.37,
                y: y - r * 0.1,
                width: r * 0.74,
                height: r * 0.56,
                rx: r * 0.09
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { className: `cei-ill-${kind}`, cx: x, cy: y + r * 0.16, r: r * 0.09 })
          ] });
        case "login":
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "path",
            {
              className: "cei-ill-sym",
              style: { strokeWidth: r * 0.15 },
              d: `M${p(x + r * 0.02, y - r * 0.4)}L${p(x + r * 0.3, y - r * 0.4)}Q${p(x + r * 0.4, y - r * 0.4)} ${p(x + r * 0.4, y - r * 0.3)}L${p(x + r * 0.4, y + r * 0.3)}Q${p(x + r * 0.4, y + r * 0.4)} ${p(x + r * 0.3, y + r * 0.4)}L${p(x + r * 0.02, y + r * 0.4)}M${p(x - r * 0.42, y)}L${p(x + r * 0.12, y)}M${p(x - r * 0.1, y - r * 0.22)}L${p(x + r * 0.12, y)}L${p(x - r * 0.1, y + r * 0.22)}`
            }
          );
      }
    };
    Badge = ({
      kind,
      symbol,
      x,
      y,
      r = 25.6,
      shadow: [sx, sy, rx, ry]
    }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { className: "cei-ill-bdg", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", { className: "cei-ill-sh2", cx: sx, cy: sy, rx, ry }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { className: "cei-ill-mv-pop", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { className: `cei-ill-${kind}2`, cx: x, cy: y + r * 0.133, r }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { className: `cei-ill-${kind}`, cx: x, cy: y, r }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          Glyph,
          {
            symbol: symbol != null ? symbol : kind === "wa" ? "alert" : DEFAULT_SYMBOL[kind],
            kind,
            x,
            y,
            r
          }
        )
      ] })
    ] });
  }
});

// src/illustrations/scenes/IllustrationProcessing.tsx
var IllustrationProcessing_exports = {};
__export(IllustrationProcessing_exports, {
  IllustrationProcessing: () => IllustrationProcessing,
  default: () => IllustrationProcessing_default
});
var import_jsx_runtime2, IllustrationProcessing, IllustrationProcessing_default;
var init_IllustrationProcessing = __esm({
  "src/illustrations/scenes/IllustrationProcessing.tsx"() {
    "use strict";
    init_parts();
    import_jsx_runtime2 = require("react/jsx-runtime");
    IllustrationProcessing = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Scene, { name: "processing", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Channel, { lit: true }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Packets, { motion: "flow", count: 3 }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Server, { led: "work", file: true }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Ground, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Plancha, { tone: "b", under: "n", motion: "proc" })
    ] });
    IllustrationProcessing_default = IllustrationProcessing;
  }
});

// src/illustrations/scenes/IllustrationOk.tsx
var IllustrationOk_exports = {};
__export(IllustrationOk_exports, {
  IllustrationOk: () => IllustrationOk,
  default: () => IllustrationOk_default
});
var import_jsx_runtime3, IllustrationOk, IllustrationOk_default;
var init_IllustrationOk = __esm({
  "src/illustrations/scenes/IllustrationOk.tsx"() {
    "use strict";
    init_parts();
    import_jsx_runtime3 = require("react/jsx-runtime");
    IllustrationOk = () => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(Scene, { name: "ok", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Channel, { lit: true }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Server, { led: "ok", was: true }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Ground, {}),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Plancha, { tone: "b", under: "n", motion: "snap" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Badge, { kind: "ok", x: 184, y: 105.3, shadow: [184, 151.2, 22.2, 12.8] })
    ] });
    IllustrationOk_default = IllustrationOk;
  }
});

// src/illustrations/scenes/IllustrationTroubleshooting.tsx
var IllustrationTroubleshooting_exports = {};
__export(IllustrationTroubleshooting_exports, {
  IllustrationTroubleshooting: () => IllustrationTroubleshooting,
  default: () => IllustrationTroubleshooting_default
});
var import_jsx_runtime4, IllustrationTroubleshooting, IllustrationTroubleshooting_default;
var init_IllustrationTroubleshooting = __esm({
  "src/illustrations/scenes/IllustrationTroubleshooting.tsx"() {
    "use strict";
    init_parts();
    import_jsx_runtime4 = require("react/jsx-runtime");
    IllustrationTroubleshooting = () => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Scene, { name: "troubleshooting", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Channel, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Server, { led: "err", was: true }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Ground, { without: 2 }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Plancha, { tone: "b", under: "n", motion: "pass", without: 2 }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { className: "cei-ill-mv-reject", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "path",
          {
            className: "cei-ill-sh",
            d: "M193.2 225.8L190.9 226.9L188.3 227.6L185.5 228L182.5 228L179.7 227.6L177 226.9L174.8 225.8L133.6 202.1L132.9 201.2L133.6 200.3L182.5 172.1L184 171.7L185.5 172.1L234.4 200.3L235 201.2L234.4 202.1Z"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("g", { transform: "translate(0 4.5)", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Quad, { i: 2, tone: "x", under: "n" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Badge, { kind: "er", x: 184, y: 148.9, shadow: [184, 188.4, 18.3, 10.6] })
    ] });
    IllustrationTroubleshooting_default = IllustrationTroubleshooting;
  }
});

// src/illustrations/scenes/IllustrationNoData.tsx
var IllustrationNoData_exports = {};
__export(IllustrationNoData_exports, {
  IllustrationNoData: () => IllustrationNoData,
  default: () => IllustrationNoData_default
});
var import_jsx_runtime5, IllustrationNoData, IllustrationNoData_default;
var init_IllustrationNoData = __esm({
  "src/illustrations/scenes/IllustrationNoData.tsx"() {
    "use strict";
    init_parts();
    import_jsx_runtime5 = require("react/jsx-runtime");
    IllustrationNoData = () => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Scene, { name: "no-data", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Channel, {}),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Server, { led: "ok" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Ground, {}),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Plancha, { fill: "trama", motion: "drop" })
    ] });
    IllustrationNoData_default = IllustrationNoData;
  }
});

// src/illustrations/scenes/IllustrationSearchEmpty.tsx
var IllustrationSearchEmpty_exports = {};
__export(IllustrationSearchEmpty_exports, {
  IllustrationSearchEmpty: () => IllustrationSearchEmpty,
  default: () => IllustrationSearchEmpty_default
});
var import_jsx_runtime6, IllustrationSearchEmpty, IllustrationSearchEmpty_default;
var init_IllustrationSearchEmpty = __esm({
  "src/illustrations/scenes/IllustrationSearchEmpty.tsx"() {
    "use strict";
    init_parts();
    import_jsx_runtime6 = require("react/jsx-runtime");
    IllustrationSearchEmpty = () => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(Scene, { name: "search-empty", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Channel, {}),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Server, { led: "ok" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Ground, {}),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Plancha, {}),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("g", { className: "cei-ill-mv-sweep", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("ellipse", { className: "cei-ill-sh", cx: 184, cy: 123.5, rx: 9.1, ry: 5.3 }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "path",
          {
            className: "cei-ill-hl",
            d: "M234.2 149L203.5 127.4L203.5 123.2L234.2 144.8Z"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "path",
          {
            className: "cei-ill-hr",
            d: "M244.7 144.1L234.2 149L234.2 144.8L244.7 139.8Z"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "path",
          {
            className: "cei-ill-ht",
            d: "M214.1 118.2L244.7 139.8L234.2 144.8L203.5 123.2Z"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "path",
          {
            className: "cei-ill-sl",
            d: "M141.1 109.9L140.9 107.5L140.9 102.1L141.1 104.6ZM141.7 112.3L141.1 109.9L141.1 104.6L141.7 107ZM142.7 114.7L141.7 112.3L141.7 107L142.7 109.3ZM144.2 117L142.7 114.7L142.7 109.3L144.2 111.6ZM146 119.2L144.2 117L144.2 111.6L146 113.9ZM148.1 121.3L146 119.2L146 113.9L148.1 115.9ZM150.7 123.2L148.1 121.3L148.1 115.9L150.7 117.9ZM153.5 125.1L150.7 123.2L150.7 117.9L153.5 119.7ZM156.6 126.7L153.5 125.1L153.5 119.7L156.6 121.4ZM160 128.1L156.6 126.7L156.6 121.4L160 122.8ZM163.7 129.4L160 128.1L160 122.8L163.7 124.1ZM167.5 130.4L163.7 129.4L163.7 124.1L167.5 125.1ZM171.5 131.3L167.5 130.4L167.5 125.1L171.5 125.9Z"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "path",
          {
            className: "cei-ill-sm",
            d: "M196.5 131.3L192.4 131.9L192.4 126.5L196.5 125.9ZM175.6 131.9L171.5 131.3L171.5 125.9L175.6 126.5ZM179.8 132.2L175.6 131.9L175.6 126.5L179.8 126.9ZM192.4 131.9L188.2 132.2L188.2 126.9L192.4 126.5ZM188.2 132.2L184 132.3L184 127L188.2 126.9ZM184 132.3L179.8 132.2L179.8 126.9L184 127Z"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "path",
          {
            className: "cei-ill-sr",
            d: "M227.1 107.5L226.9 109.9L226.9 104.6L227.1 102.1ZM226.9 109.9L226.3 112.3L226.3 107L226.9 104.6ZM226.3 112.3L225.2 114.7L225.2 109.3L226.3 107ZM225.2 114.7L223.8 117L223.8 111.6L225.2 109.3ZM223.8 117L222 119.2L222 113.9L223.8 111.6ZM222 119.2L219.8 121.3L219.8 115.9L222 113.9ZM219.8 121.3L217.3 123.2L217.3 117.9L219.8 115.9ZM217.3 123.2L214.5 125.1L214.5 119.7L217.3 117.9ZM214.5 125.1L211.3 126.7L211.3 121.4L214.5 119.7ZM211.3 126.7L207.9 128.1L207.9 122.8L211.3 121.4ZM207.9 128.1L204.3 129.4L204.3 124.1L207.9 122.8ZM204.3 129.4L200.5 130.4L200.5 125.1L204.3 124.1ZM200.5 130.4L196.5 131.3L196.5 125.9L200.5 125.1Z"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "path",
          {
            className: "cei-ill-st",
            fillRule: "evenodd",
            d: "M214.5 119.7L211.3 121.4L207.9 122.8L204.3 124.1L200.5 125.1L196.5 125.9L192.4 126.5L188.2 126.9L184 127L179.8 126.9L175.6 126.5L171.5 125.9L167.5 125.1L163.7 124.1L160 122.8L156.6 121.4L153.5 119.7L150.7 117.9L148.1 115.9L146 113.9L144.2 111.6L142.7 109.3L141.7 107L141.1 104.6L140.9 102.1L141.1 99.7L141.7 97.3L142.7 94.9L144.2 92.6L146 90.4L148.1 88.3L150.7 86.3L153.5 84.5L156.6 82.9L160 81.4L163.7 80.2L167.5 79.1L171.5 78.3L175.6 77.7L179.8 77.4L184 77.2L188.2 77.4L192.4 77.7L196.5 78.3L200.5 79.1L204.3 80.2L207.9 81.4L211.3 82.9L214.5 84.5L217.3 86.3L219.8 88.3L222 90.4L223.8 92.6L225.2 94.9L226.3 97.3L226.9 99.7L227.1 102.1L226.9 104.6L226.3 107L225.2 109.3L223.8 111.6L222 113.9L219.8 115.9L217.3 117.9ZM208 116L205.5 117.3L202.9 118.4L200 119.4L197 120.2L193.8 120.9L190.6 121.4L187.3 121.6L184 121.7L180.7 121.6L177.4 121.4L174.1 120.9L171 120.2L168 119.4L165.1 118.4L162.4 117.3L160 116L157.7 114.6L155.8 113L154 111.4L152.6 109.6L151.5 107.8L150.7 105.9L150.2 104L150 102.1L150.2 100.2L150.7 98.3L151.5 96.4L152.6 94.6L154 92.9L155.8 91.2L157.7 89.7L160 88.3L162.4 87L165.1 85.8L168 84.8L171 84L174.1 83.4L177.4 82.9L180.7 82.6L184 82.5L187.3 82.6L190.6 82.9L193.8 83.4L197 84L200 84.8L202.9 85.8L205.5 87L208 88.3L210.2 89.7L212.2 91.2L213.9 92.9L215.4 94.6L216.5 96.4L217.3 98.3L217.8 100.2L218 102.1L217.8 104L217.3 105.9L216.5 107.8L215.4 109.6L213.9 111.4L212.2 113L210.2 114.6Z"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "path",
          {
            className: "cei-ill-lens",
            d: "M208 116L205.5 117.3L202.9 118.4L200 119.4L197 120.2L193.8 120.9L190.6 121.4L187.3 121.6L184 121.7L180.7 121.6L177.4 121.4L174.1 120.9L171 120.2L168 119.4L165.1 118.4L162.4 117.3L160 116L157.7 114.6L155.8 113L154 111.4L152.6 109.6L151.5 107.8L150.7 105.9L150.2 104L150 102.1L150.2 100.2L150.7 98.3L151.5 96.4L152.6 94.6L154 92.9L155.8 91.2L157.7 89.7L160 88.3L162.4 87L165.1 85.8L168 84.8L171 84L174.1 83.4L177.4 82.9L180.7 82.6L184 82.5L187.3 82.6L190.6 82.9L193.8 83.4L197 84L200 84.8L202.9 85.8L205.5 87L208 88.3L210.2 89.7L212.2 91.2L213.9 92.9L215.4 94.6L216.5 96.4L217.3 98.3L217.8 100.2L218 102.1L217.8 104L217.3 105.9L216.5 107.8L215.4 109.6L213.9 111.4L212.2 113L210.2 114.6Z"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "path",
          {
            className: "cei-ill-gh",
            d: "M214.6 103.2L200.9 116.9M213.3 96.9L190.8 119.4M210 92.7L182.9 119.8M205.6 89.5L175.9 119.2M200.5 87.2L169.8 117.8M194.6 85.5L164.3 115.7M188 84.5L159.6 112.9M180.5 84.5L155.8 109.2M171.5 85.9L153.5 104"
          }
        )
      ] })
    ] });
    IllustrationSearchEmpty_default = IllustrationSearchEmpty;
  }
});

// src/illustrations/scenes/IllustrationLoadError.tsx
var IllustrationLoadError_exports = {};
__export(IllustrationLoadError_exports, {
  IllustrationLoadError: () => IllustrationLoadError,
  default: () => IllustrationLoadError_default
});
var import_jsx_runtime7, IllustrationLoadError, IllustrationLoadError_default;
var init_IllustrationLoadError = __esm({
  "src/illustrations/scenes/IllustrationLoadError.tsx"() {
    "use strict";
    init_parts();
    import_jsx_runtime7 = require("react/jsx-runtime");
    IllustrationLoadError = () => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(Scene, { name: "load-error", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Channel, { cut: true }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Packets, { motion: "stuck", count: 2 }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Server, { led: "err" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Slots, {}),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Badge, { kind: "er", x: 184, y: 111.7, shadow: [184, 158.6, 22.2, 12.8] })
    ] });
    IllustrationLoadError_default = IllustrationLoadError;
  }
});

// src/illustrations/scenes/IllustrationNotFound.tsx
var IllustrationNotFound_exports = {};
__export(IllustrationNotFound_exports, {
  IllustrationNotFound: () => IllustrationNotFound,
  default: () => IllustrationNotFound_default
});
var import_jsx_runtime8, IllustrationNotFound, IllustrationNotFound_default;
var init_IllustrationNotFound = __esm({
  "src/illustrations/scenes/IllustrationNotFound.tsx"() {
    "use strict";
    init_parts();
    import_jsx_runtime8 = require("react/jsx-runtime");
    IllustrationNotFound = () => /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(Scene, { name: "not-found", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Channel, {}),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Server, { led: "ok", was: true, ghost: true }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Ground, {}),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Plancha, {}),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Badge, { kind: "in", x: 184, y: 105.3, shadow: [184, 151.2, 22.2, 12.8] })
    ] });
    IllustrationNotFound_default = IllustrationNotFound;
  }
});

// src/illustrations/scenes/IllustrationForbidden.tsx
var IllustrationForbidden_exports = {};
__export(IllustrationForbidden_exports, {
  IllustrationForbidden: () => IllustrationForbidden,
  default: () => IllustrationForbidden_default
});
var import_jsx_runtime9, IllustrationForbidden, IllustrationForbidden_default;
var init_IllustrationForbidden = __esm({
  "src/illustrations/scenes/IllustrationForbidden.tsx"() {
    "use strict";
    init_parts();
    import_jsx_runtime9 = require("react/jsx-runtime");
    IllustrationForbidden = () => /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(Scene, { name: "forbidden", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Channel, { was: true }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Packets, { motion: "bounce", count: 2 }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Server, { led: "ok" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Ground, {}),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Plancha, { marked: true }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Badge, { kind: "wa", symbol: "block", x: 184, y: 105.3, shadow: [184, 151.2, 22.2, 12.8] })
    ] });
    IllustrationForbidden_default = IllustrationForbidden;
  }
});

// src/illustrations/scenes/IllustrationRestricted.tsx
var IllustrationRestricted_exports = {};
__export(IllustrationRestricted_exports, {
  IllustrationRestricted: () => IllustrationRestricted,
  default: () => IllustrationRestricted_default
});
var import_jsx_runtime10, IllustrationRestricted, IllustrationRestricted_default;
var init_IllustrationRestricted = __esm({
  "src/illustrations/scenes/IllustrationRestricted.tsx"() {
    "use strict";
    init_parts();
    import_jsx_runtime10 = require("react/jsx-runtime");
    IllustrationRestricted = () => /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(Scene, { name: "restricted", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Channel, { lit: true }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Server, { led: "ok" }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Ground, {}),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("g", { className: "cei-ill-mv-press", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Plancha, { tone: "b", under: "n", motion: "snap", marked: true }) }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Badge, { kind: "wa", symbol: "lock", x: 184, y: 105.3, shadow: [184, 151.2, 22.2, 12.8] })
    ] });
    IllustrationRestricted_default = IllustrationRestricted;
  }
});

// src/illustrations/scenes/IllustrationSessionClosed.tsx
var IllustrationSessionClosed_exports = {};
__export(IllustrationSessionClosed_exports, {
  IllustrationSessionClosed: () => IllustrationSessionClosed,
  default: () => IllustrationSessionClosed_default
});
var import_jsx_runtime11, IllustrationSessionClosed, IllustrationSessionClosed_default;
var init_IllustrationSessionClosed = __esm({
  "src/illustrations/scenes/IllustrationSessionClosed.tsx"() {
    "use strict";
    init_parts();
    import_jsx_runtime11 = require("react/jsx-runtime");
    IllustrationSessionClosed = () => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(Scene, { name: "session-closed", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Channel, { unplugged: true, was: true }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Server, { led: "ok", port: true }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Slots, {}),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("g", { className: "cei-ill-mv-vanish", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Ground, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Plancha, { tone: "b", motion: "sink" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Badge, { kind: "wa", symbol: "login", x: 184, y: 111.7, shadow: [184, 158.6, 22.2, 12.8] })
    ] });
    IllustrationSessionClosed_default = IllustrationSessionClosed;
  }
});

// src/illustrations.ts
var illustrations_exports = {};
__export(illustrations_exports, {
  AppIllustration: () => AppIllustration,
  ILLUSTRATION_NAMES: () => ILLUSTRATION_NAMES
});
module.exports = __toCommonJS(illustrations_exports);

// src/illustrations/AppIllustration.tsx
var import_material = require("@mui/material");
var import_react = __toESM(require("react"));
var import_jsx_runtime12 = require("react/jsx-runtime");
var DEFAULT_TITLES = {
  processing: "Procesando",
  ok: "Listo",
  troubleshooting: "Error en el proceso",
  "no-data": "Sin datos",
  "search-empty": "Sin resultados de b\xFAsqueda",
  "load-error": "No se pudo cargar",
  "not-found": "P\xE1gina no encontrada",
  forbidden: "Sin permiso",
  restricted: "Registro restringido",
  "session-closed": "Sesi\xF3n cerrada"
};
var ILLUSTRATION_NAMES = Object.keys(DEFAULT_TITLES);
var LAZY_MAP = {
  processing: (0, import_react.lazy)(() => Promise.resolve().then(() => (init_IllustrationProcessing(), IllustrationProcessing_exports))),
  ok: (0, import_react.lazy)(() => Promise.resolve().then(() => (init_IllustrationOk(), IllustrationOk_exports))),
  troubleshooting: (0, import_react.lazy)(() => Promise.resolve().then(() => (init_IllustrationTroubleshooting(), IllustrationTroubleshooting_exports))),
  "no-data": (0, import_react.lazy)(() => Promise.resolve().then(() => (init_IllustrationNoData(), IllustrationNoData_exports))),
  "search-empty": (0, import_react.lazy)(() => Promise.resolve().then(() => (init_IllustrationSearchEmpty(), IllustrationSearchEmpty_exports))),
  "load-error": (0, import_react.lazy)(() => Promise.resolve().then(() => (init_IllustrationLoadError(), IllustrationLoadError_exports))),
  "not-found": (0, import_react.lazy)(() => Promise.resolve().then(() => (init_IllustrationNotFound(), IllustrationNotFound_exports))),
  forbidden: (0, import_react.lazy)(() => Promise.resolve().then(() => (init_IllustrationForbidden(), IllustrationForbidden_exports))),
  restricted: (0, import_react.lazy)(() => Promise.resolve().then(() => (init_IllustrationRestricted(), IllustrationRestricted_exports))),
  "session-closed": (0, import_react.lazy)(() => Promise.resolve().then(() => (init_IllustrationSessionClosed(), IllustrationSessionClosed_exports)))
};
var IllustrationErrorBoundary = class extends import_react.default.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error) {
    console.warn(
      "No se pudo cargar la ilustraci\xF3n; la p\xE1gina contin\xFAa sin ella:",
      error instanceof Error ? error.message : error
    );
  }
  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
};
var AppIllustration = ({
  name,
  size = "large",
  title,
  sx
}) => {
  var _a;
  const accessibleTitle = (_a = title != null ? title : DEFAULT_TITLES[name]) != null ? _a : "Ilustraci\xF3n";
  const LazyComponent = LAZY_MAP[name];
  return (
    // Con otra ilustración el límite empieza de cero, aunque la anterior fallara.
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(IllustrationErrorBoundary, { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      import_material.Box,
      {
        component: "div",
        role: "img",
        "aria-label": accessibleTitle,
        sx: [
          {
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            lineHeight: 0,
            flexShrink: 0,
            boxSizing: "border-box",
            "& svg": {
              display: "block",
              width: "100%",
              height: "auto"
            }
          },
          size === "large" ? {
            width: "100%",
            maxWidth: { xs: 312, sm: 360, md: 384 },
            height: { xs: 216, sm: 240, md: 264 },
            minHeight: { xs: 216, sm: 240, md: 264 },
            maxHeight: { xs: 216, sm: 240, md: 264 },
            mx: "auto",
            overflow: "hidden",
            "& svg": {
              width: "auto",
              maxWidth: "100%",
              maxHeight: { xs: 216, sm: 240, md: 264 }
            }
          } : {
            width: "100%",
            maxWidth: 192,
            height: 132,
            minHeight: 132,
            maxHeight: 132,
            mx: "auto",
            mb: 1,
            overflow: "hidden",
            "& svg": {
              width: "auto",
              maxWidth: "100%",
              maxHeight: 132
            }
          },
          ...Array.isArray(sx) ? sx : [sx]
        ],
        children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_material.Box, { sx: { width: "100%", height: "100%" } }), children: LazyComponent ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(LazyComponent, {}) : null })
      }
    ) }, name)
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AppIllustration,
  ILLUSTRATION_NAMES
});
