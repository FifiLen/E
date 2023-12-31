import React from 'react';

const ClassicLayout = () => {
  return (
    <><div className="relative h-[620px] overflow-hidden">
      <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay muted loop>
        <source src="/assets/movie13.mp4" type="video/mp4" />
        Twoja przeglądarka nie obsługuje tagu video.
      </video>

      <div className="absolute top-0 left-0 w-full h-[620px] bg-black opacity-40 z-5"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold">Logopeda</h1>
        <p className="text-sm sm:text-base md:text-lg text-white">Terapia logopedyczna/neurologopedyczna</p>
      </div>
    </div>
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 xl:px-44 py-2 lg:py-4 flex flex-col justify-center sm:py-12 lg:mb-20">
        <h2 className='mt-20 font-bold text-4xl text-slate-800'>Logopedia</h2>
        <p className='mt-2 font-normal text-xl text-slate-500'>Terapia logopedyczna/neurologopedyczna</p>
        <div className="container mx-auto">
          <div className="relative py-3 mx-auto max-w-full">
            <div className="relative px-4 py-6 bg-white shadow-lg sm:rounded-3xl sm:p-10 lg:p-20">
              <div className="mx-auto">
                
                {/* Sekcja 3 */}
                <div className="mb-6 bg-white p-4 sm:p-6 rounded-lg shadow-lg">
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 md:pr-4 mb-4 md:mb-0">
                      <img
                        src="/assets/logopeda3.jpg" // Dodaj ścieżkę do swojego zdjęcia
                        alt="Zdjęcie 1"
                        className="w-full h-auto rounded-lg" />
                    </div>
                    <div className="md:w-1/2">
                      <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-600">
                        Kiedy udać się do logopedy?
                      </h2>
                      <ul className="text-base text-gray-600">
                        <li><strong>Grupa Wiekowa: Niemowlęta (Do 1 Roku Życia):</strong>
                          <ul>
                            <li>Jeśli po ukończeniu roku życia dziecko nie wydaje żadnych dźwięków.</li>
                            <li>Jeśli zauważasz, że dziecko nie reaguje na dźwięki lub nie wydaje dźwięków&nbsp;w&nbsp;odpowiedzi.</li>
                          </ul>
                        </li>
                        <li><strong>Grupa Wiekowa: Małe Dzieci (1-3 Lata):</strong>
                          <ul>
                            <li>Jeśli dziecko w&nbsp;wieku 2 lat nie próbuje wypowiadać pierwszych słów.</li>
                            <li>Jeśli dziecko ma problemy z wymawianiem niektórych dźwięków, takich jak "p," "b," lub "m."</li>
                          </ul>
                        </li>
                        <li><strong>Grupa Wiekowa: Przedszkolaki (3-5 Lat):</strong>
                          <ul>
                            <li>Jeśli dziecko w&nbsp;wieku 3 lat nadal nie jest w&nbsp;stanie tworzyć prostych zdań.</li>
                            <li>Jeśli trudności w&nbsp;wymawianiu głosek, takich jak "l," "f," "w," "k," "g," "h," lub "ł," są widoczne.</li>
                            <li>Jeśli zauważasz, że dziecko utyka językiem podczas mówienia.</li>
                          </ul>
                        </li>
                        <li><strong>Grupa Wiekowa: Młodsza Szkoła Podstawowa (6-10 Lat):</strong>
                          <ul>
                            <li>Jeśli dziecko nadal ma trudności z&nbsp;wymawianiem głosek, takich jak "s," "z," "c," lub "dz."</li>
                            <li>Jeśli dziecko modyfikuje sylaby w&nbsp;wyrazach lub skraca wyrazy w&nbsp;sposób nieadekwatny do wieku.</li>
                          </ul>
                        </li>
                        <li><strong>Grupa Wiekowa: Starsze Dzieci i Młodzież (11-18 Lat):</strong>
                          <ul>
                            <li>Jeśli po osiągnięciu 11 roku życia dziecko nadal ma trudności z&nbsp;wymawianiem głosek, takich jak "sz," "ż," "cz," lub "dż."</li>
                            <li>Jeśli wymowa głoski "r" jest nadal problemem, a dziecko ma trudności z&nbsp; poprawnym jej wypowiadaniem.</li>
                          </ul>
                        </li>
                        <li><strong>Grupa Wiekowa: Dorośli (18+ Lat):</strong>
                          <ul>
                            <li>Jeśli dorośli doświadczają trudności z mową, takie jak chrypa, utrata głosu lub problemy z wymawianiem niektórych dźwięków.</li>
                          </ul>
                        </li>
                      </ul>

                    </div>
                  </div>
                </div>

                {/* Sekcja 2 */}
                <div className="mb-6 bg-white p-4 sm:p-6 rounded-lg shadow-lg">
                  <div className="flex flex-col md:flex-row-reverse items-center justify-between">
                    <div className="md:w-1/2 md:pl-4 mb-4 md:mb-0">
                      <img
                        src="/assets/logopeda2.jpg" // Dodaj ścieżkę do swojego zdjęcia
                        alt="Zdjęcie 2"
                        className="w-full h-auto rounded-lg" />
                    </div>
                    <div className="md:w-1/2">
                      <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-600">
                        Zalety terapii logopedycznej
                      </h2>
                      <ul className="text-base text-gray-600">
                        <li><strong>Poprawa komunikacji:</strong> Terapia logopedyczna pomaga poprawić zdolności komunikacyjne, co ma kluczowe znaczenie w&nbsp;codziennym życiu, pracy i&nbsp;relacjach społecznych.</li>
                        <li><strong>Wspieranie rozwoju językowego:</strong> Dla dzieci terapia logopedyczna jest szczególnie korzystna, pomagając w&nbsp;rozwijaniu umiejętności mówienia, słuchania, czytania, i&nbsp;pisania.</li>
                        <li><strong>Przezwyciężanie wad wymowy:</strong> Terapia logopedyczna pomaga w&nbsp;eliminowaniu wad wymowy, co może być istotne dla zdrowego rozwoju dziecka, i&nbsp;pewności siebie.</li>
                        <li><strong>Leczenie zaburzeń głosu:</strong> Osoby z zaburzeniami głosu, takimi jak chrypa czy afonia, mogą skorzystać z terapii logopedycznej, aby przywrócić zdrowy, i&nbsp;wyraźny głos.</li>
                        <li><strong>Wsparcie dla osób z autyzmem:</strong> Terapia logopedyczna może pomóc osobom z autyzmem w&nbsp;rozwijaniu umiejętności komunikacji, i&nbsp;interakcji społecznych.</li>
                        <li><strong>Pomoc osobom po udarach i urazach mózgu:</strong> Osoby po udarach lub urazach mózgu często potrzebują terapii logopedycznej do przywrócenia funkcji mowy, i&nbsp;komunikacji.</li>
                        <li><strong>Wsparcie osób starszych:</strong> Terapia logopedyczna może pomóc osobom starszym w&nbsp;utrzymaniu zdrowej komunikacji, i&nbsp;uniknięciu problemów&nbsp;związanych z&nbsp;zaburzeniami mowy związanymi z&nbsp;wiekiem.</li>
                        <li><strong>Podniesienie pewności siebie:</strong> Poprawa umiejętności komunikacyjnych dzięki terapii logopedycznej może znacząco podnieść pewność siebie pacjentów.</li>
                        <li><strong>Indywidualne podejście:</strong> Terapeuci logopedyczni dostosowują terapię do indywidualnych potrzeb każdego pacjenta, co zapewnia efektywną pomoc.</li>
                        <li><strong>Zwiększenie jakości życia:</strong> Ogólnie rzecz biorąc, terapia logopedyczna pomaga pacjentom poprawić jakość swojego życia, i&nbsp;rozwoju językowego.</li>

                      </ul>
                    </div>
                  </div>
                </div>

                {/* Sekcja 4 */}
                <div className="mb-6 bg-white p-4 sm:p-6 rounded-lg shadow-lg">
                  <div className="flex flex-col md:flex-row-reverse items-center justify-between">
                    <div className="md:w-1/2 md:pl-4 mb-4 md:mb-0">
                      <img
                        src="/assets/logopedaTel.jpg" // Dodaj ścieżkę do swojego zdjęcia
                        alt="Zdjęcie 2"
                        className="w-full h-auto rounded-lg" />
                    </div>
                    <div className="md:w-1/2">
  <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-600">
    Potrzeba wizyty u logopedy
  </h2>
  <p className=' text-slate-700'>
    Jeśli rozważasz wizytę u logopedy dla siebie lub bliskiej osoby, serdecznie zachęcamy do skontaktowania się z nami, aby umówić się na konsultację. Nasz zespół logopedów jest gotowy, by zapewnić Ci profesjonalne wsparcie i poprawić jakość komunikacji oraz mowy.
  </p>
  <h3 className='my-6 text-[#921d7f] text-xl font-semibold'>Cennik</h3>
  {/* Logopeda Information */}
  <h3 className="text-lg font-semibold mt-4 text-gray-600 mb-4">
    Logopeda – neurologopeda – logopeda kliniczny
  </h3>
  <p className=' text-slate-700'>
    <strong>Diagnoza z planem terapii:</strong> 250 zł
    <br />
    <strong>Sesja terapeutyczna:</strong> 100 zł / 45 min
    <br />
    <strong>Sesja terapeutyczna wspomagana VR:</strong> 150 zł / 45 min
  </p>
  <p className=' text-slate-700 mt-4'>
    Profesjonalna diagnoza i terapia logopedyczna, skierowana do osób potrzebujących wsparcia w zakresie komunikacji i mowy. Dostępne są również nowoczesne metody terapii z wykorzystaniem technologii VR.
  </p>
  {/* Przycisk "Kontakt" */}
  <a href="/Contact" className="mt-4 mr-2 inline-block bg-[#921d7f] hover:bg-gray-100 hover:text-slate-700 text-white font-semibold py-2.5 px-14 rounded">
    Kontakt
  </a>
</div>

                  </div>
                </div>

                {/* Sekcja Credits */}
                <div className="mb-6 bg-white p-4 sm:p-6 rounded-lg shadow-lg">
                  <details>
                    <summary className=' text-slate-600'>Grafiki</summary>
                    <ul>
                      <li><a className=' text-slate-500' href="https://pl.freepik.com/darmowe-wektory/recznie-rysowane-ilustracja-terapii-mowy_20826076.htm#query=mowa&position=7&from_view=search&track=sph">Obraz autorstwa Freepik 1</a></li>
                      <li><a className=' text-slate-500' href="https://pl.freepik.com/darmowe-wektory/recznie-rysowane-ilustracja-terapii-mowy_21251824.htm#query=mowa&position=8&from_view=search&track=sph#position=8&query=mowa">Obraz autorstwa Freepik 2</a></li>
                      <li><a className=' text-slate-500' href="https://pl.freepik.com/darmowe-wektory/recznie-rysowane-ilustracja-terapii-mowy_21251805.htm#query=mowa&position=14&from_view=search&track=sph#position=14&query=mowa">Obraz autorstwa Freepik 3</a></li>
                      <li><a className=' text-slate-500' href="https://pl.freepik.com/darmowe-wektory/recznie-rysowane-ludzie-rozmawiajacy-na-ilustracji-telefonu_33408282.htm#query=mowa&position=34&from_view=search&track=sph#position=34&query=mowa">Obraz autorstwa Freepik 4</a></li>

                      {/* Dodaj więcej autorów&nbsp;w&nbsp;formacie <li><a href="link_do_autora">Autor</a></li> */}
                    </ul>
                  </details>
                </div>

                {/* Kontynuuj dodawanie sekcji w&nbsp;tym stylu */}
              </div>
            </div>
          </div>
        </div>
      </div></>
  );
};

export default ClassicLayout;