// GA4 Measurement ID: replace with your own
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX'); // Replace with your GA4 ID

const gaLib = document.createElement("script");
gaLib.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX";
gaLib.async = true;
document.head.appendChild(gaLib);
