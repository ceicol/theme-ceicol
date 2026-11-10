import { Badge, Channel, Ground, Plancha, Quad, Scene, Server } from '../parts';

// Error: tres cuadrantes pasan y el cuarto no encaja; el servidor en rojo.
export const IllustrationTroubleshooting = () => (
  <Scene name="troubleshooting">
    <Channel />
    <Server led="err" was />
    <Ground without={2} />
    <Plancha tone="b" under="n" motion="pass" without={2} />
    <g className="cei-ill-mv-reject">
      <path
        className="cei-ill-sh"
        d="M193.2 225.8L190.9 226.9L188.3 227.6L185.5 228L182.5 228L179.7 227.6L177 226.9L174.8 225.8L133.6 202.1L132.9 201.2L133.6 200.3L182.5 172.1L184 171.7L185.5 172.1L234.4 200.3L235 201.2L234.4 202.1Z"
      />
      <g transform="translate(0 4.5)">
        <Quad i={2} tone="x" under="n" />
      </g>
    </g>
    <Badge kind="er" x={184} y={148.9} shadow={[184, 188.4, 18.3, 10.6]} />
  </Scene>
);

export default IllustrationTroubleshooting;
