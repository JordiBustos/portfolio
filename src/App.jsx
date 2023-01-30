import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { useEffect, useState } from "react";

function App() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [width, setWidth] = useState("90%");

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  
  function changeValues(width, setWidth) {
    if (width < 800) {
      setWidth("90%");
    } else if (width < 1300) {
      setWidth("65vw");
    } else if (width < 2000) {
      setWidth("calc(50vw - 3.33333334vw)");
    }
  }
  
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
      changeValues(windowSize.innerWidth, setWidth);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {width}
        <AnimatedRoutes width={width} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
