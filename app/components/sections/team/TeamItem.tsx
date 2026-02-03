import Image from 'next/image'
import Link from 'next/link'

type TeamItemProps = {
    image: string
    name: string
    surname: string
    tags: string[]
    href: string
}

export default function TeamItem({ image, name, surname, tags, href }: TeamItemProps) {
    return (
        <div className="flex flex-col gap-6">
            <div className="w-full">
                <Image
                    src={image}
                    alt={`${name} ${surname}`}
                    width={660}
                    height={742}
                    className="h-full w-full object-cover object-center"
                />
            </div>

            <div className="flex flex-wrap items-center gap-3">
                {tags.map((tag) => (
                    <div
                        key={tag}
                        className="flex items-center justify-center rounded border border-[var(--text-color)] px-2 py-[2px] text-xs font-normal leading-[1.6]"
                    >
                        {tag}
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-between gap-4">
                <h3 className="text-[1.5rem] font-medium leading-[1.7] text-[var(--text-color)]">
                    {name}{' '}
                    <i className="font-playsfair italic">
                        {surname}
                    </i>
                </h3>

                <Link
                    href={href}
                    aria-label={`Go to ${name} ${surname}`}
                    className="flex h-[2.26rem] w-[2.25rem] items-center justify-center rounded-full border border-[var(--text-color)] p-[6px]"
                >
                    <Image
                        src="/icons/arrow-right-red.svg"
                        alt="Arrow Right Icon"
                        width={24}
                        height={24}
                    />
                </Link>
            </div>
        </div>
    )
}
