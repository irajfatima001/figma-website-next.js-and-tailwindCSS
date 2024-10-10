
"use client";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import BackgroundImage from "/public/bg.jpg";

import Image from "next/image";
import Link from "next/link";
import { SetStateAction, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Lounge from "/public/set1.jpg";
import { FaShoppingCart } from "react-icons/fa";

// Import images directly from public folder
import livingImg from "/public/living.jpg";
import diningImg from "/public/dinning.jpg";
import bedroomImg from "/public/bedroom.jpg";
import kitchenImg from "/public/kitchen.jpg";
import officeImg from "/public/office.jpg";
import outdoorImg from "/public/outdoor.jpg";

// Import popular product images
import chair1Img from "/public/chair1.png";
import chair2Img from "/public/chair2.png";
import chair3Img from "/public/chair3.png";
import chair4Img from "/public/chair4.png";

import chair5Img from "/public/living.jpg";
import chair6Img from "/public/bedroom.jpg";
import chair7Img from "/public/dinning.jpg";

import Image1 from "/public/Group 27.png";
import Image2 from "/public/Group (1).png";
import Image3 from "/public/Group.png";
import Card2 from "/public/card2.jpg";
import Card3 from "/public/card3.jpg";
import Card1 from "/public/card1.jpg";

const categories = [
  { name: "Living Room", img: livingImg },
  { name: "Dining Room", img: diningImg },
  { name: "Bedroom", img: bedroomImg },
  { name: "Kitchen", img: kitchenImg },
  { name: "Office", img: officeImg },
  { name: "Outdoor", img: outdoorImg },
];

const popularProducts = [
  {
    id: 1,
    name: "Chair 1",
    image: chair1Img,
    price: "$199",
    description: "Comfortable  chair.",
    bgColor: "bg-teal-100",
  },
  {
    id: 2,
    name: "Chair 2",
    image: chair2Img,
    price: "$249",
    description: "Modern design chair.",
    bgColor: "bg-blue-100",
  },
  {
    id: 3,
    name: "Chair 3",
    image: chair3Img,
    price: "$179",
    description: "Ergonomic office chair.",
    bgColor: "bg-orange-100",
  },
  {
    id: 4,
    name: "Chair 4",
    image: chair4Img,
    price: "$299",
    description: "Stylish lounge chair.",
    bgColor: "bg-purple-100",
  },
];
const specialPackage = {
  name: "Larkin Wood Full Set",
  image: Lounge,
  price: "$499",
  rating: 4.5, // Example rating
  description:
    "Cast Aluminum Outdoor Chaise Lounge As an elegant and classic touch to your outdoor space, this cast Aluminum Chaise Lounge combines the appearance, function and quality all together, offering you with the best experience.",
  additionalItems: [
    {
      id: 1,
      name: "Living Room Family",
      image: chair5Img,
      price: "$199",
      rating: 4.7,
      description: "lorem ipsum....",
    },
    {
      id: 2,
      name: "Living Room Special Set",
      image: chair6Img,
      price: "$249",
      rating: 4.8,
      description: "lorem ipsum....",
    },
    {
      id: 3,
      name: "Living Room Special Set",
      image: chair7Img,
      price: "$29",
      rating: 4.5,
      description: "lorem ipsum....",
    },
  ],
};

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="bg-zinc-200">
      <Header />
      <div className="relative w-full  h-screen overflow-hidden ">
        
        <Image
          src={BackgroundImage}
          alt="Background Image"
          layout="fill"
          objectFit="cover" 
          className="absolute top-0 left-0 rounded-b-[20px] sm:rounded-b-[10px] md:rounded-b-[15px] lg:rounded-b-[20px]"
        />

        
        <div className="relative z-10 flex flex-col justify-center items-start h-full p-4 ml-10 bg-opacity-0 bg-silver-700">
          <h1 className="text-3xl md:text-5xl font-serif mb-4 text-left text-emerald-900">
            Exclusive Deals of
            <br /> Furniture Collection
          </h1>
          <p className="text-lg md:text-xl mb-6 text-left text-emerald-900 font-serif mt-5">
            Explore different categories. Find the best deals.
          </p>
          <Link href="/categories">
            <button
              className="flex items-center justify-center w-70 mt-5 bg-teal-200 text-white outline outline-2 outline-offset-2 px-6 py-2 rounded-lg transition duration-300 
        hover:bg-emerald-900 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 
        active:scale-95 active:ring-0 hover:shadow-emerald-700/50"
            >
              Shop Now
              <span className="ml-2">&#8594;</span>
            </button>
          </Link>
        </div>
      </div>

      <div className="text-4xl text-emerald-900 text-center font-bold font-serif p-4">
        Explore by Categories
      </div>
      <div className="flex flex-col md:flex-row p-8 ">
        {/* Left Column */}
        <div className="w-full md:w-1/3 space-y-7 ">
          <form onSubmit={handleSearchSubmit} className="relative mb-4">
            <FaSearch className="absolute left-3 top-2 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search "
              className="border border-gray-300 pl-10 pr-4 py-2 rounded-lg w-40"
            />
          </form>

          {categories.map((category, index) => (
            <div key={index} className="text-xl font-semibold pb-5 pt-5">
              {category.name}
            </div>
          ))}

          <Link href="/categories">
            <button
              className="items-center text-md underline p-2 mt-10 bg-teal-300 text-white outline outline-2 outline-offset-2 px-6 py-2 rounded-lg transition duration-300 
        hover:bg-emerald-900 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 
        active:scale-95 active:ring-0 hover:shadow-emerald-700/50 "
            >
              All Categories ---
            </button>
          </Link>
        </div>

        {/* Right Column */}
        <div className="grid grid-cols-2 gap-4  md:w-2/3 mt-4 md:mt-0">
          {categories.map((category, index) => (
            <div key={index} className="relative group overflow-hidden">
              <Image
                src={category.img}
                alt={category.name}
                width={100}
                height={100}
                className="object-cover w-full h-full" // Ensure the image takes full width and height
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg">{category.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-4xl text-emerald-900 text-center font-bold font-serif p-4">
        Popular Products
      </div>
      <div className="relative py-5 bg-cover bg-center">
        <div className="relative">
          <div className="flex flex-wrap flex-col-4 justify-center items-start gap-10">
            {popularProducts.map((product) => (
              <div
                key={product.id}
                className={`${product.bgColor} rounded-lg w-48   flex-shrink-0 p-4 transition-transform duration-300`}
              >
                <div>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={190}
                    height={190}
                    className="m-auto object-cover h-64 w-full transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="pt-4">
                  <h3 className="text-lg font-semibold text-emerald-900">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-700">{product.description}</p>
                  <p className="text-xl font-bold text-teal-500">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <hr className="border-t-4 border-teal-900 my-6  mx-20"></hr>

          <div className="flex justify-center items-center ">
            <Link href="/products">
              <button
                className=" items-center text-md underline p-2 m-10 bg-teal-300 text-white outline outline-2 outline-offset-2 px-6 py-2 rounded-lg transition duration-300 
        hover:bg-emerald-900 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 
        active:scale-95 active:ring-0 hover:shadow-emerald-700/50 "
              >
                Explore all items ---
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="text-4xl text-emerald-900 text-center font-bold font-serif p-4">
        Special Package
      </div>
      <div className="flex flex-col md:flex-row p-6 bg-gray-100 rounded-lg shadow-lg">
        {/* Left Side */}
        <div className="md:w-1/2 pl-10 ">
          <Image
            src={specialPackage.image}
            alt={specialPackage.name}
            width={400}
            height={300}
            className="rounded-lg object-cover mt-5"
          />
          <h3 className="text-xl font-semibold text-emerald-900 mt-3">
            {specialPackage.name}
          </h3>
          <p className="text-xl mt-3 font-bold text-teal-500">
            {specialPackage.price}
          </p>
          <div className="flex items-center mt-1">
            {/* Render star rating */}
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={
                  index < specialPackage.rating
                    ? "text-yellow-500"
                    : "text-gray-400"
                }
              >
                ★
              </span>
            ))}
          </div>
          <button className="mt-3 bg-teal-500 text-white rounded-lg px-2 py-2 hover:bg-teal-600 transition">
            <FaShoppingCart className="mr-2" />
            Add to Cart
          </button>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 p-3">
          <h1 className="text-teal-900 text-xl font-bold font-serif">
            Description
          </h1>
          <p className="text-md text-gray-700 mb-4">
            {specialPackage.description}
          </p>

          {/* See More Button */}
          <Link href="/products" passHref>
            <button className="text-teal-500 underline mb-4">See More</button>
          </Link>

          <div className="flex flex-col space-y-4">
            {specialPackage.additionalItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg p-2 shadow flex items-center"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={200}
                  height={150}
                  className="rounded-lg mr-2 object-cover"
                />
                <div className="flex flex-col">
                  <h4 className="text-md font-semibold text-emerald-900">
                    {item.name}
                  </h4>
                  <p className="text-sm font-bold text-teal-500">
                    {item.description}
                  </p>
                  <p className="text-sm font-bold text-teal-500">
                    {item.price}
                  </p>
                  <div className="flex items-center">
                    {/* Render star rating */}
                    {[...Array(5)].map((_, index) => (
                      <span
                        key={index}
                        className={
                          index < item.rating
                            ? "text-yellow-500"
                            : "text-gray-400"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <Link href="/products" passHref>
                    <button className="text-teal-500 underline mb-4">
                      See More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="bg-gray-200 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
            {/* Card 1 */}
            <div className=" rounded-lg shadow-lg overflow-hidden relative group bg-teal-500">
              <h1 className="text-2xl font-bold font-serif flex items-center justify-center mt-20">
                Our
              </h1>
              <h2 className="text-2xl font-bold font-serif flex items-center justify-center mt-4">
                Own Creation
              </h2>
              <p className="text-sm  font-serif flex items-center justify-center mt-3">
                Design in our studio
              </p>
              <div className="flex items-center mx-20 my-6">
                <span>more</span>
                <hr className="border-t-4 border-teal-900 rounded flex-grow mx-2" />
                
              </div>
              
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-teal-500 text-white py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Explore All Rooms
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden relative group">
              <Image
                src={Card2} 
                alt="Featured Item 2"
                width={300}
                height={200}
                className="w-full h-80 object-cover"
              />
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-teal-500 text-white py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Explore All Rooms
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden relative group">
              <Image
                src={Card3} 
                alt="Featured Item 3"
                width={300}
                height={200}
                className="w-full h-80 object-cover"
              />
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-teal-500 text-white py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Explore All Rooms
              </button>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden relative group">
              <Image
                src={Card1} // Replace with your image path
                alt="Featured Item 4"
                width={300}
                height={200}
                className="w-full h-80 object-cover"
              />
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-teal-500 text-white py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Explore All Rooms
              </button>
            </div>
          </div>
        </div>

        <div className="bg-sky-200 p-10">
          <div className="text-4xl text-emerald-900 text-center font-bold font-serif p-6">
            Benefits for your expediency
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-10 font-thin">
            {/* Benefit 1 */}
            <div className="flex flex-col items-center">
              <Image
                src={Image1}
                alt="payment method"
                className="h-12 w-12 bg-purple-100 border rounded-xl p-2"
              />
              <h3 className="text-xl p-5 font-semibold">Payment Method</h3>
              <p className="text-sm p-1 text-center">
                We offer flexible payment <br />
                options, to make easier.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="flex flex-col items-center">
              <Image
                src={Image2}
                alt="Return policy"
                className="h-12 w-12 bg-purple-100 border rounded-xl p-2"
              />
              <h3 className="text-xl p-5 font-semibold">Return Policy</h3>
              <p className="text-sm p-1 text-center">
                You can return a product <br />
                within 30 days.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="flex flex-col items-center">
              <Image
                src={Image3}
                alt="customer support"
                className="h-12 w-12 bg-orange-100 border rounded-xl p-2"
              />
              <h3 className="text-xl p-5 font-semibold">Customer Support</h3>
              <p className="text-sm p-1 text-center">
                Our customer support <br />
                is 24/7.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center m-10">
          <h1 className="font-bold text-3xl">Testimonials</h1>
          <h2 className="m-5">Over 15,000 happy customers.</h2>
        </div>

        <section className="flex flex-col md:flex-row gap-4 items-center m-10 ">
          {/* Left Side - Image */}
          <div className="flex-1">
            <Image
              src="/test.jpg"
              alt="test"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>

          {/* Right Side - Text */}
          <div className="flex-1">
            <p className="text-xl font-semibold text-teal-900 mt-5 md:mt-0 md:ml-5 lg:ml-6 md:mr-2 ">
              “My experience with Mark is a complete <br /> success, from
              customer service, wide range of <br />
              products, clean store, purchasing experience, <br /> the
              newsletter. Thank you.”
            </p>
            <p className="text-teal-900 mt-6  ml-6 font-bold">Leona Paul</p>
            <p className="text-teal-900  ml-6">CEO of Floatcom</p>
          </div>
        </section>
        <hr className="border-t-4 border-teal-900 my-6  mx-20"></hr>
      </div>
      <section className="flex flex-col lg:flex-row mt-20">
        {/* Left Side - Image */}
        <div className="flex-1">
          <Image
            src="/living.jpg"
            alt="test"
            width={500}
            height={500}
            className="w-full h-auto " // Ensures responsive height and adds a rounded corner
          />
        </div>

        {/* Right Side - Newsletter Form */}
        <div className="flex-1 bg-teal-100 flex flex-col justify-center p-6">
          <p className="text-2xl font-semibold font-serif text-teal-900 mb-4">
            Join Our
          </p>
          <p className="text-teal-900 text-3xl font-bold font-serif mb-4">
            Newsletter
          </p>
          <p className="text-teal-900 mb-4">
            Receive exclusive deals, discounts, and many offers.
          </p>
          <p className="text-gray-500 mb-6">Enter Your Email</p>
          <div className="flex">
            <button className="bg-teal-500 text-white py-2 px-4 mt-4">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
