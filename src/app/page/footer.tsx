import Container from "../components/container";
import { DoorOpen, Home, Mails, Phone } from "lucide-react";
import React from "react";

const ContactOptions = [
  {
    title: "Our Location",
    info: "Based in North Vancouver",
    link: "https://www.google.com/maps/place/North+Vancouver,+BC/data=!4m2!3m1!1s0x54867046f9232b41:0x6f85cb4bd4fbec5a?sa=X&ved=1t:242&ictx=111",
    icon: Home,
  },
  {
    title: "Make a Call",
    info: "(672)-200-5353",
    name: "Logan",
    link: "tel:(672)-200-5353",
    icon: Phone,
  },
  {
    title: "Send to Email",
    info: "studmenconstruction@gmail.com",
    link: "mailto:studmenconstruction@gmail.com",
    icon: Mails,
  },
  {
    title: "Working Hours",
    info: `Everyday 8am - 8pm. 24 hour Emergency Service Available`,
    link: "https://www.google.com/maps/place/North+Vancouver,+BC/data=!4m2!3m1!1s0x54867046f9232b41:0x6f85cb4bd4fbec5a?sa=X&ved=1t:242&ictx=111",
    icon: DoorOpen,
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="bg-dark-bg">
        <Container className="py-24">
          <h1 className="mt-4 text-4xl font-semibold text-white">
            Studmen Construction
          </h1>
          <p className="mt-4 text-lg text-white">
            We are one the best contractors in North Vancouver.
          </p>
          <div className="mt-12 flex flex-wrap justify-between gap-8">
            {ContactOptions.map((contact, i) => (
              <a
                key={i}
                className="flex min-w-[300px] flex-1 gap-4"
                href={contact.link}
                target="_blank"
              >
                <contact.icon className="box-content min-h-8 min-w-8 rounded-sm bg-white p-5 text-dark-primary" />
                <div className="text-white">
                  <h1 className="teko text-lg">{contact.title}</h1>
                  <p className="text-sm underline">
                    {contact.name && contact.name}
                  </p>
                  <p className="text-xs">{contact.info}</p>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </div>
      <div className="bg-[#111111]">
        <Container className="p-7">
          <p className="serrat text-center text-white text-sm">
            © Copyright 2024 Studmen Construction. The content of this website
            is the responsibility of the website owner.
          </p>
          <p className="serrat mt-2 cursor-pointer text-center text-white transition-all hover:underline">
            <a href="https://xaama.tech" target="_blank">
              {" "}
              Website Design by{" "}
              <span className="underline"> Xamaa Developments</span>
            </a>
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
