import type { Venue } from '../types/gis';
import { Users, Activity, PlusCircle, BarChart3, MapPin, Calendar } from 'lucide-react';

interface DashboardProps {
  venues: Venue[];
  userRole: 'CITIZEN' | 'INSTRUCTOR' | 'ADMIN';
  onBookVenue: (venue: Venue) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ venues, userRole, onBookVenue }) => {
  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
        }}
      >
        <div
          style={{
            background: '#1e293b',
            border: '1px solid #334155',
            borderRadius: '12px',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <div style={{ background: '#0284c7', padding: '12px', borderRadius: '10px' }}>
            <MapPin size={24} color="white" />
          </div>
          <div>
            <h4 style={{ margin: 0, fontSize: '13px', color: '#94a3b8' }}>Parques & Escenarios</h4>
            <p style={{ margin: 0, fontSize: '24px', fontWeight: 700, color: '#f8fafc' }}>
              {venues.length}
            </p>
          </div>
        </div>

        <div
          style={{
            background: '#1e293b',
            border: '1px solid #334155',
            borderRadius: '12px',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <div style={{ background: '#10b981', padding: '12px', borderRadius: '10px' }}>
            <Activity size={24} color="white" />
          </div>
          <div>
            <h4 style={{ margin: 0, fontSize: '13px', color: '#94a3b8' }}>Eventos Activos hoy</h4>
            <p style={{ margin: 0, fontSize: '24px', fontWeight: 700, color: '#f8fafc' }}>18</p>
          </div>
        </div>

        <div
          style={{
            background: '#1e293b',
            border: '1px solid #334155',
            borderRadius: '12px',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <div style={{ background: '#8b5cf6', padding: '12px', borderRadius: '10px' }}>
            <Users size={24} color="white" />
          </div>
          <div>
            <h4 style={{ margin: 0, fontSize: '13px', color: '#94a3b8' }}>Cupos Reservados</h4>
            <p style={{ margin: 0, fontSize: '24px', fontWeight: 700, color: '#f8fafc' }}>342</p>
          </div>
        </div>

        <div
          style={{
            background: '#1e293b',
            border: '1px solid #334155',
            borderRadius: '12px',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <div style={{ background: '#f59e0b', padding: '12px', borderRadius: '10px' }}>
            <BarChart3 size={24} color="white" />
          </div>
          <div>
            <h4 style={{ margin: 0, fontSize: '13px', color: '#94a3b8' }}>Ocupación Promedio</h4>
            <p style={{ margin: 0, fontSize: '24px', fontWeight: 700, color: '#f8fafc' }}>78%</p>
          </div>
        </div>
      </div>

      {userRole === 'ADMIN' && (
        <div
          style={{
            background: '#1e293b',
            border: '1px solid #334155',
            borderRadius: '12px',
            padding: '20px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '16px',
            }}
          >
            <h3 style={{ margin: 0, fontSize: '16px', color: '#f8fafc' }}>
              🛡️ Panel de Administración IDRD - Gestión de Escenarios Urbano/GIS
            </h3>
            <button
              style={{
                padding: '8px 14px',
                background: '#10b981',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <PlusCircle size={16} /> Crear Nuevo Escenario
            </button>
          </div>
          <p style={{ fontSize: '13px', color: '#94a3b8' }}>
            Vista de control institucional para monitorear y aprobar eventos en las 20 localidades de Bogotá.
          </p>
        </div>
      )}

      {userRole === 'INSTRUCTOR' && (
        <div
          style={{
            background: '#1e293b',
            border: '1px solid #334155',
            borderRadius: '12px',
            padding: '20px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '16px',
            }}
          >
            <h3 style={{ margin: 0, fontSize: '16px', color: '#f8fafc' }}>
              🏃 Panel de Instructor Deportivo - Clases & Cupos
            </h3>
            <button
              style={{
                padding: '8px 14px',
                background: '#0284c7',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <PlusCircle size={16} /> Programar Clase Deportiva
            </button>
          </div>
          <p style={{ fontSize: '13px', color: '#94a3b8' }}>
            Administra los cupos de tus clases recreativas en los parques urbanos.
          </p>
        </div>
      )}

      <div>
        <h3 style={{ fontSize: '18px', color: '#f8fafc', marginBottom: '16px' }}>
          🏟️ Escenarios Deportivos y Parques Destacados
        </h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '20px',
          }}
        >
          {venues.map((venue) => (
            <div
              key={venue.id}
              style={{
                background: '#1e293b',
                border: '1px solid #334155',
                borderRadius: '12px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {venue.imageUrl && (
                <img
                  src={venue.imageUrl}
                  alt={venue.name}
                  style={{ width: '100%', height: '160px', objectFit: 'cover' }}
                />
              )}
              <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span
                  style={{
                    alignSelf: 'flex-start',
                    background: '#0369a1',
                    color: '#e0f2fe',
                    fontSize: '11px',
                    fontWeight: 600,
                    padding: '2px 8px',
                    borderRadius: '4px',
                    marginBottom: '8px',
                  }}
                >
                  {venue.locality}
                </span>
                <h4 style={{ margin: '0 0 6px 0', fontSize: '16px', color: '#f8fafc' }}>
                  {venue.name}
                </h4>
                <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '12px', flex: 1 }}>
                  {venue.description}
                </p>

                <div
                  style={{
                    display: 'flex',
                    gap: '6px',
                    flexWrap: 'wrap',
                    marginBottom: '16px',
                  }}
                >
                  {venue.amenities.map((item, idx) => (
                    <span
                      key={idx}
                      style={{
                        background: '#0f172a',
                        color: '#cbd5e1',
                        fontSize: '11px',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        border: '1px solid #334155',
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
                    padding: '10px',
                    background: '#0284c7',
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
                  }}
                >
                  <Calendar size={16} /> Reservar Escenario
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
