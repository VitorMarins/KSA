import React, { useState } from 'react';
import { 
  HeaderHome,
  Footer,
  TitleRegistrationLogin,
  decoracaoInfer,
  triangulo,
  Button,
  professor,
  aluno,
  coordenador
} from '../../imports/imports'; 

import './login.css';


function Login() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [showLogin2, setShowLogin2] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setErrorMessage('');
  };

  const handleNextButtonClick = () => {
    if (!selectedCard) {
      setErrorMessage('Por favor, selecione um perfil para continuar.');
    } else {
      setShowLogin2(true); 
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    
    const data = await response.json();

    if (response.ok) {
      // Redirecionar para a tela de turmas
      console.log('Login bem-sucedido:', data.user);
      // Você pode usar o React Router para redirecionar para outra rota
    } else {
      setErrorMessage(data.message);
    }
  };

  if (showLogin2) {
    return (
      <form onSubmit={handleLogin}>
      <HeaderHome />
      <img src={triangulo} alt='decoracao' id='decInferior' />
      <TitleRegistrationLogin 
        title="Olá, Seja bem-vindo!!"
        paragrafo="preencha os dados abaixo para realizar seu login"
      />

      <form action=''>
        <section className='forms-login'>

          <div className='forms-teste'>
          <label>E-mail:</label>
          <input type='email' id='email'  placeholder="Digite seu email" required></input>
          <br />
          <label id='labelSenha'>Senha:</label>
          <input type='password' id='password' placeholder="Digite sua senha" required></input>

          <a href='#a' id='EsquecSenha'>Esqueceu a senha?</a>

          
          <Button title="Finalizar"/>
          </div>
        </section>
      </form>

      <img src={decoracaoInfer} alt='decoracao' id='decInferior' />
      <Footer />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    );
  }

  return (
    <div className="login">
      <HeaderHome />
      <img src={triangulo} alt='decoracao' id='decInferior' />
      <TitleRegistrationLogin 
        title="Olá, Seja bem-vindo!!"
        paragrafo="Selecione um card para dar continuidade ao seu login"
      />

      <form>
        <section className="ContainerSquare">
          <div className='Square'>
            <button 
              type="button" 
              className={`new-square ${selectedCard === 'Professor' ? 'selected' : ''}`}
              onClick={() => handleCardClick('Professor')}
            >
              <img src={professor} alt="Professor" />
              <h2>Professor</h2>
              <p className="description">O professor é o responsável por planejar, ensinar e orientar alunos, promovendo o aprendizado e o desenvolvimento de habilidades e valores.</p>
            </button>

            <button 
              type="button" 
              className={`new-square ${selectedCard === 'Aluno' ? 'selected' : ''}`}
              onClick={() => handleCardClick('Aluno')}
            >
              <img src={aluno} alt="Aluno" />
              <h2>Aluno</h2>
              <p className="description">O aluno é aquele que busca aprendizado, desenvolvendo habilidades e conhecimentos através do estudo contínuo e da curiosidade.</p>
            </button>

            <button 
              type="button" 
              className={`new-square ${selectedCard === 'Coordenador' ? 'selected' : ''}`}
              onClick={() => handleCardClick('Coordenador')}
            >
              <img src={coordenador} alt="Coordenador" />
              <h2>Coordenador</h2>
              <p className="description">O coordenador é o responsável por planejar, organizar e supervisionar atividades e equipes, garantindo o cumprimento de objetivos e a eficiência dos processos.</p>
            </button>
          </div>
        </section>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <div className='button-container'>
          <Button 
            title="Próximo"
            onClick={handleNextButtonClick}
            disabled={!selectedCard} 
          />
        </div>
      </form>

      <img src={decoracaoInfer} alt='decoracao' id='decInferior' />
      <Footer />
    </div>
  );
}

export default Login;
