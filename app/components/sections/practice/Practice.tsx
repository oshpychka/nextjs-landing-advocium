import Tag from '@/app/components/ui/Tag'
import PracticeItem from "@/app/components/sections/practice/PracticeItem";
import {practiceItems} from "@/app/components/sections/practice/practice.data";

export default function Practice() {
    return (
        <section className="py-20">
            <div className="mx-auto w-full max-w-[1440px] px-10">
                <div className="flex flex-col gap-20">
                    <div className="flex flex-col items-center justify-center gap-6 text-center">
                        <Tag
                            textColor="text-[var(--text-color)]"
                            dotColor="bg-[var(--text-color)]"
                        >
                            Practice Area
                        </Tag>

                        <h2 className="text-[2.5rem] font-medium leading-[1.2] tracking-[-0.02em] text-[var(--text-color)]">
                            Areas of{' '}
                            <i className="font-playsfair italic font-normal">
                                Legal Expertise
                            </i>
                        </h2>

                        <p className="text-xl font-normal leading-[1.3] text-[rgba(21,21,21,1)]">
                            Discover our core legal services, backed by
                            experience and a commitment to justice.
                        </p>
                    </div>

                    <div className="grid w-full grid-cols-3 gap-y-10">
                        {practiceItems.map((item) => (
                            <PracticeItem
                                key={item.number}
                                number={item.number}
                                title={item.title}
                                accent={item.accent}
                                description={item.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
