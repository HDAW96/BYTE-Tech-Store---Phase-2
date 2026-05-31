import "../fontawesome/css/fontawesome.min.css";
import "../css/Footer.css";
import Logo from "../assets/BYTE_Logo_1-removebg-preview (1).png";

function Footer() {
  return(
  <>
    <div className="bottombar md:flex-row flex-col gap-10 flex-wrap justify-center items-center w-full">
      <div className="b-logo">
        <img src={Logo} alt="LOGO" className="bottom-logo sm:w-32 md:w-48"></img>
      </div>
      <div className="copyright" style={{ borderTop: "1px solid white" }}>
        <h3>&copy;2026. Made by Hadi Awad.</h3>
      </div>
      <div className="info">
        <h3>Information</h3>
        <p>
          <i className="fa-solid fa-location-dot"></i>Location: 123 Street, 23
          Building
        </p>
        <p>
          <i className="fa-solid fa-envelope"></i>Email: awadhadi54@gmail.com
        </p>
        <p>
          <i className="fa-solid fa-phone"></i>Contact Us: +961 76-553016
        </p>
      </div>
    </div>
  </>
  )
}
export default Footer;
