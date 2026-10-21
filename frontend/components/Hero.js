export default function Hero({ garderie }) {
  return (
    <section id="accueil" className="hero">
      <img src="/hero.svg" alt="Enfants qui jouent" className="hero-img" />
      <div className="hero-text">
        <h1>Bienvenue à {garderie ? garderie.nom : '...'}</h1>
        <p>{garderie ? garderie.description : 'Chargement...'}</p>
        {garderie && (
          <p id="contact" className="infos">
            📍 {garderie.adresse} · 📞 {garderie.telephone} · 🕒 {garderie.horaires}
          </p>
        )}
      </div>
    </section>
  );
}
