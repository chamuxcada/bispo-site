import React from 'react'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <footer className="footer-root">
        <div className="footer-container">
          <div className="footer-main-grid">
            <div className="footer-brand-column">
              <a href="Homepage">
                <div className="footer-logo-link">
                  <span className="footer-brand-name">BISPO</span>
                </div>
              </a>
              <p className="footer-brand-description section-content">
                Edições extremamente limitadas. Design minimalista. Cultura do
                futebol em seu estado mais puro e sofisticado.
              </p>
              <div className="footer-social-wrapper">
                <a href="#">
                  <div aria-label="Instagram" className="footer-social-link">
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
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                      </g>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div aria-label="Twitter" className="footer-social-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div aria-label="Facebook" className="footer-social-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div className="footer-links-grid">
              <div className="footer-nav-column">
                <h2 className="footer-column-title section-subtitle">
                  Coleções
                </h2>
                <ul className="footer-nav-list">
                  <li className="footer-nav-item">
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Lançamentos</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-nav-item">
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Arquivo</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-nav-item">
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Série Limitada</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-nav-item">
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Acessórios</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-nav-column">
                <h2 className="footer-column-title section-subtitle">
                  Institucional
                </h2>
                <ul className="footer-nav-list">
                  <li className="footer-nav-item">
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Nossa História</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-nav-item">
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Autenticidade</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-nav-item">
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Sustentabilidade</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-nav-item">
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Contato</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-nav-column">
                <h2 className="footer-column-title section-subtitle">
                  Suporte
                </h2>
                <ul className="footer-nav-list">
                  <li className="footer-nav-item">
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Envios e Devoluções</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-nav-item">
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Guia de Tamanhos</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-nav-item">
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Termos de Uso</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-nav-item">
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Privacidade</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-newsletter-column">
              <h2 className="footer-column-title section-subtitle">
                O Silêncio da Elite
              </h2>
              <p className="footer-newsletter-text section-content">
                Receba notificações sobre lançamentos exclusivos antes de todos.
              </p>
              <form
                action="/subscribe"
                method="POST"
                data-form-id="7316ad3a-3d50-464b-9ab6-b1e894c91539"
                className="footer-newsletter-form"
              >
                <div className="footer-input-group">
                  <input
                    type="email"
                    placeholder="Seu e-mail"
                    required="true"
                    id="thq_textinput_aN-7"
                    name="textinput"
                    data-form-field-id="thq_textinput_aN-7"
                    className="footer-newsletter-input"
                  />
                  <button
                    type="submit"
                    aria-label="Inscrever-se"
                    id="thq_button_i-0D"
                    name="button"
                    data-form-field-id="thq_button_i-0D"
                    className="footer-newsletter-btn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12h14m-7-7l7 7-7 7"
                      ></path>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="footer-bottom-bar">
            <div className="footer-legal-row">
              <span className="footer-copyright section-content">
                © 2025 BISPO. Todos os direitos reservados.
              </span>
              <div className="footer-legal-links">
                <span className="footer-legal-tag">Feito para o Jogo.</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<script defer data-name="footer-interactions">
(function(){
  const footerForm = document.querySelector(".footer-newsletter-form")
  const footerInput = document.querySelector(".footer-newsletter-input")
  const footerBtn = document.querySelector(".footer-newsletter-btn")

  if (footerForm) {
    footerForm.addEventListener("submit", (e) => {
      const email = footerInput.value
      if (email) {
        footerBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>'
        footerBtn.style.color = "var(--color-primary)"
        footerInput.disabled = true
        footerInput.style.opacity = "0.5"
        footerInput.placeholder = "Inscrito."

        setTimeout(() => {
          footerForm.reset()
          footerInput.disabled = false
          footerInput.style.opacity = "1"
          footerBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7l7 7-7 7"/></svg>'
          footerBtn.style.color = "var(--color-on-surface)"
        }, 3000)
      }
    })
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Footer
