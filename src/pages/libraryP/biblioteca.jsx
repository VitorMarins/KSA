import React, { useState } from 'react';
import './biblioteca.css';
import { 
    Cards,
    TurmaDecoracaoSuperior,
    HeaderSite,
    fundoCards,
    capaLivro,
    Footer,
  } from '../../imports/imports';

function Biblioteca() {
    return(
      <div className='biblioteca'> 
          <HeaderSite />
          <img src={TurmaDecoracaoSuperior} alt='decoração' id='decoracaoTurma'/>

          <section className="turmas-header">
            <h2 className="turmas-title" id='biblioteca-title'> Biblioteca </h2>
          </section>

        <section className='container-Books'>
            <div className='title-Books'>
              <svg className='svgBiblioteca' width="177" height="24" viewBox="0 0 177 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="-9" y1="13" x2="154" y2="13" stroke="#FF9900" stroke-width="4"/>
                  <path d="M175 12C175 17.4467 170.377 22 164.5 22C158.623 22 154 17.4467 154 12C154 6.55332 158.623 2 164.5 2C170.377 2 175 6.55332 175 12Z" stroke="#FF9900" stroke-width="4"/>
                    </svg>
                     <h2>Desenvolvimento de sistemas</h2>
                      </div>

          <section className='cardsBooks' id='programming'>
          <Cards title="Fundamentos de desenvolvimento web back-end" img={fundoCards} img2={capaLivro} authors="Marta Roberta Pinheiro Garcia Teles, Luciano Custodio, Glauco Pereira da Costa Santos, Jose Luiz da Silva"/>
          <Cards title="Fundamentos de desenvolvimento web back-end" img={fundoCards} img2={capaLivro} authors="Marta Roberta Pinheiro Garcia Teles, Luciano Custodio, Glauco Pereira da Costa Santos, Jose Luiz da Silva"/>
          <Cards title="Fundamentos de desenvolvimento web back-end" img={fundoCards} img2={capaLivro} authors="Marta Roberta Pinheiro Garcia Teles, Luciano Custodio, Glauco Pereira da Costa Santos, Jose Luiz da Silva"/>
          <Cards title="Fundamentos de desenvolvimento web back-end" img={fundoCards} img2={capaLivro} authors="Marta Roberta Pinheiro Garcia Teles, Luciano Custodio, Glauco Pereira da Costa Santos, Jose Luiz da Silva"/>
          <Cards title="Fundamentos de desenvolvimento web back-end" img={fundoCards} img2={capaLivro} authors="Marta Roberta Pinheiro Garcia Teles, Luciano Custodio, Glauco Pereira da Costa Santos, Jose Luiz da Silva"/>
          <Cards title="Fundamentos de desenvolvimento web back-end" img={fundoCards} img2={capaLivro} authors="Marta Roberta Pinheiro Garcia Teles, Luciano Custodio, Glauco Pereira da Costa Santos, Jose Luiz da Silva"/>
          <Cards title="Fundamentos de desenvolvimento web back-end" img={fundoCards} img2={capaLivro} authors="Marta Roberta Pinheiro Garcia Teles, Luciano Custodio, Glauco Pereira da Costa Santos, Jose Luiz da Silva"/>
          <Cards title="Fundamentos de desenvolvimento web back-end" img={fundoCards} img2={capaLivro} authors="Marta Roberta Pinheiro Garcia Teles, Luciano Custodio, Glauco Pereira da Costa Santos, Jose Luiz da Silva"/>
          </section>

          <div className='title-Books'>
              <svg className='svgBiblioteca' width="177" height="24" viewBox="0 0 177 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="-9" y1="13" x2="154" y2="13" stroke="#FF9900" stroke-width="4"/>
                  <path d="M175 12C175 17.4467 170.377 22 164.5 22C158.623 22 154 17.4467 154 12C154 6.55332 158.623 2 164.5 2C170.377 2 175 6.55332 175 12Z" stroke="#FF9900" stroke-width="4"/>
                    </svg>
                      <h2>Logística e Administração de Negócios </h2>
                      </div>

          <section className='cardsBooks' id='logistica'>
          <Cards title="Fundamentos de desenvolvimento web back-end" img={fundoCards} img2={capaLivro} authors="Marta Roberta Pinheiro Garcia Teles, Luciano Custodio, Glauco Pereira da Costa Santos, Jose Luiz da Silva"/>
          <Cards title="Fundamentos de desenvolvimento web back-end" img={fundoCards} img2={capaLivro} authors="Marta Roberta Pinheiro Garcia Teles, Luciano Custodio, Glauco Pereira da Costa Santos, Jose Luiz da Silva"/>
          <Cards title="Fundamentos de desenvolvimento web back-end" img={fundoCards} img2={capaLivro} authors="Marta Roberta Pinheiro Garcia Teles, Luciano Custodio, Glauco Pereira da Costa Santos, Jose Luiz da Silva"/>
          <Cards title="Fundamentos de desenvolvimento web back-end" img={fundoCards} img2={capaLivro} authors="Marta Roberta Pinheiro Garcia Teles, Luciano Custodio, Glauco Pereira da Costa Santos, Jose Luiz da Silva"/>
          <Cards title="Fundamentos de desenvolvimento web back-end" img={fundoCards} img2={capaLivro} authors="Marta Roberta Pinheiro Garcia Teles, Luciano Custodio, Glauco Pereira da Costa Santos, Jose Luiz da Silva"/>
          <Cards title="Fundamentos de desenvolvimento web back-end" img={fundoCards} img2={capaLivro} authors="Marta Roberta Pinheiro Garcia Teles, Luciano Custodio, Glauco Pereira da Costa Santos, Jose Luiz da Silva"/>
          <Cards title="Fundamentos de desenvolvimento web back-end" img={fundoCards} img2={capaLivro} authors="Marta Roberta Pinheiro Garcia Teles, Luciano Custodio, Glauco Pereira da Costa Santos, Jose Luiz da Silva"/>
          <Cards title="Fundamentos de desenvolvimento web back-end" img={fundoCards} img2={capaLivro} authors="Marta Roberta Pinheiro Garcia Teles, Luciano Custodio, Glauco Pereira da Costa Santos, Jose Luiz da Silva"/>
          </section>
        </section>


      <Footer />

      </div>
    );
}

export default Biblioteca;