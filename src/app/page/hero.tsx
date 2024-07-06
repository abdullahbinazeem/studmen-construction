import Image from "next/image";
import Container from "../components/container";
import Navbar from "../components/navbar";

const Hero = () => {
  return (
    <div className="min-h-[90vh] flex flex-col overflow-hidden">
      <Container className="py-40 bg-[#000] flex-1 h-full relative grid place-content-center overflow-hidden">
        <video
          src="/assets/hero2.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute z-[5] left-0 top-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative text-white -mt-32 z-[10]">
          <p className="font-semibold text-center text-lg md:text-xl lg:text-2xl mb-2">
            Dream Home Starts Here
          </p>
          <h1 className="mb-4 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center leading-[120%]">
            Your <span className="text-primary">Renovation</span> Experts
            <br className="lg:block hidden" /> In North Vancouver
          </h1>
          <div className="text-center">
            <a
              href="#about"
              className="mt-6 inline-block rounded-sm border-2 border-primary bg-primary px-6 py-3 hover:text-white font-bold uppercase text-black transition-all hover:bg-transparent hover:border-white md:text-lg"
            >
              Get Started
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
