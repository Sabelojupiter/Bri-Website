import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

export function Header() {
  return (
    <header className={classes.header}>
      <NavLink to="/" className={classes.logo}>
        Transient <em>Moments</em>
      </NavLink>
      <nav className={classes.nav}>
        <NavLink to="/shop" className={classes.link}>Shop</NavLink>
        <NavLink to="/about" className={classes.link}>About</NavLink>
      </nav>
    </header>
  );
}