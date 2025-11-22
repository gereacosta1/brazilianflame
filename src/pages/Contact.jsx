export default function Contact() {
  return (
    <section className="py-5 contact-section">
      <div className="container" style={{ maxWidth: "980px" }}>
        <div className="mb-4 text-center">
          <h1 className="h3 mb-2">Hablemos de tu próxima parrilla</h1>
          <p className="text-muted mb-0">
            Escribinos para consultas sobre modelos, envíos o compras por
            volumen. Respondemos rápido en horario comercial.
          </p>
        </div>

        <div className="contact-card d-flex flex-column flex-lg-row gap-4">
          {/* Formulario */}
          <div className="flex-grow-1">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                const data = {
                  nombre: form.nombre.value,
                  email: form.email.value,
                  tipo: form.tipo.value,
                  mensaje: form.mensaje.value,
                };
                console.log("Formulario de contacto:", data);
                alert(
                  "Mensaje enviado (simulado). Podés conectar esto a un backend o WhatsApp más adelante."
                );
                form.reset();
              }}
            >
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input
                  name="nombre"
                  type="text"
                  className="form-control"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="tunombre@email.com"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Motivo de contacto</label>
                <select
                  name="tipo"
                  className="form-select"
                  defaultValue="consulta"
                >
                  <option value="consulta">Consulta general</option>
                  <option value="modelo">Duda sobre modelos</option>
                  <option value="envio">Envios y tiempos</option>
                  <option value="mayorista">Compra mayorista</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="form-label">Mensaje</label>
                <textarea
                  name="mensaje"
                  rows="4"
                  className="form-control"
                  placeholder="Contanos qué necesitás y en qué podemos ayudarte"
                  required
                />
              </div>

              <button type="submit" className="btn btn-danger w-100">
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* Lado derecho con info */}
          <div className="contact-side">
            <div className="d-flex flex-column gap-3">
              <div>
                <span className="contact-pill mb-2">Atención al cliente</span>
                <h2 className="h6 mt-2 mb-2">Estamos de este lado del fuego</h2>
                <p className="small mb-0">
                  Te ayudamos a elegir el modelo ideal según tu espacio,
                  presupuesto y cantidad de personas.
                </p>
              </div>

              <div className="contact-highlight">
                <div className="small mb-1">Horario de respuesta</div>
                <div className="small fw-semibold">
                  Lunes a viernes · 09:00 a 18:00
                </div>
              </div>

              <div>
                <div className="small mb-1">📩 Email de soporte</div>
                <div className="small fw-semibold">
                  soporte@brazilianflame.com
                </div>
              </div>

              <div>
                <div className="small mb-1">📍 Enviamos a</div>
                <div className="small">
                  Principales ciudades del país. Consultá tiempos y costos de
                  envío en el formulario.
                </div>
              </div>

              <div className="contact-highlight">
                <div className="small mb-1">💡 Tip</div>
                <div className="small">
                  Si ya sabés el modelo que te interesa, contanos en el mensaje
                  para acelerar la respuesta.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
