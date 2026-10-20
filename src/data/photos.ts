export interface Photo {
  id: string;
  title: string;
  place: string;
  image: string;
  color: string;
}

export const sizes = [
  { label: '8 × 10', price: 40 },
  { label: '11 × 14', price: 75 },
  { label: '16 × 20', price: 120 },
  { label: '24 × 36', price: 220 },
];

export const papers = ['Matte', 'Lustre', 'Metallic'];

export const photos: Photo[] = [
  { id: 'first-light', title: 'First Light', place: 'New Orleans, LA', image: '/photos/landscape.jpeg', color: '#FF6B35' },
  { id: 'still-water', title: 'Still Water', place: 'Lake Pontchartrain', image: 'https://picsum.photos/seed/tm2/1200/1500', color: '#2EC4B6' },
  { id: 'magenta-hour', title: 'Magenta Hour', place: 'Bywater', image: 'https://picsum.photos/seed/tm3/1200/900', color: '#E83F6F' },
  { id: 'passing-through', title: 'Passing Through', place: 'Frenchmen St', image: 'https://picsum.photos/seed/tm4/1200/1500', color: '#7B5CFF' },
  { id: 'gold-dust', title: 'Gold Dust', place: 'City Park', image: 'https://picsum.photos/seed/tm5/1200/900', color: '#FFC145' },
  { id: 'blue-hour', title: 'Blue Hour', place: 'Mississippi River', image: 'https://picsum.photos/seed/tm6/1200/1500', color: '#3A86FF' },
];

export function findPhoto(id: string | undefined) {
  return photos.find((photo) => photo.id === id);
}