export default function Navbar() {
  return (
    <header className="navbar">
      <div className="brand">
        <span className="logo" aria-hidden="true">🧸</span>
        <span className="brand-name">Ma Garderie</span>
      </div>
      <nav>
        <a href="#accueil">Accueil</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
