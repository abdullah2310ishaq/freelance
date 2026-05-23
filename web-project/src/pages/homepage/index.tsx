import Navbar from "../../components/homepage/Navbar";
import RouteRow from "../../components/homepage/routerow";
import Hero from "../../components/homepage/hero";
import HeroNextRow from "../../components/homepage/heronextrow";
import AboutUsHome from "../../components/homepage/about_home";

export default function Homepage() {
    return (
        <div>
            <Navbar />
            <RouteRow />
            <Hero />
            <HeroNextRow />
            <AboutUsHome />

        </div>
    )
}