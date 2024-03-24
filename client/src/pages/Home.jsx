import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center mt-auto px-6">
        <div className="lg:w-1/2">
          <h1 className="text-lg leading-8 md:text-2xl md:leading-10 selection:bg-accentBlack">
            <span className="text-xl md:text-3xl"> Welcome to Share pad, </span>
            <br /> your ultimate platform for seamless notes and blog sharing.
            With our intuitive Markdown editor, crafting and sharing your
            thoughts has never been easier. Join our community today and unleash
            your creativity!
          </h1>
          <Link
            to="/draft"
            onClick={(e) => {
              e.preventDefault();
              navigate("/draft");
            }}
          >
            <button
              type="button"
              className="my-3 border border-accentBlack px-2 py-1 rounded"
            >
              Time to
              <span className="text-accentBlue font-bold mx-1">Markdown</span>
              notes{" "}
            </button>
          </Link>
        </div>
        <div className="lg:w-1/2">
          <img
            className="object-contain w-10/12 block mx-auto lg:ml-auto"
            src="/hero-image.svg"
            alt="stack-of-books"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
