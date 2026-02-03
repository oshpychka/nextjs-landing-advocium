import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

type ButtonLinkProps = {
    href: string;
    children: ReactNode;
    ariaLabel?: string;

    textColor?: string;
    bgColor?: string;
    padding?: string;
    radius?: string;

    iconSrc?: string;
    iconAlt?: string;
};

export default function ButtonLink({ href, children, ariaLabel, textColor = "text-white", bgColor = "bg-black", padding = "px-6 py-4", radius = "rounded", iconSrc, iconAlt = "",}: ButtonLinkProps) {
    return (
        <Link
            href={href}
            aria-label={ariaLabel}
            className={`
                inline-flex items-center justify-center gap-3
                w-fit
        
                text-base leading-[1.6] font-medium
        
                transition-all duration-200 ease-out
                hover:-translate-y-0.5 hover:opacity-90
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
        
                ${textColor} ${bgColor} ${padding} ${radius}
          `}
        >
            <span>{children}</span>

            {iconSrc && (
                <Image
                    src={iconSrc}
                    alt={iconAlt}
                    width={24}
                    height={24}
                    priority
                />
            )}
        </Link>
    );
}
