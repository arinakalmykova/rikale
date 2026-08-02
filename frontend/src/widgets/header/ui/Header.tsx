"use client";
import { Logo } from "@/shared";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const navItemsLeft = [
  {
    title: "Обо мне",
    href: "#about",
  },
  {
    title: "Услуги",
    href: "#services",
  },
];

const navItemsRight = [
  {
    title: "Портфолио",
    href: "#portfolio",
  },
  {
    title: "Этапы работ",
    href: "#steps",
  },
  {
    title: "Контакты",
    href: "#contact-form",
  },
];

const allNavItems = [...navItemsLeft, ...navItemsRight];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <motion.header 
        className="w-full pt-[54px] relative z-50"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        <div className="mx-auto">
          <div className="flex justify-between items-center xl:grid xl:grid-cols-3 xl:items-center">
            <nav className="hidden xl:block">
              <ul className="flex gap-8">
                {navItemsLeft.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-black text-base uppercase hover:text-blue transition-colors duration-300"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            
            <div className="flex justify-center">
              <Logo src="./logo.svg" style="hidden xl:block"/>
              <Logo src="./logo_mobile.svg" style="block xl:hidden w-35"/>
            </div>
            
            <div
              onClick={toggleMenu}
              className="block xl:hidden w-[30px] h-[24px] flex flex-col gap-[6px] justify-center cursor-pointer relative z-50"
              aria-label="Открыть меню"
            >
              <motion.div 
                className="border border-black"
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="border border-black"
                animate={isOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="border border-black"
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            
            <nav className="hidden xl:block">
              <ul className="flex justify-end gap-8">
                {navItemsRight.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-black text-base uppercase hover:text-blue transition-colors duration-300"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/50 z-40 xl:hidden"
            />
            
            <motion.nav
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 0.4 
              }}
              className="fixed top-0 right-0 w-[100%] md:w-[40%] h-full bg-white shadow-2xl z-50 xl:hidden p-15 pt-24"
            >
              <div
                onClick={closeMenu}
                className="absolute top-8 right-6 text-3xl text-black hover:text-blue cursor-pointer transition-colors"
                aria-label="Закрыть меню"
              >
                ✕
              </div>

              <motion.ul 
                className="flex flex-col gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {allNavItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ 
                      delay: 0.1 + index * 0.05,
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className=" text-xl md:text-2xl uppercase font-semibold text-black hover:text-blue transition-colors duration-300 block py-2 border-b border-grey"
                    >
                      {item.title}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 pt-8 border-t border-grey"
              >
                <p className="text-sm text-gray-500">Свяжитесь со мной</p>
                <a href="mailto:hello@example.com" className="text-blue hover:underline">
                  aricrate@yandex.com
                </a>
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}