import React from "react";
import Container from "../components/container";
import Image from "next/image";
import { MoveRight } from "lucide-react";

const servicesList = [
  {
    title: "Decks & Exteriors",
    description:
      "Transform your outdoor living space with custom decks that blend seamlessly with your home's architecture. Our comprehensive exterior renovation services include siding, roofing, windows, and doors, enhancing both curb appeal and energy efficiency.",
    url: "decks-exteriors",
    img: "decks-exteriors",
  },
  {
    title: "Bathroom Remodels",
    description:
      "Elevate your bathroom with a remodel that combines luxury and functionality. We handle everything from design to installation, ensuring a seamless process. Using high-quality materials and attention to detail, we create bathrooms that are stylish, comfortable, and efficient.",
    url: "bathroom-remodels",
    img: "bathroom-remodels",
  },
  {
    title: "Kitchen Remodels",
    description:
      "Revitalize your kitchen with a remodel that enhances both style and functionality. We offer comprehensive services, from custom cabinetry and countertops to modern appliances and efficient layouts.",
    url: "kitchen-remodels",
    img: "kitchen-remodels",
  },
  {
    title: "Full-Home Renovations",
    description:
      "Transform your entire home with our full-home renovation services. We manage every aspect of the project, ensuring cohesive design and quality craftsmanship throughout.",
    url: "full-home-renovations",
    img: "full-home-renovations",
  },
  {
    title: "Studios",
    description:
      "Maximize your property's potential with a custom-built studio. Whether for a home office, art space, or guest suite, our studios are designed for functionality and comfort. Enjoy a personalized space that complements your lifestyle and enhances your home.",
    url: "studios",
    img: "studios",
  },
  {
    title: "Additions",
    description:
      "Expand your living space with a seamless home addition. From extra bedrooms and home offices to sunrooms and extended living areas, we design and build additions that integrate perfectly with your existing home. Enhance your home's value and functionality with a custom addition.",
    url: "additions",
    img: "additions",
  },
];

const Services = () => {
  return (
    <div id="services">
      <Container className="pb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {servicesList.map((service, i) => (
            <div className="shadow-[0_3px_6px_rgb(0,0,0,0.15)] group" key={i}>
              <div className="w-full relative aspect-[16/9] overflow-hidden">
                <Image
                  src={`/assets/services/${service.img}.jpg`}
                  alt={`${service.title} Services`}
                  fill
                  className="object-cover scale-125 group-hover:translate-x-12 duration-500 transition-all"
                />
              </div>
              <div className="p-8">
                <h1 className="lg:text-[20px] md:text-lg text-base font-medium text-black">
                  {service.title}
                </h1>
                <p className="mb-10 text-pretty md:text-sm text-xs mt-4 text-gray-500">
                  {service.description}
                </p>
                <a
                  href={`/services/${service.url}`}
                  className="hover:underline group/anchor font-semibold transition-all text-dark-primary uppercase text-sm md:text-base flex items-center gap-2"
                >
                  Select Service
                  <MoveRight className="text-dark-primary group-hover/anchor:rotate-180 group-hover/anchor:translate-x-6 transition-all" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;
