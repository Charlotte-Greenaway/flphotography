import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav className="w-full sticky top-0 border bg-white/30 backdrop-blur-lg shadow-lg hidden md:block z-5">
        <ul className="flex flex-row items-center  p-2 justify-between w-3/4 mx-auto">
          <li className="montserrat hover:text-slate-500 2xl:text-2xl 3xl:text-4xl">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-2 montserrat hover:text-slate-500 2xl:text-2xl 3xl:text-4xl">
            <Link to="/gallery">Gallery</Link>
          </li>

          <li className="flex-grow-0 flex-shrink-0 mx-2 ">
            <div className="border bg-black p-4 relative bottom-[-1em] border-white">
              <h1 className="parisienne text-white text-3xl 2xl:text-4xl 3xl:text-5xl">First Look</h1>
            </div>
          </li>

          <li className="mx-2 montserrat hover:text-slate-500 2xl:text-2xl 3xl:text-4xl">
            <Link to="/reviews">Reviews</Link>
          </li>
          <li className="montserrat hover:text-slate-500 2xl:text-2xl 3xl:text-4xl">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <nav className="w-full sticky z-5 top-0 border bg-white/60 backdrop-blur-lg shadow-lg block md:hidden ">
        <ul className="flex flex-row ">
          <li className="pb-4 px-3">
            <input
              type="checkbox"
              id="checkbox4"
              className="checkbox4 visuallyHidden"
              checked={isMenuOpen}
              onChange={toggleMenu}
            />
            <label htmlFor="checkbox4">
              <div className="hamburger hamburger4">
                <span className="bar bar1"></span>
                <span className="bar bar2"></span>
                <span className="bar bar3"></span>
                <span className="bar bar4"></span>
                <span className="bar bar5"></span>
              </div>
            </label>
          </li>
          <li className="flex-grow-0 flex-shrink-0  z-3 absolute left-1/2 transform -translate-x-1/2">
            <div className="border border-white bg-black p-4 whitespace-nowrap translate-y-4 absolute left-1/2 transform -translate-x-1/2 fit-content">
              <h2 className="parisienne text-white text-3xl">First Look</h2>
            </div>
          </li>
        </ul>
      </nav>
      <div className="fixed bordered zindex9 w-full block md:hidden animateHeight bg-white/30 backdrop-blur " style={isMenuOpen?{maxHeight:"350px"}:{maxHeight:"0px"}}>
        <ul className="mobileItems fit-content mx-auto py-[50px]" style={isMenuOpen?{display:"block"}:{display:"none"}}>
          <li className="my-10 montserrat" onClick={toggleMenu}>
            <Link to="/">Home</Link>
          </li>
          <li className="my-10 montserrat" onClick={toggleMenu}>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className="my-10 montserrat" onClick={toggleMenu}>
            <Link to="/reviews">Reviews</Link>
          </li>
          <li className="my-10 montserrat" onClick={toggleMenu}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <Outlet />
      <footer className="bg-white text-gray-700">
    <div className="max-w-4xl mx-auto py-9 px-4 text-center">

        <p className="mb-2">photographername@photography.com | 07777 777777</p>

        <a href="https://www.google.com/maps/dir/?api=1&fbclid=IwAR3wT1lAbpZbX3jz-X87LRuNEHP0SPWhtfXif-1bYFgQ9HRp2YKJIXfz5os" className="text-gray-700 hover:text-gray-900">address, city, Country BN00 1OL</a>

        <div className="flex justify-center space-x-4 mt-2">
            <a href="https://www.facebook.com/" className="text-gray-700 hover:text-gray-900">Facebook</a>
        </div>

        <div className="text-sm text-gray-500 mt-6">
            © 2024 First Look Photography. All Rights Reserved.
        </div>
    </div>
</footer>


    </>
  );
};

export default Layout;
