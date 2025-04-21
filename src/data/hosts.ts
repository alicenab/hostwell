import { Host } from '../types';

export const hosts: Host[] = [
  {
    id: '1',
    name: 'Ilqar Aliyev',
    email: 'ilqar@example.com',
    phone: '+994 50 123 4567',
    bio: 'Harvard graduate with experience in hospitality. I enjoy sharing Azerbaijan\'s culture with guests and can offer tours of local historical sites.',
    regionId: 'sheki',
    location: 'Sheki, Azerbaijan',
    availableFrom: '2025-06-01',
    availableTo: '2025-06-30',
    availableHomes: [
      {
        id: '1-1',
        type: '2-bedroom cottage',
        price: 65,
        description: 'A cozy cottage with traditional Azerbaijani decor, perfect for families or small groups.',
        images: [
          'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg',
          'https://images.pexels.com/photos/2098479/pexels-photo-2098479.jpeg',
          'https://images.pexels.com/photos/2098405/pexels-photo-2098405.jpeg'
        ],
        amenities: ['Wi-Fi', 'Kitchen', 'Garden', 'Parking'],
        maxGuests: 4,
        bedrooms: 2,
        bathrooms: 1
      },
      {
        id: '1-2',
        type: '1-bedroom apartment',
        price: 45,
        description: 'Modern apartment in the heart of Sheki, close to all major attractions.',
        images: [
          'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
          'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg',
          'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg'
        ],
        amenities: ['Wi-Fi', 'Kitchen', 'Air Conditioning', 'TV'],
        maxGuests: 2,
        bedrooms: 1,
        bathrooms: 1
      }
    ],
    rating: 4.9,
    reviews: 24,
    image: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg'
  },
  {
    id: '2',
    name: 'Mobil Aliyev',
    email: 'mobil@example.com',
    phone: '+994 55 987 6543',
    bio: 'Princeton alumnus specializing in sustainable tourism. My family has lived in Lankaran for generations, and I love showing visitors our local tea gardens.',
    regionId: 'lankaran',
    location: 'Lankaran, Azerbaijan',
    availableFrom: '2025-06-05',
    availableTo: '2025-07-05',
    availableHomes: [
      {
        id: '2-1',
        type: '1-bedroom house',
        price: 45,
        description: 'Traditional house with a beautiful garden, perfect for experiencing local culture.',
        images: [
          'https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg',
          'https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg',
          'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg'
        ],
        amenities: ['Wi-Fi', 'Kitchen', 'Garden', 'Tea House'],
        maxGuests: 2,
        bedrooms: 1,
        bathrooms: 1
      }
    ],
    rating: 4.8,
    reviews: 18,
    image: 'https://images.pexels.com/photos/5792632/pexels-photo-5792632.jpeg'
  },
  {
    id: '3',
    name: 'Elxan Shinqayev',
    email: 'elxan@example.com',
    phone: '+994 70 456 7890',
    bio: 'Stanford graduate with expertise in mountain tourism. My guest house has been in my family for three generations, offering authentic Azerbaijani experiences.',
    regionId: 'quba',
    location: 'Quba, Azerbaijan',
    availableFrom: '2025-06-10',
    availableTo: '2025-07-10',
    availableHomes: [
      {
        id: '3-1',
        type: 'Guest house',
        price: 55,
        description: 'Family-run guest house with mountain views and traditional hospitality.',
        images: [
          'https://images.pexels.com/photos/2480608/pexels-photo-2480608.jpeg',
          'https://images.pexels.com/photos/2480605/pexels-photo-2480605.jpeg',
          'https://images.pexels.com/photos/2480607/pexels-photo-2480607.jpeg'
        ],
        amenities: ['Wi-Fi', 'Kitchen', 'Mountain View', 'Breakfast'],
        maxGuests: 6,
        bedrooms: 3,
        bathrooms: 2
      }
    ],
    rating: 4.9,
    reviews: 32,
    image: 'https://images.pexels.com/photos/5792635/pexels-photo-5792635.jpeg'
  },
  {
    id: '4',
    name: 'Leyla Mammadova',
    email: 'leyla@example.com',
    phone: '+994 51 234 5678',
    bio: 'Columbia University graduate with a background in art history. My apartment in central Baku is a perfect base for exploring the city\'s rich cultural heritage.',
    regionId: 'baku',
    location: 'Baku, Azerbaijan',
    availableFrom: '2025-06-15',
    availableTo: '2025-07-15',
    availableHomes: [
      {
        id: '4-1',
        type: 'Modern apartment',
        price: 85,
        description: 'Stylish apartment in the heart of Baku, close to major attractions and nightlife.',
        images: [
          'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg',
          'https://images.pexels.com/photos/1643385/pexels-photo-1643385.jpeg',
          'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg'
        ],
        amenities: ['Wi-Fi', 'Kitchen', 'Gym', 'Pool'],
        maxGuests: 4,
        bedrooms: 2,
        bathrooms: 2
      }
    ],
    rating: 4.7,
    reviews: 28,
    image: 'https://images.pexels.com/photos/5792638/pexels-photo-5792638.jpeg'
  },
  {
    id: '5',
    name: 'Rustam Huseynov',
    email: 'rustam@example.com',
    phone: '+994 77 765 4321',
    bio: 'MIT graduate working in sustainable architecture. My renovated traditional house in Ganja combines modern amenities with historical charm.',
    regionId: 'ganja',
    location: 'Ganja, Azerbaijan',
    availableFrom: '2025-06-20',
    availableTo: '2025-07-20',
    availableHomes: [
      {
        id: '5-1',
        type: 'Traditional house',
        price: 70,
        description: 'Beautifully restored traditional house with modern comforts.',
        images: [
          'https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg',
          'https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg',
          'https://images.pexels.com/photos/2119715/pexels-photo-2119715.jpeg'
        ],
        amenities: ['Wi-Fi', 'Kitchen', 'Garden', 'Historical Features'],
        maxGuests: 5,
        bedrooms: 2,
        bathrooms: 2
      }
    ],
    rating: 4.8,
    reviews: 21,
    image: 'https://images.pexels.com/photos/5792643/pexels-photo-5792643.jpeg'
  }
];