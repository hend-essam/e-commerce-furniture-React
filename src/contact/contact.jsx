import "./contact.css";

function Contact() {
  const contactWays = [
    {
      icon: <i className="fa-solid fa-location-dot"></i>,
      title: "Adress",
      discription: "New Cairo City El-Rodah Square A-14",
    },
    {
      icon: <i className="fa-solid fa-phone"></i>,
      title: "Phone",
      discription: "+201055804197",
    },
    {
      icon: <i className="fa-solid fa-envelope"></i>,
      title: "Email",
      discription: "hend.essam.mohamed@gmail.com",
    },
  ];
  return (
    <div className="contact">
      <div className="main-details">
        <h2>Contact Details</h2>
        <p>
          There’s no place like home. To help you make yours perfect, our stores
          are open, we’re delivering as normal, our online store is available
          24/7, and our customer service team is ready to help you via phone and
          Live Chat.
        </p>
        <div className="contact-ways">
          {contactWays.map((way, index) => {
            return (
              <div key={index} className="contact-way">
                <h2>{way.icon}</h2>
                <div className="details">
                  <h3>{way.title}</h3>
                  <p>{way.discription}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="icons">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
        </div>
      </div>
      <form className="message">
        <i className="fa-solid fa-envelope-open-text"></i>
        <h2 className="message-head">Send us an message</h2>
        <div className="inputs">
          <input className="input" type="text" placeholder="Your Name" />
          <input className="input" type="email" placeholder="Your Email" />
        </div>
        <textarea
          aria-required="true"
          aria-invalid="false"
          placeholder="Your message..."
        ></textarea>
        <input className="input" type="submit" value="Send"></input>
      </form>
    </div>
  );
}

export default Contact;
