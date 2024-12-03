import LandingPage from './pages/landing_page';
import CurtainsType from './pages/curtains_type';
import Error from './pages/Error';
import Header from './components/header';
import { Routes, Route, Link } from 'react-router-dom';
import Gallery from './pages/gallery';
import AboutUs from './pages/about_us';
import Footer from './components/footer';
import Shoes from './components/shoes';
import { useContext, useState } from 'react';
import { ContextBox } from './context/context';
import './styles/App.css';
import Logo from './components/logo';

function App() {
  const { activeNavbar, setActiveNavbar } = useContext(ContextBox);
  const [isClosing, setIsClosing] = useState(false);

  const handleCloseNavbar = () => {
    setIsClosing(true);
    setTimeout(() => {
      setActiveNavbar(false);
      setIsClosing(false);
    }, 300); // نفس مدة الأنيميشن في CSS
  };

  return (
    <div className="App">
      <Header />
      {activeNavbar && (
        <div className={`nav-bar ${isClosing ? 'closing' : ''}`}>
          <button onClick={handleCloseNavbar} className="close">
            <i className="fa-solid fa-xmark"></i>
          </button>
            <div className='quick-linkss'>
              <Logo size="200px" />
              <ul>
                <li><a href='/'>الرئيسية</a></li>
                <li><a href='/about-wavy'>من نحن</a></li>
                <li><a href='/curtains'>أنواع الستائر</a></li>
                <li><a href='/gallery-wavy'>ألبوم الصور</a></li>
                <li><a href='/customers-wavu'>عملائنا</a></li>
                <li><a href='/contact-us'>اتصل بنا</a></li>
              </ul>
            </div>
        </div>
      )}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/curtains" element={<CurtainsType />} />
        <Route path="/galley" element={<Gallery />} />
        <Route path="/about-wavy" element={<AboutUs />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <a href="tel:+966 53 440 2952" className="btn-cont contact-btn">
        <i className="fa-brands fa-whatsapp"></i>
      </a>
      <a href="tel:+966 53 440 2952" className="btn-cont contact-btn2">
        <i className="fa-solid fa-phone"></i>
      </a>
      <Footer />
      <Shoes />
    </div>
  );
}

export default App;
