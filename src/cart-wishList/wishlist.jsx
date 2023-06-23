import './cart-wishlist.css'
import { Link } from 'react-router-dom';

function Wishlist({wishlist, handleAdd, removeWishlist}){

  return(
    <div className='main-container'>
    <div className='border-head'>
    <div className='head-cart-wishlist'>WISHLIST</div>
    </div>
    {wishlist.length === 0 && 
    (<div className='no-items'>No Items</div>)}
    {wishlist.length !== 0 && (<div className='container'>
    {wishlist.length !== 0 && (
    <ul className='head-product'>
      <li>IMAGE</li>
      <li>PRODUCT</li>
      <li>PRICE</li>
      <li>ADD TO CART</li>
      <li>REMOVE</li>
    </ul>
    )}
    {
      wishlist.map((wishlistItem) => {
        return(
          <div key={wishlistItem.id}  className='wishlist'>
              <img className='img-cart-wishlist'
              src={`/img/${wishlistItem.img}`} alt=''/>
              <span className='item-name'>{wishlistItem.Catalog}</span>

              <span className='price-cart-wishlist'> ${wishlistItem.price}</span>

              <button className='add-to-cart'
              onClick={()=> handleAdd(wishlistItem)}>
                add to cart
              </button>

              <button className='remove-btn' title='remove'
              onClick={() => removeWishlist(wishlistItem)}>
                <i className="fa-solid fa-heart"></i>
              </button>

          </div>
        )
      })
    }
    </div>)}
    {wishlist.length === 0 && (
      <button className='shopping-btn'><Link to='/catalog'>START SHOPPING</Link></button>
      )}
    </div>
  )

}

export default Wishlist;