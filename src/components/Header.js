import { useState } from "react";
import "./Header.css";

//Se a classe sticky estiver presente em header adicionar a section-hero

function Header() {
  const [navMenu, setNavMenu] = useState(false);

  function toogleMenu() {
    if (!navMenu) {
      setNavMenu(true);
    } else {
      setNavMenu(false);
    }
  }

  return (
    <header className={`header ${navMenu ? "nav-open" : ""}`}>
      <a href="#">
        <img className="logo" alt="Omnifood logo" src="img/omnifood-logo.png" />
      </a>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a href="#how" onClick={toogleMenu} className="main-nav-link">
              How it works
            </a>
          </li>
          <li>
            <a href="#meals" onClick={toogleMenu} className="main-nav-link">
              Meals
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              onClick={toogleMenu}
              className="main-nav-link"
            >
              Testimonials
            </a>
          </li>
          <li>
            <a href="#pricing" onClick={toogleMenu} className="main-nav-link">
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#cta"
              onClick={toogleMenu}
              className="main-nav-link nav-cta"
            >
              Try for free
            </a>
          </li>
        </ul>
      </nav>

      <button onClick={toogleMenu} className="btn-mobile-nav">
        <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>
        <ion-icon class="icon-mobile-nav" name="close-outline"></ion-icon>
      </button>
    </header>
  );
}

export default Header;
