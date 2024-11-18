import { Button } from '../../imports/imports';
import './cCards.css';

const Card = ({ title, img, img2, authors }) => {
  return (
    <section className="card">
      <div className="headerCard">
          <img src={img} alt={`Capa do livro ${title}`} id='fundo'/>
          <img src={img2} alt={`Imagem decorativa para ${title}`} id='capa' />
        </div>
        

    <section className='inforCard'>
        <div className="bodyCard">
          <h5>{title}</h5>
            <p><strong>Escrito por:</strong></p>
            <p>{authors}</p>
        </div>

        <div className="footerCard">
          <button>Acessar</button>
        </div>

    </section>
    </section>
  );
};

export default Card;
