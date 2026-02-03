import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <header className="w-full py-8">
            <div className="mx-auto w-full max-w-[1440px] px-10">
                <div className="flex w-full items-center justify-between">
                    <Link
                        href="/"
                        aria-label="Go to homepage"
                        className="flex items-center justify-center gap-4 text-[2rem] font-inter font-semibold leading-[1.25] text-[var(--text-color)]"
                    >
                        <Image
                            src="/logotype.svg"
                            alt="Company logo"
                            width={52}
                            height={40}
                            priority
                        />

                        Advocium
                    </Link>

                    <nav>
                        <ul className="flex items-center gap-10 list-none">
                            <li>
                                <Link
                                    href="#hero"
                                    aria-label="Go to home"
                                    className="text-base font-normal leading-[1.6] text-[var(--text-color)] transition-all duration-300 hover:text-[rgba(55,3,3,1)] hover:font-semibold"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="#about"
                                    aria-label="Go to about"
                                    className="text-base font-normal leading-[1.6] text-[var(--text-color)] transition-all duration-300 hover:text-[rgba(55,3,3,1)] hover:font-semibold"
                                >
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="#team"
                                    aria-label="Go to lawyers"
                                    className="text-base font-normal leading-[1.6] text-[var(--text-color)] transition-all duration-300 hover:text-[rgba(55,3,3,1)] hover:font-semibold"
                                >
                                    Lawyers
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="#contact"
                                    aria-label="Go to contact"
                                    className="text-base font-normal leading-[1.6] text-[var(--text-color)] transition-all duration-300 hover:text-[rgba(55,3,3,1)] hover:font-semibold"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <Link
                        href="/"
                        aria-label="Explore Our Services"
                        target="_blank"
                        className="flex items-center justify-center bg-[rgba(243,238,237,1)] px-5 py-[0.875rem] text-base font-medium leading-[1.6] text-[var(--text-color)]"
                    >
                        Explore Our Services
                    </Link>
                </div>
            </div>
        </header>
    )
}
