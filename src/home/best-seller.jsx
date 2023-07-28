import '../standerd.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import './home.css';

function BestSeller({itemsData, handleAdd, addWishlist}) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='best-seller' id='bestseller'>
      <h2>BEST SELLER</h2>
        <Slider {...settings}>
          {
            itemsData.length >= 1 
              ?(itemsData.filter((item) => item.bestSeller) 
                .map((item) => {
                  return (
                    <div key={item.id} className="item">
                      <div className="shine">
                        <img src = {`./img/${item.img}`} alt=""/>
                      </div>
                        <div className="discription">
                          <div className="type">{item.Catalog}</div>
                          <div>
                          <i className={item.inWishlist
                            ? 'fa-solid fa-heart on' 
                            : 'fa-solid fa-heart'}
                          onClick={()=> { addWishlist(item) }}
                          ></i>
                          <i className={item.inCart
                            ? 'fa-solid fa-cart-shopping on' 
                            : 'fa-solid fa-cart-shopping'}
                          onClick={()=>{ handleAdd(item) }}
                          ></i>
                          </div>
                        </div>
                      <div className="price">$ {item.price}</div>
                    </div>
                  ) 
                })
              ) 
              : <h2>no Items</h2>
          }
        </Slider>
    </div>
  );
}

export default BestSeller;
