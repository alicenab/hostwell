import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Region } from '../../types';

interface MapComponentProps {
  regions: Region[];
  onRegionClick: (regionId: string) => void;
}

const MapComponent: React.FC<MapComponentProps> = ({ regions, onRegionClick }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markers = useRef<mapboxgl.Marker[]>([]);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  // Memoize coordinates to prevent unnecessary recalculations
  const coordinates = useMemo(() => ({
    azerbaijanCenter: [47.395, 40.43] as [number, number],
    regionCoordinates: {
      baku: [49.8920, 40.4093] as [number, number],
      ganja: [46.3607, 40.6828] as [number, number],
      quba: [48.5126, 41.3596] as [number, number],
      sheki: [47.1707, 41.1975] as [number, number],
      lankaran: [48.8475, 38.7529] as [number, number]
    }
  }), []);

  // Memoize marker creation to prevent unnecessary recreations
  const createMarker = useCallback((region: Region, coords: [number, number]) => {
    const marker = new mapboxgl.Marker({
      color: hoveredRegion === region.id ? '#FF6B6B' : '#4F46E5',
      scale: hoveredRegion === region.id ? 1.2 : 1
    })
      .setLngLat(coords)
      .setPopup(
        new mapboxgl.Popup({ offset: 25 })
          .setHTML(`<h3 class="font-semibold">${region.name}</h3>`)
      )
      .addTo(map.current!);

    marker.getElement().addEventListener('click', () => onRegionClick(region.id));
    marker.getElement().addEventListener('mouseenter', () => setHoveredRegion(region.id));
    marker.getElement().addEventListener('mouseleave', () => setHoveredRegion(null));

    return marker;
  }, [hoveredRegion, onRegionClick]);

  // Initialize map
  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: coordinates.azerbaijanCenter,
      zoom: 6,
      maxZoom: 10,
      minZoom: 5,
      // Performance optimizations
      renderWorldCopies: false,
      trackResize: true,
      attributionControl: false
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add markers for each region
    regions.forEach(region => {
      const coords = coordinates.regionCoordinates[region.id as keyof typeof coordinates.regionCoordinates];
      if (!coords) return;

      const marker = createMarker(region, coords);
      markers.current.push(marker);
    });

    // Cleanup function
    return () => {
      markers.current.forEach(marker => marker.remove());
      if (map.current) {
        map.current.remove();
      }
    };
  }, [regions, coordinates, createMarker]);

  // Update marker styles when hover state changes
  useEffect(() => {
    markers.current.forEach(marker => {
      const element = marker.getElement();
      const regionId = element.getAttribute('data-region-id');
      if (regionId) {
        element.style.transform = hoveredRegion === regionId ? 'scale(1.2)' : 'scale(1)';
        element.style.filter = hoveredRegion === regionId ? 'brightness(1.2)' : 'brightness(1)';
      }
    });
  }, [hoveredRegion]);

  return (
    <div className="relative w-full h-[500px] bg-white rounded-xl shadow-lg overflow-hidden">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default React.memo(MapComponent);