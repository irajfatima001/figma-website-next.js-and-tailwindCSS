

import Image from "next/image";
import { FaStar } from "react-icons/fa"; // For star ratings
import Header from "../../components/Header";
import Footer from "@/components/Footer";
import j6 from "/public/sofa2.jpg";
import j7 from "/public/sofa6.jpg";
import j8 from "/public/sofa4.jpg";
import j9 from "/public/sofa5.jpg";
import j27 from "/public/chair7.jpg";
import j11 from "/public/chair8.jpg";
import j18 from "/public/chair10.jpg";
import j19 from "/public/chair11.jpg";
import j14 from "/public/table2.jpg";
import j15 from "/public/table3.jpg";
import j16 from "/public/table4.jpg";
import j17 from "/public/table5.jpg";
import k2 from "/public/k2.jpg";
import k3 from "/public/k3.jpg";
import k4 from "/public/k4.jpg";
import k5 from "/public/k5.jpg";
import o2 from "/public/o2.jpg";
import o3 from "/public/o3.jpg";
import o4 from "/public/o4.jpg";
import o5 from "/public/o5.jpg";
import d2 from "/public/d2.jpg";
import d3 from "/public/d3.jpg";
import d4 from "/public/d4.jpg";
import d5 from "/public/d5.jpg";

const products = [
  {
    id: 1,
    title: "Product 1",
    description: "A stylish modern sofa.",
    price: "$29.99",
    rating: 4.5,
    image: j6,
    discount: 10,
  },
  {
    id: 2,
    title: "Product 2",
    description: "A classic and comfortable sofa",
    price: "$39.99",
    rating: 4.0,
    image: j7,
  },
  {
    id: 3,
    title: "Product 3",
    description: "Elegant dining chair.",
    price: "$49.99",
    rating: 5.0,
    image: j8,
    discount: 15,
  },
  {
    id: 4,
    title: "Product 4",
    description: "Ergonomic office chair.",
    price: "$59.99",
    rating: 4.2,
    image: j9,
  },
  {
    id: 5,
    title: "Product 5",
    description: "Stylish coffee table.",
    price: "$59.99",
    rating: 4.8,
    image: j27,
  },
  {
    id: 6,
    title: "Product 6",
    description: "Large dining table.",
    price: "$59.99",
    rating: 4.1,
    image: j11,
  },
  {
    id: 7,
    title: "Product 7",
    description: "Luxurious king-size bed.",
    price: "$59.99",
    rating: 4.9,
    image: j18,
  },
  {
    id: 8,
    title: "Product 8",
    description: "Cozy queen-size bed.",
    price: "$59.99",
    rating: 4.3,
    image: j19,
  },
  {
    id: 9,
    title: "Product 9",
    description: "Cozy queen-size bed.",
    price: "$59.99",
    rating: 4.6,
    image: j14,
  },
  {
    id: 10,
    title: "Product 10",
    description: "Cozy queen-size bed.",
    price: "$59.99",
    rating: 4.5,
    image: j15,
  },
  {
    id: 11,
    title: "Product 11",
    description: "Cozy queen-size bed.",
    price: "$59.99",
    rating: 4.0,
    image: j16,
  },
  {
    id: 12,
    title: "Product 12",
    description: "Cozy queen-size bed.",
    price: "$59.99",
    rating: 4.7,
    image: j17,
  },
  {
    id: 13,
    title: "Product 12",
    description: "Cozy queen-size bed.",
    price: "$59.99",
    rating: 4.7,
    image: k2,
  },
  {
    id: 14,
    title: "Product 12",
    description: "Cozy queen-size bed.",
    price: "$59.99",
    rating: 4.7,
    image: k3,
  },
  {
    id: 15,
    title: "Product 12",
    description: "Cozy queen-size bed.",
    price: "$59.99",
    rating: 4.7,
    image: k4,
  },
  {
    id: 16,
    title: "Product 12",
    description: "Cozy queen-size bed.",
    price: "$59.99",
    rating: 4.7,
    image: k5,
  },
  {
    id: 17,
    title: "Product 12",
    description: "Cozy queen-size bed.",
    price: "$59.99",
    rating: 4.7,
    image: o2,
  },
  {
    id: 18,
    title: "Product 12",
    description: "Cozy queen-size bed.",
    price: "$59.99",
    rating: 4.7,
    image: o3,
  },
  {
    id: 19,
    title: "Product 12",
    description: "Cozy queen-size bed.",
    price: "$59.99",
    rating: 4.7,
    image: o4,
  },
  {
    id: 20,
    title: "Product 12",
    description: "Cozy queen-size bed.",
    price: "$59.99",
    rating: 4.7,
    image: o5,
  },
  {
    id: 21,
    title: "Product 12",
    description: "Cozy queen-size bed.",
    price: "$59.99",
    rating: 4.7,
    image: d2,
  },
  {
    id: 22,
    title: "Product 12",
    description: "Cozy queen-size bed.",
    price: "$59.99",
    rating: 4.7,
    image: d3,
  },
  {
    id: 23,
    title: "Product 12",
    description: "Cozy queen-size bed.",
    price: "$59.99",
    rating: 4.7,
    image: d4,
  },
  {
    id: 24,
    title: "Product 12",
    description: "Cozy queen-size bed.",
    price: "$59.99",
    rating: 4.7,
    image: d5,
  },
];

const ProductsPage = () => {
  return (
    <div className="bg-gray-200  pt-20">
      <Header />

      <div className="flex flex-wrap justify-center items-start min-h-screen p-6 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative h-auto w-64 bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            {product.discount && (
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                {product.discount}% Off
              </span>
            )}
            <Image
              src={product.image}
              alt={product.title}
              width={250}
              height={250}
              className="m-auto object-cover h-64 w-full transition-transform duration-300 hover:scale-110"
            />
            <div className="bg-zinc-400 text-black p-4 transition-colors duration-300 hover:bg-teal-600">
              <h1 className="text-xl font-bold font-serif">{product.title}</h1>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={`h-5 w-5 ${
                      index < product.rating
                        ? "text-yellow-500"
                        : "text-gray-400"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm font-serif">{product.description}</p>
              <p className="text-xl font-semibold font-serif">
                {product.price}
              </p>
              <button className="w-full bg-teal-700 text-white outline outline-2 outline-offset-2 px-4 py-2 mt-2 rounded-lg transition duration-300 hover:bg-slate-600 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 active:scale-95 active:ring-0 hover:shadow-teal-700/50">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};
export default ProductsPage;
