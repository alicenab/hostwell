export interface Region {
  id: string;
  name: string;
  coordinates: { x: number; y: number };
  description: string;
  image: string;
}

export interface AvailableHome {
  id: string;
  type: string;
  description: string;
  price: number;
  maxGuests: number;
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
  images: string[];
}

export interface Host {
  id: string;
  name: string;
  image: string;
  location: string;
  bio: string;
  email: string;
  phone: string;
  regionId: string;
  rating: number;
  reviews: number;
  availableFrom: string;
  availableTo: string;
  availableHomes: AvailableHome[];
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