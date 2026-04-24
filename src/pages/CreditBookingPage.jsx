import React, { useEffect } from 'react';
import { Calendar, AlertCircle } from 'lucide-react';

const CreditBookingPage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
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
      
      <div className="max-w-4xl mx-auto px-4 w-full relative z-10 animate-[scaleIn_0.4s_ease-out] pt-12 md:pt-20">
         
         {/* Warning / Notice Box */}
         <div className="mb-12 bg-yellow-500/10 border border-yellow-500/20 rounded-3xl p-6 md:p-8 backdrop-blur-md shadow-[0_0_50px_rgba(234,179,8,0.05)]">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-center md:text-left">
               <div className="w-14 h-14 bg-yellow-500/20 rounded-full flex items-center justify-center shrink-0 border border-yellow-500/30">
                  <AlertCircle className="w-7 h-7 text-yellow-500" strokeWidth={2.5} />
               </div>
               <div>
                  <h2 className="text-xl md:text-2xl font-bold text-yellow-500 mb-2 font-sans tracking-tight">
                     Important Update Overview
                  </h2>
                  <p className="text-yellow-500/80 text-sm md:text-base font-medium">
                     Based on the information submitted, we are currently not onboarding new business funding clients with credit scores below 680 directly into the primary program.
                  </p>
               </div>
            </div>
         </div>

         {/* Hero Title Area text */}
         <div className="text-center mb-12">
            <div className="font-mono text-sm tracking-[0.2em] text-accent uppercase mb-6 flex items-center justify-center gap-3">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.8)]"></div>
              Alternative Pathway Unlocked
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-black font-sans text-white mb-8 tracking-tighter leading-none uppercase">
               You Qualify for <br className="hidden md:block"/>
               <span className="font-serif italic font-normal text-accent block mt-4 drop-shadow-[0_0_30px_rgba(74,222,128,0.4)] lowercase">Credit to Capital</span>
            </h1>
            
            <p className="text-white/70 text-lg md:text-2xl font-sans max-w-2xl mx-auto leading-relaxed border-t border-white/10 pt-8 mb-6">
               Designed specifically to <strong className="text-white font-bold">increase your credit score</strong> so you can meet the requirements for premium business funding.
            </p>
            
            <p className="text-white/50 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-10">
               This mandatory step strengthens your profile before applying for capital, maximizing approval odds and protecting your credit from unnecessary inquiries.
            </p>
            
            <h3 className="text-accent font-sans font-bold text-xl md:text-2xl uppercase tracking-widest mt-8">
               Select A Time Below To Get Started
            </h3>
         </div>

         {/* LeadConnector Embed */}
         <div className="bg-white/5 rounded-[2rem] shadow-[0_30px_100px_rgba(0,0,0,0.8)] border border-white/10 flex flex-col items-center justify-center relative overflow-hidden group mt-8 mb-24 backdrop-blur-xl p-2 md:p-8">
             <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
             
             <div className="w-full relative z-10 w-full min-h-[700px]">
                 <iframe 
                   src="https://api.leadconnectorhq.com/widget/booking/xBrRYduZ4Yl0AHsEgiFA" 
                   style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "700px" }} 
                   scrolling="no" 
                   id="xBrRYduZ4Yl0AHsEgiFA_1777047624170"
                 ></iframe>
             </div>
         </div>
      </div>
    </div>
  );
};

export default CreditBookingPage;
