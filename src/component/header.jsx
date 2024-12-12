import { Link } from "react-router-dom";
import Navbar from "./navbar";
import logo from "./../assets/Images/logo.svg";
const Header = () => {
  return (
    <div className="w-full p-5 shadow-md fixed top-0 left-0 bg-white z-50">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between ">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" className="max-h-[50px]" />{" "}
          </Link>
        </div>
        <div>
          <Navbar />
        </div>
      </div>
    </div>
  );
};
export default Header;
