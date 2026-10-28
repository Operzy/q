import { useEffect } from 'react';
import { AlertTriangle, CalendarCheck, MessageSquare, CheckCircle2 } from 'lucide-react';

const LOGO_URL = "/mfa-logo.webp";

// Confirmation page for the Credit to Capital calendar (unqualified path).
// Intentionally NO Meta Pixel here: this route is excluded in src/lib/metaPixel.js
// and no Lead event is fired.
const CreditBookedPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

  }, []);

  return (
    <div className="min-h-screen bg-[#fcf6f4] bg-[radial-gradient(ellipse_at_top,rgba(63,125,79,0.07),transparent_60%)] font-sans text-dark flex flex-col">
      <main className="flex-1 w-full max-w-[960px] mx-auto px-4 sm:px-6 pt-8 md:pt-12 pb-16 text-center animate-[scaleIn_0.4s_ease-out]">
        {/* Logo */}
        <img src={LOGO_URL} alt="My Funding Approved" className="h-12 md:h-16 w-auto mx-auto mb-8 md:mb-10" />

        {/* Status pill */}
        <div className="inline-flex items-center gap-2.5 bg-[#e6f4ea] border border-[#b9dfc4] text-[#2f6b41] rounded-full pl-3 pr-5 py-2 mb-6 shadow-[0_4px_14px_-6px_rgba(47,107,65,0.35)]">
          <CheckCircle2 className="w-4 h-4" strokeWidth={2.5} />
          <span className="text-[13px] md:text-[15px] font-bold tracking-wide uppercase">Booking Confirmed</span>
        </div>

        {/* Headline */}
        <h1 className="text-[#1f4d2e] font-extrabold text-[2rem] sm:text-[2.6rem] md:text-[3.1rem] leading-[1.1] tracking-[-0.03em] mb-6 md:mb-7 max-w-[960px] mx-auto">
          Thank You For Booking Your<br className="hidden md:block" /> Credit to Capital Session
        </h1>

        <p className="text-[17px] md:text-[20px] text-[#3a3a3a] leading-[1.55] max-w-[760px] mx-auto mb-8 md:mb-10">
          Your Credit to Capital session is reserved. Please complete the two quick steps below to lock it in.
        </p>

        {/* Warning box */}
        <div className="mb-8 md:mb-10 bg-[#fff7e6] border border-[#f3d9a4] rounded-xl md:rounded-2xl p-5 md:p-6 text-left max-w-[820px] mx-auto shadow-[0_10px_30px_-15px_rgba(180,120,0,0.25)]">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="w-11 h-11 bg-[#fdebc8] rounded-full flex items-center justify-center shrink-0 border border-[#f3d9a4]">
              <AlertTriangle className="w-6 h-6 text-[#b7791f]" strokeWidth={2.5} />
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-bold text-[#8a5a12] mb-1.5 tracking-tight">
                Important: Complete These Two Steps
              </h2>
              <p className="text-[#8a5a12]/90 text-sm md:text-[15px] leading-relaxed">
                If you don't follow the next two steps, we will be forced to cancel your booking.
              </p>
            </div>
          </div>
        </div>

        {/* Two Steps */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10 text-left">

          {/* Step 1 */}
          <div className="bg-white rounded-xl md:rounded-2xl ring-1 ring-black/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] p-6 md:p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-11 h-11 rounded-full bg-[#2f6b41] text-white flex items-center justify-center font-extrabold text-lg shrink-0">
                1
              </div>
              <div className="flex items-center gap-2 text-[#2f6b41] font-bold text-xs uppercase tracking-widest">
                <CalendarCheck className="w-4 h-4" /> Add To Calendar
              </div>
            </div>

            <div className="rounded-xl overflow-hidden aspect-[4/3] border border-black/10 bg-[#f7f2ef] flex items-center justify-center p-4 mb-6">
              <img
                src="/booked-step-email.png"
                className="max-w-full max-h-full object-contain"
                alt="Confirmation email showing Add to Calendar button"
              />
            </div>

            <h3 className="text-[#1f4d2e] font-bold text-xl md:text-2xl mb-3 tracking-tight leading-snug">
              Click Add to Calendar on the email we sent you
            </h3>
            <p className="text-[#3a3a3a] text-base leading-relaxed">
              We've sent you a confirmation email for your booking. Open it and click <span className="font-bold text-dark">Add to Calendar</span> so the session is locked into your schedule.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-xl md:rounded-2xl ring-1 ring-black/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] p-6 md:p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-11 h-11 rounded-full bg-[#2f6b41] text-white flex items-center justify-center font-extrabold text-lg shrink-0">
                2
              </div>
              <div className="flex items-center gap-2 text-[#2f6b41] font-bold text-xs uppercase tracking-widest">
                <MessageSquare className="w-4 h-4" /> Reply To Our SMS
              </div>
            </div>

            <div className="rounded-xl overflow-hidden aspect-[4/3] border border-black/10 bg-[#111] flex items-center justify-center p-4 mb-6">
              <img
                src="/booked-step-sms.png"
                className="max-w-full max-h-full object-contain"
                alt="Text message asking to confirm attendance"
              />
            </div>

            <h3 className="text-[#1f4d2e] font-bold text-xl md:text-2xl mb-3 tracking-tight leading-snug">
              Reply YES to confirm you'll join the appointment
            </h3>
            <p className="text-[#3a3a3a] text-base leading-relaxed">
              We've just sent you an SMS. Please reply <span className="font-bold text-dark">"YES"</span> to confirm you're going to attend your Credit to Capital session.
            </p>
          </div>
        </div>

        {/* Closing note */}
        <div className="max-w-[760px] mx-auto bg-[#e6f4ea]/60 border border-[#b9dfc4] rounded-xl md:rounded-2xl p-6 md:p-8">
          <p className="text-[#1f4d2e] text-base md:text-lg leading-relaxed">
            If you don't do these two things, we'll be forced to cancel your appointment. <span className="font-bold">Coach Q only takes on people who are willing to take this seriously.</span>
          </p>
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

export default CreditBookedPage;
