import { useState } from 'react';
import Navigation from './components/Navigation';
import ProductDetails from './components/ProductDetails';
import './App.css';
import { defaultState } from './state/index';

function App() {
  const [state, setState] = useState(defaultState);

  return (
    <div className="App">
      <Navigation />
      <ProductDetails details={state}/>
    </div>
  );
}

export default App;
