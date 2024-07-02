import React from "react";
import Container from "../components/container";
import { Mail, PhoneCall, TextSelect, UserRound } from "lucide-react";

const About = () => {
  return (
    <Container>
      <div className="py-32 flex flex-col md:flex-row gap-20">
        <div className="md:basis-1/2">
          <p className="uppercase font-semibold text-dark-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            North Van&apos;s Most
          </p>
          <h1 className="uppercase mt-4 font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            RELIABLE RENOVATION CONTRACTOR
          </h1>
          <p className="text-black leading-normal md:text-lg mt-8">
            Coming from a family of Builders. We have the expertise to renovate
            your dream home. 10 Years of experience.
          </p>
        </div>
        <div className="md:basis-1/2 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg px-6 py-8 sm:py-12 sm:px-8 lg:py-16 lg:px-12">
          <h2 className="font-bold text-black text-xl md:text-2xl lg:text-3xl">
            Get an Estimate Today !
          </h2>

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
      </div>
    </Container>
  );
};

export default About;
