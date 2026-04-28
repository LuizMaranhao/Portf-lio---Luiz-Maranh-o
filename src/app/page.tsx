'use client';

import { useEffect, useState } from 'react';
import '../styles/globals.scss';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 40) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          revealObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => revealObserver.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      revealObserver.disconnect();
    };
  }, []);

  return (
    <>
      {/* ═══ NAV ═══ */}
      <nav id="navbar">
        <div className="container">
          <div className="nav-inner">
            <a href="#" className="nav-logo">LM<span>.</span></a>
           <ul className="nav-links">
              <li><a href="#hero">Início</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#projects">Projetos</a></li>
              <li><a href="#contact" className="nav-cta">Contato</a></li>
            </ul>
            <button className="hamburger" id="menuToggle" aria-label="Menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`} id="mobileMenu">
        <button className="mobile-close" id="menuClose" onClick={() => setIsMenuOpen(false)}>✕</button>
        <a href="#about" className="mob-link" onClick={() => setIsMenuOpen(false)}>Sobre</a>
        <a href="#projects" className="mob-link" onClick={() => setIsMenuOpen(false)}>Projetos</a>
        <a href="#stack" className="mob-link" onClick={() => setIsMenuOpen(false)}>Skills</a>
        <a href="#contact" className="mob-link" onClick={() => setIsMenuOpen(false)}>Contato</a>
      </div>

      {/* ═══ HERO ═══ */}
      <section id="hero">
        <div className="hero-glow"></div>
        <div className="hero-glow2"></div>
        <div className="container">
          <div className="hero-grid">
            {/* Left */}
            <div>
              <div className="hero-eyebrow reveal">
                <div className="hero-dot"></div>
                <span className="hero-eyebrow-text">Disponível para oportunidades</span>
              </div>
              <h1 className="hero-title reveal reveal-delay-1">
                Transformando<br />
                ideias em<br />
                <span className="accent">interfaces</span><br />
                funcionais
              </h1>
              <p className="hero-subtitle reveal reveal-delay-2">
                Desenvolvedor Full Stack em formação contínua. Construo experiências web com
                <strong style={{ color: 'var(--text)' }}> HTML, CSS e JavaScript</strong> — focado em clareza, performance e código que faz sentido.
              </p>
              <div className="hero-actions reveal reveal-delay-3">
                <a href="#projects" className="btn-primary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
                  Ver projetos
                </a>
                <a href="#contact" className="btn-secondary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 12V22H4V12"/><path d="M22 7H2v5h20V7z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>
                  Contato
                </a>
              </div>
              <div className="hero-stats reveal">
                <div className="stat-item">
                  <div className="stat-number">5<span>+</span></div>
                  <div className="stat-label">Projetos<br />concluídos</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">3<span>+</span></div>
                  <div className="stat-label">Tecnologias<br />dominadas</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">100<span>%</span></div>
                  <div className="stat-label">Dedicação<br />ao código</div>
                </div>
              </div>
            </div>
            {/* Right: photo */}
            <div className="hero-photo-wrap reveal reveal-delay-2">
              <div className="hero-photo-frame">
                <div className="hero-photo-bg"></div>
                <div className="hero-avatar-placeholder">
                  <img src="/perfil.jpg" alt="Luiz Maranhão" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
                </div>

                {/* Floating badge 1 */}
                <div className="hero-photo-badge">
                  <div className="badge-icon">💻</div>
                  <div>
                    <div className="badge-label">Full Stack Dev</div>
                    <div className="badge-sub">JS · CSS · HTML · Node</div>
                  </div>
                </div>

                {/* Floating badge 2 */}
                <div className="hero-photo-badge2">
                  <div className="badge2-inner">
                    <div className="badge2-dot"></div>
                    <div className="badge2-text">Aberto a trabalho</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section id="about">
        <div className="container">
          <div className="about-grid">
            <div>
              <div className="section-header">
                <span className="tag section-eyebrow">Sobre mim</span>
                <h2 className="section-title reveal">Código como<br />ferramenta de<br />evolução</h2>
                <div className="section-line reveal"></div>
              </div>
              <div className="about-text reveal">
                <p>
                  Sou um desenvolvedor full stack em transição de carreira que <em>levou o aprendizado a sério</em>.
                  Não me contentei com tutoriais — construí projetos reais, enfrentei bugs reais, e aprendi
                  com cada linha de código que não funcionou.
                </p>
                <p>
                  Meu foco está em <strong>JavaScript puro, HTML semântico e CSS moderno</strong>.
                  Cada projeto aqui representou um desafio específico que me fez sair da zona de conforto.
                </p>
                <p>
                  Estou buscando minha <strong>primeira oportunidade profissional</strong> em um time que
                  valoriza crescimento consistente e código bem feito — não apenas velocidade.
                </p>
              </div>
              <div className="about-values reveal">
                <div className="value-item">
                  <div className="value-icon">🎯</div>
                  <div className="value-content">
                    <h4>Aprendizado orientado a projetos</h4>
                    <p>Cada skill que adquiri nasceu de uma necessidade real em algum projeto.</p>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-icon">🔍</div>
                  <div className="value-content">
                    <h4>Atenção a detalhes</h4>
                    <p>Interface boa é a que funciona e que também faz sentido visualmente.</p>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-icon">📈</div>
                  <div className="value-content">
                    <h4>Evolução contínua</h4>
                    <p>Cada projeto novo é melhor que o anterior — é assim que meço progresso.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-visual reveal reveal-delay-1">
              <div className="about-card">
                <div className="about-card-title">Nível por tecnologia</div>
                <div className="skill-bar" data-pct="88">
                  <div className="skill-bar-top">
                    <span className="skill-bar-name">HTML5 Semântico</span>
                    <span className="skill-bar-pct">88%</span>
                  </div>
                  <div className="skill-bar-track"><div className="skill-bar-fill" style={{ width: '88%' }}></div></div>
                </div>
                <div className="skill-bar" data-pct="82">
                  <div className="skill-bar-top">
                    <span className="skill-bar-name">CSS3 / Flexbox / Grid</span>
                    <span className="skill-bar-pct">82%</span>
                  </div>
                  <div className="skill-bar-track"><div className="skill-bar-fill" style={{ width: '82%' }}></div></div>
                </div>
                <div className="skill-bar" data-pct="72">
                  <div className="skill-bar-top">
                    <span className="skill-bar-name">JavaScript ES6+</span>
                    <span className="skill-bar-pct">72%</span>
                  </div>
                  <div className="skill-bar-track"><div className="skill-bar-fill" style={{ width: '72%' }}></div></div>
                </div>
                <div className="skill-bar" data-pct="60">
                  <div className="skill-bar-top">
                    <span className="skill-bar-name">Design Responsivo</span>
                    <span className="skill-bar-pct">60%</span>
                  </div>
                  <div className="skill-bar-track"><div className="skill-bar-fill" style={{ width: '60%' }}></div></div>
                </div>
                <div className="skill-bar" data-pct="45">
                  <div className="skill-bar-top">
                    <span className="skill-bar-name">Git / GitHub</span>
                    <span className="skill-bar-pct">45%</span>
                  </div>
                  <div className="skill-bar-track"><div className="skill-bar-fill" style={{ width: '45%' }}></div></div>
                </div>
              </div>
              <div style={{ marginTop: '20px' }}>
                <div className="about-card">
                  <div className="about-card-title">Trajetória de aprendizado</div>
                  <div className="timeline">
                    <div className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div className="timeline-content">
                        <h4>Primeiros passos com HTML &amp; CSS</h4>
                        <p>Estrutura, semântica e estilização básica de páginas.</p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div className="timeline-content">
                        <h4>JavaScript e lógica de programação</h4>
                        <p>Eventos, DOM, funções e manipulação de dados.</p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div className="timeline-content">
                        <h4>Projetos práticos no GitHub</h4>
                        <p>5 projetos publicados, cada um com um desafio técnico diferente.</p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-dot" style={{ borderColor: 'var(--accent2)' }}></div>
                      <div className="timeline-content">
                        <h4 style={{ color: 'var(--accent)' }}>Próximo: React &amp; APIs</h4>
                        <p>Evoluindo para o ecossistema moderno full stack.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROJECTS ═══ */}
      <section id="projects">
  <div className="container">
    <div className="section-header">
      <span className="tag section-eyebrow">Trabalhos</span>
      <h2 className="section-title reveal">Projetos</h2>
      <div className="section-line reveal"></div>
    </div>

    <div className="projects-grid">

      {[
        {
          title: "Portal de Viagens",
          img: "/projeto-viagens.png",
          github: "https://github.com/LuizMaranhao/meu-portal-viagens",
          deploy: "https://luizmaranhao.github.io/meu-portal-viagens/"
        },
        {
          title: "Agência de Marketing",
          img: "/projeto-agencia.png",
          github: "https://github.com/LuizMaranhao/agencia-marketing",
          deploy: "https://luizmaranhao.github.io/agencia-marketing/"
        },
        {
          title: "Nightfall Atelier",
          img: "/projeto-nightfall.png",
          github: "https://github.com/LuizMaranhao/Nightfall-Atelier",
          deploy: "https://luizmaranhao.github.io/Nightfall-Atelier/"
        },
       {
          title: "Calculadora IMC",
          img: "/projeto-imc.png",
          github: "https://github.com/LuizMaranhao/Calculadora-de-IMC",
          deploy: "https://luizmaranhao.github.io/Calculadora-de-IMC/"
        },
        {
          title: "Jogo de Adivinhação",
          img: "/projeto-jogo.png",
          github: "https://github.com/LuizMaranhao/Jogo-Adivinhacao",
          deploy: "https://luizmaranhao.github.io/Calculadora-de-IMC/"
        },
        {
          title: "Cadastro de Usuário",
          img: "/projeto-cadastro.png",
          github: "https://github.com/LuizMaranhao/cadastro-usuario",
          deploy: "https://luizmaranhao.github.io/cadastro-usuario/"
        }
      ].map((project, i) => (
        <div className="project-card-pro reveal" key={i}>

          <img src={project.img} alt={project.title} />

          <div className="project-overlay" />

          <div className="project-content">
            <h3>{project.title}</h3>

            <div className="project-buttons">
              <a href={project.github} target="_blank" className="btn-gh">
                GitHub
              </a>

              {project.deploy && (
                <a href={project.deploy} target="_blank" className="btn-deploy">
                  Ver Projeto
                </a>
              )}
            </div>
          </div>

        </div>
      ))}

    </div>
  </div>
</section>

      {/* ═══ CONTACT E FOOTER MANTIDOS DO PADRÃO ═══ */}
      <section id="contact" style={{ padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ marginBottom: '20px' }}>Vamos trabalhar juntos?</h2>
          <p style={{ marginBottom: '30px' }}>Mande um e-mail para: <a href="mailto:luizfmaranhao2003@gmail.com" style={{ color: 'var(--accent)' }}>luizfmaranhao2003@gmail.com</a></p>
          <a href="https://github.com/LuizMaranhao" target="_blank" rel="noreferrer" className="btn-primary" style={{ marginRight: '10px' }}>Meu GitHub</a>
          <a href="https://www.linkedin.com/in/luizmaranhao-dev/" target="_blank" rel="noreferrer" className="btn-secondary">Meu LinkedIn</a>
        </div>
      </section>

      <footer style={{ padding: '30px 0', textAlign: 'center', opacity: 0.7 }}>
        <div className="container">
          <p>© 2026 Luiz Maranhão • Desenvolvedor Full Stack</p>
        </div>
      </footer>
    </>
  );
}