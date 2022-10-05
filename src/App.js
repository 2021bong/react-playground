import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StackBlock from './pages/block/StackBlock';
import CardList from './pages/kakao/CardList';
import Monsters from './pages/UrlParameters/Monsters';
import MonsterDetail from './pages/UrlParameters/MonsterDetail';
import Pagination from './pages/Pagination/Users';
import CssStudy from './pages/cssStudy/CssStudy';
import Parents from './pages/manipulate/Parents';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/block' element={<StackBlock />} />
        <Route path='/Kakao' element={<CardList />} />
        <Route path='/monsters' element={<Monsters />} />
        <Route path='/monsters/detail/:id' element={<MonsterDetail />} />
        <Route path='/pagination' element={<Pagination />} />
        <Route path='/css' element={<CssStudy />} />
        <Route path='/' element={<Parents />} />
      </Routes>
    </Router>
  );
}

export default App;
