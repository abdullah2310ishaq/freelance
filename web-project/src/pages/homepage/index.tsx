import Navbar from "../../components/homepage/Navbar";
import RouteRow from "../../components/homepage/routerow";
import Hero from "../../components/homepage/hero";
import HeroNextRow from "../../components/homepage/heronextrow";
import AboutUsHome from "../../components/homepage/about_home";
import WhyChooseUs from "../../components/homepage/why_choose_us";
import CoreCompetencies from "../../components/homepage/corecompetences";
import ClientTrust from "../../components/homepage/client_trust";


export default function Homepage() {
    return (
        <div>
            <Navbar />
            <RouteRow />
            <Hero />
            <HeroNextRow />
            <AboutUsHome />
            <WhyChooseUs />
            <CoreCompetencies />
            <hr className="border-t-2 border-gray-300" />
            <ClientTrust />

        </div>
    )
}