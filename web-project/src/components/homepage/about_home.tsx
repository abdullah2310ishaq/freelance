import { ArrowRight, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import aboutPhoto from '../../assets/homepage/about_photo.png';
import homeAboutLogo from '../../assets/homepage/home_about.png';

const AboutUsHome = () => {
    return (
        <section className="w-full bg-white py-12 lg:py-24 overflow-hidden">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main Grid: Mobile par vertical single column, desktop (lg) par 2 columns */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                    {/* LEFT SIDE: Image Block with Overlapping Floating Card */}
                    <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
                        <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">

                            {/* Main About Photo */}
                            <img
                                src={aboutPhoto}
                                alt="Analytic Alliance Professional"
                                className="w-full h-auto object-cover rounded-[24px] shadow-md"
                            />

                            {/* Floating Badge (Bottom Right Corner Overlap) */}
                            <div className="absolute -bottom-6 right-2 sm:-right-2 bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.12)] p-4 flex items-center space-x-4 border border-gray-50 max-w-[200px] sm:max-w-[240px] animate-bounce-slow">
                                {/* Red Rounded Icon Container */}
                                <div className="bg-[#c90a14] p-3 rounded-2xl text-white flex-shrink-0">
                                    <Trophy className="h-6 w-6" />
                                </div>
                                {/* Badge Text */}
                                <div className="flex flex-col">
                                    <span className="text-lg font-bold text-[#1F3864] leading-tight">20+ Years</span>
                                    <span className="text-[11px] font-semibold text-gray-500 tracking-wide uppercase">Financial Excellence</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* RIGHT SIDE: Text Content Block */}
                    <div className="lg:col-span-7 flex flex-col justify-center lg:pl-8 lg:translate-y-3">

                        {/* Small Red Subheading */}
                        <span className="text-[11px] sm:text-xs font-bold text-[#c90a14] uppercase tracking-[1.5px] mb-2 block">
                            ABOUT OUR FIRM
                        </span>

                        {/* Main Serif Heading */}
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#1F3864] font-serif mb-6 leading-tight">
                            About Us
                        </h2>

                        {/* Paragraphs */}
                        <div className="space-y-5 text-gray-600 text-sm sm:text-[15px] leading-relaxed antialiased font-normal">
                            <p>
                                Analytic Alliance Chartered Professional Accountant Corp. is a professional accounting firm based in Alberta, Canada. Our team of CPAs is committed to delivering accurate, timely, and insightful financial services to individuals, small businesses, and corporations.
                            </p>
                            <p>
                                We bring over a decade of experience in public accounting, tax compliance, and financial planning. Our mission is simple — to help our clients meet their obligations and grow their financial well-being with confidence.
                            </p>
                        </div>

                        {/* Red Link CTA with Arrow */}
                        <div className="mt-6 mb-8">
                            <Link
                                to="/about"
                                className="inline-flex items-center space-x-2 text-[#c90a14] hover:text-[#a00810] font-bold text-sm sm:text-[15px] transition-colors group"
                            >
                                <span>Learn More About Us</span>
                                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        {/* Bottom Brand Logo Container */}
                        <div className="pt-2 flex justify-start">
                            <img
                                src={homeAboutLogo}
                                alt="CPA Chartered Professional Accountants Logo"
                                className="h-24 sm:h-32 w-auto object-contain object-left"
                            />
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default AboutUsHome;