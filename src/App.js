import { useState } from 'react';
import Navigation from './components/Navigation';
import ProductDetails from './components/ProductDetails';
import AddToCart from './components/AddToCart';
import './App.css';
import { defaultState, activeState, setDetail, setImage, setAddToCartButton } from './state/index';

function App() {
  const [currentState, setActiveState] = useState(activeState);
  const onDetailChange = setDetail(setActiveState)(currentState);
  const onColorChange = setImage(setActiveState)(currentState);
  const onAddToCartClick = setAddToCartButton(setActiveState)(currentState);

  return (
    <div className="App">
      <nav className="navigation">
        <Navigation />
      </nav>
      <section className="main-content">
        <ProductDetails
          details={defaultState}
          currentDetails={currentState}
          onDetailChange={(contentId) => onDetailChange(contentId)}
          onColorChange={(image) => onColorChange(image)}
        />
      </section>
      <section className="image">
          <img src={`images/${currentState.image}`} alt={currentState.image}></img>
      </section>
      <section className="cta-group">
        <AddToCart state={currentState.addToCartButton} onAddToCart={onAddToCartClick}/>
      </section>
    </div>
  );
}

export default App;
