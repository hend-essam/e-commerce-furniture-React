import { BrowserRouter, Route ,Routes } from 'react-router-dom';
import Header from './header/header';
import Home from './home/home';
import Catalog from './catalog/catalog';
import About from './about/about';
import Contact from './contact/contact';
import Cart from './cart-wishList/cart';
import Wishlist from './cart-wishList/wishlist';
import Login from './login/login';
import Footer from './footer/footer';
import ScrollToTOP from './scroll-to-top';
import { items } from './data';
import {useState} from 'react';

function App(){

  const [cart, setCart] = useState([]);
  const [wishlist, setwishlist] = useState([]);

/* ------------START CART----------- */
  const handleAdd = (product) => {
    const productExist = cart.find((item) => item.id === product.id);
    if(productExist){
      setCart(
        cart.map((item) => 
        item.id === product.id
        ? {...productExist, quantity: productExist.quantity + 1}
        : item
        )
      );
    }else{
      setCart([...cart, {...product, quantity: 1}]);
    }
  };

  const remove = (product) => {
    const productExist = cart.find((item) => item.id === product.id);
    if(productExist.quantity === 1){
      setCart(cart.filter((item) => item.id !== product.id));
    }else{
      setCart(
        cart.map((item) =>
         item.id === product.id 
         ? {...productExist, quantity: productExist.quantity - 1}
         : item
         )
      )
    }
  };

  const add = (product) => {
    const productExist = cart.find((item) => item.id === product.id);
      setCart(
        cart.map((item) =>
         item.id === product.id 
         ? {...productExist, quantity: productExist.quantity + 1}
         : item
         )
      )
  };

  const handlRemove = (product) => {
    const newList = cart.filter((products) => products !== product);
    setCart(newList);
  } 

/* ------------END CART----------- */

items.find((ele, index) => {
  if(cart.find((item) => item.id === ele.id)){
      items[index].inCart = true;
    }else items[index].inCart = false;
});

/* ------------START WISHLIST----------- */
  const addWishlist = (product) => {
    const productExist = wishlist.find((item) => item.id === product.id);
    if(productExist){
      setwishlist(
        wishlist.map((item) => 
        item.id === product.id
        ? {...productExist}
        : item
        )
      );
    }else{
      setwishlist([...wishlist, {...product}]);
    }
  };

  const removeWishlist = (product) => {
    const newList = wishlist.filter((products) => products !== product);
    setwishlist(newList);
  }
/* ------------END WISHLIST----------- */

items.find((ele, index) => {
  if(wishlist.find((item) => item.id === ele.id)){
      items[index].inWishlist = true;
    }else items[index].inWishlist = false;
});

  return(
  <>
  <BrowserRouter>
    <Header 
      cartLength={cart.length}
      wishlistLength={wishlist.length}
     />
    <Routes>
      <Route path='/' element={<Home 
        handleAdd={handleAdd} 
        addWishlist={addWishlist}
      />}/>
      <Route path='/catalog' element={<Catalog  
        handleAdd={handleAdd} 
        addWishlist={addWishlist}
      />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/cart' element={<Cart 
        cart={cart}
        handleAdd={handleAdd}
        remove={remove}
        add={add}
        handlRemove={handlRemove}
      />}/>
      <Route path='/wishlist' element={<Wishlist 
        wishlist={wishlist}
        addWishlist={addWishlist}
        handleAdd={handleAdd} 
        removeWishlist={removeWishlist}
      />}/>
      <Route path='/login' element={<Login />}/>
    </Routes>
    <Footer/>
    <ScrollToTOP />
  </BrowserRouter>
  </>
  );}

export default App;