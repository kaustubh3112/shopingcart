import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { useFireBase } from "../Context/Firebase";
import { getAuth, signOut } from "firebase/auth";
function Navbar() {
  let useCart = useContext(CartContext);
  const fireBase = useFireBase();
  const auth = getAuth();

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
          Cart ({useCart.cartList.length > 0 ? useCart.cartList.length : 0})
        </Link>
      </li>
      {fireBase.isLoggedIn ? (
        <li className="me-5">
          {auth.currentUser?.email}
          <button
            onClick={handleSignOut}
            className="text-lg text-gray-700"
            to="/contact"
          >
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
