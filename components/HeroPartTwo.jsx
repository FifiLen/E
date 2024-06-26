import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import { CgArrowTopRightO } from "react-icons/cg";

const SecondMainPageSection = () => {
  return (
    <section className="w-full bg-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-full">
        {/* Image Column */}
        <div className="relative hidden sm:block w-full h-64 md:h-auto">
          <Image
            src="/assets/pets.jpg"
            fill
            alt="Studentka przy komputerze, rekrutacja 2024/2025"
            className="object-cover"
            quality={75}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        {/* Text Column */}
        <div className="flex justify-center items-start px-8 md:px-20 py-16 md:py-36 flex-col rekrutacja">
          <h2 className="text-4xl md:text-5xl text-zinc-800 font-semibold tracking-tighter mt-3">
            Nasze pupile
          </h2>
          <p className="text-base md:text-lg text-zinc-600 mt-4">
            Poradnia Psychologiczno-Pedagogiczna MAGNOLIA, to&nbsp;również dom
            dla szeregu „braci mniejszych”. Na&nbsp;co dzień pracujemy
            w&nbsp;towarzystwie czworonogów: kochanego psiaka o&nbsp;imieniu
            Lili rasy Golden Retriver oraz króliczków miniaturek Lusi
            i&nbsp;Trusi. <br />
            <br /> Utrzymujemy bliski kontakt ze&nbsp;staniną koni, umożlwiającą
            nam prowadzenie hipoterapii. Stawiamy na&nbsp;bliski kontakt
            z&nbsp;naturą, gdyż wierzymy, że&nbsp;życie w&nbsp;harmonii
            z&nbsp;przyrodą i&nbsp;otaczającym nas światem korzystnie wpływa
            na&nbsp;samopoczucie ludzi w&nbsp;każdym wieku. Podczas pobytu
            w&nbsp;naszej placówce zapewniamy Państwu możliwość skorzystania
            ze&nbsp;strefy relaksu z&nbsp;widokiem na&nbsp;akwarium przy
            dźwiękach odprężającej muzyki. <br />
            <br /> Nasi najmłodsi podopieczni uczęszczają na&nbsp;zajęcia
            w&nbsp;towarzystwie króliczków oraz korzystają z dobroczynnego
            wpływu dogoterapii oraz hipoterapii.
          </p>
          <div className="block md:flex items-center gap-2">
            <a
              href="https://www.tiktok.com/@poradnia_magnolia_rybnik"
              target="_blank"
            >
              <button
                aria-label="poznaj naszą ofertę"
                className="bg-[#921d7f] text-white font-semibold rounded-lg px-4 py-3 flex gap-3 items-center justify-center mt-8"
              >
                Zajrzyj na naszego tiktoka
                <CgArrowTopRightO className="text-2xl" />
              </button>
            </a>
            <Link href="/hipoterapia">
              <button
                aria-label="poznaj naszą ofertę"
                className="bg-[#225da5] text-white font-semibold rounded-lg px-4 py-3 flex gap-3 items-center justify-center mt-8"
              >
                Hipoterapia
                <CgArrowTopRightO className="text-2xl" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondMainPageSection;
