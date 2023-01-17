import React, { useRef, useEffect, useState } from 'react';
import Map, {FullscreenControl, GeolocateControl, Marker, NavigationControl} from "react-map-gl"
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';
const MapView = () => {
  const [lng, setLng] = useState(2.1943282266720554);
  const [lat, setLat] = useState(41.4026419193428);
  console.log(process.env)
  return (
    <div>
      <Map
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        style={{
          width:"100vw",
          height:"100vh",
        }}
        initialViewState={{
          longitude: lng,
          latitude: lat,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
      >
        <Marker
          longitude={lng}
          latitude={lat}
        />
        <NavigationControl
          position="bottom-right"
        />
        <FullscreenControl/>
        <GeolocateControl/>
      </Map>  
    </div>
  );
}
export default MapView;