import { Badge, Channel, Ground, Packets, Plancha, Scene, Server } from '../parts';

// Sin permiso: el sistema funciona y la sección existe, pero está fuera de tu rol. El canal intenta
// entregar y los paquetes rebotan en el lindero de zona restringida, que se enciende con el golpe; la
// plancha queda sin procesar para ti, y el sello dice que no se pasa.
export const IllustrationForbidden = () => (
  <Scene name="forbidden">
    <Channel was />
    <Packets motion="bounce" count={2} />
    <Server led="ok" />
    <Ground />
    <Plancha marked />
    <Badge kind="wa" symbol="block" x={184} y={105.3} shadow={[184, 151.2, 22.2, 12.8]} />
  </Scene>
);

export default IllustrationForbidden;
