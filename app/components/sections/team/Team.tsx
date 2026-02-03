import Tag from '@/app/components/ui/Tag'
import ButtonLink from '@/app/components/ui/ButtonLink'
import {teamMembers} from "@/app/components/sections/team/team.data";
import TeamItem from "@/app/components/sections/team/TeamItem";

export default function Team() {
    return (
        <section id="team" className="py-20">
            <div className="mx-auto w-full max-w-[1440px] px-10">
                <div className="flex flex-col items-center justify-center gap-20">
                    <div className="flex flex-col items-center justify-center gap-6 text-center">
                        <Tag
                            textColor="text-[var(--text-color)]"
                            dotColor="bg-[var(--text-color)]"
                        >
                            Our Team
                        </Tag>

                        <h2 className="text-[2.5rem] font-medium leading-[1.2] tracking-[-0.02em] text-[var(--text-color)]">
                            Meat Our{' '}
                            <i className="font-playsfair italic font-normal">
                                Legal Team
                            </i>
                        </h2>

                        <p className="text-xl font-normal leading-[1.3] text-[rgba(21,21,21,1)]">
                            Experienced. Passionate. Results-Driven.
                        </p>
                    </div>

                    <div className="grid grid-cols-4 gap-10">
                        {teamMembers.map((member) => (
                            <TeamItem
                                key={member.name}
                                image={member.image}
                                name={member.name}
                                surname={member.surname}
                                tags={member.tags}
                                href={member.href}
                            />
                        ))}
                    </div>

                    <ButtonLink
                        href="#"
                        ariaLabel="Find More Lawyer"
                        textColor="text-white"
                        bgColor="bg-[var(--text-color)]"
                        padding="px-5 py-3.5"
                        radius="rounded"
                        iconSrc="/icons/arrow-right.svg"
                        iconAlt="Arrow Right Icon"
                    >
                        Find More Lawyer
                    </ButtonLink>
                </div>
            </div>
        </section>
    )
}
