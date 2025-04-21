import { Booking } from '../types';

export const bookings: Booking[] = [
  {
    id: '1',
    hostId: '1',
    guestName: 'John Smith',
    startDate: '2025-06-01',
    endDate: '2025-06-03',
    totalPrice: 130,
    status: 'confirmed'
  },
  {
    id: '2',
    hostId: '1',
    guestName: 'Sophia Garcia',
    startDate: '2025-06-10',
    endDate: '2025-06-12',
    totalPrice: 130,
    status: 'pending'
  },
  {
    id: '3',
    hostId: '2',
    guestName: 'David Chen',
    startDate: '2025-06-05',
    endDate: '2025-06-07',
    totalPrice: 90,
    status: 'confirmed'
  },
  {
    id: '4',
    hostId: '3',
    guestName: 'Emma Johnson',
    startDate: '2025-06-11',
    endDate: '2025-06-13',
    totalPrice: 110,
    status: 'completed'
  },
  {
    id: '5',
    hostId: '4',
    guestName: 'Michael Brown',
    startDate: '2025-06-15',
    endDate: '2025-06-18',
    totalPrice: 255,
    status: 'confirmed'
  }
];