import React from 'react';
import cpaDesignedIcon from '../../assets/homepage/cpa_designed.svg';
import personalizedServiceIcon from '../../assets/homepage/personalized_service.svg';
import trustIcon from '../../assets/homepage/trust.svg';

// TypeScript Interface for features array structure
interface ChoiceFeature {
    id: number;
    title: string;
    description: string;
    icon: string;
}

const WhyChooseUs: React.FC = () => {

    // Array mapping for the 3 key features on the right side
    const features: ChoiceFeature[] = [
        {
            id: 1,
            title: "CPA Designated",
            description: "Fully licensed and regulated by CPA Alberta and Saskatchewan",
            icon: cpaDesignedIcon
        },
        {
            id: 2,
            title: "Personalized Service",
            description: "We treat every client individually, not as a file number.",
            icon: personalizedServiceIcon
        },
        {
            id: 3,
            title: "Trusted & Reliable",
            description: "Committed to accuracy, compliance, and your peace of mind.",
            icon: trustIcon
        }
    ];

    return (
        <section className="w-full bg-[#F5F5F5] py-12 lg:py-20 select-none" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            <div className="max-w-none w-full pl-6 pr-4 sm:pl-12 sm:pr-6 lg:pl-36 lg:pr-6 mx-auto">

                {/* Main Flex layout: pushes left and right columns to opposite corners */}
                <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-20 items-start">

                    {/* LEFT COLUMN: Headings and Paragraph */}
                    <div className="w-full lg:max-w-md flex flex-col pt-2">
                        {/* Small Corporate Red Tag */}
                        <span className="text-[11px] sm:text-xs font-bold text-[#c90a14] uppercase tracking-[1.5px] mb-3 block">
                            ABOUT OUR FIRM
                        </span>

                        {/* Premium Serif Headline using exact Navy brand color */}
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#1F3864] font-serif mb-6 leading-tight">
                            Why Choose Us
                        </h2>

                        {/* Muted Description block */}
                        <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed max-w-md antialiased font-normal">
                            We provide a stable, balanced, and highly professional approach to your finances, prioritizing confidentiality and accuracy above all.
                        </p>
                    </div>

                    {/* RIGHT COLUMN: Feature List */}
                    <div className="w-full lg:max-w-2xl space-y-8">
                        {features.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-start space-x-4 sm:space-x-5 group"
                            >
                                {/* Circular SVG Icon Container */}
                                <div className="flex-shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-110 mt-1">
                                    <img 
                                        src={item.icon} 
                                        alt={item.title} 
                                        className="h-10 w-10 object-contain" 
                                    />
                                </div>

                                {/* Text Block for individual feature */}
                                <div className="flex flex-col space-y-1">
                                    <h3 className="text-lg sm:text-xl font-bold text-[#1F3864] tracking-wide">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed antialiased font-normal max-w-xl">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;