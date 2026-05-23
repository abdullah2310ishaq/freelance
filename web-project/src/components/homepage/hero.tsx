import { ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import redCorner from '../../assets/homepage/redcorner.png';
import blurredCorner from '../../assets/homepage/blurred.png';

const Hero = () => {
    return (
        <section
            className="relative w-full min-h-[500px] sm:min-h-[550px] lg:h-[580px] bg-cover bg-center overflow-hidden flex items-center"
            style={{ backgroundImage: "url('/src/assets/homepage/herohome.png')" }}
        >
            {/* Background Overlay: Taaki desktop par right side image depth acchi aaye aur mobile par text readable rahe */}
            <div className="absolute inset-0 bg-black/50 lg:bg-transparent z-0" />

            {/* BLURRED BACKGROUND UNDERLAY (sligh  tly wider so edges show) */}
            <div className="hidden lg:block absolute inset-y-0 left-0 lg:w-[47.5%] z-10 pointer-events-none">
                <img
                    src={blurredCorner}
                    alt="Blurred Underlay"
                    className="w-full h-full object-cover object-left md:object-fill"
                />
            </div>

            {/* RED VECTOR BLOCK CONTAINER
        Isme custom drop-shadow lagayi hai taaki exact image ke cutout edge ke sath 
        wo brown/dark shade automatically generate ho jaye.
      */}
            <div className="hidden lg:block absolute inset-y-0 left-0 lg:w-[45%] z-10 pointer-events-none drop-shadow-[15px_0_30px_rgba(40,10,10,0.6)]">
                <img
                    src={redCorner}
                    alt="Red Angle Banner"
                    className="w-full h-full object-cover object-left md:object-fill"
                />
            </div>

            {/* CONTENT LAYER */}
            <div className="relative max-w-[92rem] mx-auto px-6 md:px-12 lg:px-4 w-full z-20 pt-12 pb-16 lg:py-0">
                <div className="max-w-xl lg:max-w-xl text-white">

                    {/* Badge: Registered in Alberta */}
                    <div className="inline-flex items-center space-x-1.5 border border-white/30 bg-black/10 rounded-full px-3.5 py-1 mb-5 backdrop-blur-sm">
                        <ShieldCheck className="h-3.5 w-3.5 text-white/90" />
                        <span className="text-[10px] sm:text-[11px] font-bold tracking-[1px] uppercase text-white/90">
                            Registered in Alberta, Canada
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-bold leading-tight sm:leading-snug lg:leading-[46px] font-serif mb-5 drop-shadow-sm text-white">
                        Your Trusted Chartered Professional <br className="hidden sm:inline" />
                        Accountant in Alberta
                    </h1>

                    {/* Subtext description */}
                    <p className="text-xs sm:text-sm text-white/90 font-medium leading-relaxed max-w-lg mb-8 tracking-[0.2px]">
                        Analytic Alliance CPA Corp. provides professional accounting, tax, and advisory services to individuals and businesses across Alberta.
                    </p>

                    {/* Action Call to Buttons */}
                    <div className="flex flex-wrap gap-3 items-center">
                        {/* Primary Yellow Button */}
                        <Link to="/contact" className="bg-[#fab802] hover:bg-[#e0a400] text-black font-bold px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all text-xs sm:text-sm active:scale-95 pointer-events-auto text-center inline-block">
                            Contact Us Today
                        </Link>

                        {/* Secondary Transparent Red Button */}
                        <Link to="/services" className="border-2 border-white hover:bg-white/10 text-white font-semibold px-6 py-2.5 rounded-full transition-all text-xs sm:text-sm active:scale-95 pointer-events-auto text-center inline-block">
                            View Services
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;