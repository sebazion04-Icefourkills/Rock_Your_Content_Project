"use client";


import NavBar from "./app/components/NavBar";
import Footer from "./app/components/Footer";
import "./Styles/Hero.css";
import "./Styles/Desktop.css"
import "./Styles/Metology.css";
import "./Styles/Time.css";
import "./Styles/Brands.css";
import"./Styles/Foot.css";
import"./Styles/Call.css";

export default function LandingPage() {
  return (
    <div className="layout-bg">   {/* FONDO DE LA PAG (LIMITADO A 1460PX) */}

      {/* HEADER */}
      <NavBar />

      {/* CONTENIDO PRINCIPAL */}
      <div className="landing-page">

        {/* ------------------------------------------------------------- */}
        {/* SECCIÓN HERO */}
        {/* ------------------------------------------------------------- */}
        <section className="hero-section">
          <div className="hero-content">

            <div className="hero-text">
              <h1>Tu negocio tiene</h1>
                <h1> una voz. Nosotros la amplificamos</h1>
              

              <p>
                Somos <strong>Rock Your Content</strong>, una anti-agencia que rompe esquemas y crea estrategias digitales hechas a medida.
              </p>

              <button
                className="cta-button"
                onClick={() => {
                  document
                    .querySelector("#footer")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                CONTACTANOS
              </button>
            </div>

            <div className="hero-logo">
              <img
                src="/logo_principal.png"
                alt="RockYourContent Logo"
                className="RockLogo-img"
              />
            </div>

          </div>
        </section>

        
        {/* SECCIÓN METODOLOGÍA */}
        {/* ------------------------------------------------------------- */}
        <section className="section-metodologia">
          <h3 className="section-subtitle">Metodología</h3>

          <h2 className="section-title">
           Trabajamos desde la colaboración, no desde la estructura.
          </h2>

          <p className="section-description">
            Basamos nuestro trabajo en la escucha activa. Cada estrategia nace del propósito de tu negocio, no de una plantilla.
          </p>

          <div className="service-grid">

            <div className="service-card">
              <h4>Project Manager</h4>
              <p>Te guiamos para que encuentres el camino adecuado para vos, tu negocio y tu marca.
              </p>

                <p>Un acompañamiento estratégico que conecta objetivos con acción real.</p>
            </div>

            <div className="service-card">
              <h4>Segunda Voz</h4>
              <p>
               Consultorías personalizadas,con encuentros quincenales donde transformamos tus ideas en estrategias claras y aplicables.
              </p>

              <p>  Somos esa segunda voz que te impulsa a sonar más fuerte.</p>
            </div>

            <div className="service-card">
              <h4>Auditoría de Redes Sociales</h4>
              <p>Revisamos tu comunicación para que tu marca suene mejor.</p>
            </div>

          </div>
        </section>

        {/* ------------------------------------------------------------- */}
      {/* SECCIÓN SOBRE NOSOTROS */}

<section className="about-section">
  <div className="about-content">

    {/* COLUMNA DE TEXTO (Izquierda) */}

    <div className="about-text-column"> 
      <h3 className="section-subtitle">SOBRE NOSOTROS</h3>

      <h2 className="section-title about-title-main">
        No somos una agencia tradicional, somos algo distinto, humano y creativo
      </h2>

      <p className="about-text-body">
        Ejemplo: Nacimos de la convicción de que el marketing tradicional ya no es suficiente en un mundo saturado de mensajes. Somos un equipo de mentes creativas, estrategas audaces y productores apasionados, unidos por el deseo de generar un impacto real y medible. Nos especializamos en tácticas below the line (BTL), marketing de guerrilla y activaciones experienciales que no solo captan la atención, sino que crean una conexión emocional duradera entre las marcas y su audiencia.
      </p>
    </div>

    {/*COLUMNA VISUAL (Derecha: Video YouTube + Bloque de Acento) */}

    <div className="about-visual-column"> 
      <div className="about-video-wrapper">
        <iframe
          className="about-video-player"
          src="https://www.youtube.com/embed/mMbGePzfDVo"
          title="Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Bloque de acento verde/teal */}

      <div className="accent-block-right"></div>
    </div>

  </div>
</section>


  
        {/* SECCIÓN MARCAS */}
        {/* ------------------------------------------------------------- */}

        <section className="brands-section">
          <h2 className="section-title">
            Marcas que confiaron en nuestra forma de crear
          </h2>

          <div className="logos-container">
            <h3>Logos o casos de éxito</h3>
          </div>
        </section>

        
        {/* SECCIÓN CTA FINAL */}

        {/* ------------------------------------------------------------- */}

        <section className="cta-section">
          <h2 className="cta-title">
            ¿Listo para <span className="Gistesy">Rockear</span> tu contenido?
          </h2>

          <div className="appointment-info">
            <h3>Coordinemos una charla</h3>

            <p>
              Queremos escuchar tu proyecto y ayudarte a darle forma. Elegí el momento que mejor te venga y agendamos sin vueltas.
            </p>

           {/*<div className="calendar-preview">
              <img
                src="/calendar-image.png"
                alt="Calendar"
                className="calendar-image"
              />
            </div>*/}

            <button
              className="appointment-button"
              onClick={() => {
                window.open(
                  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2gIgy5qb4eJIYgfNTsFb7bcg3jWEyRwrCjrWOUvES6R3X6hR0csUT7yGd6nFYNFtnPJmuMYJ6r",
                  "_blank"
                );
              }}
            >
              Agenda Ahora
            </button>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}