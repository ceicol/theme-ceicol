import { Channel, Ground, Plancha, Scene, Server } from '../parts';

// Sin datos: todo funciona, pero la plancha llegó vacía, con la trama de «sin dato».
export const IllustrationNoData = () => (
  <Scene name="no-data">
    <Channel />
    <Server led="ok" />
    <Ground />
    <Plancha fill="trama" motion="drop" />
  </Scene>
);

export default IllustrationNoData;
