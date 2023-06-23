import StartHome from "./start-home";
import BestSeller from "./best-seller";
import { items } from '../data';
import { useState } from 'react';

function Home({handleAdd, addWishlist, carMark}){
  const [itemsData] = useState(items);

  return(
    <>
    <StartHome />
    <BestSeller 
     itemsData={itemsData}
     handleAdd={handleAdd}
     addWishlist={addWishlist}
     carMark={carMark}
     />
    </>
  );
}

export default Home;