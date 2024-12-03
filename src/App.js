import LandingPage from './pages/landing_page';
import CurtainsType from './pages/curtains_type';
import Error from './pages/Error';
import Header from './components/header';
import './styles/App.css';
import { Routes, Route } from 'react-router-dom'
import Gallery from './pages/gallery';
import AboutUs from './pages/about_us';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={ <LandingPage />} />
        <Route path='/curtains' element={ <CurtainsType />} />
        <Route path='/galley' element={ <Gallery />} />
        <Route path='/about-wavy' element={ <AboutUs />} />
        <Route path='*' element={ <Error />} />
      </Routes>
      <a href='tel:+966 53 440 2952' className='btn-cont contact-btn'>
        <i className="fa-brands fa-whatsapp"></i>
      </a>
      <a href='tel:+966 53 440 2952' className='btn-cont contact-btn2'>
        <i className="fa-solid fa-phone"></i>
      </a>
    </div>
  );
}

export default App;
