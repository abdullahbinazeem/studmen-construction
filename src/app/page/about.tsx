import React from "react";
import Container from "../components/container";
import Image from "next/image";

const About = () => {
  return (
    <div id="about">
      <Container className="py-32">
        <div className="flex flex-col-reverse items-center lg:flex-row gap-12 lg:gap-20">
          <div className="lg:basis-1/2">
            <p className="uppercase font-semibold text-dark-primary text-2xl md:text-3xl lg:text-4xl">
              North Van&apos;s Most
            </p>
            <h1 className="uppercase mt-2 md:mt-3 font-bold text-black text-3xl md:text-4xl lg:text-5xl">
              RELIABLE RENOVATION CONTRACTOR
            </h1>
            <p className="text-black  md:text-lg my-4 md:my-6">
              Welcome to Studmen Construction! With over 10 years of experience,
              we transform homes with precision, passion, and a personal touch.
              Our commitment to quality craftsmanship, attention to detail, and
              customer satisfaction has earned us a reputation for excellence
              and reliability in North Vancouver.
            </p>
            <a
              href="#estimate"
              className="inline-block box-border cursor-pointer rounded-sm border-dark-primary bg-dark-primary px-5 py-4 text-white transition-all hover:border hover:bg-transparent hover:text-dark-primary "
            >
              <p className="font-semibold uppercase">Get AN Estimate</p>
            </a>
          </div>
          <div className="lg:basis-1/2 w-full relative aspect-video lg:aspect-square">
            <Image
              fill
              src="/assets/about/people-collage.jpg"
              alt="Workers on the site"
              className="object-cover lg:object-top"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
