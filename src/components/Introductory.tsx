import React from "react";
import Image from "next/image";
import CustomButton from "./Buttons";

const Introduction = () => {
  return (
    <section id="about" className="flex flex-col lg:flex-row items-center justify-between bg-[#49546a] rounded-3xl sm:py-8 py-6 sm:px-12 px-8 max-w-6xl mx-auto mt-10 mb-5 shadow-lg">
      {/* Text Content */}
      <div className="text-center lg:text-left lg:w-2/3 mb-6 lg:mb-0">
        <Image
          src="/astonlogo.png"
          alt="Aston logo"
          className="w-28 h-auto object-contain"
          width={60}
          height={30}
        />
        <h2 className="sm:text-4xl text-2xl font-semibold text-white mb-2 mt-2">
          Aston Homes
        </h2>
        <p className="text-white text-base leading-6">
          <strong>Aston</strong> Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Sapiente quis quisquam officia, ea aliquam quaerat
          impedit animi unde laborum nam eum ullam, inventore mollitia corporis
          vero molestias. Culpa, id itaque!
        </p>
      </div>

      {/* Button */}
      <div className="flex justify-center lg:justify-start w-full lg:w-auto">
        <CustomButton
          size="large"
          variant="primary"
          className="px-4 py-4 w-full"
        >
          Learn More
        </CustomButton>
      </div>
    </section>
  );
};

export default Introduction;
