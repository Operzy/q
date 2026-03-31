import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { Building2, CalendarDays, CreditCard, ArrowRight, ShieldCheck, Mail, User, CheckCircle2, ChevronRight, Activity, Lock, Target, TrendingUp, BarChart, Server } from 'lucide-react';

const LOGO_URL = "/logo-CIo0yBvo.png";

const QuizPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0); 
  const [answers, setAnswers] = useState({});
  const [loadingText, setLoadingText] = useState("");
  
  const handleAnswer = (questionId, value) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    setTimeout(() => {
        setStep(prev => prev + 1);
    }, 400); 
  };

  const submitLead = (e) => {
    e.preventDefault();
    setStep(8); // goto analyzing
  };

  // Fake analysis progression
  useEffect(() => {
      if (step === 8) {
          const texts = [
              "Scanning underwriting guidelines...",
              "Cross-referencing credit profile...",
              "Verifying corporate entity structure...",
              "Analyzing bank-side pre-approvals...",
              "Calculating maximum capital limit...",
              "Finalizing strategy map..."
          ];
          
          let index = 0;
          setLoadingText(texts[index]);
          
          const interval = setInterval(() => {
              index++;
              if (index < texts.length) {
                  setLoadingText(texts[index]);
              } else {
                  clearInterval(interval);
                  setStep(9); // Result
              }
          }, 800);
          
          return () => clearInterval(interval);
      }
  }, [step]);

  const redirectVSL = () => {
      navigate('/vsl');
  };

  const QuizProgress = () => {
    const totalSteps = 7; // 6 questions + 1 optin
    const progress = Math.min(((step) / totalSteps) * 100, 100);
    if (step === 0 || step > 7) return null;
    
    return (
        <>
            <div className="fixed top-0 left-0 w-full h-[3px] bg-white/5 z-[100]">
                <div 
                  className="h-full bg-accent transition-all duration-700 ease-out shadow-[0_0_20px_rgba(74,222,128,1)]"
                  style={{ width: `${progress}%` }}
                ></div>
            </div>
            <div className="fixed top-6 right-6 z-[100] bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-5 py-2.5 text-white/50 text-xs font-mono uppercase tracking-widest hidden md:flex items-center gap-3 shadow-2xl">
                <span>Phase {step}</span>
                <span className="w-4 h-px bg-white/20"></span>
                <span className="text-accent">{totalSteps}</span>
            </div>
        </>
    );
  };

  // Helper for rendering high-end selection cards
  const SelectionCard = ({ id, label, icon: Icon, selected, onClick, description }) => (
      <div 
          onClick={onClick}
          className={`group bg-black/40 backdrop-blur-md border transition-all duration-300 rounded-[2rem] p-6 lg:p-8 flex flex-col items-center justify-center text-center cursor-pointer min-h-[220px] relative overflow-hidden ${
              selected ? 'border-accent shadow-[0_0_50px_rgba(74,222,128,0.2)] bg-accent/10 scale-[1.02]' : 'border-white/10 hover:border-accent/50 hover:shadow-[0_0_40px_rgba(74,222,128,0.1)] hover:-translate-y-1'
          }`}
      >
          {selected && (
              <div className="absolute top-4 right-4 text-accent">
                  <CheckCircle2 className="w-6 h-6 animate-[scaleIn_0.2s_ease-out]" />
              </div>
          )}
          {Icon && (
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-colors duration-500 ${selected ? 'bg-accent/20' : 'bg-white/5 group-hover:bg-accent/10'}`}>
                  <Icon className={`w-8 h-8 transition-all duration-500 ${selected ? 'text-accent scale-110' : 'text-white/50 group-hover:text-accent group-hover:scale-110'}`} />
              </div>
          )}
          <h3 className={`text-xl lg:text-2xl font-bold font-sans tracking-tight transition-colors duration-500 ${selected ? 'text-accent' : 'text-white/90 group-hover:text-white'}`}>
              {label}
          </h3>
          {description && (
              <p className="text-white/40 text-sm mt-3 font-medium transition-colors duration-500 group-hover:text-white/60">{description}</p>
          )}
      </div>
  );

  return (
    <div className="min-h-screen bg-[#0A0A14] flex flex-col justify-start pb-24 font-sans overflow-x-hidden relative">
      
      {/* VSL-Style Premium Cinematic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=2600&auto=format&fit=crop" alt="Background Texture" className="w-full h-full object-cover opacity-10 mix-blend-luminosity grayscale" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A14] via-[#0A0A14]/90 to-[#0A0A14]/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A14]/80 to-transparent"></div>
          <div className="absolute inset-x-0 top-0 h-[800px] bg-accent/5 blur-[150px] rounded-[100%]"></div>
      </div>

      <svg className="fixed pointer-events-none left-0 top-0 w-full h-full opacity-40 z-10 mix-blend-overlay" style={{ filter: "url(#noiseFilter)" }}>
         <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
         </filter>
         <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      <div className="container mx-auto px-4 relative z-20 pt-8 lg:pt-12 flex-1 flex flex-col items-center justify-center">
        <QuizProgress />

        <div className="w-full max-w-5xl mx-auto">
            
            {/* STEP 0: Landing */}
            {step === 0 && (
                <div className="animate-[fadeInUp_0.8s_ease-out] w-full pt-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center justify-center gap-2 mb-8">
                            <span className="w-8 h-px bg-accent"></span>
                            <span className="text-accent font-mono text-xs font-bold uppercase tracking-widest">Free Funding Audit</span>
                            <span className="w-8 h-px bg-accent"></span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 uppercase tracking-tighter leading-[0.9]">
                            See How Much Funding <br className="hidden md:block"/>
                            <span className="font-serif italic font-normal text-accent normal-case lowercase block mt-2 drop-shadow-[0_0_20px_rgba(74,222,128,0.3)]">you quality for.</span>
                        </h1>
                        <p className="text-white/60 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                            Take the 60-second assessment to instantly calculate your maximum limit for zero-percent introductory business funding.
                        </p>
                        <div className="flex justify-center">
                           <button 
                               onClick={() => setStep(1)}
                               className="group relative inline-flex items-center justify-center gap-4 bg-accent text-[#0A0A14] w-full md:w-auto px-14 py-6 rounded-full font-black text-xl md:text-2xl uppercase tracking-widest hover:scale-105 transition-all duration-500 shadow-[0_0_50px_rgba(74,222,128,0.4)] overflow-hidden"
                           >
                               <span className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
                               <span>Start Assessment</span>
                               <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
                           </button>
                        </div>
                    </div>
                </div>
            )}

            {/* STEP 1: Question 1 */}
            {step === 1 && (
                <div className="w-full max-w-5xl mx-auto mt-4 md:mt-12 animate-[fadeIn_0.3s_ease-out]">
                    <h2 className="text-3xl md:text-5xl font-black text-center text-white mb-2 tracking-tighter uppercase leading-tight">
                        What is your estimated <br className="hidden md:block"/>
                        <span className="font-serif italic text-accent font-normal transform -rotate-1 inline-block normal-case mt-2">credit score?</span>
                    </h2>
                    <p className="text-center text-white/50 mb-12 font-medium">(Answering this doesn't impact your score at all)</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { id: "score_excellent", label: "720+", description: "Elite Tier", icon: ShieldCheck },
                            { id: "score_good", label: "680 - 719", description: "Prime Tier", icon: CheckCircle2 },
                            { id: "score_fair", label: "620 - 679", description: "Standard Tier", icon: Activity },
                            { id: "score_poor", label: "Below 620", description: "Building Tier", icon: ArrowRight }
                        ].map((choice) => (
                            <SelectionCard 
                                key={choice.id} 
                                id={choice.id} 
                                label={choice.label} 
                                icon={choice.icon}
                                description={choice.description}
                                selected={answers["creditScore"] === choice.label}
                                onClick={() => handleAnswer("creditScore", choice.label)} 
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* STEP 2: Question 2 */}
            {step === 2 && (
                <div className="w-full max-w-5xl mx-auto mt-4 md:mt-12 animate-[fadeIn_0.3s_ease-out]">
                     <h2 className="text-3xl md:text-5xl font-black text-center text-white mb-16 tracking-tighter uppercase leading-tight">
                        What is your business <br className="hidden md:block"/>
                        <span className="font-serif italic text-accent font-normal transform -rotate-1 inline-block normal-case mt-2">entity type?</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { id: "entity_llc", label: "LLC", description: "Limited Liability Corp", icon: Building2 },
                            { id: "entity_scorp", label: "S-Corp / C-Corp", description: "Incorporated", icon: Server },
                            { id: "entity_sole", label: "Sole Proprietor", description: "Not incorporated", icon: User },
                            { id: "entity_none", label: "Just an Idea", description: "Not started yet", icon: Target }
                        ].map((choice) => (
                            <SelectionCard 
                                key={choice.id} 
                                id={choice.id} 
                                label={choice.label} 
                                icon={choice.icon}
                                description={choice.description}
                                selected={answers["entity"] === choice.label}
                                onClick={() => handleAnswer("entity", choice.label)} 
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* STEP 3: Question 3 */}
            {step === 3 && (
                <div className="w-full max-w-5xl mx-auto mt-4 md:mt-12 animate-[fadeIn_0.3s_ease-out]">
                    <h2 className="text-3xl md:text-5xl font-black text-center text-white mb-16 tracking-tighter uppercase leading-tight">
                        How long have you <br className="hidden md:block"/>
                        <span className="font-serif italic text-accent font-normal transform -rotate-1 inline-block normal-case mt-2">been in business?</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { id: "time_0", label: "0 - 6 Months", description: "Startup Phase", icon: CalendarDays },
                            { id: "time_1", label: "6 Months - 2 Years", description: "Growth Phase", icon: TrendingUp },
                            { id: "time_2", label: "2 - 5 Years", description: "Established", icon: Activity },
                            { id: "time_5", label: "5+ Years", description: "Veteran", icon: ShieldCheck }
                        ].map((choice) => (
                            <SelectionCard 
                                key={choice.id} 
                                id={choice.id} 
                                label={choice.label} 
                                icon={choice.icon}
                                description={choice.description}
                                selected={answers["time"] === choice.label}
                                onClick={() => handleAnswer("time", choice.label)} 
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* STEP 4: Question 4 */}
            {step === 4 && (
                <div className="w-full max-w-5xl mx-auto mt-4 md:mt-12 animate-[fadeIn_0.3s_ease-out]">
                    <h2 className="text-3xl md:text-5xl font-black text-center text-white mb-16 tracking-tighter uppercase leading-tight">
                        What is your estimated <br className="hidden md:block"/>
                        <span className="font-serif italic text-accent font-normal transform -rotate-1 inline-block normal-case mt-2">monthly revenue?</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { id: "rev_0", label: "$0 / Pre-Revenue", icon: Target },
                            { id: "rev_1", label: "$1k - $10k", icon: BarChart },
                            { id: "rev_2", label: "$10k - $50k", icon: TrendingUp },
                            { id: "rev_3", label: "$50k+", icon: Activity }
                        ].map((choice) => (
                            <SelectionCard 
                                key={choice.id} 
                                id={choice.id} 
                                label={choice.label} 
                                icon={choice.icon}
                                selected={answers["revenue"] === choice.label}
                                onClick={() => handleAnswer("revenue", choice.label)} 
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* STEP 5: Question 5 */}
            {step === 5 && (
                <div className="w-full max-w-5xl mx-auto mt-4 md:mt-12 animate-[fadeIn_0.3s_ease-out]">
                   <h2 className="text-3xl md:text-5xl font-black text-center text-white mb-16 tracking-tighter uppercase leading-tight">
                        How much funding <br className="hidden md:block"/>
                        <span className="font-serif italic text-accent font-normal transform -rotate-1 inline-block normal-case mt-2">are you seeking?</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { id: "amt_1", label: "$10k - $50k", description: "Jumpstart Capital", icon: CreditCard },
                            { id: "amt_2", label: "$50k - $100k", description: "Growth Capital", icon: Building2 },
                            { id: "amt_3", label: "$100k - $250k", description: "Expansion Capital", icon: TrendingUp },
                            { id: "amt_4", label: "$250k+", description: "Scale Capital", icon: ShieldCheck }
                        ].map((choice) => (
                            <SelectionCard 
                                key={choice.id} 
                                id={choice.id} 
                                label={choice.label} 
                                icon={choice.icon}
                                description={choice.description}
                                selected={answers["targetAmount"] === choice.label}
                                onClick={() => handleAnswer("targetAmount", choice.label)} 
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* STEP 6: Question 6 */}
            {step === 6 && (
                <div className="w-full max-w-6xl mx-auto mt-4 md:mt-12 animate-[fadeIn_0.3s_ease-out]">
                     <h2 className="text-3xl md:text-5xl font-black text-center text-white mb-16 tracking-tighter uppercase leading-tight">
                        What will you primarily <br className="hidden md:block"/>
                        <span className="font-serif italic text-accent font-normal transform -rotate-1 inline-block normal-case mt-2">use the funds for?</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 gap-6">
                        {[
                            { id: "use_1", label: "Marketing & Ads", icon: Target },
                            { id: "use_2", label: "Inventory / Equipment", icon: Server },
                            { id: "use_3", label: "Working Capital", icon: BarChart },
                            { id: "use_4", label: "Hiring / Payroll", icon: User },
                            { id: "use_5", label: "Real Estate / Office", icon: Building2 },
                            { id: "use_6", label: "Other / Buffer", icon: ShieldCheck }
                        ].map((choice) => (
                            <SelectionCard 
                                key={choice.id} 
                                id={choice.id} 
                                label={choice.label} 
                                icon={choice.icon}
                                selected={answers["fundUse"] === choice.label}
                                onClick={() => handleAnswer("fundUse", choice.label)} 
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* STEP 7: Lead Capture */}
            {step === 7 && (
                <div className="bg-black/60 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-14 shadow-2xl max-w-2xl mx-auto mt-12 animate-[scaleIn_0.3s_ease-out]">
                    <div className="mb-10 text-center">
                        <div className="w-20 h-20 bg-accent/10 border border-accent/30 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(74,222,128,0.2)]">
                            <CheckCircle2 className="w-10 h-10 text-accent" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter uppercase">
                           Calculation <span className="font-serif italic font-normal text-accent normal-case lowercase">ready.</span>
                        </h2>
                        <p className="text-white/60 text-lg md:text-xl font-medium">Enter your email below to instantly view your calculated funding limit and custom strategy.</p>
                    </div>
                    
                    <form onSubmit={submitLead} className="space-y-4">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                                <User className="w-6 h-6 text-white/30" />
                            </div>
                            <input 
                                type="text" 
                                required
                                placeholder="First Name" 
                                className="w-full bg-white/5 border border-white/10 text-white rounded-2xl py-6 pl-16 pr-6 font-sans text-xl focus:outline-none focus:border-accent focus:bg-white/10 transition-all placeholder:text-white/30 shadow-inner"
                            />
                        </div>
                        <div className="relative mb-8">
                            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                                <Mail className="w-6 h-6 text-white/30" />
                            </div>
                            <input 
                                type="email" 
                                required
                                placeholder="Primary Email Address" 
                                className="w-full bg-white/5 border border-white/10 text-white rounded-2xl py-6 pl-16 pr-6 font-sans text-xl focus:outline-none focus:border-accent focus:bg-white/10 transition-all placeholder:text-white/30 shadow-inner"
                            />
                        </div>
                        
                        <div className="mt-6">
                           <button 
                               type="submit"
                               className="w-full bg-accent text-[#0A0A14] py-6 rounded-full font-black uppercase tracking-widest text-xl hover:scale-[1.02] hover:bg-white transition-all duration-300 shadow-[0_0_40px_rgba(74,222,128,0.3)]"
                           >
                               Reveal My Funding Potential
                           </button>
                        </div>
                    </form>
                    <p className="text-center text-white/40 text-xs font-mono mt-8 flex items-center justify-center gap-2">
                        <Lock className="w-3 h-3 text-white/50" /> 256-bit Secure Encryption. We respect your privacy.
                    </p>
                </div>
            )}

            {/* STEP 8: Fake Analyzing Loading Screen */}
            {step === 8 && (
                <div className="text-center py-32 animate-[fadeIn_0.5s_ease-out]">
                    <div className="relative w-40 h-40 mx-auto mb-12 flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full border border-white/10 border-t-accent shadow-[0_0_30px_rgba(74,222,128,0.2)] animate-spin duration-1000"></div>
                        <div className="absolute inset-4 rounded-full border border-white/5 border-b-accent/50 animate-spin duration-[1500ms] reverse"></div>
                        <div className="absolute inset-8 rounded-full border border-white/10 border-l-white animate-spin duration-700"></div>
                        <Activity className="w-12 h-12 text-accent animate-pulse" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6">Processing <span className="font-serif italic font-normal text-accent normal-case">Assessment</span></h2>
                    <p className="text-white/60 font-mono uppercase tracking-widest text-sm animate-pulse">{loadingText}</p>
                </div>
            )}

            {/* STEP 9: Detailed Result Breakdown */}
            {step === 9 && (
                <div className="bg-black/60 backdrop-blur-2xl border border-accent/20 rounded-[2.5rem] p-6 lg:p-14 shadow-[0_0_80px_rgba(74,222,128,0.15)] relative overflow-hidden w-full max-w-5xl mx-auto mt-8 animate-[scaleIn_0.4s_ease-out]">
                    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent"></div>
                    
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start">
                       {/* Left Column: Verdict */}
                       <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                          <div className="inline-flex items-center gap-3 bg-accent/5 border border-accent/30 px-6 py-3 rounded-full mb-8 shadow-[0_0_20px_rgba(74,222,128,0.1)]">
                              <CheckCircle2 className="w-6 h-6 text-accent" />
                              <span className="text-accent font-bold font-sans tracking-widest uppercase text-xs">Action Required: Ready</span>
                          </div>
                          
                          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 uppercase tracking-tighter leading-[1.1]">
                              Estimated Capital <br />
                              <span className="font-serif italic font-normal text-accent normal-case mt-2 block">limit:</span>
                          </h2>
                          
                          <div className="text-accent text-6xl lg:text-7xl font-mono font-bold tracking-tight my-6 drop-shadow-[0_0_40px_rgba(74,222,128,0.4)]">
                              {answers["creditScore"] === "Below 620" ? "Credit Prep" : (answers["revenue"] === "$50k+" || answers["time"] === "5+ Years" ? "$150,000+" : "$50k - $100k")}
                          </div>
                          
                          <p className="text-white/60 text-lg lg:text-xl font-medium leading-relaxed my-6">
                              Based on your current structure, you are perfectly positioned to leverage our proprietary Capital Stack System to secure <span className="text-white font-bold">{answers["fundUse"]?.toLowerCase() || "working capital"}</span>.
                          </p>
                       </div>

                       {/* Right Column: Premium Dashboard Readout Grid */}
                       <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5 mt-8 lg:mt-0">
                           {/* Data Card 1 */}
                           <div className="bg-[#0A0A14]/80 backdrop-blur-md border border-white/10 rounded-[1.5rem] p-6 flex flex-col hover:border-white/30 transition-all duration-300 group">
                               <div className="flex items-center gap-3 mb-5">
                                   <ShieldCheck className="w-5 h-5 text-white/30 group-hover:text-accent transition-colors duration-300" />
                                   <span className="text-white/50 font-mono text-[10px] uppercase tracking-widest font-bold">Credit Strength</span>
                               </div>
                               <div className="text-white font-sans font-black text-2xl tracking-tighter">{answers["creditScore"] || "Analyzing"}</div>
                           </div>
                           
                           {/* Data Card 2 */}
                           <div className="bg-[#0A0A14]/80 backdrop-blur-md border border-white/10 rounded-[1.5rem] p-6 flex flex-col hover:border-white/30 transition-all duration-300 group">
                               <div className="flex items-center gap-3 mb-5">
                                   <Building2 className="w-5 h-5 text-white/30 group-hover:text-accent transition-colors duration-300" />
                                   <span className="text-white/50 font-mono text-[10px] uppercase tracking-widest font-bold">Entity Status</span>
                               </div>
                               <div className="flex items-center gap-3">
                                  <div className={`w-2.5 h-2.5 rounded-full shadow-[0_0_10px_currentColor] ${answers["entity"]?.includes("LLC") || answers["entity"]?.includes("Corp") ? "bg-accent text-accent animate-pulse" : "bg-yellow-400 text-yellow-400 animate-pulse"}`}></div>
                                  <div className="text-white font-sans font-black text-2xl tracking-tighter">{answers["entity"]?.includes("LLC") || answers["entity"]?.includes("Corp") ? "Optimized" : "Requires Fix"}</div>
                               </div>
                           </div>
                           
                           {/* Data Card 3 */}
                           <div className="bg-[#0A0A14]/80 backdrop-blur-md border border-white/10 rounded-[1.5rem] p-6 flex flex-col hover:border-white/30 transition-all duration-300 group">
                               <div className="flex items-center gap-3 mb-5">
                                   <CalendarDays className="w-5 h-5 text-white/30 group-hover:text-accent transition-colors duration-300" />
                                   <span className="text-white/50 font-mono text-[10px] uppercase tracking-widest font-bold">Business Tenure</span>
                               </div>
                               <div className="text-white font-sans font-black text-2xl tracking-tighter leading-none">{answers["time"] || "New"}</div>
                           </div>

                           {/* Data Card 4 (Highlighted) */}
                           <div className="bg-accent/10 backdrop-blur-md border border-accent/30 rounded-[1.5rem] p-6 flex flex-col shadow-[0_0_40px_rgba(74,222,128,0.15)] relative overflow-hidden group">
                               <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
                               <div className="flex items-center gap-3 mb-5">
                                   <Target className="w-5 h-5 text-accent" />
                                   <span className="text-accent font-mono text-[10px] uppercase tracking-widest font-bold">Target Action</span>
                               </div>
                               <div className="text-white font-sans font-black text-xl tracking-tighter leading-tight mt-auto">See How To<br/>Work With Us</div>
                           </div>
                       </div>
                    </div>
                    
                    <div className="mt-14 pt-10 border-t border-white/10">
                        <p className="text-center text-white/80 font-bold text-xl md:text-2xl mb-8">Do not blind-apply to banks and ruin your chances.</p>
                        <button 
                            onClick={redirectVSL}
                            className="group relative flex items-center justify-center gap-4 bg-accent text-[#0A0A14] w-full py-7 rounded-full font-black text-xl md:text-2xl uppercase tracking-widest hover:scale-[1.02] transition-all duration-500 shadow-[0_0_50px_rgba(74,222,128,0.5)] overflow-hidden"
                        >
                            <span className="absolute inset-0 w-full h-full bg-white/30 -translate-x-full group-hover:translate-x-full transition-transform duration-[800ms] ease-in-out"></span>
                            See How To Work With Us
                            <ArrowRight className="w-8 h-8 group-hover:translate-x-3 transition-transform duration-300" />
                        </button>
                    </div>
                </div>
            )}
            
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
