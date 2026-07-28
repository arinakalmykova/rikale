
import Link from "next/link";
import Image from "next/image";

export function Logo() {
    return (
        <Link href="/" className="block">
            <Image 
            src="/logo.svg"
            width={303}
            height={85}
            alt="Логотип"
            priority
            />
        </Link>
    );
};