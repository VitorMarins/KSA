import React, { useState } from "react";
import "./ClassroomPage.css";
import {
  HeaderSite,
  Footer,
} from '../../imports/imports';

const tabs = ["Mural", "Atividades", "Pessoas"];

const posts = [
  { id: 1, author: "Professor João", content: "Bem-vindos à turma!", date: "02/06/2025" },
  { id: 2, author: "Professor João", content: "Entreguem a atividade até sexta!", date: "01/06/2025" },
];

export default function ClassroomPage() {
  const [selectedTab, setSelectedTab] = useState("Mural");

  return (
    <div className="classroom-container">
        <HeaderSite />
      <div className="classroom-banner">
        <h1>Turma de Matemática - 2º Ano</h1>
        <p>Código da turma: <strong>abc1234</strong></p>
      </div>

      <div className="classroom-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-button ${selectedTab === tab ? "active" : ""}`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="classroom-content">
        {selectedTab === "Mural" && (
          <div className="posts">
            {posts.map((post) => (
              <div key={post.id} className="post-card">
                <p className="post-date">{post.date}</p>
                <h3 className="post-author">{post.author}</h3>
                <p className="post-content">{post.content}</p>
              </div>
            ))}
          </div>
        )}
        {selectedTab === "Atividades" && <p className="info-text">📚 Nenhuma atividade postada ainda.</p>}
        {selectedTab === "Pessoas" && <p className="info-text">👥 1 professor, 24 alunos.</p>}
      </div>
      <Footer />
    </div>
  );
}
