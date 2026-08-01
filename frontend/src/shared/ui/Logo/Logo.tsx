
import Link from "next/link";
import Image from "next/image";

type propsLogo = {
    style?: string;
    src: string;
}

export function Logo({style, src}:propsLogo) {
    return (
        <Link href="/" className="block">
            <Image 
            src={src}
            width={303}
            height={85}
            alt="Логотип"
            className={style}
            priority
            />
        </Link>
    );
};