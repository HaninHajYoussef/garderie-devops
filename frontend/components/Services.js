export default function Services({ services }) {
  return (
    <section id="services" className="services">
      <h2>Nos services</h2>
      <div className="grid">
        {services.map((s) => (
          <article key={s.id} className="card">
            <div className="icon">{s.icone}</div>
            <h3>{s.nom}</h3>
            <p>{s.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
