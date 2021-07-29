import { Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route>
          <About />
        </Route>
        <Route path='/portfolio'>
          <Portfolio />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
      </Switch>
      <Navigation />
      <About />
    </div>
  );
}

export default App;
