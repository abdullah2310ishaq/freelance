import { useState } from 'react';
import { Link } from 'react-router-dom';
// Dropdown arrow aur Mobile Menu icons ke liye
import { ChevronDown, Menu, X } from 'lucide-react';

const RouteRow = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    const navLinks = [
        { name: 'HOME', href: '/' },
        { name: 'ABOUT US', href: '/about' },
        { name: 'SERVICES', href: '/services', hasDropdown: true },
        { name: 'RESOURCES', href: '/resources' },
        { name: 'TEAM', href: '/team' },
        { name: 'CONTACT US', href: '/contact' },
    ];

    // Aapki exact typography specs ka reuseable string variable
    const typographyClass = "text-[14px] font-semibold uppercase leading-[20px] tracking-[0.4px] align-middle";

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
                    <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
                        {navLinks.map((link) => {
                            if (link.hasDropdown) {
                                return (
                                    <div
                                        key={link.name}
                                        className={`relative cursor-pointer py-3 flex items-center gap-1.5 hover:text-gray-300 transition-colors ${typographyClass}`}
                                        onMouseEnter={() => setIsServicesOpen(true)}
                                        onMouseLeave={() => setIsServicesOpen(false)}
                                    >
                                        <span>{link.name}</span>
                                        <ChevronDown className="h-4 w-4" />

                                        {/* Simple Dropdown Menu */}
                                        {isServicesOpen && (
                                            <div className="absolute top-full left-0 w-48 bg-white text-gray-800 shadow-xl rounded-b-md border border-gray-100 py-2 animate-fadeIn z-50 normal-case tracking-normal">
                                                <Link to="/services" className="block px-4 py-2 text-xs font-semibold hover:bg-gray-100 transition-colors">Corporate Tax</Link>
                                                <Link to="/services" className="block px-4 py-2 text-xs font-semibold hover:bg-gray-100 transition-colors">Personal Tax</Link>
                                                <Link to="/services" className="block px-4 py-2 text-xs font-semibold hover:bg-gray-100 transition-colors">Bookkeeping</Link>
                                            </div>
                                        )}
                                    </div>
                                );
                            }

                            return (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={`hover:text-gray-300 transition-colors py-3 ${typographyClass}`}
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
                    {navLinks.map((link) => (
                        <div key={link.name}>
                            {link.hasDropdown ? (
                                <div>
                                    <button
                                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                                        className={`w-full flex items-center justify-between text-left py-1.5 ${typographyClass}`}
                                    >
                                        <span>{link.name}</span>
                                        <ChevronDown className={`h-4 w-4 transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    {isServicesOpen && (
                                        <div className="pl-4 mt-2 space-y-2 border-l border-gray-500 text-gray-300 normal-case tracking-normal text-xs">
                                            <Link to="/services" className="block py-1" onClick={() => setIsMobileMenuOpen(false)}>Corporate Tax</Link>
                                            <Link to="/services" className="block py-1" onClick={() => setIsMobileMenuOpen(false)}>Personal Tax</Link>
                                            <Link to="/services" className="block py-1" onClick={() => setIsMobileMenuOpen(false)}>Bookkeeping</Link>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    to={link.href}
                                    className={`block py-1.5 ${typographyClass}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default RouteRow;