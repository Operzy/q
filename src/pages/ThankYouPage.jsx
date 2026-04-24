import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Mail, PlayCircle } from 'lucide-react';

const LOGO_URL = "/logo-CIo0yBvo.png";

const ThankYouPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A14] flex flex-col font-sans overflow-x-hidden relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
      
      {/* Top Banner */}
      <div className="bg-primary/20 border-b border-primary/30 w-full sticky top-0 z-50 backdrop-blur-md">
        <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2 text-white font-bold tracking-wide text-sm md:text-base">
            <Mail className="w-5 h-5 text-accent" />
            Thank you! The Mini-Course Has Been Emailed to You!
          </div>
          <a
            href="https://malleable-breeze-a9f.notion.site/Start-Here-Watch-this-first-2e82dbe319c08033875bd5e62c11d328"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent/10 border border-accent text-accent px-6 py-2 rounded-lg font-bold text-sm hover:bg-accent hover:text-dark transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(74,222,128,0.2)]"
          >
            <PlayCircle className="w-4 h-4" /> Access Mini-Course
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center pt-16 pb-24">
        
        {/* Headline */}
        <div className="text-center w-full max-w-4xl mb-16 animate-[scaleIn_0.4s_ease-out]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-sans text-white mb-6 tracking-tighter uppercase leading-[1.1]">
            Want a clear system and step-by-step <br className="hidden md:block"/>
            help to get up to <span className="text-accent drop-shadow-[0_0_20px_rgba(74,222,128,0.3)]">$150K in funding?</span>
          </h1>
        </div>

        {/* Improved Image / Graphic Section */}
        <div className="w-full max-w-5xl mb-16 relative">
           <div className="absolute -inset-10 bg-primary/20 blur-[100px] rounded-full z-[-1] opacity-50"></div>
           <div className="grid md:grid-cols-2 gap-8 items-center bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-md shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="rounded-[1.5rem] overflow-hidden aspect-[4/3] relative border border-white/10 shadow-2xl">
                 <img src="/coach-training-bg.png" className="absolute inset-0 w-full h-full object-cover opacity-90 scale-105 group-hover:scale-100 transition-transform duration-700" alt="Training Preview" />
                 <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent"></div>
                 <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl">
                       <div className="text-accent font-mono text-xs mb-1 uppercase tracking-widest flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span> Free Resource
                       </div>
                       <h4 className="text-white font-bold text-lg leading-tight">Pre-Application Checklist</h4>
                    </div>
                 </div>
              </div>

              <div className="space-y-6">
                 <h3 className="text-2xl md:text-3xl font-bold text-white font-sans">The Required Steps Before You Apply for Capital</h3>
                 <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-white/70">
                       <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                       <span>Ensure personal credit matches 680+ preferred tier before beginning.</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/70">
                       <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                       <span>Verify business entity matches state database perfectly.</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/70">
                       <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                       <span>Remove or dispute inaccurate credit marks immediately.</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/70">
                       <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                       <span>Get matching public address records to prevent fraud triggers.</span>
                    </li>
                 </ul>
              </div>
           </div>
        </div>

        {/* Clear Path Box */}
        <div className="w-full max-w-4xl relative">
          {/* Dashed Border Wrapper mimicking the reference, but elevated */}
          <div className="relative rounded-[2.5rem] p-[2px] bg-gradient-to-b from-accent/40 via-white/5 to-white/5 shadow-[0_0_50px_rgba(74,222,128,0.1)]">
             <div className="bg-dark/95 border border-white/10 rounded-[2.5rem] p-8 md:p-14 backdrop-blur-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[100px] rounded-full"></div>
                
                <h2 className="text-3xl md:text-4xl font-black font-sans text-white text-center mb-10 tracking-tight uppercase">
                   A Clear Path to Business Funding
                </h2>
                
                <div className="space-y-6 text-white/80 text-lg md:text-xl font-sans text-center leading-relaxed max-w-3xl mx-auto">
                   <p>Getting funded isn't about luck. It comes down to having the right system and using it the right way.</p>
                   
                   <p>We guide you through a proven process to help you access up to <span className="text-white font-bold border-b-2 border-accent">$150K+ in business funding</span>, based on your credit and business profile.</p>
                   
                   <p>You'll follow a clear plan that shows you what to apply for, when to do it, and how to protect your credit.</p>
                   
                   <p>Our team supports you at every step, so you stay on track and avoid costly mistakes.</p>
                   
                   <p>No guesswork. No wasted time. Just a system that gets real results in <span className="text-white font-bold border-b-2 border-accent">30 to 90 days</span>.</p>
                   
                   <p className="pt-4 font-serif italic text-2xl md:text-3xl text-white">If you're ready to move forward with clarity and confidence, this is your next step.</p>
                </div>

                <div className="mt-12 flex justify-center">
                   <button 
                      onClick={() => navigate('/vsl')}
                      className="btn-magnetic bg-accent text-dark px-10 py-5 text-xl tracking-tight md:text-2xl shadow-[0_0_40px_rgba(74,222,128,0.3)] w-full sm:w-auto text-center rounded-xl border border-accent hover:shadow-[0_0_60px_rgba(74,222,128,0.5)]"
                   >
                     <span className="btn-bg bg-white"></span>
                     <span className="relative z-10 font-bold group-hover:text-primary transition-colors tracking-widest uppercase">
                        BOOK A CALL WITH OUR TEAM!
                     </span>
                   </button>
                </div>
             </div>
          </div>
        </div>

        {/* Bottom Logo */}
        <div className="mt-20 flex justify-center opacity-70 hover:opacity-100 transition-opacity">
           <img src={LOGO_URL} alt="MyFundingApprove Logo" className="h-10 md:h-12 w-auto object-contain drop-shadow-lg" />
        </div>

      </div>
    </div>
  );
};

export default ThankYouPage;
