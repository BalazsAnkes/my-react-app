import { useState } from 'react';
import Navigation from './components/Navigation';
import ProductDetails from './components/ProductDetails';
import './App.css';
import { defaultState, activeState } from './state/index';

function App() {
  const [currentState, setActiveState] = useState(activeState);

  return (
    <div className="App">
      <Navigation />
      <ProductDetails 
        details={defaultState}
        currentDetails={currentState}
      />
    </div>
  );
}

export default App;
