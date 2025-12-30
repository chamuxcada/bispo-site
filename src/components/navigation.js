import React from 'react'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <nav className="navigation-root">
        <div className="navigation-container">
          <div className="navigation-brand">
            <a href="/">
              <div aria-label="BISPO Home" className="navigation-logo-link">
                <span className="section-title">BISPO</span>
              </div>
            </a>
          </div>
          <div className="navigation-desktop-menu">
            <ul className="navigation-links-list">
              <li className="navigation-item">
                <a href="/">
                  <div className="navigation-link">
                    <span>Coleções</span>
                  </div>
                </a>
              </li>
              <li className="navigation-item">
                <a href="/">
                  <div className="navigation-link">
                    <span>O Manifesto</span>
                  </div>
                </a>
              </li>
              <li className="navigation-item">
                <a href="/">
                  <div className="navigation-link">
                    <span>Autenticidade</span>
                  </div>
                </a>
              </li>
              <li className="navigation-item">
                <a href="/">
                  <div className="navigation-link">
                    <span>Contato</span>
                  </div>
                </a>
              </li>
            </ul>
            <div className="navigation-actions">
              <button className="btn btn-outline btn-sm">
                Edições Limitadas
              </button>
            </div>
          </div>
          <button
            id="mobile-toggle"
            aria-label="Abrir menu"
            aria-expanded="false"
            className="navigation-mobile-toggle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>
      <dialog id="mobile-overlay" className="navigation-mobile-overlay">
        <div className="navigation-overlay-header">
          <div className="navigation-brand">
            <span className="section-title">BISPO</span>
          </div>
          <button
            id="mobile-close"
            aria-label="Fechar menu"
            className="navigation-mobile-close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="navigation-overlay-content">
          <ul className="navigation-overlay-list">
            <li className="navigation-overlay-item">
              <a href="/">
                <div className="navigation-overlay-link hero-title">
                  <span>Coleções</span>
                </div>
              </a>
            </li>
            <li className="navigation-overlay-item">
              <a href="/">
                <div className="navigation-overlay-link hero-title">
                  <span>O Manifesto</span>
                </div>
              </a>
            </li>
            <li className="navigation-overlay-item">
              <a href="/">
                <div className="navigation-overlay-link hero-title">
                  <span>Autenticidade</span>
                </div>
              </a>
            </li>
            <li className="navigation-overlay-item">
              <a href="/">
                <div className="navigation-overlay-link hero-title">
                  <span>Contato</span>
                </div>
              </a>
            </li>
          </ul>
          <div className="navigation-overlay-footer">
            <p className="section-content">
              Edições extremamente limitadas. Sem reposição.
            </p>
            <button className="btn btn-primary btn-lg">Explorar Drop</button>
          </div>
        </div>
      </dialog>
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<script defer data-name="navigation-logic">
(function(){
  const mobileToggle = document.getElementById("mobile-toggle")
  const mobileClose = document.getElementById("mobile-close")
  const mobileOverlay = document.getElementById("mobile-overlay")

  if (mobileToggle && mobileOverlay) {
    mobileToggle.addEventListener("click", () => {
      mobileOverlay.showModal()
      mobileToggle.setAttribute("aria-expanded", "true")
      document.body.style.overflow = "hidden"
    })
  }

  if (mobileClose && mobileOverlay) {
    mobileClose.addEventListener("click", () => {
      mobileOverlay.close()
      mobileToggle.setAttribute("aria-expanded", "false")
      document.body.style.overflow = ""
    })
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener("click", (e) => {
      if (e.target === mobileOverlay) {
        mobileOverlay.close()
        mobileToggle.setAttribute("aria-expanded", "false")
        document.body.style.overflow = ""
      }
    })

    const overlayLinks = mobileOverlay.querySelectorAll(".navigation-overlay-link")
    overlayLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileOverlay.close()
        mobileToggle.setAttribute("aria-expanded", "false")
        document.body.style.overflow = ""
      })
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

export default Navigation
