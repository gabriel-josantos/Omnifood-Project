import { useState } from "react";
import { headerItemsList } from "../../helpers/config";
import LoginHeader from "./Login/LoginHeader";
import "../css/Header.css";

//Se a classe sticky estiver presente em header adicionar a section-hero

function Header() {
  const [navMenu, setNavMenu] = useState(false);

  function toggleNavMenu() {
    if (!navMenu) {
      setNavMenu(true);
    } else {
      setNavMenu(false);
    }
  }

  const headerItems = headerItemsList.map((item) => (
    <li key={item}>
      <a
        href={`#${item.split(" ")[0].toLowerCase()}`}
        className={`main-nav-link nav-cta"`}
      >
        {item}
      </a>
    </li>
  ));

  return (
    <header className={`header ${navMenu ? "nav-open" : ""}`}>
      <a href="#">
        <img className="logo" alt="Omnifood logo" src="img/omnifood-logo.png" />
      </a>

      <nav className="main-nav">
        <ul className="main-nav-list">
          {headerItems}
          <li>
            <a href="#cta" className="main-nav-link nav-cta">
              Try for free
            </a>
          </li>
          <LoginHeader />
        </ul>
      </nav>

      <button onClick={toggleNavMenu} className="btn-mobile-nav">
        <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>
        <ion-icon class="icon-mobile-nav" name="close-outline"></ion-icon>
      </button>
    </header>
  );
}

export default Header;
