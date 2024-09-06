import "./home.css";
import photo from "./home-img/home.jpg";
import photo1 from "./home-img/little-photo1.jpg";
import photo2 from "./home-img/little-photo2.jpg";
import Typed from "react-typed";
import { Link } from "react-scroll";

const typedSettings = {
  strings: [" TRENDY HOUSE.."],
  typeSpeed: 200,
  backSpeed: 200,
  loop: true,
};

function StartHome() {
  return (
    <div className="home">
      <div className="words">
        <h1 className="typed">
          ALL YOU NEED TO
          <br />
          <Typed {...typedSettings} />
        </h1>
        <img src={photo} alt="furniture" className="home-photo-words" />
        <p className="discription">
          We have 3000+ reviews and modern high <br /> quality furniture and
          products.
        </p>
        <button className="explore-btn">
          <Link
            to="bestseller"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Explore All
          </Link>
        </button>
      </div>
      <div className="photos">
        <div className="little-photos">
          <img src={photo1} alt="furniture" className="little-photo" />
          <img src={photo2} alt="furniture" className="little-photo" />
        </div>
        <img src={photo} alt="furniture" className="photo" />
      </div>
    </div>
  );
}

export default StartHome;
