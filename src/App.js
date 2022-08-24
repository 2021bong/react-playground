import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import StackBlock from './pages/block/StackBlock';
import CardList from './pages/kakao/CardList'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/block' element={<StackBlock />}/>
        <Route path='/' element={<CardList />}/>
      </Routes>
    </Router>
  );
}

export default App;
