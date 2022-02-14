import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import { Navbar } from './components/Navbar';

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<Home />} />
         </Routes>
      </div>
   );
}

export default App;
