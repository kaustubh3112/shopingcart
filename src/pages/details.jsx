import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../component/card";
import { CartContext } from "../Context/CartContext";
import Loader from "../component/Loader";

function Details() {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState({});
  const [similerProduct, setSimilerProduct] = useState("");
  const [similerProductList, setSimilerProductList] = useState([]);
  const useCart = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const productDetailsApi = async () => {
    try {
      setLoading(true);
      let response = await fetch(`https://fakestoreapi.com/products/${id}`);
      let data = await response.json();
      setProductDetails(data);

      let categoriesName = data.category;
      setSimilerProduct(categoriesName);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const similarCategoryApi = async () => {
    try {
      setLoading(true);
      if (similerProduct !== "") {
        let response = await fetch(
          `https://fakestoreapi.com/products/category/${similerProduct}`
        );
        let data = await response.json();
        setSimilerProductList(data);
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await productDetailsApi();
      await similarCategoryApi();
      setLoading(false);
    };
    fetchData();
  }, [id, similerProduct]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="flex grid-cols-2 max-w-[1440px] mx-auto items-center px-3 pt-20 pb-20">
            <div className="w-1/2 p-10 border rounded-md flex items-center justify-center">
              <img
                src={productDetails.image}
                alt={productDetails.title}
                className="max-h-[500px]"
              />
            </div>
            <div className="w-1/2 p-10">
              <h2 className="text-3xl font-bold leading-normal mb-4">
                {productDetails.title}
              </h2>
              <h3 className="text-lg font-semibold mb-2">
                <b className="font-semibold">Price : </b>Rs.
                {productDetails.price}
              </h3>
              <p className="text-md mb-5">
                <b className="font-semibold">Description :</b>{" "}
                {productDetails.description}
              </p>
              <button
                className="text-md bg-black text-white px-5 py-2 inline-block rounded-md"
                onClick={() => useCart.addToCarthandler(productDetails)}
              >
                Add to Cart
              </button>
            </div>
          </div>
          <div className="w-full max-w-[1440px] mx-auto mb-8">
            <h2 className="text-3xl font-bold leading-normal mb-4">
              Related Products
            </h2>
            <div className="grid grid-cols-3 gap-8">
              {similerProductList.slice(0, 3).map((item, index) => {
                return (
                  <Card
                    key={index}
                    img={item.image}
                    title={item.title.slice(0, 40)}
                    content={item.description.slice(0, 80) + "..."}
                    price={item.price}
                    href={`/products/details/${item.id}`}
                  />
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Details;
