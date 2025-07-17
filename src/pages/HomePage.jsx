import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';

import './HomePage.css';
import heroImage from '../assets/obra.png';

// Componentes
import InfoCard from '../components/InfoCard/InfoCard.jsx';
import ObraCard from '../components/ObraCard/ObraCard.jsx'; // Certifique-se de que este componente existe

// Imagens (adicione estas imagens de exemplo na sua pasta 'src/assets')
import imgProdutos from '../assets/pre_moldados.jpg';
import imgServicos from '../assets/execucao_obras.jpg';
import imgLocacao from '../assets/locacao.jpg';
import imgDiferenciais from '../assets/detalhe_concreto.jpg';

// Imagens de exemplo para as obras (substitua com as suas)
import obra1 from '../assets/obra1.jpg';
import obra2 from '../assets/obra2.jpg';
import obra3 from '../assets/obra3.jpg';
import obra4 from '../assets/obra4.jpg';


function HomePage() {
  // Hook para a animação dos números
  const { ref: numerosRef, inView: numerosInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  // Configurações do carrossel de obras
  const obrasSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '40px',
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: '20px',
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '20px',
        }
      }
    ]
  };

  // Dados das obras para o carrossel
  const obras = [
    { img: obra1, title: 'Edifício Comercial', location: 'Joinville, SC' },
    { img: obra2, title: 'Centro Logístico', location: 'Araquari, SC' },
    { img: obra3, title: 'Ponte sobre o Rio da Prata', location: 'União da Vitória, PR' },
    { img: obra4, title: 'Shopping Center', location: 'Curitiba, PR' },
  ];

  return (
    <div className="homepage">
      {/* --- Seção Hero --- */}
      <section className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-content">
          <h1>A Base Sólida para a Sua Construção</h1>
          <p>Qualidade, durabilidade e inovação em pré-moldados e serviços de engenharia para todos os portes.</p>
          <a href="/contato" className="hero-button">SOLICITE UM ORÇAMENTO</a>
        </div>
      </section>

      {/* --- Seção de Cards --- */}
      <section className="cards-section">
        <h2 className="section-title">Soluções Completas para sua Necessidade</h2>
        <div className="cards-container">
          <InfoCard title="Pré-Moldados de Qualidade" text="Oferecemos uma linha completa de artefatos de cimento para garantir a estrutura e o acabamento da sua obra." linkText="VEJA NOSSOS PRODUTOS" linkTo="/produtos" imageSrc={imgProdutos} />
          <InfoCard title="Execução de Obras" text="Contamos com uma equipe especializada para executar projetos residenciais, comerciais e industriais com excelência." linkText="CONHEÇA NOSSOS SERVIÇOS" linkTo="/servicos" imageSrc={imgServicos} />
          <InfoCard title="Locação de Equipamentos" text="Disponibilizamos equipamentos modernos e robustos para otimizar o tempo e o custo da sua construção." linkText="CONSULTE A DISPONIBILIDADE" linkTo="/servicos/locacao" imageSrc={imgLocacao} />
        </div>
      </section>

      {/* --- Seção de Diferenciais --- */}
      <section className="diferenciais-section">
        <div className="diferenciais-container">
          <div className="diferenciais-image">
            <img src={imgDiferenciais} alt="Qualidade em pré-moldados" />
          </div>
          <div className="diferenciais-content">
            <h2 className="section-title-left">A nossa força em cada detalhe</h2>
            <ul>
              <li><i className="fas fa-check-circle"></i><div><h4>Qualidade Certificada</h4><p>Controlo rigoroso em todas as fases da produção para garantir a conformidade com as normas técnicas.</p></div></li>
              <li><i className="fas fa-cogs"></i><div><h4>Tecnologia e Inovação</h4><p>Investimento constante em tecnologia para processos mais eficientes e produtos de vanguarda.</p></div></li>
              <li><i className="fas fa-handshake"></i><div><h4>Compromisso e Parceria</h4><p>Mais do que fornecedores, somos parceiros dedicados ao sucesso do seu projeto.</p></div></li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- Seção Nossos Números --- */}
      <section className="numeros-section" ref={numerosRef}>
        <div className="container numeros-container">
          <div className="numero-item">
            <span className="numero-valor">
              {numerosInView ? <CountUp end={20} duration={2.5} suffix="+" /> : '0+'}
            </span>
            <span className="numero-titulo">Anos de Mercado</span>
          </div>
          <div className="numero-item">
            <span className="numero-valor">
              {numerosInView ? <CountUp end={500} duration={2.5} suffix="+" /> : '0+'}
            </span>
            <span className="numero-titulo">Clientes Satisfeitos</span>
          </div>
          <div className="numero-item">
            <span className="numero-valor">
              {numerosInView ? <CountUp end={1200} duration={2.5} separator="." suffix="+" /> : '0+'}
            </span>
            <span className="numero-titulo">Obras Entregues</span>
          </div>
          <div className="numero-item">
            <span className="numero-valor">
              {numerosInView ? <CountUp end={1000000} duration={2.5} separator="." prefix="+" /> : '0+'}
            </span>
            <span className="numero-titulo">Peças Produzidas</span>
          </div>
        </div>
      </section>

      {/* --- Seção Obras em Destaque --- */}
      <section className="obras-section">
        <div className="container">
          <h2 className="section-title">Obras em Destaque</h2>
          <p className="section-subtitle">Conheça alguns dos projetos que contam com a qualidade e a eficiência da Kerber.</p>
        </div>
        <div className="carousel-container">
          <Slider {...obrasSettings}>
            {obras.map((obra, index) => (
              <div key={index}>
                <ObraCard 
                  imagem={obra.img} 
                  titulo={obra.title} 
                  local={obra.location} 
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
}

export default HomePage;