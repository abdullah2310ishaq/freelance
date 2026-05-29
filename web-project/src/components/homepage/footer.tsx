import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Link2 } from 'lucide-react';
import footerLogo from '../../assets/homepage/footerlogo.png';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-[#1F3864] text-white pt-10 pb-[calc(1.5rem+env(safe-area-inset-bottom))] md:pt-16 md:pb-8 border-t border-white/10 select-none">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* MAIN FOOTER GRID LAYOUT */}
                <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 pb-12 border-b border-gray-500/30">

                    {/* COLUMN 1: BRAND LOGO AREA (Occupies 4 Columns on large screens) */}
                    <div className="col-span-2 lg:col-span-4 flex flex-col space-y-4">
                        <Link to="/" className="flex items-center justify-start bg-white rounded p-1 max-w-[180px]">
                            <img
                                src={footerLogo}
                                alt="Analytic Alliance Footer Logo"
                                className="h-14 w-auto object-contain object-left"
                            />
                        </Link>
                        <p className="text-white/85 text-xs sm:text-[13.5px] leading-relaxed max-w-xs font-normal antialiased">
                            Chartered Professional Accountant Corporation.Providing premium accounting and tax services across Alberta.
                        </p>
                    </div>

                    {/* COLUMN 2: SERVICES LINKS (Occupies 3 Columns) */}
                    <div className="col-span-1 lg:col-span-3 flex flex-col space-y-4 lg:pl-6">
                        <h4 className="text-sm font-bold tracking-wide text-white">
                            Services
                        </h4>
                        <ul className="space-y-3 text-xs sm:text-[13.5px] font-normal text-white/80">
                            <li><Link to="/services" className="hover:text-white transition-colors block">Corporate Tax</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors block">Personal Tax</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors block">Bookkeeping</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors block">Advisory</Link></li>
                        </ul>
                    </div>

                    {/* COLUMN 3: COMPANY NAVIGATION LINKS (Occupies 2 Columns) */}
                    <div className="col-span-1 lg:col-span-2 flex flex-col space-y-4">
                        <h4 className="text-sm font-bold tracking-wide text-white">
                            Company
                        </h4>
                        <ul className="space-y-3 text-xs sm:text-[13.5px] font-normal text-white/80">
                            <li><Link to="/about" className="hover:text-white transition-colors block">About Us</Link></li>
                            <li><Link to="/about" className="hover:text-white transition-colors block">Our Approach</Link></li>
                            <li><Link to="/team" className="hover:text-white transition-colors block">Careers</Link></li>
                            <li><Link to="/about" className="hover:text-white transition-colors block">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* COLUMN 4: DIRECT CONTACT INFO (Occupies 3 Columns) */}
                    <div className="col-span-2 lg:col-span-3 flex flex-col space-y-4">
                        <h4 className="text-sm font-bold tracking-wide text-white">
                            Contact
                        </h4>
                        <div className="space-y-4 text-xs sm:text-[13.5px] font-normal text-white/80">

                            {/* Address item */}
                            <div className="flex items-start space-x-2.5">
                                <MapPin className="h-4 w-4 text-white/70 mt-0.5 flex-shrink-0" />
                                <span className="leading-normal">
                                    7618 10th Ave NW, Edmonton, AB T6K2T6
                                </span>
                            </div>

                            {/* Email item */}
                            <div className="flex items-center space-x-2.5">
                                <Mail className="h-4 w-4 text-white/70 flex-shrink-0" />
                                <a href="mailto:info@allianceaccountingcpa.ca" className="hover:text-white transition-colors break-all">
                                    info@allianceaccountingcpa.ca
                                </a>
                            </div>

                        </div>
                    </div>

                </div>

                {/* BOTTOM METADATA BAR (Copyright & Link Icon) */}
                <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-normal text-white/70 gap-4">
                    <div>
                        &copy; {currentYear} Analytic Alliance CPA Corp. All rights reserved.
                    </div>
                    <div>
                        <Link2 className="h-4 w-4 text-white/70 hover:text-white cursor-pointer transition-colors" />
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;