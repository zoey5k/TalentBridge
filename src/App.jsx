import { useEffect, useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Careers from "./pages/Careers";
import Apply from "./pages/Apply";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Footer from "./home/Footer";
import translations from "./translations";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";
import AIAssistant from "./components/AIAssistant";

import {
  Sun,
  Moon,
  Globe,
  Menu,
  X,
  Sparkles,
} from "lucide-react";

function App() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("EN");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);

  const t = translations[language];
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.dir = language === "AR" ? "rtl" : "ltr";
    document.documentElement.lang = language === "AR" ? "ar" : "en";

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [theme, language]);

  useEffect(() => {
    const startTime = Date.now();
    const minimumDisplayTime = 2500;

    const handleLoad = () => {
      const elapsed = Date.now() - startTime;
      const remaining = minimumDisplayTime - elapsed;
      setTimeout(() => {
        setLoading(false);
      }, remaining > 0 ? remaining : 0);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="app-shell">
      <ScrollToTop />

      {/* NAVBAR */}
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-content">
          <Link to="/" className="logo-link" onClick={closeMenu}>
            <div className="logo">
              <Sparkles size={24} className="logo-icon" />
              TalentBridge
            </div>
          </Link>

          <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
            <Link
              to="/"
              className={isActive("/") && location.pathname === "/" ? "active-link" : ""}
              onClick={closeMenu}
            >
              {t.home}
            </Link>
            <Link
              to="/careers"
              className={isActive("/careers") ? "active-link" : ""}
              onClick={closeMenu}
            >
              {t.careers}
            </Link>
            <Link
              to="/pricing"
              className={isActive("/pricing") ? "active-link" : ""}
              onClick={closeMenu}
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className={isActive("/about") ? "active-link" : ""}
              onClick={closeMenu}
            >
              About
            </Link>
          </nav>

          <div className="nav-actions">
            <button
              className="icon-btn"
              onClick={() => setLanguage(language === "EN" ? "AR" : "EN")}
              aria-label="Toggle language"
            >
              <Globe size={18} />
              {language}
            </button>

            <button
              className="icon-btn"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            <button className="btn-secondary nav-login-btn">{t.login}</button>

            <button
              className="mobile-menu"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* ROUTES */}
      <main>
        <Routes>
          <Route path="/" element={<Home t={t} />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
      <AIAssistant />
    </div>
  );
}

export default App;