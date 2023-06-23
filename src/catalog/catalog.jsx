import CatalogItems from './catalog-items';
import Filter from './catalog-filter';
import { items } from '../data';
import { useState } from 'react';

function Catalog({handleAdd, addWishlist}){
  
  const [itemsData, setItemsData] = useState(items);
  const allCatalog = ['all',...new Set(items.map((item) => item.Catalog))];
  
  /* filter by catalog */ 
 const filterCatalog = (catalog) => {
  if (catalog === 'all'){
    setItemsData(items);
  } else {
    const filterArray = items.filter((item) => item.Catalog === catalog);
    setItemsData(filterArray); 
  };
 };

  return(
    <>
    <div className='catalog'>
    <h1 className='catalog-header'>Catalog</h1>
    <div className='catalog-body'>
    <Filter filterCatalog={filterCatalog} allCatalog={allCatalog}/>
    <CatalogItems 
    itemsData={itemsData} 
    handleAdd={handleAdd}
    addWishlist={addWishlist}/>
    </div>
    </div>
    </>
  );
}

export default Catalog;