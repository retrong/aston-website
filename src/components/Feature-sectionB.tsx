"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CustomButton from "./Buttons";

export default function FeaturesSectionB() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger the animation only once when in view

  return (
    <section className="w-full py-10 bg-gray-100">
      <div className="container mx-auto flex items-center space-x-10 justify-between px-6">
        {/* Image */}
        <motion.div
          className="w-1/2 shadow-2xl"
          ref={ref}
          initial={{ x: "-100%" }} // Initially off-screen to the left
          animate={{ x: isInView ? 0 : "100%" }} // Slide in to the normal position
          transition={{ duration: 1 }}
        >
          <img
            src="/hero-img2.jpg" // Replace with your image path
            alt="Feature"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Text on the left */}
        <motion.div
          ref={ref}
          initial={{ x: "100%" }} // Initially off-screen to the left
          animate={{ x: isInView ? 0 : "-100%" }} // Slide in to the normal position
          transition={{ duration: 1 }}
          className="w-1/2"
        >
          <h2 className="text-2xl font-medium text-secondary mb-2 uppercase">
            <strong>Aston</strong> Features
          </h2>
          <h2 className="text-5xl font-medium text-black mb-2 capitalize">
            <strong>Features</strong> Header
          </h2>
          <p className="text-lg font-medium text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et debitis
            labore, distinctio doloremque neque voluptate necessitatibus
            pariatur! Aperiam sint quae corrupti quas distinctio in dolores
            alias officia perspiciatis doloribus. Unde.
          </p>
          <CustomButton
            size="large"
            variant="primary"
            className="px-4 py-4 w-fit my-4 border-2 border-primary"
          >
            Learn More
          </CustomButton>
        </motion.div>
      </div>
    </section>
  );
}
