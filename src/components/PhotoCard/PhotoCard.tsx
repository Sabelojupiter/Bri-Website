import { Link } from 'react-router-dom';
import { Photo } from '../../data/photos';
import classes from './PhotoCard.module.css';

export function PhotoCard({ photo }: { photo: Photo }) {
  return (
    <Link to={`/shop/${photo.id}`} className={classes.card} style={{ '--accent': photo.color } as React.CSSProperties}>
      <div className={classes.frame}>
        <img src={photo.image} alt={photo.title} className={classes.image} />
      </div>
      <div className={classes.caption}>
        <span className={classes.dot} />
        <span className={classes.name}>{photo.title}</span>
        <span className={classes.place}>{photo.place}</span>
      </div>
    </Link>
  );
}