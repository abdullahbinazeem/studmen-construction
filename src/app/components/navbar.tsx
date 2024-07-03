"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Container from "./container";

const navItems = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: `Services`,
    url: "#services",
  },
  {
    name: "Projects",
    url: "#projects",
  },
  {
    name: "Reviews",
    url: "#reviews",
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Container className="bg-white bg-opacity-90 backdrop-blur-sm drop-shadow-md relative z-10">
      <div className="flex items-center justify-between  py-6  xl:px-16">
        <a href="/">
          <div className="flex items-center gap-4">
            <h1 className="text-base font-extrabold text-black md:text-lg lg:text-xl">
              Studmen <span className="text-dark-primary">Contructions</span>
            </h1>
          </div>
        </a>
        <div className="hidden items-center gap-5 font-semibold uppercase text-black md:flex">
          {navItems.map((navItem, i) => (
            <div className="flex items-center gap-5" key={i}>
              <Link
                className={cn(
                  `cursor-pointer text-sm transition-all after:block after:h-[2px] after:w-[100%] after:scale-0 after:bg-dark-primary after:transition-all hover:after:scale-110 lg:text-base`,
                  i == 0 ? "text-dark-primary" : ""
                )}
                href={navItem.url}
              >
                {navItem.name}
              </Link>
              {i < navItems.length - 1 && (
                <div className="h-[20px] w-[2px] rounded-full bg-[#E6E6E6]" />
              )}
            </div>
          ))}
        </div>
        <div className="block select-none md:hidden">
          <Menu
            size={34}
            className={cn(
              `text-dark-primary cursor-pointer transition-all hover:scale-110`,
              toggle ? "hidden" : "block"
            )}
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          <X
            size={34}
            className={cn(
              `text-dark-primary cursor-pointer transition-all hover:scale-110`,
              !toggle ? "hidden" : "block"
            )}
            onClick={() => {
              setToggle(!toggle);
            }}
          />
        </div>
        <Link
          href="#estimate"
          className="box-border hidden cursor-pointer rounded-sm border-dark-primary bg-dark-primary px-5 py-4 text-white transition-all hover:border hover:bg-transparent hover:text-dark-primary lg:block"
        >
          <p className="font-semibold uppercase">Free Estimate</p>
        </Link>
      </div>
      <div
        className={cn(
          "absolute left-0 top-0 z-50 flex h-screen w-[60vw] min-w-[250px] flex-col gap-8 bg-dark-bg px-10 py-20 transition-all duration-500 md:hidden",
          toggle ? "translate-x-0" : "translate-x-[-100%]"
        )}
      >
        {navItems.map((navItem, i) => (
          <Link
            key={i}
            className="xs:text-lg cursor-pointer font-semibold text-white transition-all after:mt-2 after:block after:h-[2px] after:w-[50%] after:scale-0 after:bg-white after:transition-all hover:after:scale-110"
            href={navItem.url}
            onClick={() => {
              setToggle(false);
            }}
          >
            {navItem.name}
          </Link>
        ))}
        <Link
          href="#estimate"
          className="hover:scale-105 transition-all cursor-pointer self-start rounded-sm bg-white px-5 py-4 text-dark-bg"
          onClick={() => {
            setToggle(false);
          }}
        >
          <p className="xs:text-lg font-semibold uppercase">Free Estimate</p>
        </Link>
      </div>
    </Container>
  );
};

export default Navbar;
