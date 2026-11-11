// src/illustrations/AppIllustration.tsx
import { Box } from "@mui/material";
import React, { Suspense, lazy } from "react";
import { jsx } from "react/jsx-runtime";
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
  processing: lazy(() => import("./IllustrationProcessing-RQZI6T43.mjs")),
  ok: lazy(() => import("./IllustrationOk-M7EDV4LO.mjs")),
  troubleshooting: lazy(() => import("./IllustrationTroubleshooting-4C5OST46.mjs")),
  "no-data": lazy(() => import("./IllustrationNoData-GPRZ7ZME.mjs")),
  "search-empty": lazy(() => import("./IllustrationSearchEmpty-C3ZEJCL4.mjs")),
  "load-error": lazy(() => import("./IllustrationLoadError-DWUSDVDX.mjs")),
  "not-found": lazy(() => import("./IllustrationNotFound-R5JIOYFN.mjs")),
  forbidden: lazy(() => import("./IllustrationForbidden-BLNNWFWZ.mjs")),
  restricted: lazy(() => import("./IllustrationRestricted-6KBZUMFZ.mjs")),
  "session-closed": lazy(() => import("./IllustrationSessionClosed-CEL4LGIN.mjs"))
};
var IllustrationErrorBoundary = class extends React.Component {
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
    /* @__PURE__ */ jsx(IllustrationErrorBoundary, { children: /* @__PURE__ */ jsx(
      Box,
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
        children: /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx(Box, { sx: { width: "100%", height: "100%" } }), children: LazyComponent ? /* @__PURE__ */ jsx(LazyComponent, {}) : null })
      }
    ) }, name)
  );
};
export {
  AppIllustration,
  ILLUSTRATION_NAMES
};
