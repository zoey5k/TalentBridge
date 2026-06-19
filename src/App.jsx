import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Careers from "./pages/Careers";
import Apply from "./pages/Apply";
import Footer from "./home/Footer";
import translations from "./translations";

import {
  Sun,
  Moon,
  Globe,
  Menu,
  X
} from "lucide-react";

function App() {

  const [theme, setTheme] =
    useState("light");

  const [language, setLanguage] =
    useState("EN");

  const t =
  translations[language];

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

useEffect(() => {

document.documentElement
  .setAttribute(
    "data-theme",
    theme
  );

document.documentElement.dir =
  language === "AR"
    ? "rtl"
    : "ltr";

document.documentElement.lang =
  language === "AR"
    ? "ar"
    : "en";

const handleScroll = () => {

setScrolled(
window.scrollY > 40
);

};

window.addEventListener(
"scroll",
handleScroll
);

return () =>
window.removeEventListener(
"scroll",
handleScroll
);

}, [theme, language]);

  return (

    <div className="app-shell">

      {/* NAVBAR */}

      <header
      className={`navbar ${
      scrolled ? "scrolled" : ""
      }`}
      >

        <div className="container nav-content">

          <div className="logo">
            TalentBridge
          </div>

          <nav
            className={`nav-links ${
              menuOpen
                ? "active"
                : ""
            }`}
          >

            <Link to="/">
            {t.home}
            </Link>

            <Link to="/careers">
            {t.careers}
            </Link>

<button
  className="nav-link-btn"
  onClick={() => {

    if (
      window.location.pathname !== "/"
    ) {

      window.location.href =
        "/#pricing";

      return;
    }

    document
      .getElementById(
        "pricing"
      )
      ?.scrollIntoView({
        behavior:
          "smooth"
      });

  }}
>
  Pricing
</button>

          </nav>

          <div className="nav-actions">

            <button
              className="icon-btn"
              onClick={() =>
                setLanguage(
                  language === "EN"
                    ? "AR"
                    : "EN"
                )
              }
            >
              <Globe size={18} />
              {language}
            </button>

            <button
              className="icon-btn"
              onClick={() =>
                setTheme(
                  theme === "light"
                    ? "dark"
                    : "light"
                )
              }
            >
              {theme === "light"
                ? <Moon size={18} />
                : <Sun size={18} />
              }
            </button>

            <button className="btn-secondary">
              {t.login}
            </button>

            <button
              className="mobile-menu"
              onClick={() =>
                setMenuOpen(
                  !menuOpen
                )
              }
            >
              {menuOpen
                ? <X />
                : <Menu />
              }
            </button>

          </div>

        </div>

      </header>

      {/* ROUTES */}

            <main>

        <Routes>

          <Route
            path="/"
            element={<Home t={t} />}
          />

          <Route
            path="/careers"
            element={<Careers />}
          />

          <Route
            path="/apply"
            element={<Apply />}
          />

        </Routes>

      </main>

      <Footer />

    </div>
  );
}

export default App;