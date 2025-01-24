import React, { useEffect, useState } from "react";
import Card from "../component/card";
import HeroSection from "../component/heroSection";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { config } from "../utils/config";
import Loader from "../component/Loader";
function Home() {
  const [singleProduct, setSingleProduct] = useState([]);
  const [heroSectionProduct, setHeroSectionProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const BaseUrl = config.BASE_URL;

  const HeroSliderContent = async () => {
    try {
      setLoading(true);
      let response = await fetch("https://fakestoreapi.com/products?limit=3");
      let data = await response.json();
      setHeroSectionProduct(data);
    } catch (error) {
      console.log(error, "Slider data not rendered");
    } finally {
      setLoading(false);
      console.log("api is working");
    }
  };

  const singleProductApi = async () => {
    try {
      setLoading(true);
      let response = await fetch("https://fakestoreapi.com/products");
      let data = await response.json();
      setSingleProduct(data);
    } catch (error) {
      console.log(error, "API Not Working");
    } finally {
      setLoading(false);
      console.warn("All Product loaded");
    }
  };

  var sliderSettings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    arrows: false,
  };

  useEffect(() => {
    singleProductApi();
    HeroSliderContent();
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="w-full">
            <div className="w-full max-w-[1440px] mx-auto">
              <Slider {...sliderSettings}>
                {heroSectionProduct.map((item, index) => (
                  <HeroSection
                    key={index}
                    title={item.title.slice(0, 50)}
                    description={item.description.slice(0, 150)}
                    image={item.image}
                    link={`/products/details/${item.id}`}
                  />
                ))}
              </Slider>
            </div>
          </div>
          <div className="w-full max-w-[1440px] mx-auto pt-20 pb-20 ">
            <div className="grid grid-cols-4 grid-cols-md-1 gap-8">
              {singleProduct?.slice(0, 12).map((item, index) => (
                <Card
                  key={index}
                  img={item.image}
                  title={item.title.slice(0, 40)}
                  price={item.price}
                  href={`/products/details/${item.id}`}
                />
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                to="/products"
                className="px-8 py-3 bg-[#FC3A7A] hover:bg-black inline-block text-white rounded-md  transition-all ease-in-out duration-500"
              >
                View all Product
              </Link>
            </div>
          </div>
        </>
      )}
    </React.Fragment>
  );
}

export default Home;
