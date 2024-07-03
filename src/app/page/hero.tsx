import Image from "next/image";
import Container from "../components/container";
import Navbar from "../components/navbar";

const Hero = () => {
  return (
    <div className="min-h-[90vh] flex flex-col">
      <Container className="py-40 bg-black flex-1 h-full relative grid place-content-center overflow-hidden">
        <Image
          src="/assets/hero/hero.jpg"
          alt="Hero Background Image"
          fill
          className="object-cover hero-anim"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
        <div className="relative text-white -mt-32">
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
              className="mt-6 inline-block rounded-md border-2 border-dark-primary bg-dark-primary px-6 py-3 font-semibold uppercase text-white transition-all hover:bg-transparent hover:border-white md:text-lg"
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
