import { useEffect } from 'react';
import { AlertTriangle, CalendarCheck, MessageSquare, CheckCircle2 } from 'lucide-react';

const LOGO_URL = "/logo-CIo0yBvo.png";

const BookedPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A14] flex flex-col font-sans overflow-x-hidden relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>

      {/* Success Banner */}
      <div className="bg-accent/15 border-b border-accent/30 w-full sticky top-0 z-50 backdrop-blur-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-center gap-3 text-center">
          <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
          <div className="text-white font-bold tracking-wide text-sm md:text-base">
            Your Strategy Session Is Reserved
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center pt-16 pb-24">

        {/* Headline */}
        <div className="text-center w-full max-w-4xl mb-12 animate-[scaleIn_0.4s_ease-out]">
          <div className="font-mono text-xs md:text-sm tracking-[0.2em] text-accent uppercase mb-6 flex items-center justify-center gap-3">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.8)]"></div>
            Booking Confirmed
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-sans text-white mb-6 tracking-tighter uppercase leading-[1.1]">
            Thank You For Booking Your <br className="hidden md:block"/>
            <span className="font-serif italic font-normal text-accent lowercase drop-shadow-[0_0_20px_rgba(74,222,128,0.3)]">strategy session.</span>
          </h1>
        </div>

        {/* Disclaimer Banner */}
        <div className="w-full max-w-4xl mb-14">
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-3xl p-6 md:p-8 backdrop-blur-md shadow-[0_0_50px_rgba(234,179,8,0.08)]">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-center md:text-left">
              <div className="w-14 h-14 bg-yellow-500/20 rounded-full flex items-center justify-center shrink-0 border border-yellow-500/30">
                <AlertTriangle className="w-7 h-7 text-yellow-500" strokeWidth={2.5} />
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-bold text-yellow-500 mb-1 font-sans tracking-tight uppercase">
                  Important: Complete These Two Steps
                </h2>
                <p className="text-yellow-500/90 text-sm md:text-base font-medium">
                  If you don't follow the next two steps, we will be forced to cancel your booking.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Two Steps */}
        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 mb-16">

          {/* Step 1 */}
          <div className="relative bg-white/5 border border-white/10 rounded-[2rem] p-6 md:p-8 backdrop-blur-md shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-12 h-12 rounded-full bg-accent text-dark flex items-center justify-center font-black text-xl shadow-[0_0_20px_rgba(74,222,128,0.4)] shrink-0">
                1
              </div>
              <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest">
                <CalendarCheck className="w-4 h-4" /> Add To Calendar
              </div>
            </div>

            <div className="rounded-[1.25rem] overflow-hidden aspect-[4/3] relative border border-white/10 shadow-xl mb-6 bg-white flex items-center justify-center p-4">
              <img
                src="/booked-step-email.png"
                className="max-w-full max-h-full object-contain"
                alt="Confirmation email showing Add to Calendar button"
              />
            </div>

            <h3 className="text-white font-bold text-xl md:text-2xl mb-3 tracking-tight">
              Click Add to Calendar on the email we sent you
            </h3>
            <p className="text-white/70 text-base leading-relaxed">
              We've sent you a confirmation email for your booking. Open it and click <span className="text-white font-bold">Add to Calendar</span> so the session is locked into your schedule.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative bg-white/5 border border-white/10 rounded-[2rem] p-6 md:p-8 backdrop-blur-md shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-12 h-12 rounded-full bg-accent text-dark flex items-center justify-center font-black text-xl shadow-[0_0_20px_rgba(74,222,128,0.4)] shrink-0">
                2
              </div>
              <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest">
                <MessageSquare className="w-4 h-4" /> Reply To Our SMS
              </div>
            </div>

            <div className="rounded-[1.25rem] overflow-hidden aspect-[4/3] relative border border-white/10 shadow-xl mb-6 bg-black flex items-center justify-center p-4">
              <img
                src="/booked-step-sms.png"
                className="max-w-full max-h-full object-contain"
                alt="Text message asking to confirm attendance"
              />
            </div>

            <h3 className="text-white font-bold text-xl md:text-2xl mb-3 tracking-tight">
              Reply YES to confirm you'll join the appointment
            </h3>
            <p className="text-white/70 text-base leading-relaxed">
              We've just sent you an SMS. Please reply <span className="text-white font-bold">"YES"</span> to confirm you're going to attend your strategy session.
            </p>
          </div>
        </div>

        {/* Closing warning */}
        <div className="w-full max-w-3xl text-center">
          <div className="bg-dark/60 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-md">
            <p className="text-white/80 text-base md:text-lg font-sans leading-relaxed">
              If you don't do these two things, we'll be forced to cancel your appointment. <span className="font-serif italic text-white"> Coach Q only takes on people who are willing to take this seriously.</span>
            </p>
          </div>
        </div>

        {/* Logo footer */}
        <div className="mt-16 flex justify-center opacity-70 hover:opacity-100 transition-opacity">
          <img src={LOGO_URL} alt="MyFundingApprove Logo" className="h-10 md:h-12 w-auto object-contain drop-shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default BookedPage;
