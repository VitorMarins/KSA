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
import { useNavigate } from 'react-router-dom';

import './login.css';

function Login() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [showLogin2, setShowLogin2] = useState(false);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setErrorMessage('');
  };

  const handleNextButtonClick = (e) => {
    e.preventDefault();
    if (!selectedCard) {
      setErrorMessage('Por favor, selecione um perfil para continuar.');
    } else {
      setShowLogin2(true); 
      setErrorMessage('');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://back-end-mediotec.onrender.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
      });
      const data = await response.json();

      if (response.ok) {
        // Redirecionar para a tela de turmas
        navigate('/turma');
      } else {
        setErrorMessage(data.message || 'Erro ao fazer login.');
      }
    } catch (error) {
      setErrorMessage('Erro de conexão.');
    }
  };

  if (showLogin2) {
    return (
      <div>
        <HeaderHome />
        <img src={triangulo} alt='decoracao' id='decInferior' />
        <TitleRegistrationLogin 
          title="Olá, Seja bem-vindo!!"
          paragrafo="preencha os dados abaixo para realizar seu login"
        />

        <form onSubmit={handleLogin}>
          <section className='forms-login'>
            <div className='forms-teste'>
              <label htmlFor='email'>E-mail:</label>
              <input
                type='email'
                id='email'
                placeholder="Digite seu email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <br />
              <label htmlFor='senha' id='labelSenha'>Senha:</label>
              <input
                type='password'
                id='senha'
                placeholder="Digite sua senha"
                required
                value={senha}
                onChange={e => setSenha(e.target.value)}
              />

              <a href='#a' id='EsquecSenha'>Esqueceu a senha?</a>

              <Button title="Finalizar" type="submit" />
            </div>
          </section>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>

        <img src={decoracaoInfer} alt='decoracao' id='decInferior' />
        <Footer />
      </div>
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
