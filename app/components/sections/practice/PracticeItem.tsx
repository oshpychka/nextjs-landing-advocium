type PracticeItemProps = {
    number: string
    title: string
    accent: string
    description: string
}

export default function PracticeItem({ number, title, accent, description }: PracticeItemProps) {
    return (
        <div className="w-full max-w-[550px] border-l border-[rgba(200,200,200,1)] p-8">
            <span className="text-2xl font-normal leading-[1.3] text-[var(--text-color)]">
                {number}
            </span>

            <h3 className="mt-6 text-[2rem] font-medium leading-[1.25] tracking-[-0.02em] text-[var(--text-color)]">
                {title}{' '}
                <i className="font-playsfair italic font-normal">
                    {accent}
                </i>
            </h3>

            <p className="mt-4 text-base font-normal leading-[1.6] text-[rgba(21,21,21,1)]">
                {description}
            </p>
        </div>
    )
}
