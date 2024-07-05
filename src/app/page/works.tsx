"use client";

import { useState } from "react";

import Container from "../components/container";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { MinusIcon, PlusIcon } from "lucide-react";

const filters = [
  {
    title: "Renovations",
    searchFor: "",
  },
];

const photos = [
  {
    alt: "Fence",
    url: "1",
    tags: [""],
  },
  {
    alt: "Drywalls",
    url: "2",
    tags: [""],
  },
  {
    alt: "Decking",
    url: "3",
    tags: [""],
  },
  {
    alt: "Disbaled Access Toilet",
    url: "4",
    tags: [""],
  },
  {
    alt: "Floor",
    url: "5",
    tags: [""],
  },
  {
    alt: "Shower Tiling",
    url: "6",
    tags: [""],
  },
  {
    alt: "Fencing",
    url: "7",
    tags: [""],
  },
  {
    alt: "Fencing",
    url: "9",
    tags: [""],
  },
  {
    alt: "Toilet",
    url: "10",
    tags: [""],
  },
  {
    alt: "Stair Case",
    url: "11",
    tags: [""],
  },
  {
    alt: "Tiled Showers for Disabled",
    url: "12",
    tags: [""],
  },
  {
    alt: "Wishing Well",
    url: "13",
    tags: [""],
  },
];

type Props = {
  RemoveSeeMore?: boolean;
};

const Works = (props: Props) => {
  const [seemore, setSeemore] = useState(0);
  const [filter, setFilter] = useState("");

  let count = 0;
  return (
    <div id="projects" className="min-h-[50vh] py-40">
      <Container className="">
        <div className="">
          <h2 className="text-2xl font-semibold text-lightblack md:text-3xl lg:text-4xl">
            Want to see our work?
          </h2>
          <h1 className="mt-4  font-bold leading-[110%] text-dark-primary text-3xl md:text-4xl lg:text-5xl">
            Our <span className="text-black">Projects</span>
          </h1>
        </div>
      </Container>
      <div className="mt-10 grid gap-0 px-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:px-3 lg:mt-20 xl:grid-cols-5">
        {photos.map((photo, index) => (
          <div
            key={photo.alt + " " + index}
            className={cn(
              "initial group relative m-2 aspect-square overflow-hidden transition-all",
              photo.tags.includes(filter) || !filter
                ? ++count > 8 + seemore && props.RemoveSeeMore == null
                  ? "m-0 h-0 w-0 scale-0"
                  : count > 4 + seemore && props.RemoveSeeMore == null
                  ? "max-[640px]:m-0 max-[640px]:h-0 max-[640px]:w-0 max-[640px]:scale-0"
                  : "block"
                : "absolute m-0 h-0 w-0 scale-0",
              index % 2 == 0
                ? "sm:row-span-1 row-span-2 sm:aspect-square aspect-[1/2]"
                : ""
            )}
          >
            <Image
              src={"/assets/works/" + photo.url + ".jpg"}
              alt={photo.alt}
              fill
              quality={50}
              className="object-cover transition-all group-hover:scale-105"
            />
          </div>
        ))}
      </div>
      <div className="text-center">
        {props.RemoveSeeMore == null ? (
          <p
            className={cn(
              "mt-10 inline-block cursor-pointer rounded-sm border border-dark-primary px-7 py-4 font-medium text-dark-primary transition-all hover:scale-110 md:text-lg",
              seemore + 8 >= count
                ? seemore + 4 >= count
                  ? "hidden"
                  : "sm:hidden"
                : ""
            )}
            onClick={() => {
              setSeemore(seemore + 4);
            }}
          >
            Load More
          </p>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default Works;
