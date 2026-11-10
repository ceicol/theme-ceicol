import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Badge, Channel, Ground, Packets, Plancha, Scene, Server, Slots } from './parts';

// Vitest corre desde la raíz del paquete.
const css = readFileSync(resolve(process.cwd(), 'src/illustrations.css'), 'utf8');
const scene = (children: React.ReactNode) => render(<Scene name="prueba">{children}</Scene>).container;
const classes = (root: Element) =>
  new Set([...root.querySelectorAll('[class]')].flatMap((el) => el.getAttribute('class')!.split(/\s+/)));

describe('las piezas de las ilustraciones', () => {
  it('el lienzo es un SVG de 320 × 240, decorativo, con la clase raíz y la de su escena', () => {
    const svg = scene(null).querySelector('svg')!;
    expect(svg).toHaveAttribute('viewBox', '0 0 320 240');
    expect(svg).toHaveAttribute('aria-hidden', 'true');
    expect(svg).toHaveAttribute('focusable', 'false');
    expect(svg).toHaveClass('cei-ill', 'cei-ill-s-prueba');
  });

  it('la plancha pinta sus cuatro cuadrantes con el del frente al final, y deja fuera el que se pide', () => {
    const entera = scene(<Plancha />);
    expect([...entera.querySelectorAll('.cei-ill-q')].map((q) => q.getAttribute('class'))).toEqual([
      'cei-ill-q cei-ill-q0',
      'cei-ill-q cei-ill-q1',
      'cei-ill-q cei-ill-q3',
      'cei-ill-q cei-ill-q2',
    ]);
    expect(scene(<Plancha without={2} />).querySelector('.cei-ill-q2')).toBeNull();
  });

  it('el tono de antes queda debajo y el nuevo en una capa encima', () => {
    const root = scene(<Plancha tone="b" under="n" motion="snap" />);
    const quad = root.querySelector('.cei-ill-q0')!;
    expect(quad).toHaveClass('cei-ill-mv-snap');
    expect(quad.querySelector(':scope > .cei-ill-nt')).not.toBeNull();
    expect(quad.querySelector('.cei-ill-over .cei-ill-bt')).not.toBeNull();
  });

  it('la plancha vacía lleva la trama de «sin dato» en vez de las curvas', () => {
    const root = scene(<Plancha fill="trama" />);
    expect(root.querySelectorAll('.cei-ill-nh')).toHaveLength(4);
    expect(root.querySelector('.cei-ill-nc')).toBeNull();
  });

  it('el servidor tiene un piloto por unidad, y con `was` encima los de cuando trabajaba', () => {
    expect(scene(<Server led="ok" />).querySelectorAll('.cei-ill-led-ok')).toHaveLength(3);
    const antes = scene(<Server led="err" was />);
    expect(antes.querySelectorAll('.cei-ill-led-err')).toHaveLength(3);
    expect(antes.querySelectorAll('.cei-ill-led-work.cei-ill-was')).toHaveLength(3);
  });

  it('el archivo baja al servidor y la página que no existe es una hoja discontinua', () => {
    expect(scene(<Server led="work" file />).querySelector('.cei-ill-mv-feed .cei-ill-ft')).not.toBeNull();
    expect(scene(<Server led="ok" ghost />).querySelector('.cei-ill-mv-ghost .cei-ill-gp')).not.toBeNull();
  });

  it('el canal se enciende cuando entrega y, cortado, su línea va en dos tramos', () => {
    expect(scene(<Channel lit />).querySelector('.cei-ill-clit')).not.toBeNull();
    const cortado = scene(<Channel cut />).querySelector('.cei-ill-cline')!;
    expect(cortado.getAttribute('d')!.match(/M/g)).toHaveLength(2);
  });

  it('salen tantos paquetes como se piden, con su movimiento', () => {
    expect(scene(<Packets motion="flow" count={3} />).querySelectorAll('.cei-ill-mv-flow')).toHaveLength(3);
    expect(scene(<Packets motion="stuck" count={2} />).querySelectorAll('.cei-ill-mv-stuck')).toHaveLength(2);
  });

  it('el sello lleva su color de estado y su símbolo: el visto se dibuja; el aviso y la pregunta, con su punto', () => {
    const sombra = [184, 151.2, 22.2, 12.8] as const;
    const visto = scene(<Badge kind="ok" x={184} y={105.3} shadow={sombra} />);
    expect(visto.querySelector('circle.cei-ill-ok')).not.toBeNull();
    expect(visto.querySelector('.cei-ill-sym.cei-ill-mv-draw')).toHaveAttribute('pathLength', '1');
    for (const kind of ['er', 'in'] as const) {
      const root = scene(<Badge kind={kind} x={184} y={105.3} shadow={sombra} />);
      expect(root.querySelector(`circle.cei-ill-${kind}`)).not.toBeNull();
      expect(root.querySelector('circle.cei-ill-symf')).not.toBeNull();
    }
  });
});

describe('el CSS de las ilustraciones', () => {
  it('toda clase que pintan las piezas tiene su regla, salvo las que solo ordenan', () => {
    const root = scene(
      <>
        <Channel lit />
        <Channel cut />
        <Packets motion="flow" count={3} />
        <Server led="work" was file ghost />
        <Server led="err" />
        <Server led="ok" />
        <Ground />
        <Slots />
        <Plancha tone="b" under="n" motion="proc" />
        <Plancha tone="x" fill="trama" />
        <Badge kind="ok" x={0} y={0} shadow={[0, 0, 1, 1]} />
        <Badge kind="er" x={0} y={0} shadow={[0, 0, 1, 1]} />
        <Badge kind="in" x={0} y={0} shadow={[0, 0, 1, 1]} />
      </>,
    );
    const structural = /^cei-ill-(s-prueba|q|q[0-3]|u[0-2]|pk[0-2]|led|dot|halo)$/;
    const unstyled = [...classes(root)].filter(
      (c) => c !== 'cei-ill' && !structural.test(c) && !css.includes(`.${c}`),
    );
    expect(unstyled).toEqual([]);
  });

  it('con «reducir movimiento» no se anima nada: cada una queda en su estado final', () => {
    expect(css).toMatch(/@media \(prefers-reduced-motion: reduce\) \{\s*\.cei-ill \* \{ animation: none !important; \}/);
  });

  it('los colores salen de los roles del tema: ningún hexadecimal ni rgb a mano', () => {
    expect(css).not.toMatch(/#[0-9a-f]{3,8}\b|rgba?\(|hsla?\(/i);
  });
});
