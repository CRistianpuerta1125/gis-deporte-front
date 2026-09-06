import { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { InteractiveMap } from './components/InteractiveMap';
import { FilterPanel } from './components/FilterPanel';
import { Dashboard } from './components/Dashboard';
import { BookingModal } from './components/BookingModal';
import { MOCK_VENUES } from './data/mockVenues';
import type { Venue } from './types/gis';

export function App() {
  const [activeTab, setActiveTab] = useState<'map' | 'dashboard'>('map');
  const [userRole, setUserRole] = useState<'CITIZEN' | 'INSTRUCTOR' | 'ADMIN'>('CITIZEN');

  const [selectedLocality, setSelectedLocality] = useState('Todas las localidades');
  const [selectedDiscipline, setSelectedDiscipline] = useState('Todas las disciplinas');
  const [searchQuery, setSearchQuery] = useState('');
  const [isNearbyActive, setIsNearbyActive] = useState(false);

  const [selectedVenue, setSelectedVenue] = useState<Venue | null>(null);
  const [bookingVenue, setBookingVenue] = useState<Venue | null>(null);

  const filteredVenues = useMemo(() => {
    return MOCK_VENUES.filter((venue) => {
      if (selectedLocality !== 'Todas las localidades' && venue.locality !== selectedLocality) {
        return false;
      }
      if (
        searchQuery &&
        !venue.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !venue.description.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !venue.locality.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }
      return true;
    });
  }, [selectedLocality, searchQuery]);

  const handleNearbyClick = () => {
    setIsNearbyActive(!isNearbyActive);
    if (!isNearbyActive) {
      setSelectedLocality('Teusaquillo');
    } else {
      setSelectedLocality('Todas las localidades');
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header
        activeTab={activeTab}
        onTabChange={setActiveTab}
        userRole={userRole}
        onRoleChange={setUserRole}
      />

      {activeTab === 'map' ? (
        <main
          style={{
            flex: 1,
            display: 'grid',
            gridTemplateColumns: 'minmax(280px, 340px) 1fr',
            gap: '16px',
            padding: '16px',
            height: 'calc(100vh - 70px)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', overflowY: 'auto' }}>
            <FilterPanel
              selectedLocality={selectedLocality}
              onLocalityChange={setSelectedLocality}
              selectedDiscipline={selectedDiscipline}
              onDisciplineChange={setSelectedDiscipline}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onNearbyClick={handleNearbyClick}
              isNearbyActive={isNearbyActive}
            />

            <div
              style={{
                background: '#1e293b',
                border: '1px solid #334155',
                borderRadius: '12px',
                padding: '16px',
                flex: 1,
                overflowY: 'auto',
              }}
            >
              <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#38bdf8' }}>
                Escenarios Encontrados ({filteredVenues.length})
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {filteredVenues.map((venue) => (
                  <div
                    key={venue.id}
                    onClick={() => setSelectedVenue(venue)}
                    style={{
                      background: selectedVenue?.id === venue.id ? '#0369a1' : '#0f172a',
                      border: '1px solid #334155',
                      borderRadius: '8px',
                      padding: '10px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <h5 style={{ margin: '0 0 4px 0', fontSize: '13px', color: '#f8fafc' }}>
                      {venue.name}
                    </h5>
                    <p style={{ margin: 0, fontSize: '11px', color: '#94a3b8' }}>
                      📍 {venue.locality} - {venue.address}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ borderRadius: '12px', overflow: 'hidden', height: '100%' }}>
            <InteractiveMap
              venues={filteredVenues}
              selectedVenue={selectedVenue}
              onSelectVenue={setSelectedVenue}
              onBookVenue={setBookingVenue}
            />
          </div>
        </main>
      ) : (
        <main style={{ flex: 1 }}>
          <Dashboard
            venues={filteredVenues}
            userRole={userRole}
            onBookVenue={setBookingVenue}
          />
        </main>
      )}

      {bookingVenue && (
        <BookingModal venue={bookingVenue} onClose={() => setBookingVenue(null)} />
      )}
    </div>
  );
}

export default App;
