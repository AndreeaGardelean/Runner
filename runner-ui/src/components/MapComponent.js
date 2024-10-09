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
export default function MapComponent({pace}) {
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
        pace(position.coords.speed);
      });
    }
  }

  maptilersdk.config.apiKey = 'ujUSnZiX5ExUZRNUP4Tl';

  useEffect(() => {
    getCoordinates();

    if (!map.current) {
      // Initialize the map only once
      map.current = new maptilersdk.Map({
        container: mapContainer.current,
        style: maptilersdk.MapStyle.BASIC,
        center: [coords.lng, coords.lat],
        zoom: zoom,
        navigationControl: false,
        geolocateControl: false
      });

      // Add a source and layer for the user location marker once the map has loaded
      map.current.on('load', () => {
        map.current.addSource('user-location', {
          type: 'geojson',
          data: {
            "type": "FeatureCollection",
            "features": [{
              "type": "Feature",
              "properties": { "name": "User Location" },
              "geometry": {
                "type": "Point",
                "coordinates": [coords.lng, coords.lat]
              }
            }]
          }
        });

        // Add a layer for the user's location marker
        map.current.addLayer({
          'id': 'user-location-circle',
          'source': 'user-location',
          'type': 'circle',
          'paint': {
            'circle-radius': 10,
            'circle-color': '#90c6af'
          }
        });
      });
    } else {
      // Update the map's center when coordinates change
      map.current.setCenter([coords.lng, coords.lat]);

      // Update GeoJSON source with the new coordinates
      const source = map.current.getSource('user-location');
      if (source) {
        source.setData({
          "type": "FeatureCollection",
          "features": [{
            "type": "Feature",
            "properties": { "name": "User Location" },
            "geometry": {
              "type": "Point",
              "coordinates": [coords.lng, coords.lat]
            }
          }]
        });
      }
    }
  }, [coords]);

  return (
    <div className='map-container'>
      <div ref={mapContainer} className='map' />
    </div>
  );
}
