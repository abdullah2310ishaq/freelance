import React from 'react';
import { Star } from 'lucide-react';
import mapImg from '../../assets/homepage/map.jpg';

interface TestimonialCard {
    id: number;
    name: string;
    role: string;
    text: string;
    avatar: string;
    isFeatured?: boolean; // Center wale red card ko flag karne ke liye
}

const ClientTrust: React.FC = () => {

    const testimonials: TestimonialCard[] = [
        {
            id: 1,
            name: "Michael Thompson",
            role: "Thompson Consulting Group",
            text: "Analytic Alliance CPA has been an invaluable partner for our business. Their accounting and tax expertise keeps our finances organized and gives us confidence to focus on growth.",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
        },
        {
            id: 2,
            name: "Sarah Mitchell",
            role: "Founder, Mitchell Wellness Clinic",
            text: "The team is professional, responsive, and highly knowledgeable. They simplified our bookkeeping process and helped us make smarter financial decisions.",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
            isFeatured: true // Yeh card solid red display hoga
        },
        {
            id: 3,
            name: "David Carter",
            role: "Managing Director, Carter Construction Ltd",
            text: "Working with Analytic Alliance CPA has saved us both time and stress. Their accurate reporting, practical advice, and strategic financial guidance have made a real difference in our business growth.",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
        },
        {
            id: 4,
            name: "Jennifer Roberts",
            role: "CEO, Roberts Healthcare Solutions",
            text: "We appreciate the personalized attention and reliable support we receive. Their team always provides clear guidance and solutions tailored to our needs.",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
        },
        {
            id: 5,
            name: "Daniel Anderson",
            role: "Founder, Anderson Digital Marketing",
            text: "Analytic Alliance CPA helped us streamline our financial systems and improve cash flow management. Their expertise, attention to detail, proactive support have been essential to our continued success.",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
        },
        {
            id: 6,
            name: "Emily Parker",
            role: "President, Parker Financial Services",
            text: "From tax preparation to business advisory, the service has been consistently exceptional and highly reliable. Their commitment to accuracy, personalized support, and client success truly sets them apart.",
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop"
        }
    ];

    return (
        <section className="relative w-full py-16 lg:py-24 select-none bg-[#F5F5F5]">
            {/* Background Map Image with subtle Opacity */}
            <div 
                className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none -z-10"
                style={{ backgroundImage: `url(${mapImg})` }}
            />

            <div className="max-w-[92rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* SECTION HEADER */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-[11px] sm:text-xs font-bold text-[#c90a14] uppercase tracking-[1.5px] mb-3 block">
                        CLIENT TESTIMONIALS
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#1F3864] font-serif mb-4 leading-tight">
                        Client Trust & Feedback
                    </h2>
                </div>

                {/* TESTIMONIALS 3x2 GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                    {testimonials.map((item) => (
                        <div
                            key={item.id}
                            className={`rounded-[24px] p-6 sm:p-8 shadow-sm flex flex-col justify-between transition-all duration-300 border
                ${item.isFeatured
                                    ? 'bg-[#c90a14] text-white border-transparent shadow-lg scale-100 lg:scale-[1.03] z-10'
                                    : 'bg-white text-gray-700 border-gray-100 hover:shadow-md'
                                }`}
                        >
                            <div>
                                {/* Top Row: Quote Icon & 5 Golden Stars */}
                                <div className="flex items-center justify-between mb-5">
                                    {/* Big Custom Quote Mark */}
                                    <span className={`text-5xl font-serif leading-none mt-2 block select-none opacity-40
                    ${item.isFeatured ? 'text-white' : 'text-black'}`}
                                    >
                                        “
                                    </span>
                                    {/* Stars Wrapper */}
                                    <div className="flex items-center space-x-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`h-4 w-4 fill-current 
                          ${item.isFeatured ? 'text-white' : 'text-[#fab802]'}`}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Main Review Text */}
                                <p 
                                    className={`antialiased mb-6 ${item.isFeatured ? 'text-white/95' : 'text-gray-600'}`}
                                    style={{
                                        fontFamily: 'Arial, sans-serif',
                                        fontWeight: 400,
                                        fontSize: '14px',
                                        lineHeight: '26px',
                                        letterSpacing: '0%'
                                    }}
                                >
                                    {item.text}
                                </p>
                            </div>

                            {/* Bottom Profile Row */}
                            <div className={`flex items-center space-x-3 pt-4 border-t 
                ${item.isFeatured ? 'border-white/20' : 'border-gray-100'}`}
                            >
                                {/* Avatar Image */}
                                <img
                                    src={item.avatar}
                                    alt={item.name}
                                    className="h-11 w-11 rounded-full object-cover border-2 border-white/20 shadow-inner"
                                />
                                {/* Name & Role */}
                                <div className="flex flex-col min-w-0">
                                    <span className={`text-[14px] font-bold tracking-wide truncate
                    ${item.isFeatured ? 'text-white' : 'text-[#1F3864]'}`}
                                    >
                                        {item.name}
                                    </span>
                                    <span className={`text-[11px] font-semibold truncate
                    ${item.isFeatured ? 'text-white/70' : 'text-gray-400'}`}
                                    >
                                        {item.role}
                                    </span>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ClientTrust;