import React, { useState } from 'react';
import './Header.css';
import logoImage from '../../assets/logo_pre.svg';
import { FiChevronDown } from 'react-icons/fi';
import { FaCube, FaTruck, FaRoad, FaBuilding, FaWrench } from 'react-icons/fa';
import { BsGearFill, BsPersonWorkspace } from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { title: 'Início', path: '/teste' },
  { title: 'Empresa', path: '/a-empresa' },
  {
    title: 'Produtos',
    path: '/produtos',
    submenu: [
      { title: 'Blocos de Concreto', path: '/produtos/blocos', icon: <FaCube /> },
      { title: 'Tubos de Concreto', path: '/produtos/tubos', icon: <FaTruck /> },
      { title: 'Pavimentos Intertravados', path: '/produtos/pavimentos', icon: <FaRoad /> },
      { title: 'Estruturas Pré-Moldadas', path: '/produtos/estruturas', icon: <FaBuilding /> },
    ]
  },
  {
    title: 'Serviços',
    path: '/servicos',
    submenu: [
      { title: 'Execução de Obras', path: '/servicos/obras', icon: <BsPersonWorkspace /> },
      { title: 'Locação de Equipamentos', path: '/servicos/locacao', icon: <FaWrench /> },
      { title: 'Consultoria e Projetos', path: '/servicos/projetos', icon: <BsGearFill /> },
    ]
  },
  { title: 'Obras Realizadas', path: '/obras' },
  { title: 'Contato', path: '/contato' },
];

function Header({ isScrolled }) {
  const [menuMobileAberto, setMenuMobileAberto] = useState(false);
  const [submenuAberto, setSubmenuAberto] = useState(null);
  const location = useLocation();

  const toggleMenuMobile = () => setMenuMobileAberto(!menuMobileAberto);
  const toggleSubmenu = (index) => setSubmenuAberto(submenuAberto === index ? null : index);

  return (
    <header className={`site-header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <Link to="/"><img src={logoImage} alt="Logo Kerber" /></Link>
        </div>
        
        <button className="hamburger" onClick={toggleMenuMobile}>☰</button>

        <nav className={`main-nav ${menuMobileAberto ? 'menu-aberto' : ''}`}>
          <ul>
            {navLinks.map((link, index) => {
              const isActive = link.path === '/' ? location.pathname === '/' : location.pathname.startsWith(link.path);
              return (
                <li key={index} className={`${link.submenu ? 'has-submenu' : ''} ${submenuAberto === index ? 'submenu-aberto' : ''}`}>
                  {link.submenu ? (
                    <>
                      <Link to={link.path} className={`desktop-link ${isActive ? 'active' : ''}`}>
                        {link.title}
                        <FiChevronDown className="desktop-arrow-icon" />
                      </Link>
                      <button onClick={() => toggleSubmenu(index)} className={`mobile-submenu-trigger ${isActive ? 'active' : ''}`}>
                        {link.title}
                        <FiChevronDown className={`mobile-arrow-icon ${submenuAberto === index ? 'aberto' : ''}`} />
                      </button>
                    </>
                  ) : (
                    <Link to={link.path} className={isActive ? 'active' : ''}>{link.title}</Link>
                  )}
                  
                  {link.submenu && (
                    <ul className="submenu">
                      {link.submenu.map((sublink, subIndex) => {
                        const isSubActive = location.pathname === sublink.path;
                        return (
                          <li key={subIndex}>
                            <a href={sublink.path} className={isSubActive ? 'active' : ''}>
                              <span className="submenu-icon">{sublink.icon}</span>
                              {sublink.title}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;