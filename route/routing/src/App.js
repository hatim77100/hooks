import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Service from './pages/services/Service';
import Navbar from './pages/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/service' element={<Service/>}/>

     </Routes>
    </div>
  );
}

export default App;
