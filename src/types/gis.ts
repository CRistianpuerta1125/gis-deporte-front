export interface LocationPoint {
  type: 'Point';
  coordinates: [number, number]; // [longitude, latitude]
}

export interface Venue {
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

export interface SportEvent {
  id: string;
  title: string;
  description: string;
  sportDiscipline: string;
  venueId: string;
  venue?: Venue;
  instructorId: string;
  instructorName?: string;
  startTime: string;
  endTime: string;
  capacity: number;
  enrolledCount: number;
}
