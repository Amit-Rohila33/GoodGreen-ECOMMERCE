import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiFillCloseCircle,
  AiOutlineShoppingCart,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";

import { BsFillBagCheckFill } from "react-icons/bs";

const Navbar = () => {
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  const ref = useRef();
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center my-2 md:shadow-gray md:shadow-xl">
      <div className="logo mx-5 mb-2 md:mb-0">
        <Link href={"/"}>
          <Image width={200} height={60} src="/logo.png" alt="" />
        </Link>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-4 font-bold text-sm md:text-md">
          <Link href={"/tshirts"}>
            <li>TShirts</li>
          </Link>
          <Link href={"/hoodies"}>
            <li>Hoodies</li>
          </Link>
          <Link href={"/stickers"}>
            <li>Stickers</li>
          </Link>
          <Link href={"/mugs"}>
            <li>Mugs</li>
          </Link>
        </ul>
      </div>
      <div
        onClick={toggleCart}
        className="cart absolute right-0 top-2 mx-5 text-xl md:2xl cursor-pointer"
      >
        <AiOutlineShoppingCart />
      </div>
      <div
        ref={ref}
        className="w-72 h-full sideCart absolute z-10 top-0 right-0 bg-pink-100 py-10 px-8 transition-transform translate-x-full transform"
      >
        <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-4 right-3 text-2xl text-pink-600 hover:text-pink-400 cursor-pointer"
        >
          <AiFillCloseCircle />
        </span>
        <ol className="list-decimal font-semibold">
          <li>
            <div className="item flex my-5">
              <div className="w-2/3 font-semibold">
                T-shirt - The green for life
              </div>
              <div className="w-1/3 flex items-center justify-center font-semibold text-lg">
                <AiFillMinusCircle className="cursor-pointer text-pink-600 hover:text-pink-400" />{" "}
                <span className="mx-3 text-sm">1</span>
                <AiFillPlusCircle className="cursor-pointer text-pink-600 hover:text-pink-400" />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className="w-2/3 font-semibold">
                T-shirt - The green for life
              </div>
              <div className="w-1/3 flex items-center justify-center font-semibold text-lg">
                <AiFillMinusCircle className="cursor-pointer text-pink-600 hover:text-pink-400" />{" "}
                <span className="mx-3 text-sm">1</span>
                <AiFillPlusCircle className="cursor-pointer text-pink-600 hover:text-pink-400" />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className="w-2/3 font-semibold">
                T-shirt - The green for life
              </div>
              <div className="w-1/3 flex items-center justify-center font-semibold text-lg ">
                <AiFillMinusCircle className="cursor-pointer text-pink-600 hover:text-pink-400" />{" "}
                <span className="mx-3 text-sm">1</span>
                <AiFillPlusCircle className="cursor-pointer text-pink-600 hover:text-pink-400" />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className="w-2/3 font-semibold">
                T-shirt - The green for life
              </div>
              <div className="w-1/3 flex items-center justify-center font-semibold text-lg">
                <AiFillMinusCircle className="cursor-pointer text-pink-600 hover:text-pink-400" />{" "}
                <span className="mx-3 text-sm">1</span>
                <AiFillPlusCircle className="cursor-pointer text-pink-600 hover:text-pink-400" />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className="w-2/3 font-semibold">
                T-shirt - The green for life
              </div>
              <div className="w-1/3 flex items-center justify-center font-semibold text-lg">
                <AiFillMinusCircle className="cursor-pointer text-pink-600 hover:text-pink-400" />{" "}
                <span className="mx-3 text-sm">1</span>
                <AiFillPlusCircle className="cursor-pointer text-pink-600 hover:text-pink-400" />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className="w-2/3 font-semibold">
                T-shirt - The green for life
              </div>
              <div className="w-1/3 flex items-center justify-center font-semibold text-lg">
                <AiFillMinusCircle className="cursor-pointer text-pink-600 hover:text-pink-400" />{" "}
                <span className="mx-3 text-sm">1</span>
                <AiFillPlusCircle className="cursor-pointer text-pink-600 hover:text-pink-400" />
              </div>
            </div>
          </li>
        </ol>
        <div className="flex">
          <button class="flex text-white mx-1 bg-pink-600 border-0 py-2 px-4 focus:outline-none hover:bg-pink-400 rounded text-sm">
            <BsFillBagCheckFill className="m-1" />
            Checkout
          </button>
          <button class="flex text-white mx-1 bg-pink-600 border-0 py-2 px-4 focus:outline-none hover:bg-pink-400 rounded text-sm">
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
