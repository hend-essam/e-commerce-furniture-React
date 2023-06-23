import {useEffect, useState} from "react";

function ScrollToTOP(){
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 90 ? setScroll(true) : setScroll(false);
    })
  }, [])
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  return(
    <div>
    {scroll && (<button 
    onClick={() => scrollUp()}
    style={{
      position: "fixed",
      width: "47px",
      height: "47px",
      backgroundColor: "var(--color)",
      border: "none",
      borderRadius: "50%",
      right: "40px",
      bottom: "45px",
      boxShadow: "0 0 10px 1px rgb(226 207 174 / 68%) inset"
    }}
    ><i className="fa-solid fa-angle-up"
    style={{
      color: "white",
      fontSize: "25px",
    }}
    ></i></button>)}
    </div>
  )
}

export default ScrollToTOP;