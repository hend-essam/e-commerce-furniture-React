import "./catalog.css";

const CatalogItems = ({ itemsData, handleAdd, addWishlist }) => {
  return (
    <div className="catalog-items">
      {itemsData.length >= 1 ? (
        itemsData.map((item) => (
          <div key={item.id} className="catalog-item">
            <img src={`./img/${item.img}`} alt={item.Catalog} />
            <div className="item-catalog">
              <div>{item.Catalog}</div>
              <div>
                <i
                  className={`fa-solid fa-heart ${item.inWishlist ? "on" : ""}`}
                  onClick={() => addWishlist(item)}
                ></i>
                <i
                  className={`fa-solid fa-cart-shopping ${
                    item.inCart ? "on" : ""
                  }`}
                  onClick={() => handleAdd(item)}
                ></i>
              </div>
            </div>
            <div className="price">${item.price}</div>
          </div>
        ))
      ) : (
        <h2>No results found</h2>
      )}
    </div>
  );
};

export default CatalogItems;
