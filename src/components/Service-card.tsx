"use client"

import { ReactNode } from "react";
import { AiOutlineBulb, AiOutlineSetting, AiOutlineTeam } from "react-icons/ai";
import { BsHouseCheck } from "react-icons/bs";
import CustomButton from "./Buttons";

interface CardProps {
  icon: ReactNode;
  title: string;
  content: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const Card = ({
  icon,
  title,
  content,
  buttonText = "Learn More",
  onButtonClick,
}: CardProps) => {
  return (
    <div className="border border-gray-200 hover:border hover:border-primary hover:transform hover:translate-y-2 rounded-lg shadow-lg p-6 bg-white max-w-[400px] mx-auto text-center flex flex-col items-center space-y-6">
      <div className="flex justify-center items-center">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 text-center">{content}</p>
      <div className="flex align-bottom items-end">
        <CustomButton size="medium" className="px-4 py-3 w-fit bg-primary hover:bg-white text-black border-2 border-primary">
          {buttonText}
        </CustomButton>
      </div>
      {/* <button
        onClick={onButtonClick}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
      >
        {buttonText}
      </button> */}
    </div>
  );
};

interface CardData {
  icon: React.ReactNode;
  title: string;
  content: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const cardData: CardData[] = [
  {
    icon: <AiOutlineBulb size={40} className="text-yellow-500" />,
    title: "Real Estate Development",
    content:
      "Explore our range of solutions designed to bring innovation to your projects.",
    buttonText: "Learn More",
    onButtonClick: () => alert("More about Innovative Solutions"),
  },
  {
    icon: <AiOutlineSetting size={40} className="text-green-500" />,
    title: "Interior Design",
    content:
      "Tailor our offerings to fit your unique needs and achieve better results.",
    buttonText: "Discover",
    onButtonClick: () => alert("More about Customizable Options"),
  },
  {
    icon: <BsHouseCheck size={40} className="text-blue-500" />,
    title: "Shortlet Apartments",
    content:
      "Join forces with our team for guidance and a partnership that drives success.",
    buttonText: "Get in Touch",
    onButtonClick: () => alert("More about Collaborative Support"),
  },
  {
    icon: <AiOutlineTeam size={40} className="text-blue-500" />,
    title: "Cleaning Services",
    content:
      "Join forces with our team for guidance and a partnership that drives success.",
    buttonText: "Get in Touch",
    onButtonClick: () => alert("More about Collaborative Support"),
  },
];

const ServiceCard = () => {
  return (
    <section id="services" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {cardData.map((card, index) => (
        <Card
          key={index}
          icon={card.icon}
          title={card.title}
          content={card.content}
          buttonText={card.buttonText}
          onButtonClick={card.onButtonClick}
        />
      ))}
    </section>
  );
};

export default ServiceCard;

