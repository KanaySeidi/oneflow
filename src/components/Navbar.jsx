import React from "react";
import { navBtn, navLinks } from "../utils/navLinks";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  let location = useLocation();

  return (
    <>
      <div className="w-screen h-10">
        <div className="mx-24  h-full flex justify-between items-center">
          <div>LOGO</div>
          <div className="flex gap-11">
            {navLinks.map((nav) => (
              <Link key={nav.id} to={nav.path}>
                <p className="text-xs">{nav.title}</p>
              </Link>
            ))}
          </div>
          {location.pathname === "/" ? null : (
            <Link to="/">
              <button>HOME</button>
            </Link>
          )}
          <div className="flex justify-between gap-10  rounded-md">
            {navBtn.map((nav) => (
              <button
                className="rounded-md h-6 text-xs"
                style={{
                  backgroundColor: nav.bgColor,
                  width: nav.width,
                  border: nav.border,
                }}
                key={nav.id}
              >
                {nav.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
