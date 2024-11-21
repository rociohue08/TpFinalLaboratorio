import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Aside from './Components/Aside';
import Nav from './Components/Nav';
import MainContent from './Components/MainContent';
import Footer from './Components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';


/*IMPORTO ESTILOS DE PRIMEREACT al pegarlo aca en este archivo local no tengo que ponerlo en cada componente*/
// Tema de PrimeReact
import 'primereact/resources/themes/saga-blue/theme.css'; 
// Estilos de PrimeReact
import 'primereact/resources/primereact.min.css';  
// Iconos de PrimeIcons      
import 'primeicons/primeicons.css';                      


function App() {
  // const { register, handleSubmit} =useForm();
  return (
    <Router>
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Nav />
        <div style={{ display: 'flex', flex: '1' }}>
          <Aside />
          <MainContent>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
            </Routes>
          </MainContent>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;