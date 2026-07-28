import { Logo } from "@/shared";
import Link from "next/link";

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
    <header className="w-full pt-[54px]">
      <div className="mx-auto">
        <div className="grid grid-cols-3 items-center">
          <nav>
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
              <Logo />
          </div>
          <nav>
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
    </header>
  );
}
