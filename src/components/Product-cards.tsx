import { FocusCards } from "@/components/ui/focus-cards";

export function ProductCards() {
  const cards = [
    {
      title: "Forest Adventure",
      src: "/hero-img1.jpg",
    },
    {
      title: "Valley of life",
      src: "https://assets.aceternity.com/the-first-rule.png",
    },
    {
      title: "Sala behta hi jayega",
      src: "/hero-img2.jpg",
    },
    {
      title: "Camping is for pros",
      src: "https://assets.aceternity.com/the-first-rule.png",
    },
    {
      title: "The road not taken",
      src: "https://assets.aceternity.com/the-first-rule.png",
    },
    {
      title: "The First Rule",
      src: "https://assets.aceternity.com/the-first-rule.png",
    },
  ];

  return (
    <section id="projects" className="flex justify-center flex-col items-center w-full sm:py-8 py-6">
      <div className="w-full flex flex-col max-w-4xl text-center py-6 mb-5">
        <h2 className="text-xl font-semibold text-secondary mb-2 uppercase">
          Projects
        </h2>
        <h3 className="text-5xl font-medium text-black mb-2 capitalize">
          Major Projects
        </h3>
        <p className="text-lg font-medium text-secondary">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quod
          sequi voluptatem, aliquam eveniet dolor excepturi laudantium harum
          itaque molestiae?
        </p>
      </div>
      <FocusCards cards={cards} />
    </section>
  );
}
