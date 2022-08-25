import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StackBlock from './pages/block/StackBlock';
import CardList from './pages/kakao/CardList';
import Monsters from './pages/UrlParameters/Monsters';
import MonsterDetail from './pages/UrlParameters/MonsterDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/block' element={<StackBlock />} />
        <Route path='/' element={<CardList />} />
        <Route path='/monsters' element={<Monsters />} />
        <Route path='/monsters/detail/:id' element={<MonsterDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
