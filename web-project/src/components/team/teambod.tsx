import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import zaneSorellImg from '../../assets/resources/zanesorell.jpg';
import mayaMathyImg from '../../assets/resources/mayamathy.jpg';
import alexisJensenImg from '../../assets/resources/alexisjensen.jpg';
import jamesVialImg from '../../assets/resources/jamesvial.jpg';

interface DirectorCard {
    id: number;
    name: string;
    role: string;
    bio: string;
    image: string;
}

export const BoardOfDirectors: React.FC = () => {
    const directors: DirectorCard[] = [
        {
            id: 1,
            name: "Zane Sorell",
            role: "Director of Accounting Services",
            bio: "Enjoys strategic leadership, focused on driving business growth and long-term vision.",
            image: zaneSorellImg,
        },
        {
            id: 2,
            name: "Maya Mathy",
            role: "Senior Tax Manager",
            bio: "Passionate about innovation and corporate development across diverse industries.",
            image: mayaMathyImg,
        },
        {
            id: 3,
            name: "Alexis Jensen",
            role: "Payroll & Compliance Manager",
            bio: "Committed to financial oversight, governance, and sustainable organizational success.",
            image: alexisJensenImg,
        },
        {
            id: 4,
            name: "James Vial",
            role: "Business Advisory Manager",
            bio: "Brings strong expertise in decision-making, risk management, and operational excellence.",
            image: jamesVialImg,
        },
    ];

    return (
        <section className="w-full bg-[#F5F5F5] py-12 md:py-24 px-6 md:px-12 lg:px-24 select-none">
            <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-16">

                {/* Top Header Row Split Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Block */}
                    <div className="lg:col-span-5 flex flex-col gap-5 items-start">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1F3864] leading-tight">
                            Board Of Directors
                        </h2>
                        <button className="bg-[#f0b400] hover:bg-[#d9a200] text-[#1F3864] font-bold text-sm px-6 py-3 rounded-full transition-colors shadow-sm active:scale-98">
                            Get Started
                        </button>
                    </div>

                    {/* Right Block */}
                    <div className="lg:col-span-7 lg:pt-2 text-neutral-600 text-sm md:text-base leading-relaxed font-normal">
                        <p>
                            At Analytic Alliance CPA, our team of experienced professionals is dedicated to
                            delivering trusted accounting, tax, and advisory services. We work collaboratively to
                            provide accurate guidance, personalized support, and practical solutions that help
                            businesses stay compliant, improve performance, and achieve long-term success.
                        </p>
                    </div>
                </div>

                {/* 4-Column Directors Card Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                    {directors.map((director) => (
                        <div
                            key={director.id}
                            className="bg-white rounded-[2rem] overflow-hidden shadow-sm flex flex-col border border-neutral-100/40"
                        >
                            {/* Profile Image Container */}
                            <div className="w-full aspect-[1/1] overflow-hidden bg-neutral-100">
                                <img
                                    src={director.image}
                                    alt={`${director.name} - ${director.role}`}
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>

                            {/* Text Meta Container */}
                            <div className="p-6 flex-1 flex flex-col gap-3">
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-lg font-serif font-bold text-[#1F3864] tracking-wide">
                                        {director.name}
                                    </h3>
                                    <span className="text-xs font-semibold text-[#c90a14] leading-tight">
                                        {director.role}
                                    </span>
                                </div>

                                <p className="text-xs md:text-[13px] text-neutral-500 leading-relaxed font-normal flex-1">
                                    {director.bio}
                                </p>

                                {/* Minimalist Social Icons Block */}
                                <div className="flex items-center gap-3 text-neutral-400 pt-2">
                                    <a href="#" className="hover:text-[#1F3864] transition-colors" aria-label="Facebook">
                                        <FaFacebookF className="w-4 h-4" />
                                    </a>
                                    <a href="#" className="hover:text-[#1F3864] transition-colors" aria-label="GitHub">
                                        <FaGithub className="w-4 h-4" />
                                    </a>
                                    <a href="#" className="hover:text-[#1F3864] transition-colors" aria-label="LinkedIn">
                                        <FaLinkedinIn className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default BoardOfDirectors;
