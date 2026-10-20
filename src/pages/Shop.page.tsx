import { PhotoCard } from '../components/PhotoCard/PhotoCard';
import { photos } from '../data/photos';

export function ShopPage() {
  return (
    <section style={{ padding: '48px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 56, margin: '0 0 8px' }}>The Shop</h1>
      <p style={{ fontSize: 18, opacity: 0.7, margin: '0 0 40px' }}>
        Every print made to order. Pick a moment.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 32 }}>
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </section>
  );
}