import { quantidadeAlunosIcon } from '../../imports/imports';
import './cClasse.css'
const CardClasse = ({ imgFundo, imgProfessor, turma, turno, materia, professor, quantidadeAlunos }) => {
    return (
    <section className="cardClasse">
            <section className="card-header">
                <img src={imgFundo} alt='Imagem de fundo da turma' id='ImgFundo' />
                    
                    <section className="class-info">
                        <img src={imgProfessor} alt={`Imagem do professor ${professor}`} id='ImgProfessor' />
                            <section className='inforClass'>
                                <p><strong>Turma:</strong> {turma}</p>
                                <p><strong>Turno:</strong> {turno}</p>
                            </section>


                    </section>
               
                    <section className='select'>
                        <button className='buttonSelect'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <                             path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                                    </svg>
                                        </button>
                        
                        <ul className="dropdown-menu">
                            <li><button>Editar</button></li>
                            <li><button>Excluir</button></li>
                        </ul>
                    </section>
                
            </section>

            <div className="card-body">
                <h3 id='title-materia'>{materia}</h3>
            </div>

            <div className="card-footer">
                <hr id='linha-Footer-Classe'></hr>
                <div className="footer-content">
                    <img src={quantidadeAlunosIcon} alt="Ícone quantidade de alunos" />
                    <p>{quantidadeAlunos} pessoas</p>
                 
                </div>
                <p id='professorName'>Professor: {professor}</p>
            </div>
    </section>

    );
};

export default CardClasse;
