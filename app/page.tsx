import Header from "@/app/components/layout/Header";
import Hero from "@/app/components/sections/Hero";
import Practice from "@/app/components/sections/practice/Practice";
import Team from "@/app/components/sections/team/Team";


export default function Home() {
    return (
        <>
            <Header />

            <main>
                <Hero />
                <Practice />
                <Team />
            </main>
        </>
    );
}
