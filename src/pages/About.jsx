// src/pages/About.jsx

export default function About() {
  return (
    <section className="py-5">
      <div className="container" style={{ maxWidth: "1080px" }}>
        
        {/* ================================
            HERO SECTION • MODERNO
        ================================= */}
        <div className="about-hero p-4 p-md-5 mb-5 d-flex flex-column flex-md-row gap-4 align-items-md-center">
          
          {/* Text block */}
          <div className="flex-grow-1">
            <span className="about-badge mb-2">Nuestra historia</span>
            <h1 className="h3 mb-3 fw-bold">De Brasil a tu balcón.</h1>
            <p className="small mb-0 text-muted">
              Brazilian Flame nace para llevar el sabor del churrasco brasileño
              a hogares modernos: balcones, terrazas y patios donde el espacio 
              importa tanto como el diseño. Nuestro objetivo es combinar 
              diseño minimalista, potencia y comodidad.
            </p>
          </div>

          {/* Imagen con proporción fija y sin deformación */}
          <div className="flex-shrink-0 col-md-6">
            <div
              style={{
                width: "100%",
                aspectRatio: "16 / 9",
                overflow: "hidden",
                borderRadius: "16px",
              }}
            >
              <img
                src="/hero-grill2.jpg"
                alt="Equipo de Brazilian Flame"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>

        {/* ================================
            BLOQUES DE INFORMACIÓN
        ================================= */}
        <div className="row g-4">
          
          {/* Lo que nos mueve */}
          <div className="col-md-6">
            <div className="about-grid-card h-100 p-4">
              <h2 className="h6 mb-2 fw-bold">Lo que nos mueve</h2>
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

          {/* Diseño para tu espacio */}
          <div className="col-md-6">
            <div className="about-grid-card h-100 p-4">
              <h2 className="h6 mb-2 fw-bold">Diseño pensado para tu espacio</h2>
              <p className="small text-muted mb-3">
                Cada modelo está diseñado para balcones y terrazas reales:
                espacios donde la comodidad y el estilo conviven sin esfuerzo.
              </p>

              <div
                style={{
                  width: "100%",
                  aspectRatio: "16 / 9",
                  overflow: "hidden",
                  borderRadius: "16px",
                }}
              >
                <img
                  src="/hero-grill3.jpg"
                  alt="Parrilla en balcón moderno"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Calidad */}
          <div className="col-md-4">
            <div className="about-grid-card h-100 p-4">
              <h3 className="h6 mb-2 fw-bold">Calidad</h3>
              <p className="small text-muted mb-0">
                Materiales resistentes a uso intensivo, diseñados para durar
                años sin perder rendimiento.
              </p>
            </div>
          </div>

          {/* Experiencia */}
          <div className="col-md-4">
            <div className="about-grid-card h-100 p-4">
              <h3 className="h6 mb-2 fw-bold">Experiencia</h3>
              <p className="small text-muted mb-0">
                Desde el unboxing hasta el primer asado: buscamos una experiencia
                simple, limpia y profesional.
              </p>
            </div>
          </div>

          {/* Confianza */}
          <div className="col-md-4">
            <div className="about-grid-card h-100 p-4">
              <h3 className="h6 mb-2 fw-bold">Confianza</h3>
              <p className="small text-muted mb-0">
                Más de 10.000 hogares confían en Brazilian Flame por su 
                facilidad de uso, diseño y resultados reales.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
