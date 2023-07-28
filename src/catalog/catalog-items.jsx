import './catalog.css';

const CatalogItems = ({itemsData, handleAdd, addWishlist}) => {
  return(
        <div className='catalog-items'>
          {
            itemsData.length >= 1 ? (itemsData.map((item) => {
              return(
              <div  key={item.id} className='catalog-item'>
                <img src = {`./img/${item.img}`} alt={item.Catalog} />
                <div className='item-catalog'>
                  <div>{item.Catalog}</div>
                <div>
                    <i className={item.inWishlist
                         ? 'fa-solid fa-heart on' 
                         : 'fa-solid fa-heart'}
                    onClick={()=> addWishlist(item)}
                    ></i>
                    <i className={item.inCart
                         ? 'fa-solid fa-cart-shopping on' 
                         : 'fa-solid fa-cart-shopping'}
                     onClick={()=> handleAdd(item)} >
                     </i>
                  </div>
                </div>
                <div className='price'>${item.price}</div>
              </div>
              )
            })):<h2>No results found</h2>
          }
        </div>
  );
}

export default CatalogItems;
