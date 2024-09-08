import "./home.css";
import { ReactTyped } from "react-typed";
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
          <ReactTyped {...typedSettings} />
        </h1>
        <img
          src="./img/home/home.jpg"
          alt="furniture"
          className="home-photo-words"
        />
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
          <img
            src="./img/home/little-photo1.jpg"
            alt="furniture"
            className="little-photo"
          />
          <img
            src="./img/home/little-photo2.jpg"
            alt="furniture"
            className="little-photo"
          />
        </div>
        <img src="./img/home/home.jpg" alt="furniture" className="photo" />
      </div>
    </div>
  );
}

export default StartHome;
