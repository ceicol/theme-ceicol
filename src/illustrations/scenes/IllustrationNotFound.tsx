import { Badge, Channel, Ground, Plancha, Scene, Server } from '../parts';

// Página no encontrada: el sistema funciona, pero la página pedida no existe.
export const IllustrationNotFound = () => (
  <Scene name="not-found">
    <Channel />
    <Server led="ok" was ghost />
    <Ground />
    <Plancha />
    <Badge kind="in" x={184} y={105.3} shadow={[184, 151.2, 22.2, 12.8]} />
  </Scene>
);

export default IllustrationNotFound;
