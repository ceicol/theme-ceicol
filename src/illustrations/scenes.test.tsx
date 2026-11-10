import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import IllustrationForbidden from './scenes/IllustrationForbidden';
import IllustrationLoadError from './scenes/IllustrationLoadError';
import IllustrationNoData from './scenes/IllustrationNoData';
import IllustrationNotFound from './scenes/IllustrationNotFound';
import IllustrationOk from './scenes/IllustrationOk';
import IllustrationProcessing from './scenes/IllustrationProcessing';
import IllustrationRestricted from './scenes/IllustrationRestricted';
import IllustrationSearchEmpty from './scenes/IllustrationSearchEmpty';
import IllustrationSessionClosed from './scenes/IllustrationSessionClosed';
import IllustrationTroubleshooting from './scenes/IllustrationTroubleshooting';

// Vitest corre desde la raíz del paquete.
const css = readFileSync(resolve(process.cwd(), 'src/illustrations.css'), 'utf8');
const SCENES = {
  processing: IllustrationProcessing,
  ok: IllustrationOk,
  troubleshooting: IllustrationTroubleshooting,
  'no-data': IllustrationNoData,
  'search-empty': IllustrationSearchEmpty,
  'load-error': IllustrationLoadError,
  'not-found': IllustrationNotFound,
  forbidden: IllustrationForbidden,
  restricted: IllustrationRestricted,
  'session-closed': IllustrationSessionClosed,
};
const draw = (Scene: React.FC) => render(<Scene />).container.querySelector('svg')!;

// Las escenas comparten elenco y encuadre: lo que cambia es lo que le pasa a cada pieza.
describe('lo que cuenta cada escena', () => {
  it('procesando: el archivo baja, los paquetes salen y la plancha se procesa por cuadrantes', () => {
    const svg = draw(IllustrationProcessing);
    expect(svg.querySelector('.cei-ill-mv-feed')).not.toBeNull();
    expect(svg.querySelectorAll('.cei-ill-mv-flow')).toHaveLength(3);
    expect(svg.querySelectorAll('.cei-ill-mv-proc')).toHaveLength(4);
    expect(svg.querySelectorAll('.cei-ill-led-work')).toHaveLength(3);
  });

  it('listo: la plancha pasa a procesada en ola y el sello es el visto, en verde', () => {
    const svg = draw(IllustrationOk);
    expect(svg.querySelectorAll('.cei-ill-mv-snap')).toHaveLength(4);
    expect(svg.querySelector('circle.cei-ill-ok')).not.toBeNull();
    expect(svg.querySelectorAll('.cei-ill-led-ok')).toHaveLength(3);
  });

  it('error: un cuadrante no encaja y el sello es el aviso, en rojo', () => {
    const svg = draw(IllustrationTroubleshooting);
    expect(svg.querySelector('.cei-ill-mv-reject .cei-ill-xt')).not.toBeNull();
    expect(svg.querySelector('circle.cei-ill-er')).not.toBeNull();
    expect(svg.querySelectorAll('.cei-ill-led-err')).toHaveLength(3);
  });

  it('sin datos: todo funciona y la plancha llega con la trama de «sin dato»', () => {
    const svg = draw(IllustrationNoData);
    expect(svg.querySelectorAll('.cei-ill-mv-drop .cei-ill-nh')).toHaveLength(4);
    expect(svg.querySelector('.cei-ill-bdg')).toBeNull();
  });

  it('sin resultados: hay datos y la lupa los recorre', () => {
    const svg = draw(IllustrationSearchEmpty);
    expect(svg.querySelector('.cei-ill-mv-sweep .cei-ill-lens')).not.toBeNull();
    expect(svg.querySelectorAll('.cei-ill-nc')).toHaveLength(4);
  });

  it('no se pudo cargar: el canal se corta, los paquetes se pierden y quedan las huellas', () => {
    const svg = draw(IllustrationLoadError);
    expect(svg.querySelector('.cei-ill-cline')!.getAttribute('d')!.match(/M/g)).toHaveLength(2);
    expect(svg.querySelectorAll('.cei-ill-mv-stuck')).toHaveLength(2);
    expect(svg.querySelector('.cei-ill-slot')).not.toBeNull();
    expect(svg.querySelector('.cei-ill-q')).toBeNull();
    expect(svg.querySelector('circle.cei-ill-er')).not.toBeNull();
  });

  it('no existe: la hoja pedida es discontinua y el sello pregunta', () => {
    const svg = draw(IllustrationNotFound);
    expect(svg.querySelector('.cei-ill-mv-ghost')).not.toBeNull();
    expect(svg.querySelector('circle.cei-ill-in')).not.toBeNull();
  });

  // El acceso es atención, no error: las tres llevan el sello ámbar, en el mismo sitio que los otros.
  it('sin permiso: los paquetes rebotan en el lindero, el canal se apaga y el sello es el de prohibido', () => {
    const svg = draw(IllustrationForbidden);
    expect(svg.querySelectorAll('.cei-ill-mv-bounce')).toHaveLength(2);
    expect(svg.querySelectorAll('.cei-ill-lin')).toHaveLength(4);
    expect(svg.querySelector('.cei-ill-clit.cei-ill-was')).not.toBeNull();
    expect(svg.querySelector('.cei-ill-bt')).toBeNull();
    expect(svg.querySelector('circle.cei-ill-wa')).not.toBeNull();
    expect(svg.querySelector('.cei-ill-mv-pop circle.cei-ill-sym')).not.toBeNull();
  });

  it('restringido: los datos llegan y se ven, el lindero los cerca y el candado se cierra', () => {
    const svg = draw(IllustrationRestricted);
    expect(svg.querySelectorAll('.cei-ill-mv-snap .cei-ill-over .cei-ill-bt')).toHaveLength(4);
    expect(svg.querySelectorAll('.cei-ill-lin')).toHaveLength(4);
    expect(svg.querySelector('.cei-ill-clit:not(.cei-ill-was)')).not.toBeNull();
    expect(svg.querySelector('.cei-ill-mv-press')).not.toBeNull();
    expect(svg.querySelector('circle.cei-ill-wa')).not.toBeNull();
    expect(svg.querySelector('.cei-ill-shackle')).not.toBeNull();
  });

  it('sesión cerrada: la plancha se hunde y se va, el canal sale del puerto y queda la huella', () => {
    const svg = draw(IllustrationSessionClosed);
    expect(svg.querySelectorAll('.cei-ill-mv-sink')).toHaveLength(4);
    expect(svg.querySelector('.cei-ill-mv-vanish .cei-ill-sh')).not.toBeNull();
    expect(svg.querySelector('.cei-ill-mv-unplug')).not.toBeNull();
    expect(svg.querySelector('.cei-ill-port')).not.toBeNull();
    expect(svg.querySelector('.cei-ill-slot')).not.toBeNull();
    expect(svg.querySelectorAll('.cei-ill-led-ok')).toHaveLength(3);
    expect(svg.querySelector('circle.cei-ill-wa')).not.toBeNull();
  });

  it('el sello de sesión cerrada cae primero, porque es la causa; los de las otras dos llegan al final', () => {
    expect(css).toMatch(/\.cei-ill-s-session-closed \.cei-ill-mv-pop \{ animation: cei-ill-fall /);
    expect(css).toMatch(/\.cei-ill-s-forbidden \.cei-ill-mv-pop \{ animation-delay: 1150ms; \}/);
    expect(css).toMatch(/\.cei-ill-s-restricted \.cei-ill-mv-pop \{ animation-delay: 1300ms; \}/);
  });

  it('lo que sale de la escena queda fuera también sin movimiento: el canal, el puerto y la plancha que se van', () => {
    expect(css).toMatch(/\.cei-ill :is\(\.cei-ill-mv-sink, \.cei-ill-mv-vanish, \.cei-ill-mv-unplug, \.cei-ill-port\) \{ opacity: 0; \}/);
    expect(css).toMatch(/\.cei-ill \.cei-ill-mv-bounce \{ opacity: 0;/);
  });

  it('toda clase que pintan las escenas tiene su regla, salvo las que solo ordenan', () => {
    const structural = /^cei-ill(-s-[a-z-]+|-q|-q[0-3]|-u[0-2]|-pk[0-2]|-led|-dot|-halo)?$/;
    const used = new Set(
      Object.values(SCENES).flatMap((Scene) =>
        [draw(Scene), ...draw(Scene).querySelectorAll('[class]')].flatMap((el) => el.getAttribute('class')!.split(/\s+/)),
      ),
    );
    expect([...used].filter((c) => !structural.test(c) && !css.includes(`.${c}`))).toEqual([]);
  });

  it('cada escena tiene su lienzo, y el CSS que la mueve nombra una escena que existe', () => {
    for (const [name, Scene] of Object.entries(SCENES)) expect(draw(Scene)).toHaveClass(`cei-ill-s-${name}`);
    const named = new Set([...css.matchAll(/\.cei-ill-s-([a-z-]+)/g)].map((m) => m[1]));
    expect([...named].filter((n) => !(n in SCENES))).toEqual([]);
  });
});
