"use client";

import React from "react";
import { Mail, PhoneCall, TextSelect, UserRound } from "lucide-react";
import Image from "next/image";

const ContactForm = () => {
  return (
    <div className="overflow-hidden bg-[#f9f9f9] py-40" id="estimate">
      <div className="m-auto max-w-[1320px] md:px-5">
        <div className="relative lg:flex">
          <div className="basis-3/5 bg-white px-8 py-12 md:px-12 lg:px-20">
            <h1 className="mb-10 text-2xl font-bold text-black md:text-3xl">
              Get An Estimate Now
            </h1>

            <form className="w-full mt-10">
              <div className="flex flex-col gap-2">
                <div className="group relative">
                  <input
                    className="text-secondary w-full appearance-none rounded-sm border border-gray-100 bg-gray-100 px-4 py-3 pl-12 text-xs font-medium text-black transition-all placeholder:text-gray-400 focus:border-dark-primary focus:pl-4 focus:outline-none sm:text-sm"
                    name="Name"
                    type="text"
                    placeholder="Name"
                    required
                  />
                  <UserRound
                    className="absolute bottom-0 left-3 top-0 m-auto text-gray-500 transition-all group-focus-within:translate-x-[-32px] group-focus-within:opacity-0"
                    size={24}
                  />
                </div>

                <div className="group relative">
                  <input
                    className="text-secondary w-full appearance-none rounded-sm border border-gray-100 bg-gray-100 px-4 py-3 pl-12 text-xs font-medium text-black transition-all placeholder:text-gray-400 focus:border-dark-primary focus:pl-4 focus:outline-none sm:text-sm"
                    name="Phone Number"
                    type="text"
                    placeholder="Phone Number"
                    required
                  />
                  <PhoneCall
                    className="absolute bottom-0 left-3 top-0 m-auto text-gray-500 transition-all group-focus-within:translate-x-[-32px] group-focus-within:opacity-0"
                    size={22}
                  />
                </div>
                <div className="group relative">
                  <input
                    className="w-full appearance-none rounded-sm border border-gray-100 bg-gray-100 px-4 py-3 pl-12 text-xs font-medium text-black transition-all placeholder:text-gray-400 focus:border-dark-primary focus:pl-4 focus:outline-none sm:text-sm"
                    name="Email"
                    type="text"
                    placeholder="Email Address"
                    required
                  />
                  <Mail
                    className="absolute bottom-0 left-3 top-0 m-auto text-gray-500 transition-all group-focus-within:translate-x-[-32px] group-focus-within:opacity-0"
                    size={22}
                  />
                </div>
                <div className="group relative">
                  <select
                    name="Subject"
                    className="focus:border-secondary w-full rounded-sm border border-gray-100 bg-gray-100 px-4 py-4 pl-11 text-xs font-medium text-black transition-all placeholder:text-gray-400 focus:border-dark-primary focus:pl-4 focus:outline-none sm:text-sm"
                    defaultValue="default"
                  >
                    <option value="default" disabled>
                      Select your service
                    </option>
                    <option value="Decks and Exteriors">
                      Decks and Exteriors
                    </option>
                    <option value="Bathroom Remodels">Bathroom Remodels</option>
                    <option value="Kitchen Removdels">Kitchen Removdels</option>
                    <option value="Full-Home Renovations">
                      Full-Home Renovations
                    </option>
                    <option value="Studios">Studios</option>
                    <option value="Additions">Additions</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="group relative">
                  <textarea
                    className="max-h-[360px] min-h-[60px] w-full appearance-none rounded-sm border border-gray-100 bg-gray-100 px-4 py-3 pl-12 text-xs font-medium text-black placeholder:text-gray-400 focus:border-dark-primary focus:pl-4 focus:outline-none sm:text-sm"
                    name="Message"
                    placeholder="Message"
                    required
                    rows={4}
                  />
                  <TextSelect
                    className="absolute left-3 top-3 m-auto text-gray-500 transition-all group-focus-within:translate-x-[-32px] group-focus-within:opacity-0"
                    size={22}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="font-medium mt-8 w-full rounded-sm bg-dark-primary border-dark-primary px-5 py-4 uppercase tracking-wide text-gray-100 "
              >
                Submit Now
              </button>
            </form>
          </div>
          <div className="relative bottom-0 top-0 m-auto hidden aspect-video w-[50%] lg:absolute lg:right-[-10%] lg:block">
            <Image
              src="https://static.vecteezy.com/system/resources/previews/026/991/987/non_2x/attractive-man-in-construction-helmet-free-png.png"
              alt="Man"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
