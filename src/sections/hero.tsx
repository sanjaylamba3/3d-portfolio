import Button from "@/components/button";
import HeroExperience from "@/components/hero-models/hero-experience";
import { words } from "@/constants";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';


const Hero = () => {
    useGSAP(()=>{
        gsap.fromTo('.hero-text h1' , {opacity:0 , y:50} , {opacity: 1 , y:0 , stagger:0.2,duration:1 , ease:"power2.inOut" })
    }) 
  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        {/* left - hero content */}
        <header className="flex w-screen flex-col justify-center px-5 md:w-full md:px-20">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1 >
                Shaping{" "}
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.id}
                        className="flex items-center gap-1 pb-2 md:gap-3"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="bg-white-50 size-7 rounded-full p-1 md:size-10 md:p-2 xl:size-12"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>{" "}
                </span>{" "}
              </h1>
              <h1 > into Real Projects </h1 > <h1> that Deliver Results </h1>
            </div>
            <h2 className="text-white-50 pointer-events-none relative z-10 md:text-xl">
              Hi, I am Sanjay, a developer based in India.
            </h2>
            <Button
              id="hero-cta"
              className="w-60 md:w-80"
              text="See my Work"
            ></Button>
          </div>
        </header>
        {/* right 3d model */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience></HeroExperience>
            
          </div>
        </figure>  
      </div>
    </section>
  );
};

export default Hero;
