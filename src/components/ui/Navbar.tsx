"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { SunIcon, MoonIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const Links = [
    { name: "Explore Posts", link: "/post" },
    { name: "About Us", link: "/about" },
    { name: "Blogs", link: "/blogs" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const touchRef = useRef(null);
  const pathname = usePathname();

  const clickHandler = (link: any) => {
    if (pathname !== link) {
      setTimeout(() => {
        setOpen(false);
      }, 700);
    }
  };

  const useOutsideAlerter = (ref: any) => {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  useOutsideAlerter(touchRef);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    setMounted(true);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!mounted) return null;

  return (
    <nav
      ref={touchRef}
      className={`${isScrolled && "bg-opacity-[0.5] shadow-md drop-shadow-lg"} font-medium duration-500 bg-opacity-50 transition-all border-b-2 linear z-40 dark:text-white w-[100%] max-w-full mx-auto bg-white dark:bg-transparent ${open && "dark:bg-[#000] bg-opacity-100"} drop-shadow-xs backdrop-blur-xl fixed`}
    >
      <div className="flex justify-between items-center py-3 md:px-20 px-8">
        <Link href="/">
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-10" />
            <span className="ml-2 text-lg font-semibold text-gray-700 dark:text-white">SyntaxShare</span>
          </div>
        </Link>

        <div className="flex items-center space-x-6">
          {/* Links for larger screens */}
          <ul className="hidden md:flex items-center space-x-6 font-semibold">
            {Links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.link}
                  onClick={() => clickHandler(`${link.name}`)}
                  className={`${pathname === link.link
                      ? "text-blue-400 font-bold"
                      : "text-gray-700 dark:text-white"
                    } hover:text-blue-500 dark:hover:text-blue-500 transition duration-500`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Dark Mode Toggle and UserButton */}
          <div className="flex items-center space-x-4">
            {theme === "dark" ? (
              <button
                onClick={() => setTheme("light")}
                className="text-white focus:outline-none"
              >
                <SunIcon className="w-6 h-6" />
              </button>
            ) : (
              <button
                onClick={() => setTheme("dark")}
                className="text-black focus:outline-none"
              >
                <MoonIcon className="w-6 h-6" />
              </button>
            )}

            {/* UserButton from Clerk */}
            <UserButton />
          </div>

          {/* Hamburger menu for mobile */}
          <div
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col space-y-[0.2rem] cursor-pointer"
          >
            <div
              className={`${open && "rotate-45 translate-y-[5px]"
                } relative w-5 h-[0.125rem] bg-black dark:bg-white transition-all duration-300`}
            ></div>
            <div
              className={`${open && "opacity-0"
                } relative w-5 h-[0.125rem] bg-black dark:bg-white transition-all duration-300`}
            ></div>
            <div
              className={`${open && "-rotate-45 -translate-y-[5px]"
                } relative w-5 h-[0.125rem] bg-black dark:bg-white transition-all duration-300`}
            ></div>
          </div>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`md:hidden absolute top-[60px] left-0 w-full bg-white dark:bg-[#000] rounded-b-lg z-10 transition-transform duration-500 ease-in-out ${open ? "translate-y-0" : "-translate-y-[500px]"
            }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="px-8 py-4">
              <Link
                href={link.link}
                onClick={() => clickHandler(`${link.name}`)}
                className={`${pathname === link.link
                    ? "text-blue-400 font-bold"
                    : "text-gray-700 dark:text-white"
                  } hover:text-blue-500 dark:hover:text-blue-500 transition duration-500`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
