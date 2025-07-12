import React from "react";
import About from "../assets/about.png";
import Logo from "../assets/logo.png";
import Contact from "../assets/contact.png";
import Chef from "../assets/chef.png";
import Menu from "../assets/menu.png";
import Arrow from "../assets/arrow.png";
import Home from "../assets/home.png";

function Header() {
  return (
    <div>
      <div className="w-full h-full flex justify-between items-center bg-white p-4 bg-red-600">
        <div className="h-auto">
          <h1
            style={{ fontFamily: "Bubblegum Sans", cursive: "cursive" }}
            className="font-bold text-4xl h-auto"
          >
            HR-51
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <img className="w-6 h-6" src={Home} alt="" />
            <p
              style={{ fontFamily: "Bubblegum Sans", cursive: "cursive" }}
              className="text-lg"
            >
              Home
            </p>
          </div>
          <div>
            <img className="w-6 h-6" src={Menu} alt="" />
            <p
              style={{ fontFamily: "Bubblegum Sans", cursive: "cursive" }}
              className="text-lg"
            >
              Menu
            </p>
          </div>
          <div>
            <img className="w-6 h-6" src={About} alt="" />
            <p
              style={{ fontFamily: "Bubblegum Sans", cursive: "cursive" }}
              className="text-lg"
            >
              About us
            </p>
          </div>
          <div>
            <img className="w-6 h-6" src={Contact} alt="" />
            <p
              style={{ fontFamily: "Bubblegum Sans", cursive: "cursive" }}
              className="text-lg"
            >
              Contact
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
