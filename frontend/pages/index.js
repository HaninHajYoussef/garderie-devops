import { useEffect, useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';

export default function Home() {
  const [garderie, setGarderie] = useState(null);
  const [services, setServices] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    Promise.all([
      fetch('/api/garderie').then((r) => r.json()),
      fetch('/api/services').then((r) => r.json())
    ])
      .then(([g, s]) => {
        setGarderie(g);
        setServices(Array.isArray(s) ? s : []);
      })
      .catch(() => setError(true));
  }, []);

  return (
    <>
      <Head>
        <title>Ma Garderie</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main>
        {error && <p className="error">Impossible de charger les données du backend.</p>}
        <Hero garderie={garderie} />
        <Services services={services} />
      </main>
      <footer className="footer">© Ma Garderie</footer>
    </>
  );
}
