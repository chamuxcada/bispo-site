import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Envious Grizzled Sardine</title>
        <meta property="og:title" content="Envious Grizzled Sardine" />
        <link
          rel="canonical"
          href="https://envious-grizzled-sardine-iekk5g.teleporthq.app/"
        />
      </Helmet>
      <Navigation></Navigation>
      <div className="home-container2">
        <div className="home-container3">
          <Script
            html={`<style>
dialog {
  background: var(--color-surface-elevated);
  color: var(--color-on-surface);
  border: 1px solid var(--color-outline);
  max-width: 500px;
  width: 90%;
}
dialog::backdrop {
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
}
</style>`}
          ></Script>
        </div>
      </div>
      <section className="hero-bispo">
        <div className="hero-bispo-media">
          <img
            src="https://images.pexels.com/photos/34860667/pexels-photo-34860667.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
            alt="Textura minimalista BISPO"
            className="hero-bispo-bg"
          />
          <div className="hero-bispo-overlay"></div>
        </div>
        <div className="hero-bispo-container">
          <div className="hero-bispo-content">
            <span className="hero-bispo-tagline">
              EDIÇÃO LIMITADA. DESIGN AUTORAL.
            </span>
            <h1 className="hero-title">BISPO</h1>
            <p className="hero-subtitle">
              Silêncio é o novo luxo. Camisetas inspiradas na cultura do futebol
              com acabamento de alto padrão.
            </p>
            <div className="hero-bispo-actions">
              <a href="#lancamentos">
                <div className="btn btn-primary btn-lg">
                  <span>Explorar Coleção</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="lancamentos" className="showcase-bispo">
        <div className="showcase-bispo-header">
          <h2 className="section-title">Lançamentos Recentes</h2>
          <p className="section-subtitle">
            Disponibilidade crítica. Sem reposição.
          </p>
        </div>
        <div className="showcase-bispo-grid">
          <article className="showcase-bispo-card">
            <div className="showcase-bispo-img-wrapper">
              <img
                src="https://images.pexels.com/photos/6540989/pexels-photo-6540989.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                alt="Camiseta 01"
              />
              <span className="showcase-bispo-badge">Esgotando</span>
            </div>
            <div className="showcase-bispo-info">
              <h3 className="section-content">Modelo &quot;Derby&quot;</h3>
              <p className="showcase-bispo-meta">08 / 50 Unidades</p>
              <div className="showcase-bispo-footer">
                <span className="showcase-bispo-price">R$ 289</span>
                <div className="showcase-bispo-status">
                  <span>SEM REPOSIÇÃO</span>
                </div>
              </div>
            </div>
          </article>
          <article className="showcase-bispo-card">
            <div className="showcase-bispo-img-wrapper">
              <img
                src="https://images.pexels.com/photos/9202888/pexels-photo-9202888.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                alt="Camiseta 02"
              />
              <span className="showcase-bispo-badge">Novidade</span>
            </div>
            <div className="showcase-bispo-info">
              <h3 className="section-content">Modelo &quot;Várzea&quot;</h3>
              <p className="showcase-bispo-meta">12 / 50 Unidades</p>
              <div className="showcase-bispo-footer">
                <span className="showcase-bispo-price">R$ 289</span>
                <div className="showcase-bispo-status">
                  <span>SEM REPOSIÇÃO</span>
                </div>
              </div>
            </div>
          </article>
          <article className="showcase-bispo-card">
            <div className="showcase-bispo-img-wrapper">
              <img
                src="https://images.pexels.com/photos/13009437/pexels-photo-13009437.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                alt="Camiseta 03"
              />
              <span className="showcase-bispo-badge">Últimas</span>
            </div>
            <div className="showcase-bispo-info">
              <h3 className="section-content">Modelo &quot;Curva&quot;</h3>
              <p className="showcase-bispo-meta">03 / 50 Unidades</p>
              <div className="showcase-bispo-footer">
                <span className="showcase-bispo-price">R$ 319</span>
                <div className="showcase-bispo-status">
                  <span>SEM REPOSIÇÃO</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section className="features-bispo">
        <div className="features-bispo-container">
          <div className="features-bispo-item">
            <div className="features-bispo-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path d="m9 12l2 2l4-4"></path>
                </g>
              </svg>
            </div>
            <h3 className="section-content">Acabamento Premium</h3>
            <p className="section-content">
              Costuras reforçadas e modelagem exclusiva desenvolvida para
              durabilidade e caimento impecável.
            </p>
          </div>
          <div className="features-bispo-item">
            <div className="features-bispo-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></circle>
              </svg>
            </div>
            <h3 className="section-content">Algodão Egípcio</h3>
            <p className="section-content">
              Fios selecionados de toque macio e alta gramatura, garantindo
              conforto térmico e sofisticação.
            </p>
          </div>
          <div className="features-bispo-item">
            <div className="features-bispo-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M12 15a3 3 0 1 0 6 0a3 3 0 1 0-6 0"></path>
                  <path d="M13 17.5V22l2-1.5l2 1.5v-4.5"></path>
                  <path d="M10 19H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-1 1.73M6 9h12M6 12h3m-3 3h2"></path>
                </g>
              </svg>
            </div>
            <h3 className="section-content">Certificado de Origem</h3>
            <p className="section-content">
              Cada peça acompanha um cartão numerado que atesta a exclusividade
              da sua edição limitada.
            </p>
          </div>
        </div>
      </section>
      <section className="gallery-bispo">
        <div className="gallery-bispo-grid">
          <div className="gallery-bispo-item">
            <img
              src="https://images.pexels.com/photos/17782176/pexels-photo-17782176.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              alt="Detalhe costura"
            />
          </div>
          <div className="gallery-bispo-item">
            <img
              src="https://images.pexels.com/photos/9742338/pexels-photo-9742338.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              alt="Modelo em uso"
            />
          </div>
          <div className="gallery-bispo-item">
            <img
              src="https://images.pexels.com/photos/4611617/pexels-photo-4611617.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              alt="Textura tecido"
            />
          </div>
          <div className="gallery-bispo-item">
            <img
              src="https://images.pexels.com/photos/15715981/pexels-photo-15715981.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              alt="Lifestyle premium"
            />
          </div>
          <div className="gallery-bispo-item">
            <img
              src="https://images.pexels.com/photos/12444593/pexels-photo-12444593.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              alt="Embalagem BISPO"
            />
          </div>
          <div className="gallery-bispo-item">
            <img
              src="https://images.pexels.com/photos/9182354/pexels-photo-9182354.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              alt="Detalhe gola"
            />
          </div>
        </div>
      </section>
      <section className="about-bispo">
        <div className="about-bispo-container">
          <div className="about-bispo-col">
            <h2 className="section-title">O Propósito</h2>
            <p className="section-content">
              Nascemos da intersecção entre a elegância clássica e a paixão crua
              do futebol. A BISPO não é sobre volume, é sobre valor.
            </p>
            <a href="#">
              <div className="btn-link">
                <span>Nossa História</span>
              </div>
            </a>
          </div>
          <div className="about-bispo-col">
            <h2 className="section-title">Design Autoral</h2>
            <p className="section-content">
              Cada linha é pensada para traduzir o tom seco e sofisticado da
              marca. Minimalismo que fala mais alto que qualquer logo.
            </p>
            <a href="#">
              <div className="btn-link">
                <span>Processo Criativo</span>
              </div>
            </a>
          </div>
          <div className="about-bispo-col">
            <h2 className="section-title">Cultura</h2>
            <p className="section-content">
              Inspirada nos estádios, mas feita para a vida urbana. Uma
              homenagem silenciosa ao esporte mais amado do mundo.
            </p>
            <a href="#">
              <div className="btn-link">
                <span>Edições Limitadas</span>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="cta-bispo">
        <div className="cta-bispo-alert">
          <div className="cta-bispo-inner">
            <div className="cta-bispo-message">
              <span className="cta-bispo-dot"></span>
              <p className="section-content">
                <span>
                  {' '}
                  PRÓXIMO DROP:
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text18">24/05 às 10:00</span>
                <span>
                  {' '}
                  . Acesso antecipado para membros.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
            </div>
            <div className="cta-bispo-actions">
              <button id="notifyBtn" className="btn btn-secondary btn-sm">
                Notificar-me
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials-bispo">
        <div className="testimonials-bispo-container">
          <div className="testimonials-bispo-rail">
            <div className="testimonial-card">
              <div className="testimonial-stars">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m8.243 7.34l-6.38.925l-.113.023a1 1 0 0 0-.44 1.684l4.622 4.499l-1.09 6.355l-.013.11a1 1 0 0 0 1.464.944l5.706-3l5.693 3l.1.046a1 1 0 0 0 1.352-1.1l-1.091-6.355l4.624-4.5l.078-.085a1 1 0 0 0-.633-1.62l-6.38-.926l-2.852-5.78a1 1 0 0 0-1.794 0z"
                  ></path>
                </svg>
              </div>
              <p className="section-content">
                &quot;O toque do tecido e a precisão do corte são superiores a
                qualquer marca de luxo que já experimentei.&quot;
              </p>
              <cite className="section-content">
                — Editorial Vogue Masculina
              </cite>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m8.243 7.34l-6.38.925l-.113.023a1 1 0 0 0-.44 1.684l4.622 4.499l-1.09 6.355l-.013.11a1 1 0 0 0 1.464.944l5.706-3l5.693 3l.1.046a1 1 0 0 0 1.352-1.1l-1.091-6.355l4.624-4.5l.078-.085a1 1 0 0 0-.633-1.62l-6.38-.926l-2.852-5.78a1 1 0 0 0-1.794 0z"
                  ></path>
                </svg>
              </div>
              <p className="section-content">
                &quot;Minimalismo real. Sem logos gritantes, apenas qualidade
                bruta e uma história poderosa por trás.&quot;
              </p>
              <cite className="section-content">— Curador de Design</cite>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m8.243 7.34l-6.38.925l-.113.023a1 1 0 0 0-.44 1.684l4.622 4.499l-1.09 6.355l-.013.11a1 1 0 0 0 1.464.944l5.706-3l5.693 3l.1.046a1 1 0 0 0 1.352-1.1l-1.091-6.355l4.624-4.5l.078-.085a1 1 0 0 0-.633-1.62l-6.38-.926l-2.852-5.78a1 1 0 0 0-1.794 0z"
                  ></path>
                </svg>
              </div>
              <p className="section-content">
                &quot;Recebi o certificado de autenticidade número 04/50. A
                sensação de exclusividade é palpável.&quot;
              </p>
              <cite className="section-content">— Colecionador</cite>
            </div>
          </div>
        </div>
      </section>
      <dialog id="notifyModal">
        <h2 className="section-title">Acesso Antecipado</h2>
        <p className="section-content">
          Deixe seu contato para ser notificado 30 minutos antes do lançamento
          oficial.
        </p>
        <form
          action="#"
          method="dialog"
          data-form-id="ebafb021-84e8-4adb-8e25-740da638490e"
          className="notify-form"
        >
          <div className="form-group">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              required="true"
              id="thq_textinput_2j-q"
              name="textinput"
              data-form-field-id="thq_textinput_2j-q"
              className="home-thq-btn-outline-elm btn-outline"
            />
          </div>
          <div className="home-thq-modal-actions-elm modal-actions">
            <button
              type="button"
              id="closeModal"
              name="button"
              data-form-field-id="closeModal"
              className="btn btn-link"
            >
              Cancelar
            </button>
            <button
              type="submit"
              id="thq_button_yNGj"
              name="button"
              data-form-field-id="thq_button_yNGj"
              className="btn btn-primary"
            >
              Confirmar
            </button>
          </div>
        </form>
      </dialog>
      <div className="home-container5">
        <div className="home-container6">
          <Script
            html={`<style>
        @keyframes pulse {0% {transform: scale(1);
opacity: 1;}
50% {transform: scale(1.5);
opacity: 0.5;}
100% {transform: scale(1);
opacity: 1;}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="home-container7">
        <div className="home-container8">
          <Script
            html={`<script defer data-name="bispo-interactions">
(function(){
  const notifyBtn = document.getElementById("notifyBtn")
  const notifyModal = document.getElementById("notifyModal")
  const closeModal = document.getElementById("closeModal")

  if (notifyBtn && notifyModal) {
    notifyBtn.addEventListener("click", () => {
      notifyModal.showModal()
    })
  }

  if (closeModal && notifyModal) {
    closeModal.addEventListener("click", () => {
      notifyModal.close()
    })
  }

  notifyModal.addEventListener("click", (e) => {
    if (e.target === notifyModal) {
      notifyModal.close()
    }
  })

  const scrollElements = document.querySelectorAll(".showcase-bispo-card, .features-bispo-item, .about-bispo-col")

  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top
    return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
  }

  const displayScrollElement = (element) => {
    element.style.opacity = "1"
    element.style.transform = "translateY(0)"
    element.style.transition = "all 0.6s ease-out"
  }

  const hideScrollElement = (element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(20px)"
  }

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.1)) {
        displayScrollElement(el)
      }
    })
  }

  scrollElements.forEach(hideScrollElement)

  window.addEventListener("scroll", () => {
    handleScrollAnimation()
  })

  handleScrollAnimation()
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
      <a href="https://play.teleporthq.io/signup">
        <div aria-label="Sign up to TeleportHQ" className="home-container9">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="home-icon27"
          >
            <path
              d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
              fill="#B23ADE"
            ></path>
            <path
              d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
              fill="#FF5C5C"
            ></path>
            <path
              d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
              fill="#2874DE"
            ></path>
          </svg>
          <span className="home-text20">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Home
