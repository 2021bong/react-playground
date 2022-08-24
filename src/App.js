import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import StackBlock from './pages/block/StackBlock';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<StackBlock />}/>
      </Routes>
    </Router>
  );
}

export default App;
