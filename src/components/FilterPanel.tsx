import { MapPin, Search, Filter } from 'lucide-react';
import { BOGOTA_LOCALITIES, SPORTS_DISCIPLINES } from '../data/mockVenues';

interface FilterPanelProps {
  selectedLocality: string;
  onLocalityChange: (locality: string) => void;
  selectedDiscipline: string;
  onDisciplineChange: (discipline: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onNearbyClick: () => void;
  isNearbyActive: boolean;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({
  selectedLocality,
  onLocalityChange,
  selectedDiscipline,
  onDisciplineChange,
  searchQuery,
  onSearchChange,
  onNearbyClick,
  isNearbyActive,
}) => {
  return (
    <div
      style={{
        background: '#1e293b',
        border: '1px solid #334155',
        borderRadius: '12px',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0284c7' }}>
        <Filter size={20} />
        <h3 style={{ margin: 0, fontSize: '16px', color: '#f8fafc' }}>Filtros de Búsqueda Urbano/GIS</h3>
      </div>

      <div style={{ position: 'relative' }}>
        <Search
          size={16}
          style={{ position: 'absolute', left: '10px', top: '10px', color: '#94a3b8' }}
        />
        <input
          type="text"
          placeholder="Buscar parque o escenario..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          style={{
            width: '100%',
            padding: '8px 12px 8px 34px',
            background: '#0f172a',
            border: '1px solid #334155',
            borderRadius: '8px',
            color: '#f8fafc',
            fontSize: '13px',
            outline: 'none',
          }}
        />
      </div>

      <div>
        <label style={{ fontSize: '12px', color: '#94a3b8', display: 'block', marginBottom: '4px' }}>
          Localidad de Bogotá:
        </label>
        <select
          value={selectedLocality}
          onChange={(e) => onLocalityChange(e.target.value)}
          style={{
            width: '100%',
            padding: '8px',
            background: '#0f172a',
            border: '1px solid #334155',
            borderRadius: '8px',
            color: '#f8fafc',
            fontSize: '13px',
          }}
        >
          {BOGOTA_LOCALITIES.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label style={{ fontSize: '12px', color: '#94a3b8', display: 'block', marginBottom: '4px' }}>
          Disciplina Deportiva:
        </label>
        <select
          value={selectedDiscipline}
          onChange={(e) => onDisciplineChange(e.target.value)}
          style={{
            width: '100%',
            padding: '8px',
            background: '#0f172a',
            border: '1px solid #334155',
            borderRadius: '8px',
            color: '#f8fafc',
            fontSize: '13px',
          }}
        >
          {SPORTS_DISCIPLINES.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={onNearbyClick}
        style={{
          padding: '10px',
          background: isNearbyActive ? '#10b981' : '#0369a1',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '13px',
          fontWeight: 600,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          transition: 'all 0.2s ease',
        }}
      >
        <MapPin size={16} />
        {isNearbyActive ? '📍 Escenarios Cercanos Activos (5 km)' : '🎯 Escenarios Cercanos a Mi Posición'}
      </button>
    </div>
  );
};
