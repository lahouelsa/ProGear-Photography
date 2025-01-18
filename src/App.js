// App.js
import React from 'react';
import Signup from "./components/authentificationClient/Signup"; 
import ListArticles from './components/ListArticles';
import AddArticle from './components/AddArticle';
import EditArticle from './components/EditArticle';
import Menu from './Menu';
import ListCards from './components/clientSide/ListCards';
import { CartProvider } from "use-shopping-cart";
import Cart from "./components/clientSide/Cart";
import PdfCart from "./components/clientSide/PdfCart";
import Loginclient from './components/authentificationClient/loginClient';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Acceuil from './components/Acceuil';


function App() {
  return (
    
    <CartProvider>
      <Router>
        <Menu />
        <Routes>
          <Route path='/articles' element={<ListArticles />} />
          <Route path='/AddArticle' element={<AddArticle />} />
          <Route path='/editArticle/:id' element={<EditArticle />} />
          <Route path='/' element={<ListArticles />} />
          <Route path='/clientSide/ListCards' element={<ListCards />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/pdfCart' element={<PdfCart />} />
          <Route path="/loginclient" exact element={<Loginclient />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path='/Acceuil' element={<Acceuil />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
