import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="bg-secondaryBlack w-full px-2 py-4">
        <nav className="container">
          <ol>
            <li>
              <Link
                to="/"
                className="text-2xl group hover:text-blue-600 duration-300"
              >
                {" "}
                <img
                  src="/book.png"
                  alt="logo"
                  className="size-12 inline-block mr-1 group-hover:animate-swing"
                />{" "}
                Share pad{" "}
              </Link>
            </li>
          </ol>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
