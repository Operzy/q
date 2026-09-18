import React, { useEffect } from 'react';

const LOGO_URL = "/mfa-logo.webp";

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
    <div className="min-h-screen bg-[#fcf6f4] bg-[radial-gradient(ellipse_at_top,rgba(63,125,79,0.07),transparent_60%)] font-sans text-dark flex flex-col">
      <main className="flex-1 w-full max-w-[960px] mx-auto px-4 sm:px-6 pt-8 md:pt-12 pb-16 text-center animate-[scaleIn_0.4s_ease-out]">
        {/* Logo */}
        <img src={LOGO_URL} alt="My Funding Approved" className="h-12 md:h-16 w-auto mx-auto mb-8 md:mb-10" />

        {/* Headline */}
        <h1 className="text-[#1f4d2e] font-extrabold text-[2rem] sm:text-[2.6rem] md:text-[3.1rem] leading-[1.1] tracking-[-0.03em] mb-5 md:mb-6 max-w-[960px] mx-auto">
          You Qualify for Credit to Capital
        </h1>

        {/* Subheadline */}
        <p className="text-[17px] md:text-[20px] text-[#3a3a3a] leading-[1.55] max-w-[720px] mx-auto mb-8 md:mb-10">
          Our funding program requires a <span className="font-bold text-dark">650+ credit score</span>. Credit to Capital is built to raise your score so you can qualify. Book your call below to get started.
        </p>

        {/* LeadConnector Embed */}
        <div className="bg-white rounded-xl md:rounded-2xl ring-1 ring-black/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)] p-2 md:p-6 text-left">
          <div className="w-full min-h-[700px]">
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/xBrRYduZ4Yl0AHsEgiFA"
              style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "700px" }}
              scrolling="no"
              id="xBrRYduZ4Yl0AHsEgiFA_1777047624170"
              title="Book your credit consultation"
            ></iframe>
          </div>
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
    </div>
  );
};

export default CreditBookingPage;
