import React, { useState } from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import Portfolio from './pages/Portfolio';
import { useEffect } from 'react/cjs/react.development';
import { Switch, Route } from 'react-router-dom';
import Loading from './animations/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 7000);
  }, []);

  return (
    <div className='App'>
      {isLoading ? (
        <Loading />
      ) : (
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Navigation />
          <About />
          <Portfolio />
          <Contact />
        </Switch>
      )}
    </div>
  );
}

export default App;
