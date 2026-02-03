import Image from 'next/image'
import ButtonLink from '@/app/components/ui/ButtonLink'

export default function Hero() {
    return (
        <section id="hero" className="pb-10">
            <div className="mx-auto w-full max-w-[1440px] px-10">
                <div className="flex justify-between gap-10">
                    <div className="flex w-full max-w-[660px] flex-col pt-20">
                        <div
                            className="flex w-max items-center gap-2 rounded bg-[rgba(243,238,237,1)] px-2 py-1 text-xs font-normal leading-[1.65] text-[var(--text-color)] font-inter">
                            <div className="flex items-center gap-1">
                                <Image src="/icons/star.svg" alt="Star Icon" width={12} height={12} priority/>
                                <Image src="/icons/star.svg" alt="Star Icon" width={12} height={12} priority/>
                                <Image src="/icons/star.svg" alt="Star Icon" width={12} height={12} priority/>
                                <Image src="/icons/star.svg" alt="Star Icon" width={12} height={12} priority/>
                                <Image src="/icons/star.svg" alt="Star Icon" width={12} height={12} priority/>
                            </div>
                            Professional Legal Expertise
                        </div>

                        <h1 className="mt-6 text-[5rem] font-medium leading-[1.15] tracking-[0.03em]">
                            <i className="font-playsfair text-[6rem] italic leading-[1.1] tracking-[-0.05em]">
                                Your ally
                            </i>{' '}
                            in and out of court
                        </h1>

                        <p className="mt-6 mb-10 text-xl font-normal leading-[1.7] text-[rgba(21,21,21,1)]">
                            Empowering individuals and businesses through every legal journey,
                            turning complexity into clarity.
                        </p>

                        <ButtonLink
                            href="#"
                            ariaLabel="Schedule a Consultation"
                            textColor="text-white"
                            bgColor="bg-[var(--text-color)]"
                            padding="px-5 py-3.5"
                            radius="rounded"
                            iconSrc="/icons/arrow-right.svg"
                            iconAlt="Arrow Right Icon"
                        >
                            Schedule a Consultation
                        </ButtonLink>

                        <div className="mt-auto flex items-center justify-between gap-6">
                            <div className="flex w-full max-w-[204px] flex-col items-center gap-4">
                                <span className="font-playsfair text-[3.5rem] font-semibold italic leading-[1.15] tracking-[-0.02em] text-[var(--text-color)]">
                                  98%
                                </span>

                                <span className="text-center text-sm font-normal leading-[1.8] text-[var(--text-color)]">
                                    Client Satisfaction Rate
                                </span>
                            </div>

                            <div className="flex w-full max-w-[204px] flex-col items-center gap-4">
                                <span className="font-playsfair text-[3.5rem] font-semibold italic leading-[1.15] tracking-[-0.02em] text-[var(--text-color)]">
                                  500+
                                </span>

                                <span className="text-center text-sm font-normal leading-[1.8] text-[var(--text-color)]">
                                  Successful Cases Handled
                                </span>
                            </div>

                            <div className="flex w-full max-w-[204px] flex-col items-center gap-4">
                                <span className="font-playsfair text-[3.5rem] font-semibold italic leading-[1.15] tracking-[-0.02em] text-[var(--text-color)]">
                                  25+
                                </span>

                                <span className="text-center text-sm font-normal leading-[1.8] text-[var(--text-color)]">
                                  Years Legal Experience
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="h-full w-full">
                        <Image
                            src="/hero-image.jpg"
                            alt="Hero Image"
                            width={660}
                            height={742}
                            priority
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
