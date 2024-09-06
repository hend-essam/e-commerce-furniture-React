import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./header/header";
import Home from "./home/home";
import Catalog from "./catalog/catalog";
import About from "./about/about";
import Contact from "./contact/contact";
import Cart from "./cart-wishList/cart";
import Wishlist from "./cart-wishList/wishlist";
import Login from "./login/login";
import Footer from "./footer/footer";
import ScrollToTOP from "./scroll-to-top";
import { items } from "./data";
import { useState, useEffect, useMemo } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setwishlist] = useState([]);

  const updateCartQuantity = (product, quantityChange) => {
    const productExist = cart.find((item) => item.id === product.id);
    if (productExist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...productExist,
                quantity: productExist.quantity + quantityChange,
              }
            : item
        )
      );
    } else if (quantityChange > 0) {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleAdd = (product) => updateCartQuantity(product, 1);
  const decreaseQuantity = (product) => updateCartQuantity(product, -1);

  const handleRemove = (product) => {
    setCart(cart.filter((products) => products !== product));
  };

  const addWishlist = (product) => {
    const productExist = wishlist.find((item) => item.id === product.id);
    if (productExist) {
      setwishlist(
        wishlist.map((item) =>
          item.id === product.id ? { ...productExist } : item
        )
      );
    } else {
      setwishlist([...wishlist, { ...product }]);
    }
  };

  const removeWishlist = (product) => {
    setwishlist(wishlist.filter((products) => products !== product));
  };

  const updatedItems = useMemo(() => {
    return items.map((ele) => ({
      ...ele,
      inCart: cart.some((item) => item.id === ele.id),
      inWishlist: wishlist.some((item) => item.id === ele.id),
    }));
  }, [cart, wishlist]);

  return (
    <>
      <BrowserRouter>
        <Header cartLength={cart.length} wishlistLength={wishlist.length} />
        <Routes>
          <Route
            path="/"
            element={<Home handleAdd={handleAdd} addWishlist={addWishlist} />}
          />
          <Route
            path="/catalog"
            element={
              <Catalog
                items={updatedItems}
                handleAdd={handleAdd}
                addWishlist={addWishlist}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                handleAdd={handleAdd}
                remove={decreaseQuantity}
                add={handleAdd}
                handleRemove={handleRemove}
              />
            }
          />
          <Route
            path="/wishlist"
            element={
              <Wishlist
                wishlist={wishlist}
                addWishlist={addWishlist}
                handleAdd={handleAdd}
                removeWishlist={removeWishlist}
              />
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
        <ScrollToTOP />
      </BrowserRouter>
    </>
  );
}

export default App;
