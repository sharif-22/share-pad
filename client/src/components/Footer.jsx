import React from "react";

const Footer = () => {
  return (
    <div className="mt-auto bg-secondaryBlack">
      <footer className="container py-3 flex flex-col md:flex-row justify-between text-xs">
        <p className="px-3">
          Made with ❤ by
          <a
            className="hover:text-blue-500 hover:underline mx-1"
            href="https://github.com/sharif-22"
            target="_blank"
          >
            Sharif
          </a>
          checkout
          <a
            className="hover:text-blue-500 hover:underline mx-1"
            href="https://github.com/sharif-22/share-pad"
            target="_blank"
          >
            Share pad
          </a>
          for contribution
        </p>
        <p className="px-3">
          Copyright {new Date().getFullYear()} - All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
