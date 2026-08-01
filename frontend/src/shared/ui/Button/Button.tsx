import Link from "next/link";
import { ReactNode } from "react";
import Image from "next/image";

type propsButton = {
  children: ReactNode;
  href?: string;
  className?: string;
};

export function Button({ children, href, className }: propsButton) {
  return (
    <Link
      href={href || ""}
      className={
        className ||
        "text-black uppercase text-bold text-[1.125rem] xl:text-[1.25rem] font-bold flex items-center gap-[1.875rem]"
      }
    >
      <div>{children}</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="78"
        height="8"
        viewBox="0 0 78 8"
        fill="none"
      >
        <path
          d="M77.3536 4.03556C77.5488 3.8403 77.5488 3.52372 77.3536 3.32845L74.1716 0.146473C73.9763 -0.0487893 73.6597 -0.0487893 73.4645 0.146473C73.2692 0.341735 73.2692 0.658318 73.4645 0.85358L76.2929 3.68201L73.4645 6.51043C73.2692 6.7057 73.2692 7.02228 73.4645 7.21754C73.6597 7.4128 73.9763 7.4128 74.1716 7.21754L77.3536 4.03556ZM0 3.68201V4.18201H77V3.68201V3.18201H0V3.68201Z"
          fill="#8CAEF5"
        />
      </svg>
    </Link>
  );
}
