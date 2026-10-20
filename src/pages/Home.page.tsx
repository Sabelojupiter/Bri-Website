import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import { PhotoCard } from '../components/PhotoCard/PhotoCard';
import { photos } from '../data/photos';
import classes from './Home.module.css';

export function HomePage() {
  return (
    <>
      <section className={classes.hero} style={{ backgroundImage: `url(${photos[0].image})` }}>
        <div className={classes.glow} />
        <div className={classes.heroText}>
          <h1 className={classes.title}>
            Transient <em>Moments</em>
          </h1>
          <p className={classes.tagline}>Light that was only here once. Prints to keep it.</p>
          <Button component={Link} to="/shop" size="lg" color="dark">
            Shop prints
          </Button>
        </div>
      </section>

      <section className={classes.featured}>
        <h2 className={classes.sectionTitle}>Recently caught</h2>
        <div className={classes.featuredGrid}>
          {photos.slice(1, 4).map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>
      </section>
    </>
  );
}