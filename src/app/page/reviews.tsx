"use client";

import React, { useRef } from "react";
import Container from "../components/container";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

// import required modules
import { Navigation } from "swiper/modules";

import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

type Carousel = {
  title: string;
  description: string;
  reviewer: string;
};

const carouselItems: Carousel[] = [
  {
    title: "An Amazing service",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices scelerisque mi sed interdum lacus tellus in mi orc, netus nisl laoreet phasellus. Pellentesque non nunc placerat mi quis vitae cursus ornare.Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices scelerisque mi sed interdum lacus tellus in mi orc, netus nisl laoreet phasellus. Pellentesque non nunc placerat mi quis vitae cursus ornare.Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices scelerisque mi sed interdum lacus tellus in mi orc, netus nisl laoreet phasellus. Pellentesque non nunc placerat mi quis vitae cursus ornare.",
    reviewer: "John Smith",
  },
  {
    title: "Helpul Communication",
    description:
      " elit ultrices scelerisque mi sed interdum lacus tellus in mi orc, netus nisl laoreet phasellus. Pellentesque non nunc placerat mi quis vitae cursus ornare.",
    reviewer: "John Smith",
  },
  {
    title: "Helpul Communication",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscingLorem ipsum dolor sit amet consectetur adipiscing elit ultrices scelerisque mi sed interdum lacus tellus in mi orc, netus nisl laoreet phasellus. Pellentesque non nunc placerat mi quis vitae cursus ornare.",
    reviewer: "John Smith",
  },
  {
    title: "Helpul Communication",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices scelerisque mi sed interdum lacus tellus in mi orc, netus nisl laoreet phasellus. Pellentesque non nunc placerat mi quis vitae cursus ornare.",
    reviewer: "John Smith",
  },
];

const Reviews = () => {
  const sliderRef = useRef<any>();

  return (
    <div id="reviews">
      <Container className="bg-gray-100 py-32">
        <h2 className="text-2xl font-semibold text-lightblack md:text-3xl lg:text-4xl">
          What people are saying?
        </h2>
        <h1 className="mt-4  font-bold leading-[110%] text-dark-primary text-3xl md:text-4xl lg:text-5xl">
          Our <span className="text-black"> Reviews</span>
        </h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          breakpoints={{
            820: {
              slidesPerView: 2,
              spaceBetween: -25,
            },
          }}
          onSwiper={(it) => (sliderRef.current = it)}
          modules={[Navigation]}
          className="mySwiper mt-12 relative"
        >
          {carouselItems.map((item, i) => (
            <SwiperSlide className="pt-10 pb-20 md:pb-10 md:px-10" key={i}>
              <div className="relative cursor-pointer select-none rounded-t-sm border px-7 py-8 bg-slate-100 border-b-0  border-gray-300">
                <p className="text-pretty font-semibold text-slate-700 text-lg flex gap-4 items-center">
                  <Quote className=" text-dark-primary" strokeWidth={1.5} />{" "}
                  {item.title}
                </p>
                <p className="mt-4 text-pretty text-sm text-slate-600">
                  {item.description}
                </p>
              </div>
              <div className="relative cursor-pointer select-none rounded-b-sm border px-7 py-5 bg-slate-200  border-gray-300">
                <p className="text-pretty font-medium text-black ">
                  {item.reviewer}
                </p>
              </div>
            </SwiperSlide>
          ))}
          <div
            onClick={() => sliderRef.current?.slideNext()}
            className="hover:bg-slate-200 bg-slate-50 transition-all border-slate-600 rounded-full  p-2 sm:p-3 border cursor-pointer absolute  right-0  z-[20] h-min md:top-0 bottom-0 m-auto"
          >
            <ArrowRight className="text-slate-600" />
          </div>
          <div
            onClick={() => sliderRef.current?.slidePrev()}
            className="hover:bg-slate-200 bg-slate-50  transition-all border-slate-600 rounded-full p-2 sm:p-3 border  cursor-pointer absolute left-0  z-[20]  h-min md:top-0 bottom-0 m-auto"
          >
            <ArrowLeft className="text-slate-600" />
          </div>
        </Swiper>
      </Container>
    </div>
  );
};

export default Reviews;
