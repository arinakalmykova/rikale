"use client";
import { Logo } from "@/shared";
import Link from "next/link";
import { motion } from "framer-motion";

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

export function Header() {
  return (
    <motion.header 
    className="w-full pt-[54px]"
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.6,
      ease: "easeOut",
    }}
    >
      <div className="mx-auto">
        <div className=" flex justify-between items-center xl:grid xl:grid-cols-3 xl:items-center">
          <nav className="hidden xl:block">
            <ul className="flex gap-8">
              {navItemsLeft.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-black text-base uppercase hover:text-blue"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex justify-center">
              <Logo src="./logo.svg"  style="hidden xl:block"/>
              <Logo src="./logo_mobile.svg" style="block xl:hidden w-35"/>
          </div>
          <div className="block xl:hidden w-[30px] h-[24px] flex gap-[6px] flex-col">
            <div className="border border-black"></div>
            <div className="border border-black"></div>
            <div className="border border-black"></div>
          </div>
          <nav className="hidden xl:block">
            <ul className="flex justify-end gap-8">
              {navItemsRight.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-black text-base uppercase hover:text-blue"
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
  );
}
