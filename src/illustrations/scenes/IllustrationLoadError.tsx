import { Badge, Channel, Packets, Scene, Server, Slots } from '../parts';

// No se pudo cargar: el canal cortado y la plancha que no llegó.
export const IllustrationLoadError = () => (
  <Scene name="load-error">
    <Channel cut />
    <Packets motion="stuck" count={2} />
    <Server led="err" />
    <Slots />
    <Badge kind="er" x={184} y={111.7} shadow={[184, 158.6, 22.2, 12.8]} />
  </Scene>
);

export default IllustrationLoadError;
