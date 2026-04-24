import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2, ShieldCheck, Navigation, Zap, Play, Lock, ArrowRight, X as XIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const HERO_IMAGE_URL = "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=2600&auto=format&fit=crop"; 
const LAPTOP_GLOW_IMG = "/coach-training-bg.png";

const OptinPage = () => {
  const containerRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [utms, setUtms] = useState({ utm_source: '', utm_medium: '', utm_campaign: '' });
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    let stored = {};
    try { stored = JSON.parse(sessionStorage.getItem('utms') || '{}'); } catch { /* noop */ }
    const captured = {
      utm_source: params.get('utm_source') || stored.utm_source || '',
      utm_medium: params.get('utm_medium') || stored.utm_medium || '',
      utm_campaign: params.get('utm_campaign') || stored.utm_campaign || '',
    };
    setUtms(captured);
    if (params.has('utm_source') || params.has('utm_medium') || params.has('utm_campaign')) {
      sessionStorage.setItem('utms', JSON.stringify(captured));
    }
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleOptInSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    try {
      await fetch('/api/ghl-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, ...utms }),
      });
    } catch (err) {
      console.error('Opt-in submit failed', err);
    }

    navigate('/thank-you');
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text animations
      gsap.fromTo(".hero-element", 
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out", delay: 0.2 }
      );

      // Feature items stagger
      gsap.fromTo(".feature-card",
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out",
          scrollTrigger: {
            trigger: ".feature-grid",
            start: "top 80%",
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full overflow-x-hidden pt-0 mt-0">
      <div className="noise-overlay"></div>
      
      {/* Cinematic Hero Section (Dark Theme) */}
      <section className="hero-section relative min-h-[100dvh] flex items-center justify-center pt-6 md:pt-16 pb-6 md:pb-12 bg-dark">
        <div className="absolute inset-0 z-0">
          <img src={HERO_IMAGE_URL} alt="Architecture" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/70 to-dark"></div>
        </div>

        <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center pb-4 pt-2 md:pb-0 md:pt-16">
          <div className="w-full text-background max-w-5xl mb-4 md:mb-12">
            <h2 className="hero-element text-xs sm:text-sm md:text-base font-bold text-accent tracking-widest uppercase mb-3 md:mb-6 inline-block border border-accent/30 rounded-full px-4 md:px-6 py-2 bg-accent/5 backdrop-blur-sm shadow-[0_0_15px_rgba(74,222,128,0.1)]">
              <span className="inline-block w-2 h-2 mr-2 rounded-full bg-accent animate-pulse"></span> Free Mini-Course
            </h2>
            <h1 className="hero-element text-3xl md:text-5xl lg:text-[4rem] font-black font-sans leading-[1.1] mb-3 md:mb-8 tracking-tighter uppercase whitespace-pre-wrap text-white">
              Funding Training <span className="text-white">For Owners</span>
              <br className="hidden md:block"/> Who Need Capital <span className="text-accent italic font-serif lowercase drop-shadow-[0_0_20px_rgba(74,222,128,0.3)]">Fast.</span>
            </h1>
            <p className="hero-element text-base md:text-3xl text-white/90 md:text-white/80 font-sans md:font-serif md:italic max-w-4xl mx-auto leading-relaxed mt-2">
              Learn the exact order to apply so you can qualify for <span className="text-white font-bold">$50K-$100K in 90-120 days</span>. Avoid the mistakes that get most founders denied.
            </p>
          </div>

          <div className="w-full flex justify-center perspective-[1000px] hero-element mb-4 md:mb-12">
            <div className="relative w-full max-w-4xl transform rotate-y-[-2deg] hover:rotate-y-0 transition-transform duration-700 ease-out hidden lg:block group cursor-pointer" onClick={() => setIsModalOpen(true)}>
               {/* 3D Mockup Container matching VSL */}
               <div className="bg-dark/80 p-4 rounded-[2rem] border border-white/10 shadow-2xl backdrop-blur-xl relative">
                 <div className="absolute -inset-4 bg-primary/20 blur-[80px] rounded-full z-[-1] opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
                 
                 <div className="aspect-[16/9] bg-black rounded-[1rem] overflow-hidden relative">
                    <img src={LAPTOP_GLOW_IMG} className="absolute inset-0 w-full h-full object-cover opacity-50" alt="Course preview" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark to-dark/40"></div>
                    
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-black/40 backdrop-blur-sm group-hover:bg-black/20 transition-colors duration-500">
                       <div className="w-20 h-20 rounded-full bg-accent text-dark flex items-center justify-center mb-6 shadow-[0_0_50px_rgba(74,222,128,0.5)] transform scale-110 group-hover:scale-125 transition-transform duration-500">
                          <Lock className="w-10 h-10" />
                       </div>
                       <h3 className="text-white font-sans font-black text-4xl md:text-5xl uppercase tracking-tighter mb-4 leading-tight group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all">Video Training Locked</h3>
                       <div className="text-white/80 font-serif italic text-2xl group-hover:text-white transition-colors">Click to unlock the blueprint.</div>
                    </div>
                 </div>
               </div>
            </div>
            {/* Mobile Fallback */}
            <div className="lg:hidden w-full max-w-xs sm:max-w-md bg-dark/80 p-2 rounded-[1.25rem] border border-white/10 shadow-2xl backdrop-blur-xl relative cursor-pointer" onClick={() => setIsModalOpen(true)}>
                <div className="absolute -inset-4 bg-primary/20 blur-[50px] rounded-full z-[-1]"></div>
                <div className="aspect-[16/9] bg-black rounded-[0.75rem] overflow-hidden relative">
                   <img src={LAPTOP_GLOW_IMG} className="absolute inset-0 w-full h-full object-cover opacity-50" alt="Course preview" />
                   <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
                   <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center bg-black/40 backdrop-blur-sm">
                      <Lock className="w-8 h-8 text-accent mb-2 drop-shadow-[0_0_20px_rgba(74,222,128,0.8)]" />
                      <h3 className="text-white font-black text-lg uppercase tracking-tighter mb-1">Training Locked</h3>
                      <div className="text-white/80 font-serif italic text-xs">Tap to unlock</div>
                   </div>
                </div>
            </div>
          </div>

          <div className="hero-element flex flex-col items-center w-full">
            <div className="flex items-center gap-4 text-white/80 text-sm md:text-base font-mono mb-6 uppercase tracking-widest bg-white/5 border border-white/10 px-6 py-2 rounded-full">
               <span className="line-through opacity-60">Normally $997</span> <span className="text-accent font-bold drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]">100% FREE TODAY</span>
            </div>
            
            <button onClick={() => setIsModalOpen(true)} className="btn-magnetic bg-accent text-dark px-10 py-5 text-xl tracking-tight md:text-2xl shadow-[0_0_40px_rgba(74,222,128,0.3)] w-full sm:w-auto min-w-[320px] text-center rounded-xl">
              <span className="btn-bg bg-white"></span>
              <span className="relative z-10 font-bold group-hover:text-primary transition-colors tracking-widest uppercase">UNLOCK THE TRAINING NOW</span>
            </button>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-background/50 font-mono">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Secure & Instant Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Core Frameworks Section (Clean White) */}
      <section className="py-24 bg-background relative z-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-xs md:text-sm font-bold font-mono text-primary tracking-widest uppercase mb-4">What You'll Get Inside</h2>
            <p className="text-4xl md:text-5xl font-sans font-bold text-dark mb-4">The Execution Tools.</p>
            <p className="text-lg text-dark/60 font-serif italic text-2xl">Everything you need to secure funding without the guesswork.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 feature-grid">
            
            {/* Card 1: Funding Readiness */}
            <div className="feature-card bg-white rounded-[2rem] p-8 shadow-xl border border-black/5 flex flex-col h-[420px] relative group hover:-translate-y-2 transition-transform duration-500 overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="flex-1 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                     <ShieldCheck className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-2xl mb-3 text-dark font-sans tracking-tight">Funding Readiness</h3>
                  <p className="text-dark/60 text-sm mb-8 leading-relaxed">Find out if you're ready to apply now and exactly what to fix first.</p>
                  <div className="space-y-3 font-sans text-xs">
                     <div className="flex items-center justify-between p-3 rounded-xl border border-black/5 bg-background group-hover:border-primary/20 transition-colors">
                        <span className="text-dark/80 font-medium">750 Personal Credit</span>
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                     </div>
                     <div className="flex items-center justify-between p-3 rounded-xl border border-black/5 bg-background group-hover:border-primary/20 transition-colors">
                        <span className="text-dark/80 font-medium opacity-50">High Credit Utilization</span>
                        <div className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center"><div className="w-1.5 h-0.5 bg-red-500 rounded-full"></div></div>
                     </div>
                     <div className="flex items-center justify-between p-3 rounded-xl border border-black/5 bg-background group-hover:border-primary/20 transition-colors">
                        <span className="text-dark/80 font-medium">Business Bank Setup</span>
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                     </div>
                  </div>
               </div>
               <div className="pt-6 mt-4 border-t border-black/5 flex justify-between items-center font-mono text-xs tracking-wider relative z-10">
                  <span className="text-dark/40 uppercase">Tool 01</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-bold">1-PAGE SCORECARD</span>
               </div>
            </div>

            {/* Card 2: Approval Sequence */}
            <div className="feature-card bg-dark rounded-[2rem] p-8 shadow-xl border border-white/10 flex flex-col h-[420px] relative group hover:-translate-y-2 transition-transform duration-500">
               <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="flex-1 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                     <Navigation className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-2xl mb-3 text-white font-sans tracking-tight">Approval Sequence</h3>
                  <p className="text-white/60 text-sm mb-8 leading-relaxed">Learn the best order to apply so you avoid denials and compound your approvals.</p>
                  <div className="relative pl-6 space-y-6 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/10">
                     <div className="relative">
                        <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-accent border-4 border-dark"></div>
                        <div className="text-white text-sm font-bold">Business Credit Line</div>
                     </div>
                     <div className="relative">
                        <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-white/20 border-4 border-dark"></div>
                        <div className="text-white/70 text-sm">Business Credit Card</div>
                     </div>
                     <div className="relative">
                        <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-white/20 border-4 border-dark"></div>
                        <div className="text-white/70 text-sm">Vehicle Financing</div>
                     </div>
                  </div>
               </div>
               <div className="pt-6 mt-4 border-t border-white/10 flex justify-between items-center font-mono text-xs tracking-wider relative z-10">
                  <span className="text-white/40 uppercase">Tool 02</span>
                  <span className="bg-white/10 text-white px-3 py-1 rounded-full font-bold">ORDER MATRIX</span>
               </div>
            </div>

            {/* Card 3: 90-Day Plan */}
            <div className="feature-card bg-white rounded-[2rem] p-8 shadow-xl border border-black/5 flex flex-col h-[420px] relative group hover:-translate-y-2 transition-transform duration-500 overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="flex-1 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                     <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-2xl mb-3 text-dark font-sans tracking-tight">30-90 Day Plan</h3>
                  <p className="text-dark/60 text-sm mb-8 leading-relaxed">Get a simple execution plan so you always know what your next move is.</p>
                  <div className="grid grid-cols-3 gap-2 h-24">
                     <div className="flex flex-col gap-2">
                        <div className="bg-primary/5 rounded border border-primary/20 flex-1 flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-accent" /></div>
                        <div className="bg-primary/5 rounded border border-primary/20 flex-1 flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-accent" /></div>
                     </div>
                     <div className="flex flex-col gap-2 opacity-60">
                        <div className="bg-background rounded border border-black/10 flex-1 flex items-center justify-center"><Lock className="w-3 h-3 text-dark/40" /></div>
                        <div className="bg-background rounded border border-black/10 flex-1 flex items-center justify-center"><Lock className="w-3 h-3 text-dark/40" /></div>
                     </div>
                     <div className="flex flex-col gap-2 opacity-30">
                        <div className="bg-background rounded border border-black/10 flex-1 flex items-center justify-center"><Lock className="w-3 h-3 text-dark/40" /></div>
                        <div className="bg-background rounded border border-black/10 flex-1 flex items-center justify-center"><Lock className="w-3 h-3 text-dark/40" /></div>
                     </div>
                  </div>
               </div>
               <div className="pt-6 mt-4 border-t border-black/5 flex justify-between items-center font-mono text-xs tracking-wider relative z-10">
                  <span className="text-dark/40 uppercase">Tool 03</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-bold">EXECUTION MAP</span>
               </div>
            </div>

          </div>

          <div className="mt-20 text-center feature-card">
              <button onClick={() => setIsModalOpen(true)} className="btn-magnetic bg-primary text-white px-10 py-5 text-xl md:text-2xl shadow-xl inline-flex items-center gap-4 rounded-xl">
                <span className="btn-bg bg-accent"></span>
                <span className="relative z-10 font-bold group-hover:text-dark transition-colors font-sans tracking-tight">UNLOCK FREE ACCESS NOW</span>
                <ArrowRight className="relative z-10 w-6 h-6 group-hover:text-dark transition-colors" />
              </button>
              <p className="text-dark/50 text-sm mt-4 font-mono uppercase tracking-widest"><Lock className="w-3 h-3 inline pb-0.5" /> Secure & Instant Delivery</p>
          </div>
        </div>
      </section>

      {/* Footer Minimal */}
      <footer className="bg-dark text-white/40 py-8 border-t border-white/10 text-center text-sm font-mono">
         <div className="container mx-auto px-4">
            © {new Date().getFullYear()} MyFundingApprove. All rights reserved.
         </div>
      </footer>

      {/* Dynamic Pop-up Modal (Cinematic Premium Redesign) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-dark/90 backdrop-blur-xl transition-opacity duration-500" onClick={() => setIsModalOpen(false)}></div>
          
          <div className="relative bg-[#0A0A14] border border-white/10 rounded-[2rem] w-full max-w-2xl shadow-[0_0_80px_rgba(0,0,0,0.8)] overflow-hidden animate-[scaleIn_0.4s_cubic-bezier(0.16,1,0.3,1)]">
             {/* Glow Overlay */}
             <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
             
             {/* Header */}
             <div className="pt-10 px-8 md:px-12 text-center relative z-10">
                <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-white/30 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-full p-2">
                  <XIcon className="w-5 h-5" />
                </button>
                
                <h2 className="text-3xl md:text-5xl font-serif italic text-white tracking-tight mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">Where Should We Send</h2>
                <h3 className="text-2xl md:text-3xl font-bold font-sans text-accent tracking-tighter uppercase mb-2 drop-shadow-sm">The Mini-Course?</h3>
                <p className="text-white/60 text-sm md:text-base font-sans font-light mb-8 max-w-sm mx-auto">Fill out the form below to receive instant access to your free training and execution tools.</p>
             </div>

             {/* Content Area */}
             <div className="bg-black/40 border-t border-white/5 px-8 py-8 md:px-12 relative z-10">
                <form className="space-y-5" onSubmit={handleOptInSubmit}>
                   <div>
                      <label className="block text-xs font-bold text-white/70 mb-2 font-mono uppercase tracking-widest">Full Name <span className="text-accent text-sm">*</span></label>
                      <input
                         type="text"
                         name="name"
                         value={formData.name}
                         onChange={handleChange}
                         placeholder="Enter your full name"
                         className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-lg text-white outline-none focus:bg-white/10 focus:border-accent/50 focus:ring-4 focus:ring-accent/10 transition-all placeholder:text-white/20 font-sans backdrop-blur-md"
                         required
                      />
                   </div>
                   <div>
                      <label className="block text-xs font-bold text-white/70 mb-2 font-mono uppercase tracking-widest">Phone <span className="text-accent text-sm">*</span></label>
                      <input
                         type="tel"
                         name="phone"
                         value={formData.phone}
                         onChange={handleChange}
                         placeholder="(555) 000-0000"
                         className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-lg text-white outline-none focus:bg-white/10 focus:border-accent/50 focus:ring-4 focus:ring-accent/10 transition-all placeholder:text-white/20 font-sans backdrop-blur-md"
                         required
                      />
                   </div>
                   <div>
                      <label className="block text-xs font-bold text-white/70 mb-2 font-mono uppercase tracking-widest">Email <span className="text-accent text-sm">*</span></label>
                      <input
                         type="email"
                         name="email"
                         value={formData.email}
                         onChange={handleChange}
                         placeholder="you@company.com"
                         className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-lg text-white outline-none focus:bg-white/10 focus:border-accent/50 focus:ring-4 focus:ring-accent/10 transition-all placeholder:text-white/20 font-sans backdrop-blur-md"
                         required
                      />
                   </div>

                   <button type="submit" disabled={submitting} className="btn-magnetic bg-accent text-dark w-full py-5 text-xl mt-6 rounded-2xl border border-accent shadow-[0_0_20px_rgba(74,222,128,0.2)] hover:shadow-[0_0_30px_rgba(74,222,128,0.4)] disabled:opacity-70 disabled:cursor-not-allowed">
                      <span className="btn-bg bg-white"></span>
                      <span className="relative z-10 font-bold group-hover:text-primary transition-colors font-sans tracking-widest uppercase">{submitting ? 'Sending...' : 'GET ACCESS NOW'}</span>
                   </button>
                   
                   <p className="text-center text-[10px] text-white/30 font-sans mt-8 leading-relaxed max-w-xs mx-auto uppercase tracking-wide">
                      By completing this form, I agree to having the course & bonuses sent to me and I agree to the terms & privacy policy of MyFundingApprove LLC.
                   </p>
                </form>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptinPage;
