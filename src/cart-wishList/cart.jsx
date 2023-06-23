import './cart-wishlist.css'
import { Link } from 'react-router-dom';

function Cart({cart, remove, add, handlRemove}){

  return(
    <div className='main-container'>
      <div className='border-head'>
      <div className='head-cart-wishlist'>YOUR SHOPPING CART</div>
      </div>
      {cart.length === 0 && (<div className='no-items'>No Items</div>)}
      {cart.length !== 0 && (<div className='container'>
      {cart.length !== 0 && (
      <ul className='head-product'>
        <li>IMAGE</li>
        <li>PRODUCT</li>
        <li>PRICE</li>
        <li>QUANTITY</li>
        <li>REMOVE</li>
      </ul>
      )}
      {
        cart.map((cartItem) => {
          return(
            <div key={cartItem.id}  className='cart'>
              <img className='img-cart-wishlist'
              src={`/img/${cartItem.img}`} alt=''/>
              <span className='item-name'>{cartItem.Catalog}</span>

              <span className='price-cart-wishlist'> ${cartItem.price * cartItem.quantity}</span>

              <div className='quantity'>

              <button onClick={() => remove(cartItem)}>-</button>
              <span>{cartItem.quantity}</span>
              <button onClick={() => add(cartItem)}>+</button>

              </div>

              <button className='remove-btn' 
              onClick={() => handlRemove(cartItem)}>
                <i className="fa-solid fa-xmark"></i>
              </button>

            </div>
          )
        })
      }
      </div>)}
      <p className='total'> Total → <span> $</span>
        {

          cart.map(item => item.price * item.quantity)
          .reduce((total, value) => total + value, 0)
        }
      </p>
      {cart.length === 0 && (
      <button className='shopping-btn'><Link to='/catalog'>START SHOPPING</Link></button>
      )}
    </div>
  );
 }


export default Cart;