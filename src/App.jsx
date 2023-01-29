import './App.css';
import {
  BrowserRouter
} from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import Footer from './components/footer/Footer';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
