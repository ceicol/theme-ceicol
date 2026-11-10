import { Badge, Channel, Ground, Plancha, Scene, Server, Slots } from '../parts';

// Sesión cerrada: el servidor sigue en verde y nada se rompió, pero ya no estás ahí. El sello cae sobre la
// plancha en la que trabajabas; con el golpe se hunde y desaparece, el canal se apaga y se va con su puerto,
// y queda la huella vacía. El sello pide volver a entrar.
export const IllustrationSessionClosed = () => (
  <Scene name="session-closed">
    <Channel unplugged was />
    <Server led="ok" port />
    <Slots />
    <g className="cei-ill-mv-vanish">
      <Ground />
    </g>
    <Plancha tone="b" motion="sink" />
    <Badge kind="wa" symbol="login" x={184} y={111.7} shadow={[184, 158.6, 22.2, 12.8]} />
  </Scene>
);

export default IllustrationSessionClosed;
