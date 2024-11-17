import { 
    telefone, 
    parceria, 
    Topo, 
    RedesLink, 
    RedesYout, 
    RedesInsta, 
    RedesFace 
  } from '../../imports/imports';
  import React, { useEffect, useState } from 'react';
  import './cFooter.css';
  
  export default function Footer({ id }) {
    const [showButton, setShowButton] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setShowButton(window.scrollY > 200);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <footer id={id}>
        <hr id="linhaDecima" />
  
        <div className="background">
          <section className="containerContato">
            <div className="Contato">
              <div className="TESTE">
                <h2>Contato</h2>
  
                {/* Contact Information */}
                {['Recife', 'Paulista', 'Caruaru', 'Petrolina'].map((localidade) => (
                  <div className="contatoInfo" key={localidade}>
                    <h4>{localidade}</h4>
                    {localidade === 'Recife' && (
                      <>
                        <div className="telefone">
                          <img src={telefone} alt="Ícone de telefone" className="phone-icon" />
                          <a href="tel:+558134136666">(81) 3413.6666 (CAS)</a>
                        </div>
                      </>
                    )}
                    {localidade === 'Paulista' && (
                      <>
                        <div className="telefone">
                          <img src={telefone} alt="Ícone de telefone" className="phone-icon" />
                          <a href="tel:+558133728250">(81) 3372-8250</a>
                        </div>
                      </>
                    )}
                    {localidade === 'Caruaru' && (
                      <>
                        <div className="telefone">
                          <img src={telefone} alt="Ícone de telefone" className="phone-icon" />
                          <a href="tel:+558137278259">(81) 3727-8259</a>
                        </div>
                        <div className="telefone">
                          <img src={telefone} alt="Ícone de telefone" className="phone-icon" />
                          <a href="tel:+5581999141270">(81) 99914-1270</a>
                        </div>
                      </>
                    )}
                    {localidade === 'Petrolina' && (
                      <>
                        <div className="telefone">
                          <img src={telefone} alt="Ícone de telefone" className="phone-icon" />
                          <a href="tel:+558739837602">(87) 3983-7602</a>
                        </div>
                        <div className="telefone">
                          <img src={telefone} alt="Ícone de telefone" className="phone-icon" />
                          <a href="https://api.whatsapp.com/send/?phone=5587988748456&text&type=phone_number&app_absent=0">(87) 98874-8456</a>
                        </div>
                      </>
                    )}
                  </div>
                ))}
  
              </div>
  
              {/* Scroll to Top Button */}
              {showButton && (
                <section className="subirPag">
                  <img src={parceria} alt="Parceria" />
                  <div className="textTopo">
                    <hr id="topolinha" />
                    <p>Topo</p>
                  </div>
                  <a href="#top" id="botãoSubir">
                    <img src={Topo} alt="Subir ao topo" />
                  </a>
                </section>
              )}
            </div>
          </section>
  
          <hr id="linhainferior" />
  
          {/* Social Media Links */}
          <div className="redes">
            <div className="redesSociais">
              <a href="https://www.linkedin.com/company/senacpe/"><img src={RedesLink} alt="LinkedIn" /></a>
              <a href="https://www.youtube.com/user/SenacPernambuco"><img src={RedesYout} alt="YouTube" /></a>
              <a href="https://www.instagram.com/senacpe"><img src={RedesInsta} alt="Instagram" /></a>
              <a href="https://www.facebook.com/senacpe"><img src={RedesFace} alt="Facebook" /></a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  