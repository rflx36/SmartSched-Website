import HeroSection from "../components/hero_section";
import Navbar from "../components/navbar";



export default function HomePage() {
    return (
        <>
            <Navbar />
         
            <div className="w-full flex justify-center">
                <HeroSection />

            </div>
        </>
    )
}