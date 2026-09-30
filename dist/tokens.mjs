import {
  animations,
  borderRadius,
  brandColors,
  fontFamilies,
  fontSizes,
  glassEffect,
  shadows,
  spacingConstants,
  transitionStyles
} from "./chunk-JIAZ5PY5.mjs";

// src/tokens/semantic.ts
var semanticRoles = [
  {
    title: "Superficies",
    roles: {
      bg: { light: "var(--cei-background-default)", dark: "var(--cei-surface-deep)", comment: "fondo de p\xE1gina" },
      "bg-raised": { light: "var(--cei-background-paper)", dark: "var(--cei-surface-brand)", comment: "tarjetas, formularios" },
      "bg-sunken": { light: "var(--cei-background-subtle)", dark: "var(--cei-surface-slate)", comment: "secciones alternadas" },
      "bg-inverse": { light: "var(--cei-contrast)", comment: "banners: estable en ambos temas" },
      "bg-footer": { light: "var(--cei-contrast)", dark: "var(--cei-surface-deep)", comment: "footer" },
      "bg-glass-soft": { light: "color-mix(in srgb, var(--cei-bg-raised) 55%, transparent)", comment: "vidrio transl\xFAcido suave" },
      "bg-glass": { light: "color-mix(in srgb, var(--cei-bg-raised) 72%, transparent)", comment: "vidrio transl\xFAcido medio" },
      "bg-glass-strong": { light: "color-mix(in srgb, var(--cei-bg-raised) 85%, transparent)", comment: "vidrio transl\xFAcido fuerte" }
    }
  },
  {
    // ── Por qué existe este grupo ─────────────────────────────────────────
    //
    // Un velo oscurece lo que hay detrás para que el texto encima se lea:
    // sobre fotografía, sobre un mapa, o detrás de un modal. No había token,
    // así que cada producto lo escribía a mano — y salió esto, medido sobre
    // los cuatro productos Gaia:
    //
    //   242 literales rgba(), de los cuales 173 son negro o blanco con alfa
    //   60 valores de opacidad DISTINTOS, con `0.3`, `0.30` y `.25`
    //   escritos de tres formas para el mismo número
    //   rgba(0,0,0,0.6) aparece en los CUATRO productos
    //
    // No era dejadez: los tokens se publican como hex, así que
    // `rgba(var(--cei-…), .55)` no existe y copiar el valor era la única
    // salida. La técnica que lo resuelve ya estaba en este repositorio
    // —`color-mix` en cinco variantes de alerta— pero nunca se aplicó aquí.
    // Y el propio sistema hacía lo mismo: `.cei-modal__overlay` llevaba
    // `rgba(15, 23, 42, 0.55)`, que es el token `slate` a mano.
    //
    // Los peldaños salen de los picos reales de uso, no de mi gusto: sobre
    // negro los productos se agrupan en ~0.2, ~0.35 y ~0.6; sobre blanco en
    // ~0.1 y ~0.18. `scrim-strong` en claro reproduce exacto el velo del
    // modal, así que ese componente no mueve un píxel al adoptarlo.
    //
    // En oscuro el velo es MÁS fuerte y sobre `surface-deep`: un velo pensado
    // para separar de un fondo claro se queda corto cuando la interfaz que lo
    // rodea ya es oscura. **Eso es un juicio y hay que verlo con ojos** — la
    // proporción está elegida, no medida.
    //
    // Para el extremo transparente de un degradado NO hay token ni hace
    // falta: `transparent` ya existe. Los 11 `rgba(…, 0)` de los productos
    // son eso.
    title: "Velos (scrim) \u2014 oscurecen lo que hay detr\xE1s para que el texto se lea",
    roles: {
      "scrim-soft": {
        light: "color-mix(in srgb, var(--cei-surface-slate) 20%, transparent)",
        dark: "color-mix(in srgb, var(--cei-surface-deep) 35%, transparent)",
        comment: "insin\xFAa separaci\xF3n: hover sobre tarjeta con imagen"
      },
      scrim: {
        light: "color-mix(in srgb, var(--cei-surface-slate) 35%, transparent)",
        dark: "color-mix(in srgb, var(--cei-surface-deep) 50%, transparent)",
        comment: "velo de uso general sobre imagen o mapa"
      },
      "scrim-strong": {
        light: "color-mix(in srgb, var(--cei-surface-slate) 55%, transparent)",
        dark: "color-mix(in srgb, var(--cei-surface-deep) 68%, transparent)",
        comment: "detr\xE1s de un modal o panel; en claro = el velo hist\xF3rico del modal"
      },
      "scrim-heavy": {
        light: "color-mix(in srgb, var(--cei-surface-slate) 72%, transparent)",
        dark: "color-mix(in srgb, var(--cei-surface-deep) 85%, transparent)",
        comment: "texto largo sobre fotograf\xEDa a sangre; visor a pantalla completa"
      },
      // Este falta en cuanto intentas usar la escalera de verdad, y se
      // descubrió consumiéndola: un velo cuya intensidad la mueve el scroll o
      // un dato NO puede ser un peldaño fijo, y mezclar más un velo que ya
      // está mezclado no da lo que esperas. Lo que necesita el producto es el
      // color SÓLIDO del que están hechos los peldaños, para poner él el
      // porcentaje.
      //
      // Sin esto la única salida era `color-mix` sobre `--cei-surface-deep`, o
      // sea consumir un primitivo — que es justo lo que la regla del sistema
      // prohíbe, y que `verificar.sh` canta. Publicar una escalera sin su base
      // era empujar a saltarse la regla.
      "scrim-base": {
        light: "var(--cei-surface-slate)",
        dark: "var(--cei-surface-deep)",
        comment: "color s\xF3lido del velo: para velos de intensidad variable, con color-mix"
      }
    }
  },
  {
    title: "Texto",
    roles: {
      fg: { light: "var(--cei-text-body)", dark: "var(--cei-text-white)", comment: "texto por defecto" },
      "fg-strong": { light: "var(--cei-text-heading)", dark: "var(--cei-text-white)", comment: "t\xEDtulos / m\xE1ximo \xE9nfasis" },
      "fg-muted": { light: "var(--cei-text-muted)", dark: "var(--cei-text-muted-light)", comment: "secundario / metadatos" },
      "fg-on-inverse": { light: "var(--cei-text-white)", dark: "var(--cei-text-white)", comment: "texto sobre superficie inversa" },
      "fg-on-brand": { light: "var(--cei-text-white)", dark: "var(--cei-text-white)", comment: "texto sobre color de marca" }
    }
  },
  {
    // ── Por qué existe este grupo ─────────────────────────────────────────
    //
    // El badge de estado —`.cei-badge--success` y `<Chip color="success">`—
    // pintaba su texto con el tono crudo sobre un velo del 14 % del mismo
    // tono. Como fondo el tono funciona; como texto no. Medido sobre el velo:
    //
    //   claro    primary 4,45  info 4,24  error 3,89  accent 3,17  warning 2,75  success 2,22
    //   oscuro   warning 4,27  accent 3,53  error 3,12  info 2,69
    //
    // Ninguno llegaba a 4,5:1 en claro, y el verde, el tono de «completado»,
    // se quedaba en la mitad. Los productos lo copiaban tal cual —ili-otl
    // pinta sus estados a 2,22:1— o inventaban otro chip con tonos elegidos a
    // mano, que es justo lo que un sistema de diseño tiene que ahorrar.
    //
    // Estos roles son el tono cuando tiene que leerse: el paso 800 de su
    // familia en claro y el 300 en oscuro —de 6,10 a 9,44:1 sobre el velo, y
    // más sobre `--cei-bg-raised`—. La marca usa sus propios `primary-dark` y
    // `primary-lighter`. Sirven para texto, iconos y trazos de estado. Para
    // enlaces y acciones sigue siendo `--cei-brand`.
    title: "Texto de estado \u2014 el tono cuando tiene que leerse",
    roles: {
      "fg-primary": { light: "var(--cei-primary-dark)", dark: "var(--cei-primary-lighter)", comment: "texto de marca sobre su velo (badge base)" },
      "fg-accent": { light: "var(--cei-accent-dark)", dark: "var(--cei-accent-lighter)", comment: "texto del turquesa sobre su velo" },
      "fg-success": { light: "var(--cei-success-dark)", dark: "var(--cei-success-lighter)", comment: "texto de \xE9xito: completado, publicado" },
      "fg-warning": { light: "var(--cei-warning-dark)", dark: "var(--cei-warning-lighter)", comment: "texto de advertencia: pendiente" },
      "fg-error": { light: "var(--cei-error-dark)", dark: "var(--cei-error-lighter)", comment: "texto de error: fallido, rechazado" },
      "fg-info": { light: "var(--cei-info-dark)", dark: "var(--cei-info-lighter)", comment: "texto informativo: en proceso" },
      // El neutro no tiene tono: en claro el secundario se quedaba en 4,34:1
      // sobre `--cei-bg-sunken`, y en oscuro el de cuerpo, blanco, lo volvía el
      // badge más llamativo de la fila. Cuerpo en claro, secundario en oscuro.
      "fg-neutral": { light: "var(--cei-text-body)", dark: "var(--cei-text-muted-light)", comment: "texto del estado neutro: borrador" }
    }
  },
  {
    title: "Bordes",
    roles: {
      line: { light: "var(--cei-border-light)", dark: "color-mix(in srgb, var(--cei-text-white) 12%, transparent)" },
      "line-strong": { light: "var(--cei-border-medium)", dark: "color-mix(in srgb, var(--cei-text-white) 22%, transparent)" }
    }
  },
  {
    title: "Marca (interactivo)",
    roles: {
      brand: { light: "var(--cei-primary)", dark: "var(--cei-primary-lighter)" },
      "brand-hover": { light: "var(--cei-primary-dark)", dark: "var(--cei-primary)" }
    }
  },
  {
    // El hermano del velo, y el mismo hueco: un titular sobre una fotografía
    // necesita separarse del fondo, y no había token. Los valores salen de lo
    // que ya estaba escrito a mano en los productos:
    //
    //   `0 1px 4px rgba(0,0,0,0.2)`  → IDÉNTICO en Geovisor, Fichas y DMS,
    //                                  cuatro veces. El mismo valor inventado
    //                                  tres veces por separado.
    //   StoryMap, sobre fotografía:   0.7 / 0.6 / 0.6 / 0.45, difuminados 4–24
    //
    // Por eso hay dos peldaños y no una escala numérica: el trabajo que hacen
    // es distinto. `subtle` separa texto de interfaz de una superficie con
    // ruido; `media` es para texto encima de una imagen, donde el fondo no se
    // controla y el difuminado tiene que ser mayor.
    //
    // Un resplandor de mucho difuminado sobre un hero —StoryMap tiene uno de
    // 24 px— es una decisión de composición del producto, no del sistema.
    // Constrúyelo con `color-mix` sobre un rol, no con un literal.
    title: "Legibilidad sobre imagen (sombra de texto)",
    roles: {
      "text-shadow-subtle": {
        light: "0 1px 4px color-mix(in srgb, var(--cei-surface-deep) 20%, transparent)",
        comment: "texto de interfaz sobre superficie con ruido; estable en ambos temas"
      },
      "text-shadow-media": {
        light: "0 1px 6px color-mix(in srgb, var(--cei-surface-deep) 60%, transparent)",
        comment: "texto encima de fotograf\xEDa o mapa, donde el fondo no se controla"
      }
    }
  },
  {
    title: "Elevaci\xF3n (sombras como rol \u2014 voltean por tema)",
    roles: {
      "elevation-1": { light: "var(--cei-shadow-sm)", dark: "0 1px 3px rgba(0, 0, 0, 0.4)" },
      "elevation-2": { light: "var(--cei-shadow-md)", dark: "0 4px 12px rgba(0, 0, 0, 0.45)" },
      "elevation-3": { light: "var(--cei-shadow-lg)", dark: "0 12px 30px rgba(0, 0, 0, 0.55)" }
    }
  }
];
export {
  animations,
  borderRadius,
  brandColors,
  fontFamilies,
  fontSizes,
  glassEffect,
  semanticRoles,
  shadows,
  spacingConstants,
  transitionStyles
};
