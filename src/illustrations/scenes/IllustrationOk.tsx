import { Badge, Channel, Ground, Plancha, Scene, Server } from '../parts';

// Listo: el servidor en verde, la plancha completa y el sello de conformidad.
export const IllustrationOk = () => (
  <Scene name="ok">
    <Channel lit />
    <Server led="ok" was />
    <Ground />
    <Plancha tone="b" under="n" motion="snap" />
    <Badge kind="ok" x={184} y={105.3} shadow={[184, 151.2, 22.2, 12.8]} />
  </Scene>
);

export default IllustrationOk;
