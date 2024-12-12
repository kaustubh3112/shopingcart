import { useContext, useEffect, useState } from "react";
import Card from "../component/card";
import { Disclosure } from "@headlessui/react";
import {
  ChevronUpIcon,
  StarIcon,
  ListBulletIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import CardHorizontal from "../component/cardHorizontal";
function Product() {
  const [singleProduct, setSingleProduct] = useState([]);
  const [categoriesList, setcategoriesList] = useState([]);
  const [searchField, setSearchField] = useState(" ");
  const [productview, setProductview] = useState(false);
  const [loading, setLoading] = useState(false);

  // All Products
  const singleProductApi = async () => {
    try {
      let response = await fetch("https://fakestoreapi.com/products");
      let data = await response.json();
      setSingleProduct(data);
    } catch (error) {
      console.log(error, "API Not Working");
    }
  };

  // Categories List
  const Categories = async () => {
    try {
      let response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      let data = await response.json();
      setcategoriesList(data);
    } catch (error) {
      console.log(error, "API Not Working");
    }
  };

  // Category Sorting
  const CategoriesSorting = async (e) => {
    e?.preventDefault;
    let singleCategory = e.target.innerHTML;
    try {
      let response = await fetch(
        `https://fakestoreapi.com/products/category/${singleCategory}`
      );
      let data = await response.json();
      setSingleProduct(data);
    } catch (error) {
      console.log(error, "Api Not working");
    }
  };

  // Sort by Ascending & Desending
  const sortbyLabel = ["Asending", "Descending"];
  const SortBy = async (e) => {
    e.preventDefault();
    let sortingvalue = e.target.innerHTML;
    let sortingTrigger;

    if (sortingvalue === "Asending") {
      sortingTrigger = "asc";
    } else if (sortingvalue === "Descending") {
      sortingTrigger = "desc";
    }
    try {
      let response = await fetch(
        `https://fakestoreapi.com/products?sort=${sortingTrigger}`
      );
      let data = await response.json();
      setSingleProduct(data);
    } catch (error) {
      console.log(error, "Api Not working");
    }
  };

  // Search by Name
  const searchFieldHandler = async (e) => {
    let inputData = e.target.value;
    setSearchField(inputData);
  };

  const filteredPersons = singleProduct.filter((item) => {
    return item.title.toLowerCase().includes(searchField.toLowerCase());
  });

  useEffect(() => {
    singleProductApi();
    Categories();
  }, []);

  return (
    <div className="w-full max-w-[1440px] mx-auto py-20 px-5 flex  gap-12">
      <div className="basis-1/4">
        <div className="w-full">
          <SidebarFilter
            title="Category"
            content={
              <ul className="w-full">
                <li>
                  <Link
                    className="text-lg capitalize py-2 block"
                    onClick={singleProductApi}
                  >
                    All
                  </Link>
                </li>
                {categoriesList.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link
                        className="text-lg capitalize py-2 block"
                        onClick={CategoriesSorting}
                      >
                        {item}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            }
          />
          <SidebarFilter
            title="Sort By"
            content={
              <ul className="w-full ">
                {sortbyLabel.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link
                        key={index}
                        className="text-lg capitalize py-2 block"
                        onClick={SortBy}
                      >
                        {item}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            }
          />
          <SidebarFilter
            title="Price"
            content={
              <ul className="w-full ">
                <li>
                  <Link className="text-lg capitalize py-2 block">
                    High to low
                  </Link>
                </li>
                <li>
                  <Link className="text-lg capitalize py-2 block">
                    Low to High
                  </Link>
                </li>
              </ul>
            }
          />
          <SidebarFilter
            title="Rating"
            content={
              <ul className="w-full ">
                <li>
                  <Link className="text-lg capitalize py-2 inline-flex items-center group">
                    <StarIcon className="w-4 h-4 group-hover:text-yellow-400" />
                  </Link>
                </li>
                <li>
                  <Link className="text-lg capitalize py-2 inline-flex items-center group">
                    <StarIcon className="w-4 h-4 group-hover:text-yellow-400" />
                    <StarIcon className="w-4 h-4 group-hover:text-yellow-400" />
                  </Link>
                </li>
                <li>
                  <Link className="text-lg capitalize py-2 inline-flex items-center group">
                    <StarIcon className="w-4 h-4 group-hover:text-yellow-400" />
                    <StarIcon className="w-4 h-4 group-hover:text-yellow-400" />
                    <StarIcon className="w-4 h-4 group-hover:text-yellow-400" />
                  </Link>
                </li>
                <li>
                  <Link className="text-lg capitalize py-2 inline-flex items-center group">
                    <StarIcon className="w-4 h-4 group-hover:text-yellow-400" />
                    <StarIcon className="w-4 h-4 group-hover:text-yellow-400" />
                    <StarIcon className="w-4 h-4 group-hover:text-yellow-400" />
                    <StarIcon className="w-4 h-4 group-hover:text-yellow-400" />
                  </Link>
                </li>
                <li>
                  <Link className="text-lg capitalize py-2 inline-flex items-center group">
                    <StarIcon className="w-4 h-4 group-hover:text-yellow-400" />
                    <StarIcon className="w-4 h-4 group-hover:text-yellow-400" />
                    <StarIcon className="w-4 h-4 group-hover:text-yellow-400" />
                    <StarIcon className="w-4 h-4 group-hover:text-yellow-400" />
                    <StarIcon className="w-4 h-4 group-hover:text-yellow-400" />
                  </Link>
                </li>
              </ul>
            }
          />
        </div>
      </div>
      <div className=" basis-3/4">
        <div className="flex justify-between mb-5">
          <div className="basis-2/4">
            <input
              type="text"
              className="rounded-md border border-gray-300 px-5 py-3 w-full"
              placeholder="Search Product"
              value={searchField}
              onChange={searchFieldHandler}
            />
          </div>
          <div className=" overflow-hidden rounded-lg">
            <button
              className="p-3 bg-slate-200 hover:opacity-75 transition-all ease-in-out duration-300  border border-slate-300"
              onClick={() => setProductview(true)}
            >
              <ListBulletIcon className="w-6 h-6 text-slate-600" />
            </button>
            <button
              className="p-3 bg-slate-200 hover:opacity-75 transition-all ease-in-out duration-300  border border-slate-300"
              onClick={() => setProductview(false)}
            >
              <Squares2X2Icon className="w-6 h-6 text-slate-600" />
            </button>
          </div>
        </div>
        {!productview ? (
          <div className="grid grid-cols-3 gap-8">
            {filteredPersons?.map((item, index) => (
              <Card
                key={index}
                img={item.image}
                title={item.title.slice(0, 40)}
                content={item.description.slice(0, 80) + "..."}
                price={item.price}
                href={`/products/details/${item.id}`}
              />
            ))}
          </div>
        ) : (
          <div className="grid gap-8">
            {filteredPersons?.map((item, index) => (
              <CardHorizontal
                key={index}
                img={item.image}
                title={item.title.slice(0, 40)}
                content={item.description.slice(0, 150) + "..."}
                price={item.price}
                href={`/products/details/${item.id}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;

const SidebarFilter = ({ ...props }) => {
  return (
    <>
      <Disclosure defaultOpen={true}>
        {({ open }) => (
          <>
            <div className="w-full border border-slate-200 rounded-md mb-2">
              <Disclosure.Button className="py-4 px-6 flex w-full justify-between rounded-lg text-left text-lg font-medium">
                <span>{props.title}</span>
                <ChevronUpIcon
                  className={`${open ? "rotate-180 transform" : ""} h-7 w-7`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className=" py-4 px-6 text-sm text-gray-500 bg-slate-100">
                {props.content}
              </Disclosure.Panel>
            </div>
          </>
        )}
      </Disclosure>
    </>
  );
};

const Loader = () => {
  return (
    <div className="flex items-center justify-center fixed left-0 top-0 bg-black/80 z-50 w-full h-screen transition-all ease-in-out duration-1000">
      <h4 className="text-2xl text-white">Loading...</h4>
    </div>
  );
};
