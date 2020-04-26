import React from 'react';
import Header from './component/Header';
import Products from './component/Products';
import Message from './component/Message';
import Cart from './component/Cart';
import Footer from './component/Footer';
function App() {
  return (
    <div>
      <Header />
      <main id="mainContainer">
        <div className="container">
          <Products />
          <Message />
          <Cart />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
