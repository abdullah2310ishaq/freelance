import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// Dropdown arrow aur Mobile Menu icons ke liye
import { ChevronDown, Menu, X } from 'lucide-react';

const RouteRow = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'HOME', href: '/' },
        { name: 'ABOUT US', href: '/about' },
        { name: 'SERVICES', href: '/services', hasDropdown: true },
        { name: 'RESOURCES', href: '/resources' },
        { name: 'TEAM', href: '/team' },
        { name: 'CONTACT US', href: '/contact' },
    ];

    // Typography specs
    const typographyClass = "text-[14px] uppercase leading-[20px] tracking-[0.6px] align-middle h-full flex items-center transition-all duration-150";

    return (
        <nav className="w-full bg-[#1F3864] text-white select-none relative z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* DESKTOP VIEW & MOBILE TOGGLE BAR */}
                <div className="flex items-center justify-between md:justify-center h-14">

                    {/* Mobile Menu Button (Sirf small screens par dikhega) */}
                    <div className="md:hidden flex items-center justify-between w-full py-2">
                        <span className="text-xs font-bold tracking-wider">MENU</span>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-1 hover:bg-[#2c4d7d] rounded transition-colors"
                        >
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>

                    {/* DESKTOP LINKS (Centered layout exactly like screenshot) */}
                    <div className="hidden md:flex items-center space-x-8 lg:space-x-12 h-full">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.href;

                            if (link.hasDropdown) {
                                return (
                                    <div
                                        key={link.name}
                                        className="relative cursor-pointer h-full flex items-center"
                                        onMouseEnter={() => setIsServicesOpen(true)}
                                        onMouseLeave={() => setIsServicesOpen(false)}
                                    >
                                        <Link
                                            to={link.href}
                                            className={`${typographyClass} gap-1.5 hover:text-[#FABE00] border-b-2 py-0 ${isActive ? 'text-[#FABE00] font-extrabold border-[#FABE00]' : 'text-white border-transparent'}`}
                                        >
                                            <span>{link.name}</span>
                                            <ChevronDown className="h-4 w-4" />
                                        </Link>

                                        {/* Dropdown Menu */}
                                        {isServicesOpen && (
                                            <div className="absolute top-full left-0 w-64 bg-[#162e52] text-white shadow-2xl rounded-b-md border border-[#2c4d7d]/50 py-2 animate-fadeIn z-50 normal-case tracking-normal">
                                                <Link
                                                    to="/services"
                                                    className="block px-5 py-2.5 text-xs font-semibold text-neutral-200 hover:bg-[#2c4d7d] hover:text-[#FABE00] transition-colors border-l-2 border-transparent hover:border-[#FABE00]"
                                                >
                                                    Personal Tax Services
                                                </Link>
                                                <Link
                                                    to="/services"
                                                    className="block px-5 py-2.5 text-xs font-semibold text-neutral-200 hover:bg-[#2c4d7d] hover:text-[#FABE00] transition-colors border-l-2 border-transparent hover:border-[#FABE00]"
                                                >
                                                    Corporate & Business Services
                                                </Link>
                                                <Link
                                                    to="/services"
                                                    className="block px-5 py-2.5 text-xs font-semibold text-neutral-200 hover:bg-[#2c4d7d] hover:text-[#FABE00] transition-colors border-l-2 border-transparent hover:border-[#FABE00]"
                                                >
                                                    Advisory & Planning Services
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                );
                            }

                            return (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={`${typographyClass} hover:text-[#FABE00] border-b-2 py-0 ${isActive ? 'text-[#FABE00] font-extrabold border-[#FABE00]' : 'text-white border-transparent'}`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>

                </div>
            </div>

            {/* MOBILE DROPDOWN MENU (Smooth overlay drawer) */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-[#162e52] border-t border-[#2c4d7d] px-4 py-3 space-y-3 absolute w-full left-0 top-full shadow-lg">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.href;
                        return (
                            <div key={link.name}>
                                {link.hasDropdown ? (
                                    <div>
                                        <div className="w-full flex items-center justify-between py-1.5">
                                            <Link
                                                to={link.href}
                                                className={`text-[14px] uppercase tracking-[0.4px] ${isActive ? 'text-[#FABE00] font-bold' : 'text-white font-semibold'}`}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {link.name}
                                            </Link>
                                            <button
                                                onClick={() => setIsServicesOpen(!isServicesOpen)}
                                                className="p-1 text-white hover:bg-[#2c4d7d] rounded"
                                            >
                                                <ChevronDown className={`h-4 w-4 transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                                            </button>
                                        </div>
                                        {isServicesOpen && (
                                            <div className="pl-4 mt-2 space-y-2 border-l border-gray-500 text-gray-300 normal-case tracking-normal text-xs">
                                                <Link
                                                    to="/services"
                                                    className="block py-1 hover:text-[#FABE00]"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    Personal Tax Services
                                                </Link>
                                                <Link
                                                    to="/services"
                                                    className="block py-1 hover:text-[#FABE00]"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    Corporate & Business Services
                                                </Link>
                                                <Link
                                                    to="/services"
                                                    className="block py-1 hover:text-[#FABE00]"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    Advisory & Planning Services
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        to={link.href}
                                        className={`block py-1.5 text-[14px] uppercase tracking-[0.4px] ${isActive ? 'text-[#FABE00] font-bold' : 'text-white font-semibold'}`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}
        </nav>
    );
};

export default RouteRow;