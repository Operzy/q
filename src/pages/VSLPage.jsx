import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Anchor, Crosshair, Map, Navigation, BarChart, Server, Fingerprint, Activity, Clock, Zap, CheckCircle2, X as XIcon, ArrowRight, ArrowLeft } from 'lucide-react';

const YoutubeIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.86-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);


gsap.registerPlugin(ScrollTrigger);

const LOGO_URL = "/logo-CIo0yBvo.png";
const HERO_IMAGE_URL = "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=2600&auto=format&fit=crop"; // Organic/Tech architecture
const PHILOSOPHY_IMG_URL = "https://images.unsplash.com/photo-1541888081622-4a0082729e24?q=80&w=2600&auto=format&fit=crop";
const COACH_IMG_URL = "/1760388842050.jpg";

const App = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formState, setFormState] = useState({ funding: "", credit: "", invest: "" });

  const handleNext = () => {
    if (step === 1 && formState.funding) setStep(2);
    else if (step === 2 && formState.credit) {
      if (formState.credit === "Below 620" || formState.credit === "620-679") {
        setIsQuizOpen(false);
        navigate('/credit-book');
      } else {
        setStep(3);
      }
    } else if (step === 3 && formState.invest) {
      if (formState.invest === "Yes") {
        setIsQuizOpen(false);
        navigate('/book');
      } else {
        setStep(4);
      }
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text animations
      gsap.fromTo(".hero-element",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out", delay: 0.2 }
      );



      // Sticky Stacking Archive Cards
      const stackCards = gsap.utils.toArray(".stack-card");
      stackCards.forEach((card, i) => {
        if (i < stackCards.length - 1) {
          ScrollTrigger.create({
            trigger: card,
            start: "top top",
            pin: true,
            pinSpacing: false,
            endTrigger: stackCards[i + 1],
            end: "top top",
            animation: gsap.to(card, {
              scale: 0.9,
              opacity: 0.5,
              filter: "blur(10px)",
              ease: "none",
            }),
            scrub: true,
          });
        }
      });

      // Feature items stagger
      gsap.fromTo(".feature-card",
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out",
          scrollTrigger: {
            trigger: ".feature-grid",
            start: "top 80%",
          }
        }
      );

      // Philosophy Text reveal
      gsap.fromTo(".phil-text-1",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".philosophy-section", start: "top 70%" } }
      );
      gsap.fromTo(".phil-text-2",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out", scrollTrigger: { trigger: ".philosophy-section", start: "top 70%" } }
      );

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full overflow-x-hidden pt-0 mt-0">
      <div className="noise-overlay"></div>



      {/* Hero Section */}
      <section className="hero-section relative min-h-[100dvh] flex items-center justify-center pt-24 pb-12 bg-dark">
        <div className="absolute inset-0 z-0">
          <img src={HERO_IMAGE_URL} alt="Architecture" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/70 to-dark"></div>
        </div>

        <div className="container mx-auto px-4 z-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 w-full text-center lg:text-left text-background">
            <h2 className="hero-element text-sm md:text-base font-bold text-accent tracking-widest uppercase mb-4">
              For Founders Who Need Capital Fast
            </h2>
            <h1 className="hero-element text-4xl md:text-5xl lg:text-6xl font-bold font-sans leading-tight mb-2">
              Unlock up to <span className="text-accent underline decoration-2 underline-offset-8">$150K</span>
            </h1>
            <p className="hero-element text-3xl md:text-5xl lg:text-6xl font-serif italic text-background/90 mb-6">
              With a Proven System.
            </p>
            <p className="hero-element text-lg md:text-xl text-background/70 max-w-xl mx-auto lg:mx-0 mb-8 font-sans">
              In 90 days or less, we guide you through a custom funding plan so you can move forward with confidence and protect your credit. Completely guided step-by-step.
            </p>
            <div className="hero-element flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button onClick={(e) => { e.preventDefault(); setIsQuizOpen(true); }} className="btn-magnetic bg-accent text-dark px-8 py-4 text-lg shadow-[0_0_30px_rgba(74,222,128,0.3)]">
                <span className="btn-bg bg-primary"></span>
                <span className="relative z-10 group-hover:text-white transition-colors">BOOK YOUR STRATEGY SESSION</span>
              </button>
            </div>
            <div className="hero-element mt-6 flex items-center justify-center lg:justify-start gap-4 text-sm text-background/50 font-mono">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> No wasted inquiries</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> No blind applications</span>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center perspective-[1000px] hero-element w-full">
            <div className="relative w-full max-w-2xl transform rotate-y-[-5deg] hover:rotate-y-0 transition-transform duration-700 ease-out hidden lg:block">
              {/* 3D Mockup Container */}
              <div className="bg-dark/80 p-4 rounded-[2rem] border border-white/10 shadow-2xl backdrop-blur-xl">
                <div className="aspect-[16/9] bg-black rounded-[1rem] overflow-hidden relative group">
                  <iframe
                    src="https://player.vimeo.com/video/1157540125?h=2275a41cf7&title=0&byline=0&portrait=0"
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    title="VSL"
                  ></iframe>
                </div>
              </div>
            </div>
            {/* Mobile simplified view */}
            <div className="lg:hidden w-full bg-dark/80 p-2 md:p-4 rounded-[1.5rem] border border-white/10 shadow-2xl backdrop-blur-xl">
              <div className="aspect-[16/9] bg-black rounded-[1rem] overflow-hidden relative">
                <iframe
                  src="https://player.vimeo.com/video/1157540125?h=2275a41cf7&title=0&byline=0&portrait=0"
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  title="VSL"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Band Strip */}
      <div className="bg-primary text-background py-4 flex overflow-hidden whitespace-nowrap border-y border-white/10">
        <div className="flex animate-marquee-alt">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="mx-8 flex items-center gap-4 font-mono text-sm opacity-80">
              <Activity className="w-4 h-4" /> 0% INTRO APR
              <span className="mx-4 text-accent">•</span> PROVEN STEP-BY-STEP PROCESS
              <span className="mx-4 text-accent">•</span> PROTECT YOUR CREDIT PROFILE
            </span>
          ))}
        </div>
      </div>

      {/* Counter Section */}
      <CounterSection />

      {/* Philosophy Statement */}
      <section className="philosophy-section relative pt-16 pb-32 bg-dark text-background overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={PHILOSOPHY_IMG_URL} className="w-full h-full object-cover" alt="" />
        </div>
        <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
          <p className="phil-text-1 text-xl md:text-2xl font-sans text-white/60 mb-8 max-w-2xl mx-auto">
            Most business owners get denied because they apply the wrong way and in the wrong order. Banks don't approve people. They approve <span className="text-white font-bold">profiles</span>.
          </p>
          <div className="w-px h-16 bg-gradient-to-b from-accent to-transparent mx-auto my-8"></div>
          <p className="phil-text-2 text-3xl md:text-5xl lg:text-7xl font-serif italic font-bold">
            The Capital Stack System™ <span className="text-accent">fixes that.</span>
          </p>
        </div>
      </section>

      {/* Bonuses/Features (Interactive Artifacts) */}
      <section id="bonuses" className="py-24 bg-background relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-sans font-bold mb-4 text-primary">The Core Frameworks</h2>
            <p className="text-lg text-dark/60 font-serif italic text-2xl">Visualizing the mechanics of your success.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 feature-grid">
            {/* Shuffler Card */}
            <ShuffleCard />

            {/* Typewriter Card */}
            <TypewriterCard />

            {/* Scheduler Card */}
            <SchedulerCard />
          </div>
        </div>
      </section>

      {/* Protocol Stacking - Sticky Cards */}
      <section id="system" className="bg-dark text-background hidden md:block relative">
        <div className="h-screen w-full flex items-center justify-center sticky top-0 stack-card z-10 bg-primary border-b border-white/5">
          <ProtocolCard
            num="01"
            title="Profile Optimization"
            desc="We analyze your personal and business credit to ensure you look perfect to lenders, guaranteeing approval readiness."
            Icon={ShieldCheck}
          />
        </div>
        <div className="h-screen w-full flex items-center justify-center sticky top-0 stack-card z-20 bg-[#163025] border-b border-white/5 shadow-2xl">
          <ProtocolCard
            num="02"
            title="Strategy Selection"
            desc="We identify the exact banks and precise products you uniquely pre-qualify for, eliminating guesswork."
            Icon={Navigation}
          />
        </div>
        <div className="h-screen w-full flex items-center justify-center sticky top-0 stack-card z-30 bg-[#0d1c15] shadow-2xl">
          <ProtocolCard
            num="03"
            title="Capital Acquisition"
            desc="We secure 0% introductory funding for you, injecting up to $150,000+ directly into your business."
            Icon={Zap}
          />
        </div>
      </section>

      {/* Protocol Mobile Fallback */}
      <section className="bg-dark text-background md:hidden py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-accent">The Stacking Archive</h2>
          <div className="space-y-6">
            <ProtocolCard num="01" title="Profile Optimization" desc="We analyze your personal and business credit to ensure you look perfect to lenders, guaranteeing approval readiness." Icon={ShieldCheck} />
            <ProtocolCard num="02" title="Strategy Selection" desc="We identify the exact banks and precise products you uniquely pre-qualify for, eliminating guesswork." Icon={Navigation} />
            <ProtocolCard num="03" title="Capital Acquisition" desc="We secure 0% introductory funding for you, injecting up to $150,000+ directly into your business." Icon={Zap} />
          </div>
        </div>
      </section>

      {/* Coach Q About Section */}
      <section id="about" className="py-24 bg-white relative">
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
               <div className="w-full md:w-5/12">
                  <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-black/5 relative group">
                     <img src={COACH_IMG_URL} alt="Coach Quintel" className="object-cover w-full h-full transition-all duration-1000 scale-105 group-hover:scale-100" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                     <div className="absolute bottom-8 left-8">
                         <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 px-3 py-1.5 rounded-full mb-2 backdrop-blur-md">
                             <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
                             <span className="text-white font-mono text-[10px] font-bold uppercase tracking-widest">Lead Strategist</span>
                         </div>
                         <div className="text-white font-black text-3xl uppercase tracking-tight">Quintel Sumrall</div>
                     </div>
                  </div>
               </div>
               <div className="w-full md:w-7/12">
                 <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-dark mb-6 uppercase tracking-tighter leading-tight">
                    Bridging The <br className="hidden md:block"/>
                    <span className="font-serif italic text-primary font-normal transform -rotate-1 inline-block normal-case mt-2">financial gap.</span>
                 </h2>
                 <div className="space-y-5 text-dark/70 font-sans text-lg md:text-xl leading-relaxed">
                    <p>Quintel created the first DIY cloud base credit repair platform for consumers. He has amassed a broad range of experience for all facets of credit, collection, and business management.</p>
                    <div className="border-l-[3px] border-primary/40 pl-6 my-8 py-2">
                       <p className="font-serif italic text-2xl md:text-3xl text-dark/90 leading-tight">“I have reviewed thousands of credit reports, personal & business, over the years, and know the challenges business owners face when looking to expand their businesses using their personal credit.”</p>
                    </div>
                    <p>Serving as an advisor to many start-up businesses, Quintel connects businesses with loan programs to help them grow their business to the next level.</p>
                 </div>

                 {/* Social Proof Metrics */}
                 <div className="mt-12 flex flex-wrap items-center gap-6">
                    <div className="flex items-center gap-4 bg-black/5 border border-black/5 backdrop-blur-sm rounded-2xl px-6 py-4 hover:border-black/10 transition-colors group">
                       <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20 group-hover:bg-red-500/20 transition-colors">
                          <YoutubeIcon className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
                       </div>
                       <div className="font-sans">
                          <div className="font-black text-dark text-2xl leading-none mb-1 tracking-tighter">193k+</div>
                          <div className="text-[10px] text-dark/40 uppercase tracking-widest font-bold">Subscribers</div>
                       </div>
                    </div>
                    
                    <div className="flex items-center gap-4 bg-black/5 border border-black/5 backdrop-blur-sm rounded-2xl px-6 py-4 hover:border-black/10 transition-colors group">
                       <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center border border-pink-500/20 group-hover:bg-pink-500/20 transition-colors">
                          <InstagramIcon className="w-5 h-5 text-pink-500 group-hover:scale-110 transition-transform" />
                       </div>
                       <div className="font-sans">
                          <div className="font-black text-dark text-2xl leading-none mb-1 tracking-tighter">82k+</div>
                          <div className="text-[10px] text-dark/40 uppercase tracking-widest font-bold">Followers</div>
                       </div>
                    </div>
                 </div>
               </div>
            </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-24 bg-[#FAF8F5] relative border-y border-black/5">
         <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
            <div className="p-8 md:p-16 border border-black/5 rounded-[2.5rem] bg-white shadow-[0_30px_60px_rgba(0,0,0,0.05)] relative overflow-hidden group">
               <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-80"></div>
               <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-8 border border-primary/10">
                  <ShieldCheck className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-500" />
               </div>
               <h3 className="text-3xl md:text-5xl font-black uppercase text-dark mb-6 tracking-tighter">The Official <span className="font-serif font-normal italic lowercase text-primary">guarantee.</span></h3>
               <p className="text-xl md:text-4xl font-serif italic text-dark/80 leading-tight">
                 "We guarantee you qualify for a minimum of $50,000 of 0% funding in 90 days or we work with you 1-on-1 until you do."
               </p>
            </div>
        </div>
      </section>

      {/* Pricing / Booking CTA */}
      <section id="book" className="py-24 bg-dark text-background text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-bold font-sans mb-6">Ready to Run the Stack?</h2>
          <p className="text-xl text-white/70 mb-10 font-sans font-light">Stop wasting inquiries. Start landing approvals with a system engineered for outcomes.</p>

          <div className="bg-primary/20 border border-accent/20 rounded-[3rem] p-10 backdrop-blur-md mb-12 transform hover:-translate-y-2 transition-transform duration-500">
            <div className="text-accent font-mono text-sm tracking-widest uppercase mb-4">Beta Offer</div>
            <h3 className="text-3xl font-bold mb-4">The Capital Stack System™</h3>
            <ul className="text-left max-w-md mx-auto space-y-4 mb-8 text-white/80">
              <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0" /> Capital Stack Score & Readiness Tier</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0" /> Step-by-Step Stack Plan™ Matrix</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0" /> Underwriter-Ready Packet Checking</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0" /> Private Client Execution Portal</li>
            </ul>
            <p className="text-4xl font-serif font-bold text-white mb-8">$2,500 - $3,000</p>
            <button onClick={(e) => { e.preventDefault(); setIsQuizOpen(true); }} className="btn-magnetic bg-accent text-dark px-10 py-5 text-xl w-full sm:w-auto shadow-[0_0_40px_rgba(74,222,128,0.2)]">
              <span className="btn-bg bg-white"></span>
              <span className="relative z-10 font-bold group-hover:text-primary transition-colors cursor-pointer">BOOK STRATEGY SESSION NOW</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#05050A] pt-16 pb-8 px-4 border-t border-white/5 relative z-20">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-4 gap-8 mb-12 text-white/60">
          <div className="md:col-span-2">
            <div className="mb-6 flex items-center">
              <img src={LOGO_URL} alt="MyFundingApprove Logo" className="h-8 md:h-10 w-auto object-contain drop-shadow-md" />
            </div>
            <p className="max-w-xs font-sans text-sm">Empowering founders with the exact sequences and operational tools required to secure massive capital.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 font-mono text-sm uppercase">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:Qsumrall@creditdisputecloud.com" className="hover:text-accent interactive-link inline-block">Qsumrall@creditdisputecloud.com</a></li>
              <li><a href="#" className="hover:text-accent interactive-link inline-block">Partner With Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 font-mono text-sm uppercase">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-accent interactive-link inline-block">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-accent interactive-link inline-block">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row justify-between items-center text-white/40 text-xs border-t border-white/10 pt-8">
          <p>© {new Date().getFullYear()} MyFundingApprove. All rights reserved.</p>
          <div className="flex items-center gap-2 mt-4 sm:mt-0 font-mono">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
            SYSTEM OPERATIONAL
          </div>
        </div>
      </footer>

      {/* Quiz Lead Qualifier Modal (Cinematic Premium Redesign) */}
      {isQuizOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-dark/90 backdrop-blur-xl transition-opacity duration-500" onClick={() => setIsQuizOpen(false)}></div>

          <div className="relative bg-[#0A0A14] border border-white/10 rounded-[2rem] w-full max-w-2xl shadow-[0_0_80px_rgba(0,0,0,0.8)] overflow-hidden animate-[scaleIn_0.4s_cubic-bezier(0.16,1,0.3,1)]">
            {/* Glow Overlay */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>

            {/* Header */}
            <div className="pt-10 px-8 md:px-12 text-center relative z-10">
              <button onClick={() => setIsQuizOpen(false)} className="absolute top-6 right-6 text-white/30 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-full p-2">
                <XIcon className="w-5 h-5" />
              </button>

              {step < 4 && (
                <div className="mb-8">
                  <div className="font-mono text-[10px] tracking-[0.2em] text-accent uppercase mb-4 flex items-center justify-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
                    Step 0{step} of 03
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif italic text-white tracking-tight mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">Application Assessment</h2>
                  <p className="text-white/60 text-sm md:text-base font-sans font-light">Takes 30 seconds. Determine your profile readiness immediately.</p>
                </div>
              )}
            </div>

            {/* Content Area */}
            <div className="px-8 md:px-12 pb-8 md:pb-12 relative z-10">
              {step === 1 && (
                <div className="animate-[scaleIn_0.3s_ease-out]">
                  <h4 className="font-sans text-xl md:text-2xl font-bold text-white mb-8 text-center">How much funding are you looking to secure?</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {["Under 50K", "$50K-$100K", "$100K-$200K", "200K+"].map(opt => (
                      <button
                        key={opt}
                        onClick={() => setFormState({ ...formState, funding: opt })}
                        className={`
                                  relative p-6 rounded-2xl border text-left font-sans transition-all duration-300
                                  ${formState.funding === opt
                            ? 'bg-accent/10 border-accent text-accent shadow-[0_0_30px_rgba(74,222,128,0.1)]'
                            : 'bg-white/5 border-white/5 text-white/80 hover:bg-white/10 hover:border-white/20'
                          }
                               `}
                      >
                        <span className="font-bold text-lg">{opt}</span>
                        <div className={`absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 ${formState.funding === opt ? 'border-accent bg-accent' : 'border-white/20'}`}></div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="animate-[scaleIn_0.3s_ease-out]">
                  <h4 className="font-sans text-xl md:text-2xl font-bold text-white mb-8 text-center">What is your estimated personal credit score?</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {["Below 620", "620-679", "680-699", "700-749", "750+"].map(opt => (
                      <button
                        key={opt}
                        onClick={() => setFormState({ ...formState, credit: opt })}
                        className={`
                                  relative p-6 rounded-2xl border text-left font-sans transition-all duration-300
                                  ${formState.credit === opt
                            ? 'bg-accent/10 border-accent text-accent shadow-[0_0_30px_rgba(74,222,128,0.1)]'
                            : 'bg-white/5 border-white/5 text-white/80 hover:bg-white/10 hover:border-white/20'
                          }
                               `}
                      >
                        <span className="font-bold text-lg">{opt}</span>
                        <div className={`absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 ${formState.credit === opt ? 'border-accent bg-accent' : 'border-white/20'}`}></div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="animate-[scaleIn_0.3s_ease-out]">
                  <h4 className="font-sans text-xl md:text-2xl font-bold text-white mb-8 text-center leading-relaxed">
                    Our services start at $2,500.<br />Do you have the ability to invest?
                  </h4>
                  <div className="flex flex-col gap-4 max-w-sm mx-auto">
                    {["Yes", "No"].map(opt => (
                      <button
                        key={opt}
                        onClick={() => setFormState({ ...formState, invest: opt })}
                        className={`
                                  relative p-6 w-full rounded-2xl border text-center font-sans transition-all duration-300
                                  ${formState.invest === opt
                            ? 'bg-accent/10 border-accent text-accent shadow-[0_0_30px_rgba(74,222,128,0.1)]'
                            : 'bg-white/5 border-white/5 text-white/80 hover:bg-white/10 hover:border-white/20'
                          }
                               `}
                      >
                        <span className="font-bold text-xl uppercase tracking-widest">{opt}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="text-center py-16 animate-[scaleIn_0.3s_ease-out]">
                  <div className="w-20 h-20 bg-accent/10 border border-accent/20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(74,222,128,0.15)]">
                    <CheckCircle2 className="w-10 h-10 text-accent" />
                  </div>
                  <h4 className="font-sans text-3xl text-white font-bold mb-4 tracking-tight">Application Received</h4>
                  <p className="text-white/60 text-lg font-light max-w-sm mx-auto mb-10">We've received your application. We're going to review it and be in touch soon.</p>
                  <button onClick={() => setIsQuizOpen(false)} className="btn-magnetic bg-white/5 border border-white/10 text-white px-10 py-4 rounded-2xl font-bold font-sans hover:bg-white/10 hover:border-white/30 transition-all">
                    <span className="relative z-10 transition-colors tracking-wider text-sm uppercase">RETURN TO SITE</span>
                  </button>
                </div>
              )}
            </div>

            {/* Bottom Navigation */}
            {step < 4 && (
              <div className="bg-black/40 border-t border-white/5 px-8 py-5 flex justify-between items-center relative z-10">
                {step > 1 ? (
                  <button onClick={() => setStep(step - 1)} className="text-white/50 hover:text-white flex items-center gap-2 font-mono text-xs tracking-widest transition-colors uppercase">
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                ) : <div></div>}

                <button
                  onClick={handleNext}
                  className={`
                      flex items-center gap-3 font-bold font-sans text-sm tracking-widest uppercase transition-all duration-300 px-8 py-4 rounded-xl border
                      ${((step === 1 && !formState.funding) || (step === 2 && !formState.credit) || (step === 3 && !formState.invest))
                      ? 'bg-white/5 border-transparent text-white/30 cursor-not-allowed'
                      : 'bg-accent text-dark border-accent shadow-[0_0_20px_rgba(74,222,128,0.2)] hover:shadow-[0_0_30px_rgba(74,222,128,0.4)] hover:bg-white hover:border-white'
                    }
                   `}
                  disabled={(step === 1 && !formState.funding) || (step === 2 && !formState.credit) || (step === 3 && !formState.invest)}
                >
                  Continue <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};

// --- Custom Components ---

// Card 1: The Shuffler (Scorecard)
const ShuffleCard = () => {
  const [items, setItems] = useState([
    { id: 1, text: "Inquiries Count (Recent)", bg: "bg-primary text-white" },
    { id: 2, text: "Utilization Band", bg: "bg-[#25523f] text-white" },
    { id: 3, text: "Comparable Limits Strength", bg: "bg-[#2f664f] text-white" }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems(prev => {
        const newArr = [...prev];
        const last = newArr.pop();
        newArr.unshift(last);
        return newArr;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="feature-card bg-white rounded-[2rem] p-8 shadow-xl border border-black/5 flex flex-col h-[400px] relative group overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="flex-1">
        <h3 className="font-bold text-xl mb-2 text-primary font-sans">The Capital Stack Score™</h3>
        <p className="text-dark/60 text-sm mb-6 leading-relaxed">We grade your profile using a simple 3-tier rating: Green, Yellow, or Red to determine application readiness.</p>

        <div className="relative h-40 w-full mt-8">
          {items.map((item, i) => (
            <div
              key={item.id}
              className={`absolute left-0 right-0 p-4 rounded-xl flex items-center justify-between shadow-lg font-mono text-xs transition-all duration-[600ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${item.bg}`}
              style={{
                top: `${i * 15}px`,
                transform: `scale(${1 - i * 0.05})`,
                zIndex: 10 - i,
                opacity: 1 - i * 0.2
              }}
            >
              <span>{item.text}</span>
              <Activity className="w-4 h-4 opacity-50" />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-black/5 flex justify-between items-center font-mono text-xs tracking-wider">
        <span className="text-dark/40 uppercase">1-Page Scorecard</span>
        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-bold">GO / NO-GO</span>
      </div>
    </div>
  );
};

// Card 2: The Typewriter (Stack Order Matrix)
const TypewriterCard = () => {
  const codeString = `> INIT STACK_PLAN
> ORDER: NATIONAL -> REGIONAL -> CU
> PRODUCTS: 0% CARDS -> LOC
> INQUIRY SHIELD: ACTIVE
> BATCHING: TIGHT WINDOW
> EXECUTING...`;

  const [text, setText] = useState("");
  const cursorBlink = useRef(true);

  useEffect(() => {
    let i = 0;
    setText("");
    const typing = setInterval(() => {
      setText(codeString.substring(0, i));
      i++;
      if (i > codeString.length + 20) i = 0; // restart
    }, 50);
    return () => clearInterval(typing);
  }, []);

  return (
    <div className="feature-card bg-dark text-white rounded-[2rem] p-8 shadow-xl border border-white/10 flex flex-col h-[400px] relative group hover:-translate-y-2 transition-transform duration-300">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-xl text-white font-sans">The Stack Order Matrix™</h3>
        <div className="flex items-center gap-2 text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded-full">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div> Live Feed
        </div>
      </div>
      <p className="text-white/60 text-sm mb-6 leading-relaxed flex-1">Build the exact application order so approvals compound instead of collapsing your profile.</p>

      <div className="bg-black/50 rounded-xl p-4 h-32 overflow-hidden border border-white/5 scrollbar-hide mb-4 shadow-inner">
        <pre className="font-mono text-xs text-accent/80 whitespace-pre-wrap leading-relaxed">
          {text}<span className="inline-block w-2 bg-accent ml-1 animate-pulse">&nbsp;</span>
        </pre>
      </div>

      <div className="pt-4 border-t border-white/10 flex justify-between items-center font-mono text-xs tracking-wider">
        <span className="text-white/40 uppercase">Application Plan</span>
        <span className="bg-white/10 text-white px-3 py-1 rounded-full font-bold">ORDER RULES</span>
      </div>
    </div>
  );
};

// Card 3: Scheduler (Approval Ops)
const SchedulerCard = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

      // Cursor enter
      tl.to(".cursor-poly", { duration: 0.1, opacity: 1 })
        .to(".cursor-poly", { x: 80, y: 30, duration: 0.8, ease: "power2.inOut" })
        .to(".cursor-poly", { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 }) // click
        .to(".cell-target", { backgroundColor: "rgba(74,222,128,0.2)", color: "#1b4332", duration: 0.2 }, "-=0.1") // highlight
        .to(".cursor-poly", { x: 220, y: 110, duration: 0.6, ease: "power2.inOut" })
        .to(".cursor-poly", { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 }) // click button
        .to(".btn-target", { backgroundColor: "#1b4332", color: "white", duration: 0.2 }, "-=0.1")
        .to(".cursor-poly", { opacity: 0, duration: 0.2, delay: 0.5 })
        .set(".cell-target", { backgroundColor: "transparent", color: "inherit" })
        .set(".btn-target", { backgroundColor: "rgba(27,67,50,0.1)", color: "#1b4332" });

    }, svgRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="feature-card bg-white rounded-[2rem] p-8 shadow-xl border border-black/5 flex flex-col h-[400px] relative group hover:-translate-y-2 transition-transform duration-300 overflow-hidden" ref={svgRef}>
      <div className="flex-1 relative z-10">
        <h3 className="font-bold text-xl mb-2 text-primary font-sans">Approval Ops™</h3>
        <p className="text-dark/60 text-sm mb-6 leading-relaxed">Turn applications into approvals and usable capital without sacrificing your next round.</p>

        <div className="border border-black/10 rounded-xl overflow-hidden bg-background relative mb-4">
          {/* SVG Cursor */}
          <svg className="cursor-poly absolute top-0 left-0 w-8 h-8 z-20 opacity-0 drop-shadow-md pointer-events-none" viewBox="0 0 24 24" style={{ transformOrigin: "top left" }}>
            <path fill="black" stroke="white" strokeWidth="1.5" d="M4 2l16 16-7 1 4 5-3 2-4-5-4 4V2z" />
          </svg>

          <div className="grid grid-cols-7 border-b border-black/10 bg-black/5 text-center text-[10px] font-mono py-1">
            <div>S</div><div>M</div><div className="font-bold text-primary">T</div><div>W</div><div>T</div><div>F</div><div>S</div>
          </div>
          <div className="grid grid-cols-7 text-center py-2 gap-1 px-1 h-16 pointer-events-none relative">
            <div className="rounded-md border border-black/5 flex items-center justify-center grayscale opacity-30 text-[10px]">12</div>
            <div className="rounded-md border border-black/5 flex items-center justify-center grayscale opacity-30 text-[10px]">13</div>
            <div className="cell-target rounded-md border border-black/10 flex items-center justify-center transition-colors text-xs font-bold text-dark/70 relative overflow-hidden">
              14
            </div>
            <div className="rounded-md border border-transparent flex items-center justify-center grayscale opacity-30 text-[10px]">15</div>
            <div className="rounded-md border border-transparent flex items-center justify-center grayscale opacity-30 text-[10px]">16</div>
            <div className="rounded-md border border-transparent flex items-center justify-center grayscale opacity-30 text-[10px]">17</div>
            <div className="rounded-md border border-transparent flex items-center justify-center grayscale opacity-30 text-[10px]">18</div>
          </div>
          <div className="p-2 flex justify-end">
            <div className="btn-target bg-primary/10 text-primary text-[10px] font-bold px-3 py-1 rounded-full transition-colors font-mono">
              PULL REPORT
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-black/5 flex justify-between items-center font-mono text-xs tracking-wider relative z-10">
        <span className="text-dark/40 uppercase">Weekly Checkpoint</span>
        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-bold">EXECUTION LOGS</span>
      </div>
    </div>
  );
};

const ProtocolCard = ({ num, title, desc, Icon }) => {
  return (
    <div className="p-8 md:p-16 max-w-4xl mx-auto w-full">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center">
        <div className="font-mono text-8xl md:text-[10rem] font-bold text-white/10 leading-none relative group">
          {num}
          <Icon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
          <Icon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div>
          <h3 className="text-3xl md:text-5xl font-sans font-bold mb-4">{title}</h3>
          <p className="text-lg md:text-2xl text-white/70 font-serif italic">{desc}</p>
        </div>
      </div>
    </div>
  );
}

// Card 4: Counter Animation Section
const CounterSection = () => {
  const counterRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: 150000,
        duration: 3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".counter-trigger",
          start: "top 85%", // starts animating when top of section is 85% down viewport
        },
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.innerHTML = "$" + Math.floor(obj.val).toLocaleString();
          }
        }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="counter-trigger relative pt-32 pb-48 md:pt-48 md:pb-56 bg-dark overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop')] opacity-[0.03] mix-blend-overlay"></div>

      {/* Ambient glowing orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-primary/10 blur-[120px] rounded-[100%] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center justify-center">
        <p className="text-xl md:text-3xl text-white/50 font-serif italic mb-6 md:mb-10 tracking-wide">
          What would you do with an extra...
        </p>

        <h2
          ref={counterRef}
          style={{ fontVariantNumeric: "tabular-nums" }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-[11rem] font-bold font-mono text-white tracking-tighter drop-shadow-[0_0_40px_rgba(74,222,128,0.2)] tabular-nums"
        >
          $0
        </h2>

        <div className="mt-8 md:mt-12 flex items-center justify-center gap-4">
          <div className="w-12 h-px bg-accent/50 hidden md:block"></div>
          <p className="text-lg md:text-2xl text-accent font-sans uppercase tracking-[0.2em] font-bold">For Your Business?</p>
          <div className="w-12 h-px bg-accent/50 hidden md:block"></div>
        </div>
      </div>

      {/* Flowing connector pointing to the next section */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center justify-end h-40 md:h-56 z-20">
        <span className="font-mono text-[10px] md:text-xs text-white/40 uppercase tracking-[0.3em] mb-4 text-center">But Here Is The Reality</span>
        <div className="w-px h-16 md:h-24 bg-gradient-to-b from-accent to-transparent relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 border-b-2 border-r-2 border-accent rotate-45 translate-y-[-50%] animate-pulse drop-shadow-[0_0_10px_rgba(74,222,128,0.8)]"></div>
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 border-b-2 border-r-2 border-white/50 rotate-45 translate-y-[-50%] animate-pulse" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default App;
