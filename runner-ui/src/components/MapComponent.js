import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import '../style/map.css';

/**
 * MapComponent function creates and displays a map using the MapTiler SDK library.
 * The map is styled using an external CSS file and is wrapped in a container.
 *
 * @returns {JSX.Element} A map wrapped in a div element container.
 */
export default function MapComponent() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [coords, setCoords] = useState({ lat: 51.5085, lng: -0.1257 });
  const zoom = 14;

  function getCoordinates() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userCoordinates = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        setCoords(userCoordinates);
      });
    }
  }

  maptilersdk.config.apiKey = 'ujUSnZiX5ExUZRNUP4Tl';

  useEffect(() => {
    getCoordinates(); 

    if (!map.current) {
      map.current = new maptilersdk.Map({
        container: mapContainer.current,
        style: maptilersdk.MapStyle.BASIC,
        center: [coords.lng, coords.lat],
        zoom: zoom,
        navigationControl: false,
        geolocateControl: false
      });
    } else {
      map.current.setCenter([coords.lng, coords.lat]);
    }
  }, [coords]);

  return (
    <div className='map-container'>
      <div ref={mapContainer} className='map' />
    </div>
  );
}
