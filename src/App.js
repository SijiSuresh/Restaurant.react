import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import { Route,Routes } from 'react-router-dom';
import RestaurantView from './components/RestaurantView';

function App() {
  return (
    <div>
      <header> <Header/> </header>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/view-restaurant/:id' element={<RestaurantView/>}/>
    </Routes>
 <footer> <Footer/> </footer>
    </div>
  );
}

export default App;
