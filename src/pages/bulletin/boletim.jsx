import {
    decTitle,
    dec,
    Button,
    Footer,
    HeaderSite
} from '../../imports/imports';
import { useBoletim } from './script/boletim';
import './boletim.css';

function Boletim() {
    const {
        dados,
        activeTab,
        underlinePosition,
        handleTabClick,
        handleInputChange,
        handleSave
    } = useBoletim();

    return (
        <div className="boletim">
            <HeaderSite />
            <img src={dec} alt="decoração quadrados e triangulos" id='decoracao' />

            <section>
                <div className='titleBoletim'>
                    <img src={decTitle} alt="triangulo" />
                    <h1>Boletim</h1>
                </div>

                <div className="selectButton">
                    <button className={activeTab === 1 ? 'active' : ''} onClick={() => handleTabClick(1)}>Semestre 1</button>
                    <button className={activeTab === 2 ? 'active' : ''} onClick={() => handleTabClick(2)}>Semestre 2</button>
                    <button className={activeTab === 3 ? 'active' : ''} onClick={() => handleTabClick(3)}>Semestre 3</button>

                    <div className="underline">
                        <div style={{ transform: `translateX(${underlinePosition}%)` }}></div>
                    </div>
                </div>
            </section>

            <div className="content">
                {activeTab === 1 && (
                    <section> 
                        <div className='select'> 
                            <div className='Disciplina-select'>
                            <h2>Disciplinas</h2>
                                <select className='options' id="options">
                                    <option value="">Selecione uma disciplina</option>
                                    <option value="opcao1">Opção 1</option>
                                    <option value="opcao2">Opção 2</option>
                                    <option value="opcao3">Opção 3</option>
                                </select>
                            </div>
                           
                        <div className='Turmas-select'>
                            <h2>Turmas</h2>
                                <select className='options' id="options">
                                    <option value="">Selecione uma turma</option>
                                    <option value="opcao1">Opção 1</option>
                                    <option value="opcao2">Opção 2</option>
                                    <option value="opcao3">Opção 3</option>
                                </select>
                        </div>
                           
                        </div>
                        

                        <section className='boletim-tabela'>
                            <div className="tabela-container">
                                <table className="boletim-tabela" border="1" cellSpacing="0">
                                    <thead>
                                        <tr>
                                            <th rowSpan="2">Aluno</th>
                                            <th colSpan="5">Senac Mediotec Boletim 1º Semestre</th>
                                        </tr>
                                        <tr>
                                            <th>AV 1</th>
                                            <th>AV 2</th>
                                            <th>Menção da unidade</th>
                                            <th>NOA</th>
                                            <th>Situação Final</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dados.map((linha, index) => (
                                            <tr key={index} className={index % 2 === 0 ? 'tabela-par' : 'tabela-impar'}>
                                                <td>{linha.aluno}</td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        value={linha.av1}
                                                        onChange={(e) => handleInputChange(index, 'av1', e.target.value)}
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        value={linha.av2}
                                                        onChange={(e) => handleInputChange(index, 'av2', e.target.value)}
                                                        disabled={!linha.av2Enabled}
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        value={linha.mencao}
                                                        onChange={(e) => handleInputChange(index, 'mencao', e.target.value)}
                                                        disabled
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        value={linha.noa}
                                                        onChange={(e) => handleInputChange(index, 'noa', e.target.value)}
                                                        disabled
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        value={linha.situacao}
                                                        onChange={(e) => handleInputChange(index, 'situacao', e.target.value)}
                                                        disabled
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section className='legenda'>
                            <p>Legendas:</p>
                            <p> A - Atendido </p>
                            <p>PA - Parcialmente Atendido</p>
                            <p> NA - Não Atendido</p>
                            <p> D - Desenvolvido </p>
                            <p>ND - Não Desenvolvido </p>
                            <p>NOA - Novas oportunidades de aprendizado</p>
                        </section>

                        <Button
                            id="buttonBoletim"
                            title="Salvar"
                            onClick={handleSave}
                        />
                    </section>
                )}
                {activeTab === 2 && <div>Conteúdo do Semestre 2</div>}
                {activeTab === 3 && <div>Conteúdo do Semestre 3</div>}
            </div>

            <Footer id="footerBoletim" />
        </div>
    );
}

export default Boletim;
