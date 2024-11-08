
import React from "react";
import CustomButton from "./Buttons";

export function Cta() {
  return (
    <section className="flex flex-col items-center justify-center py-16 bg-darkgray text-white text-center px-4">
      <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
      <p className="text-lg mb-6 max-w-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta possimus perspiciatis eveniet. Accusantium nobis commodi at natus quam? Veritatis, incidunt?
      </p>
      {/* <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold transition hover:bg-gray-100">
        Get Started
      </button> */}
      <CustomButton
        size="medium"
        variant="primary"
        className="px-5 py-2 w-fit my-4 border-2 border-primary rounded-lg"
      >
        Learn More
      </CustomButton>
    </section>
  );
}
