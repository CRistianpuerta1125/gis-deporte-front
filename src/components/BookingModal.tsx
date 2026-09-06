import type { Venue } from '../types/gis';
import { Calendar, UserCheck, X, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

interface BookingModalProps {
  venue: Venue;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ venue, onClose }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('08:00 - 10:00 AM');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(15, 23, 42, 0.8)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '16px',
      }}
    >
      <div
        style={{
          background: '#1e293b',
          border: '1px solid #334155',
          borderRadius: '16px',
          padding: '24px',
          maxWidth: '440px',
          width: '100%',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          position: 'relative',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'none',
            border: 'none',
            color: '#94a3b8',
            cursor: 'pointer',
          }}
        >
          <X size={20} />
        </button>

        {isSuccess ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <CheckCircle2 size={56} color="#10b981" style={{ marginBottom: '12px' }} />
            <h3 style={{ fontSize: '20px', color: '#f8fafc', margin: '0 0 8px 0' }}>
              ¡Reserva Confirmada!
            </h3>
            <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '20px' }}>
              Tu cupo en <strong>{venue.name}</strong> para la fecha {selectedDate} ({selectedTime}) ha sido registrado en el sistema.
            </p>
            <button
              onClick={onClose}
              style={{
                width: '100%',
                padding: '10px',
                background: '#10b981',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Volver al Mapa
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <Calendar size={22} color="#0284c7" />
              <h3 style={{ margin: 0, fontSize: '18px', color: '#f8fafc' }}>
                Reserva de Escenario Deportivo
              </h3>
            </div>

            <div
              style={{
                background: '#0f172a',
                borderRadius: '8px',
                padding: '12px',
                marginBottom: '16px',
                border: '1px solid #334155',
              }}
            >
              <h4 style={{ margin: '0 0 4px 0', fontSize: '15px', color: '#38bdf8' }}>
                {venue.name}
              </h4>
              <p style={{ margin: 0, fontSize: '12px', color: '#94a3b8' }}>
                📍 Localidad {venue.locality} - {venue.address}
              </p>
            </div>

            <div style={{ marginBottom: '14px' }}>
              <label style={{ fontSize: '12px', color: '#94a3b8', display: 'block', marginBottom: '4px' }}>
                Fecha de Reserva:
              </label>
              <input
                type="date"
                required
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  background: '#0f172a',
                  border: '1px solid #334155',
                  borderRadius: '8px',
                  color: '#f8fafc',
                  fontSize: '13px',
                }}
              />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ fontSize: '12px', color: '#94a3b8', display: 'block', marginBottom: '4px' }}>
                Franja Horaria Recreativa:
              </label>
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  background: '#0f172a',
                  border: '1px solid #334155',
                  borderRadius: '8px',
                  color: '#f8fafc',
                  fontSize: '13px',
                }}
              >
                <option value="06:00 - 08:00 AM">06:00 - 08:00 AM (Mañana)</option>
                <option value="08:00 - 10:00 AM">08:00 - 10:00 AM (Mañana)</option>
                <option value="02:00 - 04:00 PM">02:00 - 04:00 PM (Tarde)</option>
                <option value="04:00 - 06:00 PM">04:00 - 06:00 PM (Tarde)</option>
                <option value="06:00 - 08:00 PM">06:00 - 08:00 PM (Noche con Iluminación)</option>
              </select>
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '12px',
                background: '#0284c7',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              <UserCheck size={18} /> Confirmar Reserva
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
