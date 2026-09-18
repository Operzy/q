import React, { useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';

const LOGO_URL = "/mfa-logo.webp";

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
    <div className="min-h-screen bg-[#fcf6f4] bg-[radial-gradient(ellipse_at_top,rgba(63,125,79,0.07),transparent_60%)] font-sans text-dark flex flex-col">
      <main className="flex-1 w-full max-w-[960px] mx-auto px-4 sm:px-6 pt-8 md:pt-12 pb-16 text-center animate-[scaleIn_0.4s_ease-out]">
        {/* Logo */}
        <img src={LOGO_URL} alt="My Funding Approved" className="h-12 md:h-16 w-auto mx-auto mb-8 md:mb-10" />

        {/* Status pill */}
        <div className="inline-flex items-center gap-2.5 bg-[#e6f4ea] border border-[#b9dfc4] text-[#2f6b41] rounded-full pl-3 pr-5 py-2 mb-6 shadow-[0_4px_14px_-6px_rgba(47,107,65,0.35)]">
          <CheckCircle2 className="w-4 h-4" strokeWidth={2.5} />
          <span className="text-[13px] md:text-[15px] font-bold tracking-wide uppercase">You Are Qualified</span>
        </div>

        {/* Headline */}
        <h1 className="text-[#1f4d2e] font-extrabold text-[2rem] sm:text-[2.6rem] md:text-[3.1rem] leading-[1.1] tracking-[-0.03em] mb-8 md:mb-10 max-w-[960px] mx-auto">
          Book Your Strategy Session Below
        </h1>

        {/* LeadConnector Booking Embed */}
        <div className="bg-white rounded-xl md:rounded-2xl ring-1 ring-black/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)] p-2 md:p-6 text-left">
          <div className="w-full min-h-[700px]">
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/FahB7qhPb0tgPGNhYwG7"
              style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "700px" }}
              scrolling="no"
              id="FahB7qhPb0tgPGNhYwG7_1777047578034"
              title="Book your strategy session"
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

export default BookingPage;
