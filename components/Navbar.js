import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
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
      <div className="cart absolute right-0 top-2 mx-5 text-xl md:2xl">
        <AiOutlineShoppingCart />
      </div>
    </div>
  );
};

export default Navbar;
