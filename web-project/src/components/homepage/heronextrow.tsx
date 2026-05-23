import React from 'react';
import cpaSvg from '../../assets/homepage/cpasvg.svg';
import registeredSvg from '../../assets/homepage/registeredsvg.svg';
import accurateSvg from '../../assets/homepage/accurate.svg';
import businessSvg from '../../assets/homepage/business.svg';

const HeroNextRow = () => {
    // 4 items ka array unke matching SVG assets ke sath
    const features = [
        {
            id: 1,
            text: "CPA Certified Professionals",
            icon: cpaSvg
        },
        {
            id: 2,
            text: "Registered in Alberta",
            icon: registeredSvg
        },
        {
            id: 3,
            text: "Accurate & Compliant",
            icon: accurateSvg
        },
        {
            id: 4,
            text: "Trusted by Businesses",
            icon: businessSvg
        }
    ];

    return (
        <div className="w-full bg-[#f8fafc] border-b border-[#E2E8F0] py-6 sm:py-8 select-none">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Responsive Grid Setup: Mobile par 1, Tablet par 2, aur Desktop par 4 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-y-6 sm:gap-y-8 lg:gap-y-0">

                    {features.map((item, index) => (
                        <div
                            key={item.id}
                            className={`flex flex-col items-center justify-center text-center px-4 w-full
                /* Desktop Vertical Divider Layout Using Your Specific Color #E2E8F0 */
                ${index !== features.length - 1 ? 'lg:border-r lg:border-[#E2E8F0]' : ''}
                /* Tablet View Cross Divider Setup */
                ${index % 2 === 0 ? 'sm:border-r sm:border-b-0' : ''}
              `}
                        >
                            {/* SVG Asset Container */}
                            <div className="mb-3 transform hover:scale-110 transition-transform duration-200">
                                <img
                                    src={item.icon}
                                    alt={item.text}
                                    className="h-7 w-7 object-contain"
                                />
                            </div>

                            {/* Feature Description Text */}
                            <span className="text-sm md:text-[15px] font-semibold text-[#1e293b] tracking-wide antialiased">
                                {item.text}
                            </span>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    );
};

export default HeroNextRow;