import React, { useState } from 'react';
/* import About from './pages/About';
import Contact from './pages/Contact'; */
import Home from './pages/Home';
/* import Navigation from './components/Navigation';
import Portfolio from './pages/Portfolio'; */
import { useEffect } from 'react/cjs/react.development';
import Loading from './animations/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isStandardView, setIsStandardView] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setIsStandardView(true);
    }, 7000);
  }, []);

  return (
    <div className='App'>
      {isLoading && <Loading />}
      {isStandardView && <Home />}
    </div>
  );
}

export default App;
