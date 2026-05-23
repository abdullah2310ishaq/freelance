import Hero from "../../components/homepage/hero";
import HeroNextRow from "../../components/homepage/heronextrow";
import AboutUsHome from "../../components/homepage/about_home";
import WhyChooseUs from "../../components/homepage/why_choose_us";
import CoreCompetencies from "../../components/homepage/corecompetences";
import ClientTrust from "../../components/homepage/client_trust";
import ClientQueries from "../../components/homepage/client_queuries";
import ResourcesInsight from "../../components/homepage/resourcesinsight";
import ExpertAccountingSupport from "../../components/homepage/expertaccountingsupport";

export default function Homepage() {
    return (
        <div>
            <Hero />
            <HeroNextRow />
            <AboutUsHome />
            <WhyChooseUs />
            <CoreCompetencies />
            {/* <hr className="border-t-2 border-gray-300" /> */}
            <ClientTrust />
            <ClientQueries />
            <ResourcesInsight />
            <ExpertAccountingSupport />
        </div>
    )
}