import { useContext } from "react";
import { Link } from "react-router-dom";
import { useFireBase } from "../Context/Firebase";
import { getAuth, signOut } from "firebase/auth";
import { CartContext } from "../Context/CartContext";

function Navbar() {
  const fireBase = useFireBase();
  const auth = getAuth();
  const { count } = useContext(CartContext);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => {
        console.error("Sign out error:", error.code);
      });
  };

  return (
    <ul className="flex items-center">
      <li className="me-5">
        <Link className="text-lg text-gray-700" to="/">
          Home
        </Link>
      </li>
      <li className="me-5">
        <Link className="text-lg text-gray-700" to="/products">
          Product
        </Link>
      </li>
      <li className="me-5">
        <Link to="/cart" className="text-lg text-gray-700">
          Cart ({count})
        </Link>
      </li>
      {fireBase.isLoggedIn ? (
        <li className="me-5">
          {auth.currentUser?.email || "Guest"}
          <button onClick={handleSignOut} className="text-lg text-gray-700">
            Logout
          </button>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
}

export default Navbar;
