export default function About() {
  return (
    <section className="py-5">
      <div className="container" style={{ maxWidth: "980px" }}>
        <div className="about-hero p-4 p-md-5 mb-4 d-flex flex-column flex-md-row gap-4 align-items-md-center">
          <div className="flex-grow-1">
            <span className="about-badge mb-2">Nuestra historia</span>
            <h1 className="h3 mb-3">De Brasil a tu balcón.</h1>
            <p className="small mb-0">
              Brazilian Flame nace para llevar el sabor del churrasco brasileño
              a hogares modernos: balcones, terrazas y patios donde el espacio
              importa tanto como el diseño.
            </p>
          </div>

          <div className="flex-shrink-0">
            <img
              src="https://via.placeholder.com/320x220?text=Equipo+Brazilian+Flame"
              alt="Equipo de Brazilian Flame"
              className="img-fluid rounded-4"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        <div className="row g-4">
          <div className="col-md-6">
            <div className="about-grid-card h-100">
              <h2 className="h6 mb-2">Lo que nos mueve</h2>
              <p className="small text-muted">
                No vendemos solo una parrilla: vendemos la experiencia completa
                de invitar, cocinar y disfrutar sin estrés.
              </p>
              <ul className="small text-muted mb-0">
                <li>Cocinar sin complicaciones, con resultados profesionales.</li>
                <li>Productos fáciles de limpiar y mantener.</li>
                <li>Soporte real en español antes y después de tu compra.</li>
              </ul>
            </div>
          </div>

          <div className="col-md-6">
            <div className="about-grid-card h-100">
              <h2 className="h6 mb-2">Diseño pensado para tu espacio</h2>
              <p className="small text-muted mb-3">
                Cada modelo está diseñado para adaptarse a balcones y terrazas
                reales, no a estudios de fotografía.
              </p>
              <img
                src="https://via.placeholder.com/540x260?text=Parrilla+en+balcon+moderno"
                alt="Parrilla en balcón moderno"
                className="img-fluid rounded-4"
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className="about-grid-card h-100">
              <h3 className="h6 mb-2">Calidad</h3>
              <p className="small text-muted mb-0">
                Materiales pensados para uso intensivo, con foco en durabilidad
                y seguridad.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="about-grid-card h-100">
              <h3 className="h6 mb-2">Experiencia</h3>
              <p className="small text-muted mb-0">
                Nos obsesiona que el unboxing, la instalación y el primer
                asado se sientan naturales y fluidos.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="about-grid-card h-100">
              <h3 className="h6 mb-2">Confianza</h3>
              <p className="small text-muted mb-0">
                Queremos que cada cliente recomiende Brazilian Flame después de
                su primer fin de semana de uso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
