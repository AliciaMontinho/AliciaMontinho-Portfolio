import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-text">
          <p className="section-label">SOBRE MÍ</p>

          <h2>Desarrolladora web en constante evolución.</h2>

          <p>
            Soy desarrolladora de aplicaciones web y actualmente continúo
            formándome en el desarrollo de aplicaciones multiplataforma.
          </p>

          <p>
            Me interesa especialmente crear aplicaciones que no solo funcionen
            correctamente, sino que también tengan una interfaz cuidada y una
            buena experiencia de usuario.
          </p>

          <p>
            Disfruto aprendiendo nuevas tecnologías y convirtiendo ideas en
            proyectos reales.
          </p>

          <p>
            Además de programar he estado trabajando en nuevas experiencias y profesiones como por ejemplo
            celadora, puesto que he ejercido en Suiza, y dependienta en varios departamentos de El Corte Inglés.
          </p>
          <p>
            Soy una persona curiosa a la que le gusta mucho aprender y estar en constante actividad ya que de alguna 
            forma "derrocho energía"😎. 
          </p>
        </div>

        <div className="about-info">
          <div className="info-item">
            <span>01</span>
            <p>Desarrollo Frontend</p>
          </div>

          <div className="info-item">
            <span>02</span>
            <p>Desarrollo Backend</p>
          </div>

          <div className="info-item">
            <span>03</span>
            <p>Desarrollo Multiplataforma</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;