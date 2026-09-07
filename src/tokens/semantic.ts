// ============================================================
//  CEICOL — Roles semánticos (Capa 2) · FUENTE de semantic.css
// ------------------------------------------------------------
//  Los componentes consumen estos ROLES, no los primitivos.
//  Un tema es una reasignación de roles a primitivos.
//  De aquí se GENERA dist/semantic.css (no editar el CSS a mano).
//
//  Cada rol tiene un valor `light` (obligatorio) y opcional `dark`
//  (si existe, se redefine bajo [data-theme='dark']). Los valores
//  son expresiones CSS: referencias a tokens crudos (var(--cei-*)),
//  color-mix, o valores directos.
// ============================================================

export interface SemanticRole {
  light: string;
  dark?: string;
  comment?: string;
}

export interface SemanticGroup {
  title: string;
  roles: Record<string, SemanticRole>;
}

// El nombre del rol NO lleva el prefijo --cei- (el generador lo añade).
export const semanticRoles: SemanticGroup[] = [
  {
    title: 'Superficies',
    roles: {
      bg: { light: 'var(--cei-background-default)', dark: 'var(--cei-surface-deep)', comment: 'fondo de página' },
      'bg-raised': { light: 'var(--cei-background-paper)', dark: 'var(--cei-surface-brand)', comment: 'tarjetas, formularios' },
      'bg-sunken': { light: 'var(--cei-background-subtle)', dark: 'var(--cei-surface-slate)', comment: 'secciones alternadas' },
      'bg-inverse': { light: 'var(--cei-contrast)', comment: 'banners: estable en ambos temas' },
      'bg-footer': { light: 'var(--cei-contrast)', dark: 'var(--cei-surface-deep)', comment: 'footer' },
      'bg-glass-soft': { light: 'color-mix(in srgb, var(--cei-bg-raised) 55%, transparent)', comment: 'vidrio translúcido suave' },
      'bg-glass': { light: 'color-mix(in srgb, var(--cei-bg-raised) 72%, transparent)', comment: 'vidrio translúcido medio' },
      'bg-glass-strong': { light: 'color-mix(in srgb, var(--cei-bg-raised) 85%, transparent)', comment: 'vidrio translúcido fuerte' },
    },
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
    title: 'Velos (scrim) — oscurecen lo que hay detrás para que el texto se lea',
    roles: {
      'scrim-soft': {
        light: 'color-mix(in srgb, var(--cei-surface-slate) 20%, transparent)',
        dark: 'color-mix(in srgb, var(--cei-surface-deep) 35%, transparent)',
        comment: 'insinúa separación: hover sobre tarjeta con imagen',
      },
      scrim: {
        light: 'color-mix(in srgb, var(--cei-surface-slate) 35%, transparent)',
        dark: 'color-mix(in srgb, var(--cei-surface-deep) 50%, transparent)',
        comment: 'velo de uso general sobre imagen o mapa',
      },
      'scrim-strong': {
        light: 'color-mix(in srgb, var(--cei-surface-slate) 55%, transparent)',
        dark: 'color-mix(in srgb, var(--cei-surface-deep) 68%, transparent)',
        comment: 'detrás de un modal o panel; en claro = el velo histórico del modal',
      },
      'scrim-heavy': {
        light: 'color-mix(in srgb, var(--cei-surface-slate) 72%, transparent)',
        dark: 'color-mix(in srgb, var(--cei-surface-deep) 85%, transparent)',
        comment: 'texto largo sobre fotografía a sangre; visor a pantalla completa',
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
      'scrim-base': {
        light: 'var(--cei-surface-slate)',
        dark: 'var(--cei-surface-deep)',
        comment: 'color sólido del velo: para velos de intensidad variable, con color-mix',
      },
    },
  },
  {
    title: 'Texto',
    roles: {
      fg: { light: 'var(--cei-text-body)', dark: 'var(--cei-text-white)', comment: 'texto por defecto' },
      'fg-strong': { light: 'var(--cei-text-heading)', dark: 'var(--cei-text-white)', comment: 'títulos / máximo énfasis' },
      'fg-muted': { light: 'var(--cei-text-muted)', dark: 'var(--cei-text-muted-light)', comment: 'secundario / metadatos' },
      'fg-on-inverse': { light: 'var(--cei-text-white)', dark: 'var(--cei-text-white)', comment: 'texto sobre superficie inversa' },
      'fg-on-brand': { light: 'var(--cei-text-white)', dark: 'var(--cei-text-white)', comment: 'texto sobre color de marca' },
    },
  },
  {
    title: 'Bordes',
    roles: {
      line: { light: 'var(--cei-border-light)', dark: 'color-mix(in srgb, var(--cei-text-white) 12%, transparent)' },
      'line-strong': { light: 'var(--cei-border-medium)', dark: 'color-mix(in srgb, var(--cei-text-white) 22%, transparent)' },
    },
  },
  {
    title: 'Marca (interactivo)',
    roles: {
      brand: { light: 'var(--cei-primary)', dark: 'var(--cei-primary-lighter)' },
      'brand-hover': { light: 'var(--cei-primary-dark)', dark: 'var(--cei-primary)' },
    },
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
    title: 'Legibilidad sobre imagen (sombra de texto)',
    roles: {
      'text-shadow-subtle': {
        light: '0 1px 4px color-mix(in srgb, var(--cei-surface-deep) 20%, transparent)',
        comment: 'texto de interfaz sobre superficie con ruido; estable en ambos temas',
      },
      'text-shadow-media': {
        light: '0 1px 6px color-mix(in srgb, var(--cei-surface-deep) 60%, transparent)',
        comment: 'texto encima de fotografía o mapa, donde el fondo no se controla',
      },
    },
  },
  {
    title: 'Elevación (sombras como rol — voltean por tema)',
    roles: {
      'elevation-1': { light: 'var(--cei-shadow-sm)', dark: '0 1px 3px rgba(0, 0, 0, 0.4)' },
      'elevation-2': { light: 'var(--cei-shadow-md)', dark: '0 4px 12px rgba(0, 0, 0, 0.45)' },
      'elevation-3': { light: 'var(--cei-shadow-lg)', dark: '0 12px 30px rgba(0, 0, 0, 0.55)' },
    },
  },
];
