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
import { MdAccountCircle } from "react-icons/md";

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  // console.log(cart, addToCart, removeFromCart, clearCart, subTotal);
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
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center my-2 md:shadow-gray md:shadow-xl sticky bg-white top-0 z-30">
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
      <div className="cart absolute right-0 top-2 mx-5 text-xl md:2xl cursor-pointer flex">
        <Link href={"/login"}>
          <MdAccountCircle className="text-xl md:text-2xl mx-2" />
        </Link>

        <AiOutlineShoppingCart
          onClick={toggleCart}
          className="text-xl md:text-2xl"
        />
      </div>
      <div
        ref={ref}
        className={`w-72 h-[100vh] sideCart absolute z-10 top-0 right-0 bg-white py-10 px-8 transition-transform ${
          Object.keys(cart).length !== 0 ? "translate-x-0" : "translate-x-full"
        } transform`}
      >
        <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-4 right-3 text-2xl text-pink-600 hover:text-pink-400 cursor-pointer"
        >
          <AiFillCloseCircle />
        </span>
        <ol className="list-decimal font-semibold">
          {Object.keys(cart).length == 0 && (
            <div className="my-4 font-semibold">Your Cart is empty!</div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="item flex my-5">
                  <div className="w-2/3 font-semibold">{cart[k].name}</div>
                  <div className="w-1/3 flex items-center justify-center font-semibold text-lg">
                    <AiFillMinusCircle
                      onClick={() => {
                        removeFromCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        );
                      }}
                      className="cursor-pointer text-pink-600 hover:text-pink-400"
                    />{" "}
                    <span className="mx-3 text-sm">{cart[k].qty}</span>
                    <AiFillPlusCircle
                      onClick={() => {
                        addToCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        );
                      }}
                      className="cursor-pointer text-pink-600 hover:text-pink-400"
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <div className="font-bold my-2">Subtotal : ₹{subTotal}</div>
        <div className="flex">
          <Link href={"/checkout"}>
            <button className="flex text-white mx-1 bg-pink-600 border-0 py-2 px-4 focus:outline-none hover:bg-pink-400 rounded text-sm">
              <BsFillBagCheckFill className="m-1" />
              Checkout
            </button>
          </Link>
          <button
            onClick={clearCart}
            className="flex text-white mx-1 bg-pink-600 border-0 py-2 px-4 focus:outline-none hover:bg-pink-400 rounded text-sm"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
