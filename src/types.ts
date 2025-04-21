export interface Region {
  id: string;
  name: string;
  coordinates: { x: number; y: number };
  description: string;
  image: string;
  hosts: Host[];
}

export interface AvailableHome {
  id: string;
  title: string;
  description: string;
  images: string[];
  pricePerNight: number;
  maxGuests: number;
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
  availableDates: {
    from: string;
    to: string;
  }[];
}

export interface Host {
  id: string;
  name: string;
  image: string;
  bio: string;
  location: string;
  regionId: string;
  pricePerNight: number;
  rating: number;
  availableHomes: AvailableHome[];
  availableFrom: string;
  availableTo: string;
  accommodationType: string;
  amenities: string[];
  languages: string[];
  education: {
    university: string;
    degree: string;
    year: number;
  };
  reviews: Review[];
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