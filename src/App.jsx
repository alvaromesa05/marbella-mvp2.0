import { useEffect } from "react";

export default function App(){
  // helper para scroll suave
  useEffect(() => {
    window.__scrollTo = (sel) => {
      const el = document.querySelector(sel);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
  }, []);

  return (
    <div>
      {/* NAV */}
      <nav className="nav">
        <div className="container nav-inner">
          {/* BRAND: cambia el texto por el logo */}
          <a className="brand" href="#inicio" onClick={e=>{e.preventDefault();window.__scrollTo('#inicio')}}>
            <img src="/brand/ankome-logo.svg" alt="ANKOME REAL ESTATE" style={{height:28, display:'block'}} />
          </a>

          <div className="menu">
            <a href="#inicio" onClick={e=>{e.preventDefault();window.__scrollTo('#inicio')}}>Inicio</a>
            <a href="#servicios" onClick={e=>{e.preventDefault();window.__scrollTo('#servicios')}}>Servicios</a>
            <a href="#zonas" onClick={e=>{e.preventDefault();window.__scrollTo('#zonas')}}>Zonas</a>
            <a href="#contacto" onClick={e=>{e.preventDefault();window.__scrollTo('#contacto')}}>Contacto</a>
          </div>
        </div>
      </nav>

      {/* HERO con VIDEO */}
      <header id="inicio" className="hero-video-wrap">
        <video
          className="hero-video"
          src="/hero.mp4"
          poster="/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <img src="/brand/ankome-logo.svg" alt="ANKOME REAL ESTATE" style={{height:40, marginBottom:14}} />
          <h1>Intermediación inmobiliaria de <span className="gold">alto nivel</span> en Marbella</h1>
          <p>Vendemos con discreción, marketing premium y seguridad jurídica. Te acompañamos de principio a fin con un trato boutique y transparente.</p>
          <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
            <a className="btn" href="#contacto" onClick={e=>{e.preventDefault();window.__scrollTo('#contacto')}}>Quiero vender</a>
            <a className="btn btn-outline" href="#contacto" onClick={e=>{e.preventDefault();window.__scrollTo('#contacto')}}>Busco comprar</a>
          </div>

          <div className="stats">
            <div className="stat"><div className="n">3–5 %</div><div className="small">Comisión transparente</div></div>
            <div className="stat"><div className="n">48 h</div><div className="small">Listados publicados</div></div>
            <div className="stat"><div className="n">+50</div><div className="small">Compradores cualificados</div></div>
            <div className="stat"><div className="n">100 %</div><div className="small">Acompañamiento legal</div></div>
          </div>
        </div>
      </header>

      {/* SERVICIOS */}
      <section id="servicios" className="section">
        <div className="container">
          <h2 style={{margin:'0 0 8px'}}>Servicios</h2>
          <p style={{color:'var(--muted)'}}>Lo esencial, hecho con estándares de lujo: marketing, negociación y cierre seguro.</p>
          <div className="cards">
            <div className="card"><h3>Marketing premium</h3><p>Fotografía y vídeo profesional, anuncios destacados y difusión internacional.</p></div>
            <div className="card"><h3>Seguridad jurídica</h3><p>Intermediación regulada, contratos de arras y firma en notaría.</p></div>
            <div className="card"><h3>Compradores reales</h3><p>Base de datos de clientes cualificados y validación previa.</p></div>
          </div>
        </div>
      </section>

      {/* ZONAS */}
      <section id="zonas" className="section zones">
        <div className="container">
          <h2 style={{margin:'0 0 8px'}}>Zonas clave</h2>
          <p style={{color:'var(--muted)'}}>Especializados en los micro-mercados con mayor demanda de Marbella.</p>
          <div className="cards">
            <div className="card"><h3>Milla de Oro</h3><p>Villas y áticos de alta demanda internacional.</p></div>
            <div className="card"><h3>Nueva Andalucía</h3><p>Golf Valley, familias europeas y renta alta.</p></div>
            <div className="card"><h3>Sierra Blanca / La Zagaleta</h3><p>Privacidad y ultra-lujo.</p></div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="section">
        <div className="container grid-2">
          <div>
            <h2 style={{margin:'0 0 8px'}}>Contacto</h2>
            <p style={{color:'var(--muted)'}}>Cuéntanos si quieres vender o comprar. Respondemos en menos de 24h.</p>
            <p className="small">Marbella, Málaga · info@tumarca.com · +34 600 000 000</p>
          </div>
          <form action="https://formspree.io/f/your-id" method="POST" onSubmit={(e)=>{e.preventDefault(); alert('Enviado (demo). Sustituye your-id por tu Formspree ID)')}}>
            <div className="row">
              <div><label>Nombre</label><input className="input" name="nombre" required/></div>
              <div><label>Teléfono</label><input className="input" name="telefono" required/></div>
            </div>
            <div className="row">
              <div><label>Email</label><input type="email" className="input" name="email" required/></div>
              <div><label>Necesidad</label>
                <select name="tipo" className="input">
                  <option>Quiero vender</option>
                  <option>Quiero comprar</option>
                  <option>Valoración</option>
                </select>
              </div>
            </div>
            <div style={{margin:'12px 0'}}>
              <label>Mensaje</label>
              <textarea className="input" name="mensaje" rows="4" placeholder="Zona, presupuesto o características"></textarea>
            </div>
            <button className="btn" type="submit">Enviar</button>
            <div className="small" style={{marginTop:8}}>Al enviar aceptas la Política de privacidad.</div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container" style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
          <div>© {new Date().getFullYear()} ANKOME REAL ESTATE</div>
          <div className="small">Aviso legal · Privacidad · Cookies</div>
        </div>
      </footer>
    </div>
  )
}
