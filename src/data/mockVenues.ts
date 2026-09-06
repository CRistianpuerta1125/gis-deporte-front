import type { LocationPoint } from '../types/gis';

export const BOGOTA_CENTER: [number, number] = [4.6581, -74.0939]; // Lat, Lng

export interface VenueMock {
  id: string;
  name: string;
  description: string;
  locality: string;
  address: string;
  location: LocationPoint;
  amenities: string[];
  imageUrl?: string;
  createdAt?: string;
}

export const MOCK_VENUES: VenueMock[] = [
  {
    id: '1',
    name: 'Parque Simón Bolívar - Complejo Acuático y Canchas',
    description: 'El parque urbano más importante de Bogotá con escenarios acuáticos, pistas de atletismo y canchas múltiples.',
    locality: 'Teusaquillo',
    address: 'Calle 63 y 53 con Cra 68',
    location: { type: 'Point', coordinates: [-74.0939, 4.6581] },
    amenities: ['Cancha Fútbol', 'Pista Atletismo', 'Complejo Acuático', 'Iluminación', 'Parqueadero'],
    imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    name: 'Parque El Tunal',
    description: 'Gran parque metropolitano del sur con canchas sintéticas, pista de patinaje y escenarios deportivos.',
    locality: 'Tunjuelito',
    address: 'Calle 48B Sur No. 22A-07',
    location: { type: 'Point', coordinates: [-74.1364, 4.5742] },
    amenities: ['Cancha Sintética', 'Patinódromo', 'Canchas Baloncesto', 'Zona Fitness'],
    imageUrl: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    name: 'Unidad Deportiva El Salitre (UDS)',
    description: 'Centro de alto rendimiento y escenarios especializados para múltiples disciplinas deportivas.',
    locality: 'Barrios Unidos',
    address: 'Av. Calle 63 # 68-45',
    location: { type: 'Point', coordinates: [-74.0905, 4.6644] },
    amenities: ['Coliseo Cubierto', 'Gimnasio', 'Tenis de Campo', 'Vestieres'],
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '4',
    name: 'Parque Virrey - Zona Deportiva',
    description: 'Corredor ecológico y deportivo al norte de Bogotá ideal para running, yoga y actividades al aire libre.',
    locality: 'Chapinero',
    address: 'Calle 88 con Carrera 15',
    location: { type: 'Point', coordinates: [-74.0558, 4.6738] },
    amenities: ['Running Track', 'Gimnasio al aire libre', 'Pet Friendly'],
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '5',
    name: 'Parque Metropolitano San Cristóbal',
    description: 'Escenario deportivo y recreativo con piscina olímpica y campos de fútbol en el suroriente.',
    locality: 'San Cristóbal',
    address: 'Calle 17A Sur # 2A-60 Este',
    location: { type: 'Point', coordinates: [-74.0815, 4.5701] },
    amenities: ['Cancha Fútbol', 'Piscina Olímpica', 'Sendero Ecológico'],
    imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80',
  },
];

export const BOGOTA_LOCALITIES = [
  'Todas las localidades',
  'Teusaquillo',
  'Tunjuelito',
  'Barrios Unidos',
  'Chapinero',
  'San Cristóbal',
  'Suba',
  'Engativá',
  'Kennedy',
  'Usaquén',
];

export const SPORTS_DISCIPLINES = [
  'Todas las disciplinas',
  'Fútbol',
  'Baloncesto',
  'Natación',
  'Atletismo / Running',
  'Tenis',
  'Patinaje',
  'Yoga',
];
