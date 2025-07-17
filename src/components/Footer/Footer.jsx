import React from 'react';
import './Footer.css';
import logo from '../../assets/logo_pre.svg'; // O CSS vai inverter a cor para branco

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-container">

          {/* COLUNA 1: LOGO E DESCRIÇÃO */}
          <div className="footer-brand">
            <a href="/" aria-label="Página inicial da Kerber">
              {/* Usando o logo como imagem novamente */}
              <img src={logo} alt="Kerber Pré-Moldados" className="footer-logo" />
            </a>
            <p className="footer-impact">
              Engenharia de precisão em pré-moldados.<br />
              Construindo bases sólidas para o futuro.
            </p>
          </div>

          {/* COLUNA 2: NAVEGAÇÃO */}
          <div className="footer-column">
            <h4>Navegação</h4>
            <ul>
              <li><a href="/">Início</a></li>
              <li><a href="/a-empresa">Nossa Empresa</a></li>
              <li><a href="/produtos">Produtos</a></li>
              <li><a href="/servicos">Serviços</a></li>
              <li><a href="/obras">Obras Realizadas</a></li>
              <li><a href="/orcamento">Solicitar Orçamento</a></li>
            </ul>
          </div>

          {/* COLUNA 3: CONTATO */}
          <div className="footer-column">
            <h4>Contato</h4>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <p>R. Mal. Deodoro, 8000</p>
                  <p>Vice-King, Porto União - SC</p>
                  <p>CEP: 89400-000</p>
                  <a href="https://maps.app.goo.gl/SQa5WyRmCxruj5S37" target="_blank" rel="noopener noreferrer">Ver no mapa</a>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <a href="tel:+554235224933">(42) 3522-4933</a>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <a href="mailto:vendas@kerberpremoldados.com.br">vendas@kerberpremoldados.com.br</a>
              </div>
            </div>
          </div>

          {/* COLUNA 4: REDES SOCIAIS */}
          <div className="footer-column">
            <h4>Conecte-se</h4>
            <div className="footer-social">
              <a href="https://wa.me/5542988676680?text=Quero%20saber%20mais%20sobre%20os%20produtos..." target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
              <a href="https://www.facebook.com/kerberpm" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/kerber.pre.moldados" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="https://www.linkedin.com/company/kerber-pr--moldados-ltda." target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* RODAPÉ INFERIOR */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>© {new Date().getFullYear()} Kerber Pré-Moldados Ltda. Todos os direitos reservados.</p>
          <a href="/privacidade">Política de Privacidade</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;