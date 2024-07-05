"use client";

import Container from "../components/container";
import Slider1 from "../components/slider1";
import Slider2 from "../components/slider2";

const Restorations = () => {
  return (
    <div id="Restorations">
      <Container className="py-32">
        <p className="uppercase text-right font-semibold text-dark-primary text-2xl md:text-3xl lg:text-4xl">
          Dump to Brand New
        </p>
        <h1 className="text-right uppercase mt-2 md:mt-3 font-bold text-black text-3xl md:text-4xl lg:text-5xl">
          Featured Restorations
        </h1>
        <div className="mt-20 lg:flex gap-12 items-center">
          <Slider1 />
          <div className="pt-8 ">
            <h3 className="text-lg  md:text-xl lg:text-2xl text-black font-medium ">
              Chipped to Brand New Staircase
            </h3>
            <h2 className="mt-2 text-xl md:text-2xl lg:text-3xl uppercase text-dark-primary font-semibold ">
              Stair Restoration
            </h2>
            <p className="text-black  lg:text-lg my-4 md:my-6 whitespace-break-spaces">
              Give your damaged exteriors a new lease on life! We specialize in
              repairing and refinishing exteriors to restore their original
              beauty. Our experienced craftsmen can make your stairs look brand
              new again, at an affordable price.
            </p>
          </div>
        </div>
        <div className="mt-32 lg:flex flex-row-reverse gap-12 items-center">
          <Slider2 />
          <div className="pt-8 ">
            <h3 className="text-lg  md:text-xl lg:text-2xl text-black font-medium ">
              Countertop and Appliance Refurnish
            </h3>
            <h2 className="mt-2 text-xl md:text-2xl lg:text-3xl uppercase text-dark-primary font-semibold ">
              Kitchen Remodelling
            </h2>
            <p className="text-black  lg:text-lg my-4 md:my-6 whitespace-break-spaces">
              From blank canvas to culinary haven! Imagine a space transformed -
              where once there was nothing, now a stunning kitchen awaits. We
              take your vision and craft a dream kitchen, complete with sleek
              cabinets, top-of-the-line appliances, and a layout designed for
              your cooking style.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Restorations;
