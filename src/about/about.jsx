import "./about.css";
const services = [
  {
    icon: <i className="fa-solid fa-rotate-left"></i>,
    title: "14 Days Return",
    discription:
      "We are able to ship our items to almost anywhere in the world",
  },
  {
    icon: <i className="fa-solid fa-user-shield"></i>,
    title: "Security Payment",
    discription: "Usually fall within the 14–day return policy",
  },
  {
    icon: <i className="fa-solid fa-phone"></i>,
    title: "24/7 Support",
    discription: "Securely process all of our card transactions",
  },
];

function About() {
  return (
    <div>
      <div className="about">
        <div className="border-img">
          <img src="./img/about/about.jpg" alt="" />
        </div>
        <div className="words">
          <div className="head">
            <h1>ABOUT US</h1>
          </div>
          <div className="over-view">
            <span className="bold">we create </span>a Great Design For All and
            affordable designs for the modern home
          </div>
          <div className="discription">
            <div>
              <h3>Designs You Desire</h3>
              <p>
                We love creating furniture you want and will love for years to
                come. Our designs feature a fusion of unique styles that inspire
                us – from mid-century modern to contemporary.
              </p>
            </div>
            <div>
              <h3>Quality At Every Step</h3>
              <p>
                Rest easy. From choice materials and expert hands, to precision
                tools and tests, we ensure your product is made of hardy stuff
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="services">
        {services.map((service, index) => {
          return (
            <div key={index} className="service">
              <span>{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.discription}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default About;
