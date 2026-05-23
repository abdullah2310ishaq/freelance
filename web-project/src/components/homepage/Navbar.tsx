
import { MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import navbarLogo from '../../assets/homepage/navbar_logo.png';
import leafLogo from '../../assets/homepage/leaf.svg';

const Navbar = () => {
    return (
        <header className="w-full bg-white shadow-sm border-b border-gray-100">
            {/* max-w-7xl aur px screens par automatic left-right space generate karega 
        jaise photo mein logo se pehle gap hai.*/}
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-2 md:py-3 lg:py-1">
                <div className="flex flex-row items-center justify-between lg:gap-4">

                    {/* LEFT SIDE: Big Logo with perfect spacing */}
                    <div className="flex items-center justify-start">
                        <Link to="/" className="flex items-center">
                            {/* h-24+ se logo mazeed bada aur clear dikhega */}
                            <img
                                src={navbarLogo}
                                alt="Analytic Alliance Logo"
                                className="h-10 sm:h-16 md:h-20 lg:h-24 w-auto object-contain"
                            />
                        </Link>
                    </div>

                    {/* MIDDLE SIDE: Vertical Stack (Top: Address/Phone, Bottom: Serving Badge) */}
                    <div className="hidden lg:flex flex-col items-center justify-center gap-3 lg:flex-1 lg:pt-2">

                        {/* TOP LINE: Address | Phone */}
                        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs sm:text-sm font-semibold text-[#2d3748]">
                            {/* Address */}
                            <div className="flex items-center space-x-1.5 text-center sm:text-left">
                                <MapPin className="h-4 w-4 text-[#0f2e59] fill-[#0f2e59]/10 flex-shrink-0" />
                                <span>7618 10th Ave NW, Edmonton, AB T6K2T6</span>
                            </div>

                            {/* Vertical Divider (Sirf tablet/desktop par dikhega) */}
                            <span className="hidden sm:inline text-gray-400 font-normal">|</span>

                            {/* Phone */}
                            <div className="flex items-center space-x-1.5">
                                <Phone className="h-4 w-4 text-[#0f2e59] fill-[#0f2e59] flex-shrink-0" />
                                <a href="tel:306-515-1386" className="hover:underline">
                                    306-515-1386
                                </a>
                            </div>
                        </div>

                        {/* BOTTOM LINE: Serving Badge (Perfect Centered Below Info) */}
                        <div className="inline-flex items-center space-x-2 border border-gray-300 rounded-full px-5 py-1 shadow-sm bg-white">
                            {/* Apna leaf asset path yahan dalein */}
                            <img
                                src={leafLogo}
                                alt="Canada Leaf"
                                className="h-3.5 w-3.5 object-contain"
                            />
                            <span className="text-xs sm:text-sm font-medium text-gray-700 tracking-wide">
                                Serving Alberta & Saskatchewan
                            </span>
                        </div>

                    </div>

                    {/* RIGHT SIDE: Contact Us Button */}
                    <div className="flex items-center justify-end">
                        <Link to="/contact" className="bg-[#fab802] hover:bg-[#e0a400] text-black font-semibold px-4 py-1.5 sm:px-8 sm:py-2.5 rounded-full shadow-sm transition-all text-xs sm:text-sm md:text-base text-center inline-block">
                            Contact Us
                        </Link>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Navbar;