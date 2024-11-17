import './cMapa.css'
const Mapa = () => {
    return (
      <div className="mapa">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d126435.85912079454!2d-34.98105323448617!3d-7.986480279141469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssenac!5e0!3m2!1spt-BR!2sbr!4v1727548370569!5m2!1spt-BR!2sbr"
          width="700"
          height="750"
          style={{
            border: '5px solid #FF9900',
            boxShadow: '2px 2px 20px #E7A7A7',
            maxWidth: '100%',
            maxHeight: '100%',
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>

      </div>
    );
  }
  
  export default Mapa;