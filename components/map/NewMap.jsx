import { Map, NavigationControl, Marker } from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { Colors } from '../../styles/theme';

export const NewMap = () => {
  return (
    <Map
      mapLib={maplibregl}
      initialViewState={{
        longitude: -68.90117,
        latitude: 18.403121,
        zoom: 14,
      }}
      style={{
        width: '100%',
        height: '100%',
        minHeight: '400px', // Altura mínima para dispositivos pequeños
      }}
      mapStyle='https://api.maptiler.com/maps/streets/style.json?key=RD2wTsj4fy4oPde6tlVb'
    >
      <NavigationControl position='top-left' />
      <Marker
        longitude={-68.90117}
        latitude={18.403121}
        color={Colors.first_blue}
      />
    </Map>
  );
};
