import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import LoadingBar from './components/LoadingBar/LoadingBar.jsx';
import SplashScreen from './components/SplashScreen/SplashScreen.jsx';
import HomePage from './pages/HomePage.jsx'
import EmpresaPage from './pages/EmpresaPage.jsx';
import ProdutosPage from './pages/ProdutosPage.jsx';
import BlocosPage from './pages/BlocosPage.jsx';
import TubosPage from './pages/TubosPage.jsx';
import PavimentosPage from './pages/PavimentosPage.jsx';
import EstruturasPage from './pages/EstruturasPage.jsx';


function App() {
  const [isSplashDone, setIsSplashDone] = useState(() => sessionStorage.getItem('splashShown') === 'true');

  useEffect(() => {
    if (!isSplashDone) {
      const timer = setTimeout(() => {
        setIsSplashDone(true);
        sessionStorage.setItem('splashShown', 'true');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isSplashDone]);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    if (isSplashDone) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isSplashDone]);

  return (
    <>
      <div className={`splash-container ${isSplashDone ? 'hidden' : ''}`}>
        <SplashScreen />
      </div>

      <div className={`app-container ${isSplashDone ? 'visible' : ''}`}>
        <Router>
          <LoadingBar />
          <Header isScrolled={isScrolled} />
          <main>
            <Routes>
              <Route path="/teste" element={<HomePage />} />
              <Route path="/a-empresa" element={<EmpresaPage />} />
              <Route path="/produtos" element={<ProdutosPage />} />
              <Route path="/produtos/blocos" element={<BlocosPage />} />
              <Route path="/produtos/tubos" element={<TubosPage />} />
              <Route path="/produtos/pavimentos" element={<PavimentosPage />} />
              <Route path="/produtos/estruturas" element={<EstruturasPage />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;