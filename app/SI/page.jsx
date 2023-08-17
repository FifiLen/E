'use client'
import React, { useEffect } from 'react'
useEffect

const Integration = () => {
  useEffect(() => {
    // Utwórz skrypt dla gtag.js
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-0QW3ZG23F5";
    
    // Dodaj skrypt do głowy dokumentu
    document.head.appendChild(gtagScript);

    // Utwórz dodatkowy skrypt dla konfiguracji Google Tag Managera
    const gtmInlineScript = document.createElement('script');
    gtmInlineScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-0QW3ZG23F5');
    `;

    // Dodaj dodatkowy skrypt do głowy dokumentu
    document.head.appendChild(gtmInlineScript);

    // Opcjonalnie: Możesz usunąć skrypty, gdy komponent zostanie odmontowany
    return () => {
        document.head.removeChild(gtagScript);
        document.head.removeChild(gtmInlineScript);
    }
}, []);
  return (
    <div className="relative overflow-y-auto h-[calc(1520vh-64px)] md:h-[calc(720vh-64px)] lg:h-[calc(720vh-64px)] w-full">
    <iframe
      scrolling="no"
      className="w-full h-full border-none"
      src='https://server376071.nazwa.pl/wordpress/wpn_magnolia/?page_id=800'
    ></iframe>
    </div>
  )
}

export default Integration


