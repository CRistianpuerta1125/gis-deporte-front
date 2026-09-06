import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import type { Venue } from '../types/gis';
import { BOGOTA_CENTER } from '../data/mockVenues';
import { Calendar } from 'lucide-react';

const customMarkerIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="%230284c7" stroke="%23ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3" fill="%23ffffff"/></svg>',
  iconSize: [36, 36],
  iconAnchor: [18, 36],
  popupAnchor: [0, -32],
});

interface InteractiveMapProps {
  venues: Venue[];
  selectedVenue: Venue | null;
  onSelectVenue: (venue: Venue) => void;
  onBookVenue: (venue: Venue) => void;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  venues,
  onSelectVenue,
  onBookVenue,
}) => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '500px' }}>
      <MapContainer
        center={BOGOTA_CENTER}
        zoom={12}
        scrollWheelZoom={true}
        style={{ width: '100%', height: '100%', minHeight: '500px' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {venues.map((venue) => {
          const position: [number, number] = [
            venue.location.coordinates[1],
            venue.location.coordinates[0],
          ];
          return (
            <Marker
              key={venue.id}
              position={position}
              icon={customMarkerIcon}
              eventHandlers={{
                click: () => onSelectVenue(venue),
              }}
            >
              <Popup>
                <div style={{ padding: '4px', maxWidth: '240px' }}>
                  {venue.imageUrl && (
                    <img
                      src={venue.imageUrl}
                      alt={venue.name}
                      style={{
                        width: '100%',
                        height: '110px',
                        objectFit: 'cover',
                        borderRadius: '8px',
                        marginBottom: '8px',
                      }}
                    />
                  )}
                  <h4 style={{ margin: '0 0 4px 0', fontSize: '15px', color: '#38bdf8' }}>
                    {venue.name}
                  </h4>
                  <p style={{ fontSize: '12px', color: '#94a3b8', margin: '0 0 6px 0' }}>
                    📍 {venue.locality} - {venue.address}
                  </p>
                  <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginBottom: '8px' }}>
                    {venue.amenities.slice(0, 3).map((item, idx) => (
                      <span
                        key={idx}
                        style={{
                          background: '#334155',
                          color: '#e2e8f0',
                          fontSize: '10px',
                          padding: '2px 6px',
                          borderRadius: '4px',
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => onBookVenue(venue)}
                    style={{
                      width: '100%',
                      padding: '6px 12px',
                      background: '#0284c7',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '4px',
                    }}
                  >
                    <Calendar size={14} /> Reservar Cupo
                  </button>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};
