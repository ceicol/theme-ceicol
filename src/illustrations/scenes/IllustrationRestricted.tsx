import { Badge, Channel, Ground, Plancha, Scene, Server } from '../parts';

// Restringido: la gemela de «Sin permiso». Los datos llegan y se ven, la plancha procesada, pero el
// lindero la cerca y el candado se cierra: se consulta, no se edita.
export const IllustrationRestricted = () => (
  <Scene name="restricted">
    <Channel lit />
    <Server led="ok" />
    <Ground />
    <g className="cei-ill-mv-press">
      <Plancha tone="b" under="n" motion="snap" marked />
    </g>
    <Badge kind="wa" symbol="lock" x={184} y={105.3} shadow={[184, 151.2, 22.2, 12.8]} />
  </Scene>
);

export default IllustrationRestricted;
