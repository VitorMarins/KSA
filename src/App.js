import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/home';
import Login from './pages/login/login';
import Turma from './pages/classes/turmas';
import Boletim from './pages/bulletin/boletim';
import Biblioteca from './pages/libraryP/biblioteca';

import './app.css';
const App = () => {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/turma" element={<Turma />}></Route>
        <Route path="/boletim" element={<Boletim />}></Route>
        <Route path="/biblioteca" element={<Biblioteca />}></Route>
      </Routes>
   </Router>
  );
}

export default App;
