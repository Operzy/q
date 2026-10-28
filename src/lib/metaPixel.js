// Meta Pixel loader. Lives in JS (not index.html) so specific routes can opt
// out of the pixel entirely, e.g. the Credit to Capital confirmation page.
const PIXEL_ID = '1124531516850758';

// Full paths where the pixel must NOT load. Calendar redirects are full page
// loads, so landing here means the pixel script is never injected.
export const PIXEL_EXCLUDED_PATHS = ['/credit-booked'];

export const isPixelExcluded = (pathname) =>
  PIXEL_EXCLUDED_PATHS.some((p) => pathname === p || pathname.startsWith(p + '/'));

export function loadMetaPixel() {
  if (typeof window === 'undefined' || window.fbq) return;
  /* eslint-disable */
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  /* eslint-enable */
  window.fbq('init', PIXEL_ID);
  window.fbq('track', 'PageView');
}
