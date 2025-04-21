export interface Region {
  id: string;
  name: string;
  description: string;
  image: string;
  coordinates: {
    lat: number;
    lng: number;
  };
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
  pricePerNight: number;
  availableFrom: string;
  availableTo: string;
  availableHomes: AvailableHome[];
}

export interface Recommendation {
  id: string;
  name: string;
  type: 'restaurant' | 'sightseeing' | 'taxi';
  description: string;
  image: string;
  regionId: string;
  priceRange?: string;
  rating?: number;
}

export interface Review {
  id: string;
  guestName: string;
  guestImage: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Booking {
  id: string;
  hostId: string;
  guestId: string;
  homeId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: string;
} 