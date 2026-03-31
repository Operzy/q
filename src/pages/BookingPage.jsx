import React, { useEffect } from 'react';
import { Calendar } from 'lucide-react';

const LOGO_URL = "/logo-CIo0yBvo.png";

const BookingPage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A14] flex flex-col items-center justify-start font-sans overflow-x-hidden relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
      
      {/* Navbar/Header element */}
      <div className="w-full relative z-10 flex justify-center pt-8 pb-12">
          <div className="flex items-center">
             <img src={LOGO_URL} alt="MyFundingApprove Logo" className="h-10 md:h-12 w-auto object-contain drop-shadow-lg" />
          </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 w-full relative z-10 animate-[scaleIn_0.4s_ease-out]">
         
         {/* Hero Title Area text */}
         <div className="text-center mb-16 pt-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight uppercase">
               Book a call below with the <br className="hidden md:block"/>
               <span className="text-accent drop-shadow-[0_0_20px_rgba(74,222,128,0.3)]">MyFundingApprove</span> Team
            </h1>
            
            <p className="text-white/80 text-xl md:text-3xl font-bold font-sans max-w-2xl mx-auto leading-relaxed mt-10">
               Please pick a time below for a call:
            </p>
         </div>

         {/* Calendly Embed */}
         <div className="bg-black/60 rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/10 flex flex-col items-center justify-center relative overflow-hidden group mt-12 mb-24 backdrop-blur-xl">
             <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
             
             {/* Themed widget iframe injection point */}
             <div className="w-full h-[700px] relative z-10 p-2 md:p-8">
                 <div 
                   className="calendly-inline-widget w-full h-full rounded-2xl" 
                   data-url="https://calendly.com/qsumrall-creditdisputecloud/business-funding-discovery-call?hide_gdpr_banner=1&background_color=0a0a14&text_color=ffffff&primary_color=4ade80"
                 ></div>
             </div>
         </div>
      </div>
    </div>
  );
};

export default BookingPage;
