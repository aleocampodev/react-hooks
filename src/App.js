import { useState } from "react";
import Layout from "./components/Layout";
import Characters from "./components/Characters";
import ThemeContext, { themes } from "./context/ThemeContext";
import "./styles.css";

function App() {
  const [theme, setTheme] = useState(themes.light);

  const handleChangeTheme = () => {
    setTheme(() => (theme === themes.dark ? themes.light : themes.dark));
  };

  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
      <Layout>
        <Characters />
      </Layout>
    </ThemeContext.Provider>
  );
}

export default App;
