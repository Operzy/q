import React, { useEffect } from 'react';
import { Calendar, AlertCircle } from 'lucide-react';

const LOGO_URL = "/logo-CIo0yBvo.png";

const CreditBookingPage = () => {
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
         
         {/* Warning / Notice Box */}
         <div className="mb-12 bg-yellow-500/10 border border-yellow-500/20 rounded-3xl p-6 md:p-8 backdrop-blur-md shadow-[0_0_50px_rgba(234,179,8,0.05)]">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-center md:text-left">
               <div className="w-14 h-14 bg-yellow-500/20 rounded-full flex items-center justify-center shrink-0 border border-yellow-500/30">
                  <AlertCircle className="w-7 h-7 text-yellow-500" strokeWidth={2.5} />
               </div>
               <div>
                  <h2 className="text-xl md:text-2xl font-bold text-yellow-500 mb-2 font-sans tracking-tight">
                     Important Update About Your Funding Application
                  </h2>
                  <p className="text-yellow-500/80 text-sm md:text-base font-medium">
                     Based on the information you submitted, we're currently not onboarding new business funding clients with credit scores below 680.
                  </p>
               </div>
            </div>
         </div>

         {/* Hero Title Area text */}
         <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
               You Qualify for Our <br className="hidden md:block"/>
               <span className="text-accent underline decoration-4 underline-offset-8 drop-shadow-[0_0_20px_rgba(74,222,128,0.3)]">Credit To Capital</span> Program
            </h1>
            
            <h3 className="text-xl md:text-2xl text-white/90 font-bold mb-6 font-sans">
               Designed to increase your credit score so you can qualify for business funding.
            </h3>
            
            <p className="text-white/60 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed mb-10">
               This step helps you strengthen your profile before applying for capital, improving approval odds and protecting your credit.
            </p>
            
            <p className="text-accent font-serif italic text-2xl md:text-3xl">
               Please pick a time below to speak with our team:
            </p>
         </div>

         {/* Calendly Embed */}
         <div className="bg-black/60 rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/10 flex flex-col items-center justify-center relative overflow-hidden group mt-12 mb-24 backdrop-blur-xl">
             <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
             
             {/* Themed widget iframe injection point */}
             <div className="w-full h-[700px] relative z-10 p-2 md:p-8">
                 <div 
                   className="calendly-inline-widget w-full h-full rounded-2xl" 
                   data-url="https://calendly.com/qsumrall-creditdisputecloud/credit-to-capital-discovery-call?hide_gdpr_banner=1&background_color=0a0a14&text_color=ffffff&primary_color=4ade80"
                 ></div>
             </div>
         </div>
      </div>
    </div>
  );
};

export default CreditBookingPage;
