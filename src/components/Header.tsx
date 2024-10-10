"use client";
import { useState } from "react";
import Link from "next/link";
import { FaHamburger } from "react-icons/fa";
import Image from "next/image";
import Cart from "/public/cart.png";
import User from "/public/user.png";
import Search from "/public/search.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsOpen(false); 
  };

  return (
    <header className="absolute top-0 left-0 w-full z-20 bg-transparent">
      <nav className="flex justify-between items-center p-4 font-serif">
        <div className="text-2xl font-bold">
          <Link href="/">
            <Image src="/Logo.png" alt="logo" width={100} height={100}/>
          </Link>
        </div>

        <div className="hidden md:flex space-x-5">
          <Link href="/" onClick={handleLinkClick}>Home</Link>
          <Link href="/about" onClick={handleLinkClick}>About</Link>
          <Link href="/products" onClick={handleLinkClick}>Products</Link>
          <Link href="/categories" onClick={handleLinkClick}>Categories</Link>
          <Link href="/contact" onClick={handleLinkClick}>Contact</Link>
        </div>

        <div className="flex items-center space-x-4 pr-20">
          <Link href="#">
            <Image src={Search} alt="Search" className="sm:w-2 sm:h-2 lg:w-6 lg:h-6 md:w-4 md:h-4 " />
          </Link>
          <Link href="#">
            <Image src={User} alt="User" className="sm:w-2 sm:h-2 lg:w-6 lg:h-6 md:w-4 md:h-4 " />
          </Link>
          <Link href="#">
            <Image src={Cart} alt="Cart" className="sm:w-2 sm:h-2 lg:w-6 lg:h-6 md:w-4 md:h-4 " />
          </Link>
        </div>

        <button onClick={toggleMenu} className="md:hidden">
          <FaHamburger className="text-2xl" />
        </button>
      </nav>

      {isOpen && (
        <div className="absolute top-16 right-0 bg-white shadow-lg p-4 md:hidden z-10">
          <Link href="/" className="block py-2" onClick={handleLinkClick}>
            Home
          </Link>
          <Link href="/about" className="block py-2" onClick={handleLinkClick}>
            About
          </Link>
          <Link href="/products" className="block py-2" onClick={handleLinkClick}>
            Products
          </Link>
          <Link href="/categories" className="block py-2" onClick={handleLinkClick}>
            Categories
          </Link>
          <Link href="/contact" className="block py-2" onClick={handleLinkClick}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
