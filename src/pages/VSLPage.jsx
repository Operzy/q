import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X as XIcon, ArrowRight, ArrowLeft } from 'lucide-react';

const LOGO_URL = "/mfa-logo.webp";
const WISTIA_MEDIA_ID = "xerfwv6gq1";

const optionClass = (selected) =>
  `relative p-5 rounded-xl border text-left font-sans transition-all duration-200 ${
    selected
      ? 'bg-[#2f6b41]/10 border-[#2f6b41] text-[#2f6b41]'
      : 'bg-white border-gray-200 text-gray-800 hover:border-[#2f6b41]/50'
  }`;

const inputClass =
  "w-full bg-white border border-gray-300 text-gray-900 rounded-xl py-4 px-5 font-sans text-lg focus:outline-none focus:border-[#2f6b41] transition-all placeholder:text-gray-400";

const VSLPage = () => {
  const navigate = useNavigate();
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formState, setFormState] = useState({ funding: "", credit: "", name: "", email: "", phone: "" });

  const stepIncomplete =
    (step === 1 && !formState.funding) ||
    (step === 2 && !formState.credit) ||
    (step === 3 && (!formState.name || !formState.email || !formState.phone));

  const handleNext = () => {
    if (step === 1 && formState.funding) setStep(2);
    else if (step === 2 && formState.credit) setStep(3);
    else if (step === 3 && formState.name && formState.email && formState.phone) {
      setIsQuizOpen(false);
      if (formState.credit === "Below 620" || formState.credit === "620-679") {
        navigate('/credit-book');
      } else {
        navigate('/book');
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#fcf6f4] bg-[radial-gradient(ellipse_at_top,rgba(63,125,79,0.07),transparent_60%)] font-sans text-dark flex flex-col">
      <main className="flex-1 w-full max-w-[960px] mx-auto px-4 sm:px-6 pt-8 md:pt-12 pb-16 text-center">
        {/* Logo */}
        <img src={LOGO_URL} alt="My Funding Approved" className="h-12 md:h-16 w-auto mx-auto mb-8 md:mb-10" />

        {/* Attention pill */}
        <div className="inline-flex items-center gap-2.5 bg-[#fdecea] border border-[#f3b6b1] text-[#c62828] rounded-full pl-3 pr-5 py-2 mb-6 shadow-[0_4px_14px_-6px_rgba(198,40,40,0.35)]">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e53935] opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#e53935]"></span>
          </span>
          <span className="text-[13px] md:text-[15px] font-bold tracking-wide">
            <span className="uppercase">Attention:</span> Entrepreneurs &amp; Investors With 650+ Credit Scores
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-[#1f4d2e] font-extrabold text-[2rem] sm:text-[2.6rem] md:text-[3.1rem] leading-[1.1] tracking-[-0.03em] mb-6 md:mb-7 max-w-[960px] mx-auto">
          We will get you up to $250,000 in<br className="hidden md:block" /> 0% interest business funding
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
            className="group inline-flex items-center justify-center gap-2.5 bg-[#2f6b41] hover:bg-[#275a37] text-white font-bold text-lg md:text-xl px-10 md:px-12 py-4.5 md:py-5 rounded-xl shadow-[0_10px_30px_-8px_rgba(47,107,65,0.6)] hover:shadow-[0_14px_36px_-8px_rgba(47,107,65,0.7)] hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto"
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

          <div className="relative bg-[#fcf6f4] rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden animate-[scaleIn_0.3s_ease-out]">
            <button onClick={() => setIsQuizOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors rounded-full p-2">
              <XIcon className="w-5 h-5" />
            </button>

            <div className="px-6 md:px-10 pt-10 pb-8">
              <p className="text-xs tracking-widest text-[#2f6b41] uppercase font-bold text-center mb-6">Step {step} of 3</p>

              {step === 1 && (
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-[#2f6b41] mb-6 text-center">How much funding are you looking to secure?</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {["Under 50K", "$50K-$100K", "$100K-$200K", "200K+"].map(opt => (
                      <button key={opt} onClick={() => { setFormState({ ...formState, funding: opt }); setTimeout(() => setStep(2), 180); }} className={optionClass(formState.funding === opt)}>
                        <span className="font-bold">{opt}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-[#2f6b41] mb-6 text-center">What is your estimated personal credit score?</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {["Below 620", "620-679", "680-699", "700-749", "750+"].map(opt => (
                      <button key={opt} onClick={() => { setFormState({ ...formState, credit: opt }); setTimeout(() => setStep(3), 180); }} className={optionClass(formState.credit === opt)}>
                        <span className="font-bold">{opt}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-[#2f6b41] mb-6 text-center">Almost there! Where should we send your results?</h4>
                  <div className="flex flex-col gap-3 max-w-sm mx-auto">
                    <input type="text" placeholder="Full Name" value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} className={inputClass} />
                    <input type="email" placeholder="Email Address" value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} className={inputClass} />
                    <input type="tel" placeholder="Phone Number" value={formState.phone} onChange={(e) => setFormState({ ...formState, phone: e.target.value })} className={inputClass} />
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-gray-200 px-6 md:px-10 py-4 flex justify-between items-center">
                {step > 1 ? (
                  <button onClick={() => setStep(step - 1)} className="text-gray-500 hover:text-gray-800 flex items-center gap-2 text-sm font-semibold transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                ) : <div></div>}

                {step === 3 ? (
                <button
                  onClick={handleNext}
                  disabled={stepIncomplete}
                  className={`flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-lg transition-colors ${
                    stepIncomplete ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-[#2f6b41] text-white hover:bg-[#275a37]'
                  }`}
                >
                  Continue <ArrowRight className="w-4 h-4" />
                </button>
                ) : (
                  <span className="text-sm text-gray-400">Select an option to continue</span>
                )}
              </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VSLPage;
