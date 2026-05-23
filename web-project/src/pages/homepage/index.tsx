import Navbar from "../../components/homepage/Navbar";
import RouteRow from "../../components/homepage/routerow";
import Hero from "../../components/homepage/hero";
import HeroNextRow from "../../components/homepage/heronextrow";

export default function Homepage() {
    return (
        <div>
            <Navbar />
            <RouteRow />
            <Hero />
            <HeroNextRow />

        </div>
    )
}