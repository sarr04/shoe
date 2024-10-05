import { BiShoppingBag } from "react-icons/bi";
import { useState } from "react";
// @ts-ignore
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];

export function Nav() {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);
  return (
    <nav className=" relative z-10  flex flex-wrap items-center justify-between">
      <a href="#">
        <NikeLogo className="h-20 w-20" />
      </a>
      <button
        onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
        className=" lg:hidden p-2 focus:ring-2 focus:ring-gray-200 rounded-lg"
      >
        <RxHamburgerMenu size={25} />
      </button>
      <div
        className={`${
          !isMobileMenuShown && "hidden"
        } w-full lg:w-auto lg:block`}
      >
        <ul className="lg:space-x-8 flex flex-col lg:flex-row bg-gray-50 lg:border-none text-lg border border-gray-50  p-4 rounded-lg ">
          {ROUTES.map((route, i) => {
            return (
              <li
                className={`lg:hover:text-blue-500 lg:hover:bg-transparent rounded cursor-pointer py-2 px-3 ${
                  i === 0
                    ? "bg-blue-500 text-white  lg:text-blue-500"
                    : "hover:bg-gray-500"
                }${(i == 3 || i == 4) && "lg:text-white"}`}
                key={route}
              >
                <a> {route}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="btn-press-anim fixed left-4 bottom-4 lg:static lg:mr-8">
        <div className="flex-center  h-12 w-12 cursor-pointer rounded-full bg-white shadow-md">
          <BiShoppingBag />
        </div>
      </div>
    </nav>
  );
}
