import { Map, NavigationControl, Marker } from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { Paper, Box } from '@mui/material';
import { LocationOn } from '@mui/icons-material';
import { Colors } from '../../styles/theme';

export const NewMap = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        height: '100%',
        minHeight: '500px',
        borderRadius: '24px',
        overflow: 'hidden',
        position: 'relative',
        border: '1px solid rgba(255,255,255,0.1)',
      }}
    >
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
        }}
        mapStyle='https://api.maptiler.com/maps/streets/style.json?key=RD2wTsj4fy4oPde6tlVb'
      >
        <NavigationControl position='top-left' />
        <Marker longitude={-68.90117} latitude={18.403121}>
          <LocationOn
            sx={{
              color: Colors.first_blue,
              fontSize: '2.5rem',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
              transform: 'translate(-50%, -100%)',
              '&:hover': {
                color: Colors.second_blue,
              },
            }}
          />
        </Marker>
      </Map>
    </Paper>
  );
};
