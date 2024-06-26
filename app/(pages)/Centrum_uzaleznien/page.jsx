import { AlertDemo } from "../../../components/Alert";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const PoradniaPsychologicznoPedagogiczna = () => {
  return (
    <div className="bg-gray-100/20 font-sans overflow-x-hidden">
      {/* Nagłówek */}
      <div className=" border-b border-gray-300 text-white py-4 md:py-6 bg-gradient-to-br from-orange-100 via-orange-300 to-orange-600">
        <div className="flex justify-center items-center">
          <h2 className="text-3xl font-display text-slate-800 md:text-3xl font-semibold mb-2 md:mb-4 pt-3 text-center md:text-left">
            Centrum uzależnień
          </h2>
        </div>
      </div>

      <section className="mt-10 py-6 md:py-24">
        <div className="mx-auto">
          <div className="grid grid-cols-1 items-center flex-col md:flex-row xl:grid-cols-2">
            {/* Obrazek */}
            <div className="relative mb-4 md:mb-0">
              <div className="relative w-[670px] h-[670px] overflow-hidden hidden lg:flex justify-center items-center rounded-r-2xl">
                <Image
                  src="/assets/uzaleznienie.jpg"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 33vw"
                  priority={true}
                  alt="dziecko ubierające maskę"
                />
              </div>
            </div>

            {/* Tekst informacyjny */}
            <div className="mx-6 md:mr-16 flex-col justify-center items-center">
              <h2 className="text-4xl md:text-4xl text-left font-semibold mb-6 font-display">
                Terapia E-uzależnień
              </h2>

              <p className="text-gray-700 text-base text-left">
                Zapraszamy dorosłych, dzieci i młodzież do skorzystania z
                terapii e-uzależnień. Oferujemy indywidualnie dostosowane sesje
                z doświadczonymi specjalistami, wsparcie w zrozumieniu i
                zwalczaniu uzależnień od elektroniki i internetu oraz skuteczne
                narzędzia i strategie terapeutyczne.
              </p>

              <Link
                href={"/Kontakt"}
                className=" text-slate-800 flex justify-start"
              >
                <div className="mt-6 w-fit cursor-pointer flex items-center justify-center shadow-md border bg-slate-50/80 border-slate-700 rounded-xl custom-shadow2">
                  Umów wizytę u Terapeuty uzależnień{" "}
                  <FaRegArrowAltCircleRight />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 py-6 md:py-24">
        <div className="mx-auto">
          <div className="grid grid-cols-1 items-center flex-col md:flex-row xl:grid-cols-2">
            {/* Obrazek */}
            <div className="mb-4 md:mb-0">
              <div className="relative w-[670px] h-[670px] overflow-hidden hidden lg:flex justify-center items-center rounded-r-2xl">
                <Image
                  src="/assets/uzaleznienie2.jpg"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 33vw"
                  priority={false}
                  alt="dziecko ubierające maskę"
                />
              </div>
            </div>

            {/* Tekst informacyjny */}
            <div className="mx-6 md:mr-16 flex-col justify-center items-center">
              <h2 className="text-4xl md:text-4xl text-left font-semibold mb-6 font-display">
                Terapia uzależnień
              </h2>

              <p className="text-gray-700 text-base text-left">
                Zapraszamy dorosłych, dzieci i młodzież do skorzystania z
                terapii uzależnień od używek. Oferujemy indywidualnie
                dostosowane sesje z doświadczonymi specjalistami, wsparcie w
                zrozumieniu i zwalczaniu uzależnień od alkoholu, narkotyków i
                innych substancji oraz skuteczne narzędzia i strategie
                terapeutyczne.
              </p>

              <Link
                href={"/Kontakt"}
                className=" text-slate-800 flex justify-start"
              >
                <div className="mt-6 w-fit cursor-pointer flex items-center justify-center shadow-md border bg-slate-50/80 border-slate-700 rounded-xl custom-shadow2">
                  Umów wizytę u Terapeuty uzależnień{" "}
                  <FaRegArrowAltCircleRight />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 py-6 md:py-24 mb-10">
        <div className="mx-auto">
          <div className="grid grid-cols-1 items-center flex-col md:flex-row xl:grid-cols-2">
            {/* Obrazek */}
            <div className="mb-4 md:mb-0">
              <div className="relative w-[670px] h-[670px] overflow-hidden hidden lg:flex justify-center items-center rounded-r-2xl">
                <Image
                  src="/assets/uzaleznienie3.jpg"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 33vw"
                  priority={false}
                  alt="dziecko ubierające maskę"
                />
              </div>
            </div>

            {/* Tekst informacyjny */}
            <div className="mx-6 md:mr-16 flex-col justify-center items-center">
              <h2 className="text-4xl md:text-4xl text-left font-semibold mb-6 font-display">
                Diagnoza uzależnień
              </h2>

              <p className="text-gray-700 text-base text-left">
                Zapraszamy na profesjonalną diagnozę uzależnień. Nasz zespół
                doświadczonych specjalistów korzysta z zaawansowanych metod
                oceny, aby zidentyfikować problem i zalecić odpowiednie
                działania. Diagnoza obejmuje analizę zachowań, wywiady oraz
                badania, dzięki którym możliwe jest zrozumienie głęboko
                zakorzenionych przyczyn uzależnienia i opracowanie skutecznej
                strategii leczenia. Oferujemy diagnozę uzależnień od używek oraz
                e-uzależnień, dostosowaną do potrzeb dorosłych, dzieci i
                młodzieży.
              </p>

              <Link
                href={"/Kontakt"}
                className=" text-slate-800 flex justify-start"
              >
                <div className="mt-6 w-fit cursor-pointer flex items-center justify-center shadow-md border bg-slate-50/80 border-slate-700 rounded-xl custom-shadow2">
                  Umów się na diagnozę <FaRegArrowAltCircleRight />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AlertDemo />
    </div>
  );
};

export default PoradniaPsychologicznoPedagogiczna;
