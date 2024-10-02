import React, { useRef, useEffect } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import '../style/map.css';

export default function MapComponent() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const coords = { lng: 139.753, lat: 35.6844 };
  const zoom = 14;

  maptilersdk.config.apiKey = 'ujUSnZiX5ExUZRNUP4Tl';

  useEffect(() => {
    if (map.current) {
      return;
    }

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [coords.lng, coords.lat],
      zoom: zoom
    });

    new maptilersdk.Marker({color: "#90c6af"})
      .setLngLat([139.7525,35.6846])
      .addTo(map.current);
    
  }, [coords.lng, coords.lat, zoom]);


  return (
    <div className='map-container'>
      <div ref={mapContainer} className='map' />
    </div>
  )
}
