import { Channel, Ground, Packets, Plancha, Scene, Server } from '../parts';

// Procesando: el archivo baja al servidor, salen paquetes y la plancha se procesa por cuadrantes.
export const IllustrationProcessing = () => (
  <Scene name="processing">
    <Channel lit />
    <Packets motion="flow" count={3} />
    <Server led="work" file />
    <Ground />
    <Plancha tone="b" under="n" motion="proc" />
  </Scene>
);

export default IllustrationProcessing;
