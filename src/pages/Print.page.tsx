import { useState } from 'react';
import { Button, SegmentedControl } from '@mantine/core';
import { Link, useParams } from 'react-router-dom';
import { findPhoto, papers, sizes } from '../data/photos';
import classes from './Print.module.css';

export function PrintPage() {
  const { id } = useParams();
  const photo = findPhoto(id);
  const [size, setSize] = useState(sizes[0].label);
  const [paper, setPaper] = useState(papers[0]);

  if (!photo) {
    return <p style={{ padding: 48 }}>That print has drifted away. <Link to="/shop">Back to the shop</Link></p>;
  }

  const price = sizes.find((s) => s.label === size)!.price;

  return (
    <section className={classes.page} style={{ '--accent': photo.color } as React.CSSProperties}>
      <img src={photo.image} alt={photo.title} className={classes.image} />

      <div className={classes.details}>
        <Link to="/shop" className={classes.back}>← All prints</Link>
        <p className={classes.place}>{photo.place}</p>
        <h1 className={classes.title}>{photo.title}</h1>

        <p className={classes.label}>Size (inches)</p>
        <SegmentedControl fullWidth value={size} onChange={setSize} data={sizes.map((s) => s.label)} />

        <p className={classes.label}>Paper</p>
        <SegmentedControl fullWidth value={paper} onChange={setPaper} data={papers} />

        <p className={classes.price}>${price}</p>
        <Button size="lg" fullWidth color="dark" disabled>
          Checkout coming soon
        </Button>
      </div>
    </section>
  );
}