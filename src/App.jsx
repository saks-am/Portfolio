import { useContext } from "react";
import About from "./Components/About/About";

import Intro from "./Components/Intro/Intro";

import Toggle from "./Components/Toggle/Toggle";
import { ThemeContext } from "./Components/context";
import ProductList from "./Components/ProductList/ProductList";
import Connect from "./Components/connect/Connect";
import Footer from "./Components/Footer/Footer";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Connect />
      <Footer />
    </div>
  );
};

export default App;