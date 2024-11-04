
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Contect from './Pages/Contact'
import Menu from './Pages/Menu'
import Pagenotfound from './Pages/Pagenotfound'
import Dosa from './Pages/Dosa';

function App() {
  return (
    <div className="App">
       
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contect/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='*' element={<Pagenotfound/>}/>
        <Route path='dosa' element={<Dosa></Dosa>}/>
       </Routes>
       </BrowserRouter>
     
    </div>
  );
}

export default App;
