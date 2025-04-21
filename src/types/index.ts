export interface Region {
  id: string;
  name: string;
  coordinates: { x: number; y: number };
  description: string;
  image: string;
}

export interface Host {
  id: string;
  name: string;
  email: string;
  phone: string;
  bio: string;
  regionId: string;
  accommodationType: string;
  price: number;
  availability: string[];
  image: string;
}

export interface Recommendation {
  id: string;
  regionId: string;
  type: 'restaurant' | 'sightseeing' | 'taxi';
  name: string;
  description: string;
  priceRange: string;
  image: string;
}

export interface Booking {
  id: string;
  hostId: string;
  guestName: string;
  startDate: string;
  endDate: string;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}