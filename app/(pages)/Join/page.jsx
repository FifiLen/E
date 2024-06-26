"use client";
import React, { useEffect } from "react";
import Image from "next/image";
useEffect;

const Page = () => {
  useEffect(() => {
    // Utwórz skrypt dla gtag.js
    const gtagScript = document.createElement("script");
    gtagScript.async = true;
    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-0QW3ZG23F5";

    // Dodaj skrypt do głowy dokumentu
    document.head.appendChild(gtagScript);

    // Utwórz dodatkowy skrypt dla konfiguracji Google Tag Managera
    const gtmInlineScript = document.createElement("script");
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
    };
  }, []);
  return (
    <section className="mx-4 md:mx-[200px]">
      <h2 className="text-center text-3xl md:text-[55px] font-semibold text-gray-800 mt-[60px] mb-3">
        Dołącz do zespołu MAGNOLII
      </h2>
      <p className="text-gray-500 pb-4 pl-[1px] text-center">
        Zapraszamy do kontaktu
      </p>

      <div className="py-8 flex flex-col md:flex-row justify-center mt-[15px] mb-[100px] gap-5 items-stretch">
        <div className="w-full md:w-[600px] mb-4 md:mb-0">
          <div className="bg-[rgb(61,162,117)] p-4 md:p-8 rounded-[20px] shadow-2xl h-full">
            <h2 className="text-4xl font-semibold tracking-tighter mb-4 text-white">
              Jeżeli jesteś zainteresowany/a?
            </h2>
            <div className="w-[100%]">
              <p className="font-semibold text-[18px] text-white">
                Jeżeli jesteś zainteresowany podjęciem pracy w&nbsp;naszej
                Poradni, zapewniamy:
              </p>
              <ul
                style={{ listStyleType: "disc", paddingLeft: "1em" }}
                className="mt-4 text-white font-light"
              >
                <li>
                  umowę b2b lub umowę zlecenie lub umowę o pracę - kwestia
                  indywidualna,
                </li>
                <li>atrakcyjne wynagrodzenie,</li>
                <li>możliwość rozwoju zawodowego,</li>
                <li>wyposażony gabinet,</li>
                <li>miłą i życzliwą atmosferę,</li>
                <li>możliwość rozwoju.</li>
              </ul>
              <p className="font-semibold text-[18px] mt-4 text-white">
                Wymagania:{" "}
              </p>
              <ul
                style={{ listStyleType: "disc", paddingLeft: "1em" }}
                className=" mt-4 font-light text-white"
              >
                <li>kwalifikacje zawodowe,</li>
                <li>
                  gotowość/doświadczenie w prowadzeniu terapii indywidualnej
                  <br /> z dziećmi i młodzieżą oraz z osobami dorosłymi,
                </li>
                <li>kreatywność i samodzielność w działaniu,</li>
                <li>zaangażowanie w pracę.</li>
              </ul>
              <p className="font-semibold text-[18px] mt-4 mb-4 text-white">
                Jeśli wykonujesz swój zawód z pasją, <br />
                masz szereg pomysłów z obszaru terapii – zapraszamy do zespołu.{" "}
              </p>

              <p className="font-semibold mb-3 text-white">
                Skontaktuj się z nami.
              </p>
              <p className="text-white font-light">
                Niepubliczna Poradnia Psychologiczno-Pedagogiczna MAGNOLIA
              </p>
              <p className="text-white font-light">ul. Magnolii 25</p>
              <p className="text-white font-light">44-207 Rybnik</p>
              <p className="text-white font-light">ul. Rudzka 13</p>
              <p className="text-white font-light">
                budynek B, III piętro, pok. 3.3
              </p>
              <p className="text-white font-light">44-200 Rybnik</p>
              <p className="text-white font-light">
                Telefon/WhatsApp: 502 162 365
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center w-full md:w-[600px]">
          <Image
            src="/assets/join.jpg"
            alt="Mapa"
            layout="fill"
            objectFit="cover"
            className="absolute z-0 rounded-[25px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Page;
