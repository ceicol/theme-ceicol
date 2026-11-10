import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import IllustrationLoadError from './scenes/IllustrationLoadError';
import IllustrationNoData from './scenes/IllustrationNoData';
import IllustrationNotFound from './scenes/IllustrationNotFound';
import IllustrationOk from './scenes/IllustrationOk';
import IllustrationProcessing from './scenes/IllustrationProcessing';
import IllustrationSearchEmpty from './scenes/IllustrationSearchEmpty';
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
