import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';

export function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer style={{ padding: '48px 24px', textAlign: 'center', opacity: 0.6 }}>
        © {new Date().getFullYear()} Transient Moments
      </footer>
    </>
  );
}