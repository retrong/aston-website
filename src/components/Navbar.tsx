"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { CiTextAlignLeft } from "react-icons/ci";

interface NavbarLink {
  name: string;
  href: string;
}

const links: NavbarLink[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Divisions", href: "#divisions" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/60 backdrop-blur-md shadow-md z-[99]">
      <div className="w-full md:px-12 px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/astonlogo.png"
            alt="Aston logo"
            className="w-28 h-auto object-contain"
            width={500}
            height={500}
          />
        </Link>

        {/* Links - Hidden on Mobile */}
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <Link href={link.href} key={link.name}>
              <span
                className={`relative cursor-pointer text-gray-700 font-semibold hover:text-primary ${
                   link.href === pathname &&
                     " after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-full after:h-[3px] after:w-[50%] after:bg-primary"
                    
                }`}
              >
                {link.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-50">
          <button onClick={toggleSidebar} className="text-2xl text-blue-600">
            {isSidebarOpen ? <AiOutlineClose /> : <CiTextAlignLeft />}
          </button>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg z-40 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col space-y-6 p-8 mt-8 bg-white h-svh">
          {links.map((link) => (
            <Link href={link.href} key={link.name}>
              <span
                onClick={toggleSidebar}
                className={`cursor-pointer text-lg ${
                  pathname === link.href ? "text-blue-600" : "text-gray-700"
                } hover:text-blue-600`}
              >
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
