import React, { useRef, useState } from "react";
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

const Navbar = ({
  logout,
  user,
  cart,
  addToCart,
  removeFromCart,
  clearCart,
  subTotal,
}) => {
  // console.log(cart, addToCart, removeFromCart, clearCart, subTotal);

  const [dropDown, setDropDown] = useState(false);
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
      <div className="logo mr-auto md:mx-5 mb-2 md:mb-0">
        <Link href={"/"}>
          <Image
            className="hover:text-pink-600"
            width={200}
            height={60}
            src="/logo.png"
            alt=""
          />
        </Link>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-4 font-bold text-sm md:text-md">
          <Link href={"/tshirts"}>
            <li className="hover:text-pink-600">TShirts</li>
          </Link>
          <Link href={"/hoodies"}>
            <li className="hover:text-pink-600">Hoodies</li>
          </Link>
          <Link href={"/stickers"}>
            <li className="hover:text-pink-600">Stickers</li>
          </Link>
          <Link href={"/mugs"}>
            <li className="hover:text-pink-600">Mugs</li>
          </Link>
        </ul>
      </div>
      <div className="cart items-center absolute right-0 top-2 mx-5 text-xl md:2xl cursor-pointer flex ">
        <a
          onMouseOver={() => {
            setDropDown(true);
          }}
          onMouseLeave={() => {
            setDropDown(false);
          }}
        >
          {dropDown && (
            <div
              onClick={() => {
                setDropDown(true);
              }}
              onMouseOver={() => {
                setDropDown(true);
              }}
              onMouseLeave={() => {
                setDropDown(false);
              }}
              className="absolute right-8 bg-white shadow-lg border top-5 rounded-md px-5 py-2 w-32"
            >
              <ul>
                <Link href={"/myaccount"}>
                  <li className="py-1 text-sm hover:text-pink-600 font-bold ">
                    My Account
                  </li>
                </Link>
                <Link href={"/orders"}>
                  <li className="py-1 text-sm hover:text-pink-600 font-bold ">
                    Orders
                  </li>
                </Link>
                <li
                  onClick={logout}
                  className="py-1 text-sm font-bold  hover:text-pink-600"
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
          {user.value && (
            <MdAccountCircle className="text-xl md:text-2xl mx-2 hover:text-pink-600" />
          )}
        </a>
        {!user.value && (
          <Link href={"/login"}>
            <button className="bg-pink-600 px-2 py-1 rounded-md text-sm text-white mx-2">
              Login
            </button>
          </Link>
        )}

        <AiOutlineShoppingCart
          onClick={toggleCart}
          className="text-xl md:text-2xl hover:text-pink-600"
        />
      </div>

      <div
        ref={ref}
        className={`w-100 h-[100vh] sideCart absolute z-10 top-0 overflow-y-scroll right-0 bg-pink-100 py-10 px-8 transition-transform ${
          Object.keys(cart).length !== 0 ? "translate-x-0" : "translate-x-full"
        } transform`}
      >
        <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-4 right-3 text-2xl text-pink-600 hover:text-pink-400 cursor-pointer "
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
                  <div className="w-2/3 font-semibold">
                    {cart[k].name}({cart[k].size}/{cart[k].variant})
                  </div>
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
