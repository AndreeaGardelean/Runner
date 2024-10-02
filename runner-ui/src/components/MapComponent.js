import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import '../style/map.css';

/**
 * MapComponent function creates and displays a map using MapTiler SDK library.
 * The map is styled using an external CSS file and is wrapped in a container.
 *
 * @returns {JSX.Element} a map wrapped in a div element container.
 */
export default function MapComponent() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [coords, setCoords] = useState({ lat: 51.5085, lng: -0.1257 });
  const zoom = 14;

  maptilersdk.config.apiKey = 'ujUSnZiX5ExUZRNUP4Tl';

  useEffect(() => {
    if (map.current) {
      return;
    }

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.BASIC,
      center: [coords.lng, coords.lat],
      zoom: zoom,
    });
  }, [coords.lng, coords.lat, zoom]);

  return (
    <div className='map-container'>
      <div ref={mapContainer} className='map' />
    </div>
  );
}
