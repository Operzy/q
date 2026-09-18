import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X as XIcon, ArrowRight, ArrowLeft } from 'lucide-react';

const LOGO_URL = "/mfa-logo.webp";
const WISTIA_MEDIA_ID = "xerfwv6gq1";

const optionClass = (selected) =>
  `relative p-4 md:p-5 rounded-xl border text-left font-sans transition-all duration-200 ${
    selected
      ? 'bg-[#2f6b41]/10 border-[#2f6b41] text-[#2f6b41]'
      : 'bg-white border-gray-200 text-gray-800 hover:border-[#2f6b41]/50'
  }`;

const inputClass =
  "w-full bg-white border border-gray-300 text-gray-900 rounded-xl py-4 px-5 font-sans text-lg focus:outline-none focus:border-[#2f6b41] transition-all placeholder:text-gray-400";

// Steps 1-4 are single-choice and auto-advance; steps 5-7 collect contact info.
const CHOICE_STEPS = [
  {
    key: 'funding',
    question: 'How much funding are you looking to secure?',
    options: ["Under 50K", "$50K-$100K", "$100K-$200K", "200K+"],
  },
  {
    key: 'credit',
    question: 'What is your estimated personal credit score?',
    options: ["Below 600", "600-649", "650-699", "700-749", "750+"],
  },
  {
    key: 'negatives',
    question: 'Do you have any negative marks in your credit profile?',
    options: ["No I do not", "I do but they will be removed within 30 days", "Late Payments", "Repossessions", "Bankruptcy", "Collections"],
  },
  {
    key: 'cardLimits',
    question: 'Roughly how much in total credit cards do you have?',
    hint: '(Combined total credit spending limits)',
    options: ["I don't have any personal credit cards", "$5k or less", "$5k-$15k", "$15k-$30k", "$30k-$50k", "More than 50K"],
  },
];

const TOTAL_STEPS = CHOICE_STEPS.length + 3;

const VSLPage = () => {
  const navigate = useNavigate();
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formState, setFormState] = useState({
    funding: "", credit: "", negatives: "", cardLimits: "",
    firstName: "", lastName: "", email: "", phone: "",
  });

  const choiceIndex = step - 1;
  const isChoiceStep = choiceIndex < CHOICE_STEPS.length;
  const nameStep = CHOICE_STEPS.length + 1;
  const emailStep = CHOICE_STEPS.length + 2;
  const phoneStep = CHOICE_STEPS.length + 3;

  const stepIncomplete =
    (isChoiceStep && !formState[CHOICE_STEPS[choiceIndex].key]) ||
    (step === nameStep && (!formState.firstName.trim() || !formState.lastName.trim())) ||
    (step === emailStep && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email.trim())) ||
    (step === phoneStep && formState.phone.replace(/\D/g, '').length < 10);

  const selectChoice = (key, value) => {
    setFormState({ ...formState, [key]: value });
    setTimeout(() => setStep(s => s + 1), 180);
  };

  const handleNext = () => {
    if (stepIncomplete) return;
    if (step < phoneStep) {
      setStep(step + 1);
      return;
    }
    setIsQuizOpen(false);
    if (formState.credit === "Below 600" || formState.credit === "600-649") {
      navigate('/credit-book');
    } else {
      navigate('/book');
    }
  };

  const onEnter = (e) => { if (e.key === 'Enter') handleNext(); };

  useEffect(() => {
    document.body.style.overflow = isQuizOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isQuizOpen]);

  return (
    <div className="min-h-screen bg-[#fcf6f4] bg-[radial-gradient(ellipse_at_top,rgba(63,125,79,0.07),transparent_60%)] font-sans text-dark flex flex-col">
      <main className="flex-1 w-full max-w-[960px] mx-auto px-4 sm:px-6 pt-8 md:pt-12 pb-16 text-center">
        {/* Logo */}
        <img src={LOGO_URL} alt="My Funding Approved" className="h-12 md:h-16 w-auto mx-auto mb-8 md:mb-10" />

        {/* Attention pill */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2.5 bg-[#fdecea] border border-[#f3b6b1] text-[#c62828] rounded-full pl-3 pr-3.5 sm:pl-3.5 sm:pr-5 py-2 mb-6 shadow-[0_4px_14px_-6px_rgba(198,40,40,0.35)] max-w-full whitespace-nowrap">
          <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0">
            <span className="animate-ping absolute inset-0 rounded-full bg-[#e53935] opacity-60"></span>
            <span className="relative rounded-full h-full w-full bg-[#e53935]"></span>
          </span>
          <span className="text-[clamp(8.5px,2.55vw,13px)] md:text-[15px] font-bold tracking-tight sm:tracking-wide leading-none">
            <span className="uppercase">Attention:</span> Entrepreneurs &amp; Investors With 650+ Credit Scores
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-[#1f4d2e] font-extrabold text-[2rem] sm:text-[2.6rem] md:text-[3.1rem] leading-[1.1] tracking-[-0.03em] mb-6 md:mb-7 max-w-[960px] mx-auto">
          We will get you up to $250,000 in<br className="hidden md:block" /> <span className="whitespace-nowrap">0% interest</span> business funding
        </h1>

        {/* Subheadline */}
        <p className="text-[17px] md:text-[20px] text-[#3a3a3a] leading-[1.55] max-w-[760px] mx-auto mb-9 md:mb-11">
          <span className="font-bold text-dark">Done for you funding</span> &mdash; all without giving up business ownership, paying collateral or income verification.
        </p>

        {/* VSL */}
        <div className="max-w-[860px] mx-auto rounded-xl md:rounded-2xl overflow-hidden bg-black ring-1 ring-black/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.35)]">
          <style>{`
            wistia-player[media-id='${WISTIA_MEDIA_ID}']:not(:defined) {
              background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${WISTIA_MEDIA_ID}/swatch');
              display: block;
              filter: blur(5px);
              padding-top: 56.25%;
            }
          `}</style>
          <wistia-player media-id={WISTIA_MEDIA_ID} aspect="1.7777777777777777"></wistia-player>
        </div>

        {/* CTA */}
        <div className="mt-8 md:mt-10">
          <button
            onClick={() => setIsQuizOpen(true)}
            className="group inline-flex items-center justify-center gap-2.5 bg-[#2f6b41] hover:bg-[#275a37] text-white font-bold text-lg md:text-xl px-10 md:px-12 py-5 rounded-xl shadow-[0_10px_30px_-8px_rgba(47,107,65,0.6)] hover:shadow-[0_14px_36px_-8px_rgba(47,107,65,0.7)] hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto"
          >
            See If You Qualify
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
          <p className="mt-4 text-[13px] text-dark/50 font-medium">Takes 30 seconds &middot; No obligation</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-[960px] mx-auto px-4 sm:px-6 py-8 border-t border-black/[0.06] text-[12px] text-dark/40">
        <p className="text-center leading-relaxed max-w-[720px] mx-auto mb-5">
          <span className="font-semibold text-dark/50">Disclaimer:</span> This site is NOT a part of the Facebook&trade; website or Meta Platforms, Inc. Additionally, this site is NOT endorsed by Facebook&trade; in any way. Facebook&trade; is a trademark of Meta Platforms, Inc.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center">
          <span>&copy; {new Date().getFullYear()} My Funding Approved. All rights reserved.</span>
          <span className="flex items-center gap-4">
            <a href="#" className="hover:text-dark/70 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-dark/70 transition-colors">Terms</a>
          </span>
        </div>
      </footer>

      {/* Qualifier Modal */}
      {isQuizOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60" onClick={() => setIsQuizOpen(false)}></div>

          <div className="relative bg-[#fcf6f4] rounded-2xl w-full max-w-xl max-h-[92dvh] shadow-2xl overflow-hidden flex flex-col animate-[scaleIn_0.3s_ease-out]">
            <button onClick={() => setIsQuizOpen(false)} className="absolute top-4 right-4 z-10 text-gray-400 hover:text-gray-700 transition-colors rounded-full p-2">
              <XIcon className="w-5 h-5" />
            </button>

            {/* Progress */}
            <div className="h-1.5 bg-gray-200">
              <div className="h-full bg-[#2f6b41] transition-all duration-300" style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}></div>
            </div>

            <div className="px-5 sm:px-6 md:px-10 pt-7 md:pt-8 pb-6 md:pb-8 overflow-y-auto">
              <p className="text-xs tracking-widest text-[#2f6b41] uppercase font-bold text-center mb-6">Step {step} of {TOTAL_STEPS}</p>

              {isChoiceStep && (() => {
                const q = CHOICE_STEPS[choiceIndex];
                const twoCol = q.options.every(o => o.length <= 14);
                return (
                  <div key={q.key}>
                    <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-[#2f6b41] mb-2 text-center leading-snug">{q.question}</h4>
                    {q.hint ? (
                      <p className="text-sm text-gray-500 text-center mb-6">{q.hint}</p>
                    ) : (
                      <div className="mb-6"></div>
                    )}
                    <div className={`grid grid-cols-1 ${twoCol ? 'sm:grid-cols-2' : ''} gap-2.5 md:gap-3`}>
                      {q.options.map(opt => (
                        <button key={opt} onClick={() => selectChoice(q.key, opt)} className={optionClass(formState[q.key] === opt)}>
                          <span className="font-bold">{opt}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })()}

              {step === nameStep && (
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-[#2f6b41] mb-6 text-center">What is your name?</h4>
                  <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                    <input type="text" placeholder="First Name" autoFocus value={formState.firstName} onChange={(e) => setFormState({ ...formState, firstName: e.target.value })} onKeyDown={onEnter} className={inputClass} />
                    <input type="text" placeholder="Last Name" value={formState.lastName} onChange={(e) => setFormState({ ...formState, lastName: e.target.value })} onKeyDown={onEnter} className={inputClass} />
                  </div>
                </div>
              )}

              {step === emailStep && (
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-[#2f6b41] mb-6 text-center">What is your best email address?</h4>
                  <div className="max-w-sm mx-auto">
                    <input type="email" placeholder="Email Address" autoFocus value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} onKeyDown={onEnter} className={inputClass} />
                  </div>
                </div>
              )}

              {step === phoneStep && (
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-[#2f6b41] mb-6 text-center">What is your phone number?</h4>
                  <div className="max-w-sm mx-auto">
                    <input type="tel" placeholder="Phone Number" autoFocus value={formState.phone} onChange={(e) => setFormState({ ...formState, phone: e.target.value })} onKeyDown={onEnter} className={inputClass} />
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-gray-200 px-5 sm:px-6 md:px-10 py-3.5 md:py-4 flex justify-between items-center shrink-0 bg-[#fcf6f4]">
              {step > 1 ? (
                <button onClick={() => setStep(step - 1)} className="text-gray-500 hover:text-gray-800 flex items-center gap-2 text-sm font-semibold transition-colors">
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
              ) : <div></div>}

              {isChoiceStep ? (
                <span className="text-sm text-gray-400">Select an option to continue</span>
              ) : (
                <button
                  onClick={handleNext}
                  disabled={stepIncomplete}
                  className={`flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-lg transition-colors ${
                    stepIncomplete ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-[#2f6b41] text-white hover:bg-[#275a37]'
                  }`}
                >
                  {step === phoneStep ? 'See My Results' : 'Continue'} <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VSLPage;
