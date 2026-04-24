import React, { useEffect } from 'react';
import { Calendar } from 'lucide-react';

const BookingPage = () => {
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
         
         {/* Hero Title Area text */}
         <div className="text-center mb-12">
            <div className="font-mono text-sm tracking-[0.2em] text-accent uppercase mb-6 flex items-center justify-center gap-3">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.8)]"></div>
              You Are Qualified
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-black font-sans text-white mb-8 tracking-tighter leading-none uppercase">
               Secure Your <br className="hidden md:block"/>
               <span className="font-serif italic font-normal text-accent block mt-4 drop-shadow-[0_0_30px_rgba(74,222,128,0.4)] lowercase">Strategy Session</span>
            </h1>
            
            <p className="text-white/70 text-lg md:text-2xl font-sans max-w-2xl mx-auto leading-relaxed border-t border-white/10 pt-8">
               Select a time below to map out your <strong className="text-white font-bold">Custom Funding Blueprint</strong> with our lead strategists.
            </p>
         </div>

         {/* LeadConnector Booking Embed */}
         <div className="bg-white/5 rounded-[2rem] shadow-[0_30px_100px_rgba(0,0,0,0.8)] border border-white/10 flex flex-col items-center justify-center relative overflow-hidden group mt-8 mb-24 backdrop-blur-xl p-2 md:p-8">
             <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
             <div className="w-full relative z-10 w-full min-h-[700px]">
                 <iframe 
                   src="https://api.leadconnectorhq.com/widget/booking/FahB7qhPb0tgPGNhYwG7" 
                   style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "700px" }} 
                   scrolling="no" 
                   id="FahB7qhPb0tgPGNhYwG7_1777047578034"
                 ></iframe>
             </div>
         </div>
      </div>
    </div>
  );
};

export default BookingPage;
