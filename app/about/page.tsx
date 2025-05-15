// import React from "react";
import Image from "next/image";
import { aboutData } from "@/app/data/index";
import aboutImg from "@/public/png/homeImage.png";

const About = () => {
  return (
    <div className="text-[#1E1E1E] px-5">
      <div className="flex md:items-center md:justify-between md:mx-auto border-b-[1px] border-[#DDDDDD] md:px-10 md:pb-10  flex-col md:flex-row">
        <Image src={aboutImg} alt="About Us" width={627} height={627} />
        <div className="flex flex-col md:w-[50%] md:p-5 text-[#1E1E1E] gap-5 w-full pt-5">
          <p className={`uppercase md:text-[20px] text-[14px]`}>About printforge</p>
          <h1 className={`font-bold md:text-5xl font-monst text-[40px] md:w-full w-[60%]`}>
            Empowering makers worldwide
          </h1>
          <div className={` md:text-[28px] flex flex-col md:gap-4 text-2xl md:pb-0 pb-5`}>
            <p>
              Founded in 2023, PrintForge has quickly become the go-to platform
              for 3D printing enthusiasts, makers, and professional designers to
              share and discover amazing STL files for 3D printing.
            </p>
            <p>
              Our mission is to foster a vibrant community where creativity
              meets technology, enabling anyone to bring their ideas to life
              through 3D printing.
            </p>
          </div>
        </div>
      </div>
      <div className="flex  justify-center py-16 gap-12 border-b-[1px] border-[#DDDDDD] md:flex-row flex-col w-[80%] m:w-full md:pt-0 pt-5">
        {aboutData.map((item, id) => (
          <div
            key={id}
            className={`md:w-[350px] ${
              id !== 0 ? "md:border-l-[2px] md:border-[#DDDDDD] md:pl-8" : ""
            }`}
          >
            <div className="flex items-center gap-1.5">
              <Image src={item.icon} alt={item.heading} />
              <h1 className={`font-bold text-[28px]`}>{item.heading}</h1>
            </div>
            <p className={`text-[20px]`}>{item.text}</p>
          </div>
        ))}
      </div>
      <div className="md:w-[800px] flex flex-col mx-auto mb-10 gap-4.5 mt-10">
        <h1 className={` font-bold md:text-[56px] text-[40px]`}>Our vision</h1>
        <p className={` md:text-[28px] text-2xl`}>
          At PrintForge, we believe that 3D printing is revolutionizing the way
          we create, prototype, and manufacture. Our platform serves as a bridge
          between designers and makers, enabling the sharing of knowledge and
          creativity that pushes the boundaries of what&#39;s possible with 3D
          printing.
        </p>
        <hr className="w-[245px] mx-auto text-[#4E4E4E]" />
        <p className={`md:text-[28px] text-2xl`}>
          Whether you&#39;re a hobbyist looking for your next weekend project, an
          educator seeking teaching materials, or a professional designer
          wanting to share your creations, PrintForge provides the tools and
          community to support your journey in 3D printing.
        </p>
      </div>
    </div>
  );
};

export default About;
