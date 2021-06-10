import { useState } from 'react';
import Navigation from './components/Navigation';
import ProductDetails from './components/ProductDetails';
import './App.css';
import { defaultState, activeState, setDetail } from './state/index';

function App() {
  const [currentState, setActiveState] = useState(activeState);
  const onDetailChange = setDetail(setActiveState)(currentState);

  return (
    <div className="App">
      <Navigation />
      <ProductDetails 
        details={defaultState}
        currentDetails={currentState}
        onDetailChange={(contentId) => onDetailChange(contentId)}
      />
    </div>
  );
}

export default App;
