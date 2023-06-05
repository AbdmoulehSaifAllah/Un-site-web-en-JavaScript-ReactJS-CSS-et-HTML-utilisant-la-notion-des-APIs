import AboutUs from './AboutUs';
import './App.css';
import Contact from './Contact';
import Header from './Header';
import NoPage from './NoPage';
import PokeCard from './PokeCard';
import PokemonsList from './PokemonsList';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path = "/" element= { <PokemonsList/> } />
        <Route path = "/AboutUs" element= { <AboutUs/> } />
        <Route path = "/contact" element= { <Contact/> } />
        <Route path = "*" element= { <NoPage/> } />
      </Routes>
      </BrowserRouter>
      <PokeCard/>
    </div>
  );
}

export default App;
