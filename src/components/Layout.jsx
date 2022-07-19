import React, { useContext } from "react";
import Header from "./Header";
import ThemeContext from "../context/ThemeContext";
import '../styles.css'

function Layout({ children }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      id="Layout"
      style={{ background: theme.background, color: theme.foreground }}
    >
      <header >
        <nav>
          <Header title="React Hooks"/>
        </nav>
      </header>
      {children}
      <footer className="footer">
        <p>Aprender</p>
      </footer>
    </div>
  );
}

export default Layout;
