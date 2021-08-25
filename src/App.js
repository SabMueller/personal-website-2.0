import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <div className='App'>
      <Home />
      <Navigation />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
