import Navbar from "./components/navbar";
import About from "./page/about";
import ContactForm from "./page/contactform";
import Footer from "./page/footer";
import Hero from "./page/hero";
import Reviews from "./page/reviews";
import Services from "./page/services";
import Works from "./page/works";

export default function Home() {
  return (
    <div>
      <div className="top-0 w-full z-50 ">
        <Navbar />
      </div>
      <Hero />
      <About />
      <Services />
      <Works />
      <Reviews />
      <ContactForm />
      <Footer />
    </div>
  );
}
