import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import peopleImg from '../../assets/homepage/people.jpg';
import { companyEmail, companyPhone } from '../../config/companyContact';

interface ContactCard {
    id: number;
    title: string;
    value: string;
    subtext: string;
    icon: React.ReactNode;
}

const ExpertAccountingSupport: React.FC = () => {

    const contactDetails: ContactCard[] = [
        {
            id: 1,
            title: "Call Us",
            value: companyPhone.display,
            subtext: "Mon-Fri, 9am - 5pm MST",
            icon: <Phone className="h-5 w-5 text-white fill-white" />
        },
        {
            id: 2,
            title: "Email Us",
            value: companyEmail,
            subtext: "We aim to reply within 24 hrs",
            icon: <Mail className="h-5 w-5 text-white" />
        },
        {
            id: 3,
            title: "Office",
            value: "Calgary, Alberta",
            subtext: "Available for virtual meetings across Canada",
            icon: <MapPin className="h-5 w-5 text-white" />
        }
    ];

    return (
        // Outer most wrapper set to pure solid white (#FFFFFF) as requested
        <section className="w-full bg-[#FFFFFF] py-12 sm:py-16 lg:py-20 select-none">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* INNER BANNER BOX CONTAINER (With rounded corners & people.jpg background) */}
                <div
                    className="w-full rounded-[32px] bg-cover bg-center overflow-hidden relative py-12 px-6 sm:px-12 lg:py-20 text-center flex flex-col items-center justify-center shadow-sm"
                    style={{ backgroundImage: `url(${peopleImg})` }}
                >
                    {/* Dark Muted Overlay layer: Taaki background image dark ho jaye aur text beautifully pop-up kare */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] pointer-events-none z-0" />

                    {/* TOP CONTENT HEADLINES */}
                    <div className="relative z-10 max-w-2xl mx-auto mb-12 sm:mb-16">
                        <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-white font-serif mb-4 leading-tight tracking-wide">
                            Need Expert Accounting Support?
                        </h2>
                        <p className="text-white/80 text-xs sm:text-[14px] font-medium leading-relaxed max-w-xl mx-auto">
                            Contact our CPA professionals today to establish reliable financial and tax solutions for your business.
                        </p>
                    </div>

                    {/* 3-COLUMN FROSTED GLASS CARDS GRID */}
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl items-stretch">
                        {contactDetails.map((card) => (
                            <div
                                key={card.id}
                                /* Frosted Glass Core Styling classes: 
                                   bg-white/10 + backdrop-blur-md + border-white/10 
                                */
                                className="bg-white/[0.07] backdrop-blur-md rounded-[24px] p-6 sm:p-8 border border-white/15 flex flex-col items-start text-left shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] transition-all duration-300 hover:bg-white/[0.12] hover:border-white/25"
                            >
                                {/* Icon (No background container) */}
                                <div className="mb-5">
                                    {card.icon}
                                </div>

                                {/* Card Title label */}
                                <span className="text-[13px] sm:text-[14px] font-semibold text-white/70 tracking-wide uppercase mb-1">
                                    {card.title}
                                </span>

                                {/* Main Heading Text Value */}
                                <h3 className="text-base sm:text-lg font-bold text-white tracking-wide mb-1.5 break-all">
                                    {card.value}
                                </h3>

                                {/* Additional Description Subtext */}
                                <p className="text-white/60 text-[11px] sm:text-xs font-medium leading-normal">
                                    {card.subtext}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default ExpertAccountingSupport;