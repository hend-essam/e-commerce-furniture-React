import StartHome from "./start-home";
import BestSeller from "./best-seller";

function Home({ handleAdd, addWishlist }) {
  return (
    <>
      <StartHome />
      <BestSeller handleAdd={handleAdd} addWishlist={addWishlist} />
    </>
  );
}

export default Home;
