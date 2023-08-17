'use client'
import React, { useEffect } from 'react';
useEffect

const PriceList = () => {
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

  const services = [
    
    { 
      category: "Badanie ADOS-2",
      name: "Badanie ADOS-2", price: "600zł / 120min - w siedzibie PP-P", variant: "2000zł / 120min - w domu pacjenta do 25km", variant2:"3.000 zł /120 min – w domu pacjenta do 60km",info: (<p>Dalsze miejscowości - cena ustalana indywidualnie. <br />Diagnoza 2 osób lub więcej w jednym miejscu - cena ustalana indywidualnie. <br />Diagnoza w języku angielskim: dopłata 20% ceny</p>)
    },
    { 
      category: "Neurorehabilitacja z C-eye® Pro",
      name: "Neurorehabilitacja z C-eye® Pro", price: "300zł / 60min - diagnoza w siedzibie PP-P", variant: "900 zł / 60 min – w domu Pacjenta do 25km", variant2: "1.500 zł / 60 min – w domu Pacjenta do 60km", 
      info: (
      <p>Dalsze miejscowości - cena ustalana indywidualnie. <br />Diagnoza 2 osób lub więcej w jednym miejscu - cena ustalana indywidualnie. <br />Diagnoza na grupy osób - cena ustalana indywidualnie <br /><br />Prowadzimy diagnozy w: 
      <ul>
        <li>- ośrodkach rehabilitacyjnych,</li>
        <li>- domach seniora</li>
        <li>- oddziałach szpitalnych,</li>
        <li>- szkołach i przedszkolach specjalnych,</li>
        <li>- OREW-ach,</li>
        <li>- SOSW-ach,</li>
        <li>- ośrodkach szkolno - wychowawczych,</li>
        <li>- gabinetach terapeutycznych,</li>
        <li>- gabinetach lekarskich,</li>
        <li>- fundacjach/stowarzyszeniach.</li>
        </ul> <br />
        Diagnoza w języku angielskim - cena ustalana indywidualnie. <br /><br />
        Neurorehabilitacja z C-Eye:
        <ul>
          <li>180 zł  / 60 min. - w siedzibie PP-P</li>
          <li>300 zł / 60 min. -  w domu Pacjenta do 25km</li>
          <li>500 zł / 60 min - w domu Pacjenta do 60km</li>
        </ul><br />
        Wydanie opinii wraz z omówieniem - 120 zł.<br />
        Neurorehabilitacja z C-Eye w j. angielskim: dopłata 20% ceny.
        </p>)},


/* Diagnozy */


    {
        category: "Diagnozy",
        name: "Diagnoza KOGS",
        price: "600zł - stacjonarnie",
        variant: "500zł - online",
        info: (
            <p>
                Diagnoza dojrzałości i gotowości szkolnej dla dzieci w wieku od 5 do 7 lat. <br />
                Czas trwania: 3 – 5 godzin, rozłożonych na 2 dni. <br /><br />
                Proces diagnozy obejmuje: 
                <ul>
                    <li>- Konsultacja z rodzicami,</li>
                    <li>- Badanie psychologiczne,</li>
                    <li>- Badanie pedagogiczne,</li>
                    <li>- Wydanie opinii wraz z omówieniem.</li>
                </ul> <br />
                *Diagnoza wsparta jest C-eye® Pro, Biofeedback oraz wirtualną rzeczywistością.
            </p>
        )
    },

    {
      category: "Diagnozy",
      name: "Diagnoza Dysleksji",
      price: "600zł - stacjonarnie",
      variant: "500zł - online",
      info: (
          <p>
              Dla dzieci w wieku od 8 do 15 lat. <br />
              Czas trwania: 3 – 5 godzin rozłożonych na 2 dni. <br /><br />
              <ul>
                  <li>Konsultacja z rodzicami,</li>
                  <li>Badanie psychologiczne,</li>
                  <li>Badanie pedagogiczne,</li>
                  <li>Wydanie opinii wraz z omówieniem.</li>
              </ul><br />
              *Diagnoza wsparta jest C-eye® Pro, Biofeedback oraz wirtualną rzeczywistością.
          </p>
      )
  },

  {
    category: "Diagnozy",
    name: "Diagnoza Dysortografii",
    price: "600zł - stacjonarnie",
    variant: "500zł - online",
    info: (
        <p>
            Dla dzieci w wieku od 8 do 15 lat. <br />
            Czas trwania: 3 – 5 godzin rozłożonych na 2 dni. <br /><br />
            <ul>
                <li>Konsultacja z rodzicami,</li>
                <li>Badanie psychologiczne,</li>
                <li>Badanie pedagogiczne,</li>
                <li>Wydanie opinii wraz z omówieniem.</li>
            </ul><br />
            *Diagnoza wsparta jest C-eye® Pro, Biofeedback oraz wirtualną rzeczywistością.
        </p>
    )
  },
  
  {
    category: "Diagnozy",
    name: "Diagnoza Dysgrafii",
    price: "600zł - stacjonarnie",
    variant: "500zł - online",
    info: (
        <p>
            Dla dzieci w wieku od 8 do 13 lat. <br />
            Czas trwania: 3 – 5 godzin rozłożonych na 2 dni. <br /><br />
            <ul>
                <li>Konsultacja z rodzicami,</li>
                <li>Badanie psychologiczne,</li>
                <li>Badanie pedagogiczne,</li>
                <li>Wydanie opinii wraz z omówieniem.</li>
            </ul><br />
            *Diagnoza wsparta jest C-eye® Pro, Biofeedback oraz wirtualną rzeczywistością.
        </p>
    )
  },

  {
    category: "Diagnozy",
    name: "Diagnoza Dyskalkulii",
    price: "600zł - stacjonarnie",
    variant: "500zł - online",
    info: (
        <p>
            Dla dzieci w wieku od 13 do 16 lat. <br />
            Czas trwania: 3 – 5 godzin rozłożonych na 2 dni. <br /><br />
            <ul>
                <li>Konsultacja z rodzicami,</li>
                <li>Badanie psychologiczne,</li>
                <li>Badanie pedagogiczne,</li>
                <li>Wydanie opinii wraz z omówieniem.</li>
            </ul><br />
            *Diagnoza wsparta jest C-eye® Pro, Biofeedback oraz wirtualną rzeczywistością.
        </p>
    )
  },

  {
    category: "Diagnozy",
    name: "Diagnoza funkcjonalna dotycząca aktualnego poziomu rozwoju dziecka",
    price: "450zł - stacjonarnie",
    info: (
        <p>
            Dla dzieci w wieku od 1 miesiąca do 10 roku życia. <br />
            Czas trwania: 3 – 4 godzin rozłożonych na 2 dni. <br /><br />
            <ul>
                <li>Konsultacja z rodzicami,</li>
                <li>Badanie psychologiczno-pedagogiczne,</li>
                <li>Wydanie opinii wraz z omówieniem.</li>
            </ul><br />
            *Diagnoza wsparta jest C-eye® Pro, Biofeedback oraz wirtualną rzeczywistością.
        </p>
    )
  },

  {
    category: "Diagnozy",
    name: "Diagnoza intelektu",
    price: "450zł - stacjonarnie",
    variant: "350zł - online (młodzież, osoby dorosłe)",
    info: (
        <p>
            Dla dzieci, młodzieży oraz dorosłych w wieku od 2 do 69 lat. <br />
            Czas trwania: 2 – 4 godzin. <br /><br />
            <ul>
                <li>Konsultacja z rodzicami/osobami dorosłymi,</li>
                <li>Badanie psychologiczne,</li>
                <li>Wydanie informacji o wynikach badania wraz z omówieniem.</li>
            </ul><br />
            *Diagnoza wsparta jest C-eye® Pro, Biofeedback oraz wirtualną rzeczywistością.
        </p>
    )
  },

  {
    category: "Diagnozy",
    name: "Diagnoza ucznia szczególnie zdolnego",
    price: "600zł - stacjonarnie",
    variant: "500zł - online",
    info: (
        <p>
            Dla dzieci w wieku od 5 do 7 lat. <br />
            Czas trwania: 3 do 5 godzin, przeprowadzane w ciągu 2 dni. <br /><br />
            <ul>
                <li>Konsultacja z rodzicami,</li>
                <li>Badanie psychologiczne,</li>
                <li>Badanie pedagogiczne,</li>
                <li>Wydanie opinii wraz z omówieniem.</li>
            </ul><br />
            *Diagnoza wsparta jest C-eye® Pro, Biofeedback oraz wirtualną rzeczywistością.
        </p>
    )
  },

  {
    category: "Diagnozy",
    name: "Diagnoza ADHD u dorosłych",
    price: "560 zł (w tym 60 zł za testy psychologiczne) - stacjonarnie",
    variant: "450 zł - online",
    info: (
        <p>
            Diagnostyka ADHD u osób dorosłych pozwala zidentyfikować objawy związane z tym zaburzeniem, które może kontynuować się również w dorosłości. Proces diagnozy obejmuje zastosowanie specjalistycznych testów psychologicznych oraz szczegółowe badanie z opinią. <br />  <br />  *Diagnoza wsparta jest C-eye® Pro, Biofeedback oraz wirtualną rzeczywistością.
  
        </p>
    )
  },

  {
    category: "Diagnozy",
    name: "Diagnoza Pełna Integracji Sensorycznej + wydanie opinii",
    price: "350 zł / 45 min - stacjonarnie",
    info: (
        <p>
            Specjalistyczne badanie mające na celu ocenę funkcjonowania sensorycznego pacjenta. Integracja sensoryczna odnosi się do sposobu, w jaki organizm odbiera, interpretuje i reaguje na bodźce zewnętrzne. Nieprawidłowości w tej dziedzinie mogą prowadzić do problemów w uczeniu się, koordynacji ruchowej oraz zachowaniu. Diagnoza pełna integracji sensorycznej pozwala zidentyfikować potencjalne trudności, a następnie dostosować odpowiednią terapię. Cena zawiera również wydanie specjalistycznej opinii po zakończonym badaniu.
            <br />  <br />               *Diagnoza wsparta jest C-eye® Pro, Biofeedback oraz wirtualną rzeczywistością.
        </p>
    )
  },

  {
    category: "Diagnozy",
    name: "Diagnoza KOLD",
    price: "300 zł / 90 - 120 min - stacjonarnie",
    info: (
        <p>
            Diagnoza dzieci w wieku od 6 miesiąca do ukończenia 9 roku życia. Ocena prawidłowego i zaburzonego rozwoju mowy dziecka.
            <br />  <br />               *Diagnoza wsparta jest C-eye® Pro, Biofeedback oraz wirtualną rzeczywistością.
        </p>
    )
  },

  {
    category: "Diagnozy",
    name: "Diagnoza KOZE",
    price: "300 zł / 90 - 120 min - stacjonarnie",
    info: (
        <p>
            Ocena i opis nieprawidłowości w zachowaniu i reakcjach emocjonalnych dziecka od wieku niemowlęcego do końca okresu szkolnego.
            <br />  <br />               *Diagnoza wsparta jest C-eye® Pro, Biofeedback oraz wirtualną rzeczywistością.
        </p>
    )
  },

  {
    category: "Diagnozy",
    name: "Diagnoza KOJD-AFA",
    price: "300 zł / 90 - 120 min - stacjonarnie",
    info: (
        <p>
            Ocena Języka Dziecka Afatycznego – ocena jakościowa i planowanie terapii.
            <br />  <br />               *Diagnoza wsparta jest C-eye® Pro, Biofeedback oraz wirtualną rzeczywistością.
        </p>
    )
  },

  {
    category: "Diagnozy",
    name: "Diagnoza KOSF",
    price: "300 zł / 90 - 120 min - stacjonarnie",
    info: (
        <p>
            Badanie słuchu fonemowego u dzieci w wieku od trzech do siedmiu i pół lat. Percepcja mowy i rozwój słuchu u dzieci.
            <br />  <br />               *Diagnoza wsparta jest C-eye® Pro, Biofeedback oraz wirtualną rzeczywistością.
        </p>
    )
  },


    /* Opinie */

    {
      category: "Opinie",
      name: "Opinia o brako prziwskazań do podjęcia pracy zarobkowej",
      price: "320zł - stacjonarnie",
      variant: "260zł - online",
      info: (
          <p>
              Opinia o braku przeciwwskazań do podjęcia pracy zarobkowej lub opinia do szkoły muzycznej. <br />
              Czas trwania badania: około 1,5 godziny. <br /><br />
              *Opinia wsparta jest C-eye® Pro, Biofeedback oraz wirtualną rzeczywistością.
          </p>
      )
  },
  

    /* Badania */



    {
      category: "Badania",
      name: "Badanie psychologiczne w kierunku określania słabych i mocnych stron funkcjonowania dziecka",
      price: "600zł - stacjonarnie",
      variant: "500zł - online",
      info: (
          <p>
              Dla dzieci i młodzieży w wieku od 5 do 20 lat. <br />
              Czas trwania: 3 do 5 godzin, przeprowadzane w ciągu 2 dni. <br /><br />
              <ul>
                  <li>Konsultacja z rodzicami,</li>
                  <li>Badanie psychologiczne,</li>
                  <li>Wydanie opinii wraz z omówieniem.</li>
              </ul>
          </p>
      )
    },

    {
      category: "Badania",
      name: "Badanie psychologiczno–pedagogiczne pod kątem dysleksji, dysortografii, dysgrafii",
      price: "350 zł / 120 minut - stacjonarnie",
      variant: "300 zł / 120 minut - online",
      info: (
          <p>
              Kompleksowe badanie mające na celu zidentyfikowanie potencjalnych trudności w nauce, związanych z dysleksją, dysortografią oraz dysgrafią. Obejmuje zarówno analizę psychologiczną, jak i pedagogiczną, pozwalając na precyzyjne określenie potrzeb edukacyjnych osoby badanej.
          </p>
      )
    },


    /* Terapie */


    {
      category: "Terapie",
      name: "Terapia rodzin",
      price: "300zł stacjonarnie / 90 minut",
      variant: "250zł online / 90 minut",
      variant2: "70 EUR / 90 min - w j. angielskim",
      info: (
          <p>
              Specjalistyczna terapia rodzin, mająca na celu wsparcie rodziny w trudnych sytuacjach, rozwiązanie konfliktów wewnętrznych i poprawę komunikacji między członkami rodziny.
          </p>
      )
    },

    {
      category: "Terapie",
      name: "Terapia par",
      price: "220zł / 60 min - stacjonarnie",
      variant: "180zł / 60 min - online",
      variant2: "40 EUR / 60 min - online w j. angielskim",
      info: (
          <p>
              Terapia dla par mająca na celu wsparcie i pomoc w rozwiązywaniu problemów w związku.
          </p>
      )
    },

    {
      category: "Terapie",
      name: "Terapia uzależnień",
      price: "150zł / 45 min - stacjonarnie",
      variant: "130zł / 45 min - online",
      variant2: "40 EUR / 45 min - online w j. angielskim",
      info: (
          <p>
              Terapia uzależnień skupiająca się na różnych formach uzależnień, takich jak:
              <ul>
                  <li>alkohol,</li>
                  <li>używki,</li>
                  <li>hazard,</li>
                  <li>sex,</li>
                  <li>portale randkowe,</li>
                  <li>social media,</li>
                  <li>gry komputerowe,</li>
                  <li>Internet.</li>
              </ul>
          </p>
      )
    },

    {
      category: "Terapie",
      name: "Zajęcia z pedagogiem specjalnym z elementami terapii behawioralnej",
      price: "150 zł / 45/60min - stacjonarnie",
      variant: "130 zł - online",
      variant2: "40 EUR / 60 min - online w j. angielskim",
      info: (
          <p>
              Indywidualne zajęcia z pedagogiem specjalnym skupiające się na wsparciu rozwoju oraz terapii behawioralnej.
          </p>
      )
    },

    {
      category: "Terapie",
      name: "Sesja Terapii Wirtualnej",
      price: "150 zł / 45 minut",
      info: (
          <p>
              Zastosowanie nowoczesnych technologii w praktyce terapeutycznej. Terapia wirtualna pozwala na prowadzenie sesji w wygodnych warunkach, bez konieczności wychodzenia z domu, z zachowaniem pełnej prywatności i bezpieczeństwa.
          </p>
      )
    },

    {
      category: "Terapie",
      name: "Sesje terapii ręki grupowe ze wspomaganiem VR",
      price: "80 zł / 50 minut",
      info: (
          <p>
              Terapia ręki z wykorzystaniem technologii wirtualnej rzeczywistości (VR). Grupowe zajęcia mają na celu poprawę umiejętności manualnych, koordynacji oraz precyzji ruchów ręki. Wspomaganie technologią VR sprawia, że terapia staje się bardziej angażująca i efektywna.
          </p>
      )
    },

    {
      category: "Terapie",
      name: "Sesje terapii integracji sensorycznej grupowe ze wspomaganiem VR",
      price: "80 zł / 50 minut",
      info: (
          <p>
              Terapia integracji sensorycznej z wykorzystaniem technologii wirtualnej rzeczywistości (VR). Zajęcia grupowe pozwalają na wszechstronną stymulację sensoryczną w innowacyjny sposób, jednocześnie promując interakcje społeczne i naukę w grupie.
          </p>
      )
    },

    /* Konsultacje */

    {
      category: "Konsultacje",
      name: "Konsultacja psychiatryczna",
      price: "150zł / 20 min",
      info: (
          <p>
              Specjalistyczna konsultacja psychiatryczna, dostosowana do potrzeb pacjenta, w celu diagnozy i ewentualnych zaleceń leczenia.
          </p>
      )
    },

    {
      category: "Konsultacje",
      name: "Konsultacje rodzicielskie z psychoterapeutą",
      price: "250 zł / 90min - stacjonarnie",
      variant: "200 zł / 90min - online",
      variant2: "40 EUR / 60 min - online w j.angielskim",
      info: (
          <p>
              Konsultacje rodzicielskie z doświadczonym psychoterapeutą, mające na celu wsparcie rodziców w wychowywaniu i zrozumieniu potrzeb swoich dzieci.
          </p>
      )
    },

    {
      category: "Konsultacje",
      name: "Konsultacje rodzicielskie z psychoonkologiem",
      price: "250 zł / 90min - stacjonarnie",
      variant: "200 zł / 90min - online",
      variant2: "40 EUR / 60 min - online w j.angielskim",
      info: (
          <p>
              Konsultacje rodzicielskie z doświadczonym psychoonkologiem, mające na celu wsparcie rodziców w trudnych momentach związanych z diagnozą i leczeniem nowotworu.
          </p>
      )
    },

    {  
      category: "Konsultacje",
      name: "Konsultacje rodzicielskie z psychoterapeutą od uzależnień",
      price: "250 zł / 90min - stacjonarnie",
      variant: "200 zł / 90min - online",
      variant2: "40 EUR / 60 min - online w j.angielskim",
      info: (
          <p>
              Specjalistyczne konsultacje skierowane do rodziców dzieci i młodzieży borykających się z problemami uzależnienia. Pomoc dla rodzin w zrozumieniu i radzeniu sobie z trudnościami związanymi z uzależnieniem.
          </p>
      )
    },

    {
      category: "Konsultacje",
      name: "Konsultacja Pedagogiczna /Terapia Pedagogiczna",
      price: "90 zł / 45 min stacjonarnie",
      info: (
          <p>
              Konsultacje i terapia pedagogiczna skierowane do dzieci i młodzieży z trudnościami w nauce i zachowaniu. Pomoc pedagoga w rozwiązywaniu problemów edukacyjnych oraz wsparcie w indywidualnym rozwoju ucznia.
          </p>
      )
    },
    
    {
      category: "Konsultacje",
      name: "Konsultacja Behawioralna/ Terapia Behawioralna",
      price: "90 zł / 45 min - stacjonarnie",
      info: (
          <p>
              Konsultacje i terapia behawioralna mają na celu zidentyfikowanie i zmianę niepożądanych zachowań. Terapia ta bazuje na zrozumieniu mechanizmów uczenia się i zachowania, pomagając osobom w nabywaniu nowych umiejętności oraz radzeniu sobie z trudnościami emocjonalnymi i behawioralnymi.
          </p>
      )
    },


    /* Oceny */

    {
      category: "Oceny",
      name: "KOLD-PT - Karty Oceny Logopedycznej Dziecka",
      price: "300 zł / 120 min",
      ageRange: "od 6 miesiąca życia",
      info: (
          <p>
              Badanie logopedyczne przeznaczone dla dzieci od 6. miesiąca życia. Za pomocą KOLD-PT dokonuje się wszechstronnej diagnozy funkcji mowy i języka, co umożliwia wczesne wykrywanie ewentualnych nieprawidłowości oraz planowanie indywidualnej terapii. Badanie prowadzone jest w formie kart oceny, które są dostosowane do wieku i poziomu rozwoju dziecka.
          </p>
      )
    },


    /* Logopeda */

    {
      category: "Logopeda",
      name: "Logopeda – neurologopeda – logopeda kliniczny",
      price: "250zł - Diagnoza z planem terapii",
      variant: "100zł / 45 min - Sesja terapeutyczna",
      variant2: "150zł / 45 min - Sesja terapeutyczna wspomagana VR",
      info: (
          <p>
              Profesjonalna diagnoza i terapia logopedyczna, skierowana do osób potrzebujących wsparcia w zakresie komunikacji i mowy. Dostępne są również nowoczesne metody terapii z wykorzystaniem technologii VR.
          </p>
      )
    },


    /* Wsparcie Psychologiczne */

    {
      category: "Wsparcie psychologiczne",
      name: "Wsparcie psychologiczne",
      price: "150zł / 45 min - stacjonarnie",
      variant: "130zł / 45 min - online",
      variant2: "50 EUR / 45 min - online w j.angielskim",
      info: (
          <p>
              Wsparcie psychologiczne dla dzieci, młodzieży, kobiet, mężczyzn, par, seniorów: 
              <ul>
                  <li>- wsparcie w kryzysie,</li>
                  <li>- terapia psychologiczna osób w żałobie,</li>
                  <li>- wsparcie w trudnościach szkolnych,</li>
                  <li>- wsparcie w trudnościach interpersonalnych,</li>
                  <li>- trudności w relacjach z rówieśnikami,</li>
                  <li>- wsparcie w stanach lękowych,</li>
                  <li>- wsparcie w stanach depresyjnych,</li>
                  <li>- trudności z niską samooceną,</li>
                  <li>- redukcja i zarządzanie stresem,</li>
                  <li>- kontrolowanie wściekłości i złości,</li>
                  <li>- ataki paniki,</li>
                  <li>- zaburzenia odżywiania i obrazowanie ciała,</li>
                  <li>- kwestie relacji partnerskich,</li>
                  <li>- nadwrażliwość,</li>
                  <li>- wsparcie w zmianach życiowych,</li>
                  <li>- depresja poporodowa,</li>
                  <li>- kryzys wieku średniego,</li>
                  <li>- zaburzenia adaptacyjne związane ze stratą, rozwodem, chorobą medyczną i innymi zmianami życiowymi,</li>
                  <li>- zespół stresu pourazowego dla ofiar traumy seksualnej, przemocy, nadużyć i innych urazów,</li>
                  <li>- usługi wsparcia dla Seniorów,</li>
                  <li>- uzależnienia (alkohol, używki, hazard, sex, portale randkowe, social media, gry komputerowe, Internet).</li>
              </ul>
          </p>
      )
  },


  /* Fizjoterapia */

  {
    category: "Fizjoterapie",
    name: "Sesje fizjoterapii grupowe ze wspomaganiem VR",
    price: "80 zł / 50 minut",
    info: (
        <p>
            Fizjoterapia z wykorzystaniem technologii wirtualnej rzeczywistości (VR). Grupowe sesje terapeutyczne skupiają się na poprawie funkcji ruchowych, siły i koordynacji pacjenta. Wykorzystanie VR sprawia, że terapia jest bardziej angażująca, umożliwiając pacjentom bardziej efektywne i przyjemne ćwiczenia.
        </p>
    )
  },

  /* Masaze */

  {
    category: "Masaże",
    name: "Masaż Shantala",
    price: "150 zł / 45/60min - stacjonarnie",
    info: (
        <p>
            Masaż Shantala to tradycyjny indyjski masaż dla niemowląt, pomagający w rozwoju fizycznym i emocjonalnym dziecka.
        </p>
    )
  },

  /* Treningi */

  {
    category: "Treningi",
    name: "Trening Umiejętności Społecznych – zajęcia grupowe",
    price: "50 zł / 45 min za osobę",
    info: (
        <p>
            Zajęcia skoncentrowane na rozwijaniu umiejętności społecznych uczestników. Dzięki treningowi uczestnicy uczą się efektywnej komunikacji, rozpoznawania emocji, budowania pozytywnych relacji z innymi oraz radzenia sobie z konfliktami. Zajęcia prowadzone są w formie grupowej, co pozwala na praktyczne ćwiczenie nabytych umiejętności w interakcjach z innymi.
        </p>
    )
  },

  /* Praca z uczniem zdolnym */
  {
    category: "Praca z uczniem zdolnym",
    name: "Kurs przygotowujący do egzaminu ósmoklasisty",
    price: "1.800zł za pełen pakiet przedmiotów (możliwość skorzystania z jednego bloku za 800 zł)",
    info: (
      <>
       <div>

        Celem kursu jest takie połączenie teorii z praktyką, aby w dniu egzaminu nie spotkało ucznia żadne zaskoczenie.<br />
        Materiał zostanie powtórzony, a to, co trzeba przećwiczyć – przećwiczone.<br /><br />

        Zajęcia odbywają się w blokach przedmiotowych: 
        <ul>
            <li><strong>polski</strong></li>
            <li><strong>matematyka</strong></li>
            <li><strong>język angielski</strong></li>
        </ul><br />

        Pełna oferta kursu obejmuje <strong>120 godzin</strong> zajęć prowadzonych w blokach przedmiotowych po 3h dydaktyczne:
        <ul>
            <li>40h język polski;</li>
            <li>40h matematyka;</li>
            <li>40h język angielski.</li>
        </ul>

        Dodatkowo uczniowie otrzymują dostęp do platformy eLearning, gdzie znajdą ponad 200 godzin dodatkowych zadań, co umożliwi wykonywanie ćwiczeń i zadań poza zajęciami z Nauczycielem.<br /><br />

        Omówienie próbnego egzaminu.<br /><br />

        Pełna oferta to <strong>1.800zł</strong> za pakiet przedmiotów.<br />
        Istnieje możliwość skorzystania z jednego bloku za <strong>800 zł</strong>.<br /><br />

        Dodatkowo, dla chętnych uczniów, proponujemy zajęcia z technik uczenia się, aby ułatwić i usprawnić przygotowanie do egzaminu.<br /><br />

        Kameralne grupy zarówno <strong>ONLINE</strong> jak i <strong>STACJONARNE</strong>.<br /><br />

        Zajęcia stacjonarne:<br />
        Rybnik, kampus, ul. Rudzka 13c, budynek B, III piętro, pok. 3.3<br />
        Rybnik - Golejów, ul. Magnolii 25<br />
        Zajęcia stacjonarne od <strong>16.00</strong> do <strong>18.15</strong>.<br /><br />

        Zajęcia online od <strong>17.00</strong> do <strong>19.15</strong> raz w tygodniu
    </div>
        </>
    )
},

/* Kursy Językowe */

{
  category: "Kursy językowe",
  name: "Kurs języka angielskiego przygotowujący do międzynarodowego egzaminy telc B2",
  price: "3.000 zł",
  info: (
      <p>
          <strong>100 h</strong> z trenerem <strong>Klaudią Rogalską</strong>.<br />
          <strong>300 h</strong> na platformie eLearning. <br />
          Kurs online w czasie rzeczywistym (Real Time online).<br />
          <strong>17.00</strong> do <strong>19.15</strong><br />
          3 x 45 min
      </p>
  )
},

{
  category: "Kursy językowe",
  name: "Kurs języka angielskiego przygotowujący do międzynarodowego egzaminy telc C1",
  price: "4.000 zł",
  info: (
      <p>
          <strong>100 h</strong> z trenerem <strong>Klaudią Rogalską</strong>.<br />
          <strong>300 h</strong> na platformie eLearning.<br />
          Kurs online w czasie rzeczywistym (Real Time online).<br />
          <strong>17.00</strong> do <strong>19.15</strong><br />
          3 x 45 min
      </p>
  )
},

{
  category: "Kursy językowe",
  name: "Kurs języka niemieckiego przygotowujący do międzynarodowego egzaminy telc B2",
  price: "3.000 zł",
  info: (
      <p>
          <strong>100 h</strong> z trenerem <strong>dr Jakubem Ruks</strong>.<br />
          <strong>300 h</strong> na platformie eLearning. <br />
          Kurs online w czasie rzeczywistym (Real Time online).<br />
          <strong>17.00</strong> do <strong>19.15</strong><br />
          3 x 45 min
      </p>
  )
},

{
  category: "Kursy językowe",
  name: "Kurs języka niemieckiego przygotowujący do międzynarodowego egzaminy telc C1",
  price: "4.000 zł",
  info: (
      <p>
          <strong>100 h</strong> z trenerem <strong>dr Jakubem Ruks</strong>.<br />
          <strong>300 h</strong> na platformie eLearning.<br />
          Kurs online w czasie rzeczywistym (Real Time online).<br />
          <strong>17.00</strong> do <strong>19.15</strong><br />
          3 x 45 min
      </p>
  )
}







  ];

  const handleServiceClick = (serviceName) => {
    console.log(`Wybrano usługę: ${serviceName}`);
    // W przyszłości tutaj można przekierować do panelu rejestracji z odpowiednio wybraną usługą
  };


  const groupedServices = services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {});

  const navigationLinks = Object.keys(groupedServices);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="p-4 max-w-5xl mx-auto mt-20 mb-20 relative scroll-smooth">
      
      <h1 className="text-5xl font-bold text-gray-800 mb-2 text-center">Cennik</h1>
      <p className="text-gray-600 mb-6 text-center">Zachęcamy do zapoznania się z naszą ofertą.</p>

      {/* Nawigacja */}
      <nav className="mb-8 text-center">
        {navigationLinks.map(link => (
          <button 
            onClick={() => scrollToSection(link)}
            className="inline-block px-4 py-2 mr-2 mb-2 bg-white border rounded text-gray-700 hover:bg-gray-200 transition duration-300 focus:outline-none"
          >
            {link}
          </button>
        ))}
      </nav>

      {/* Wyświetlanie usług według kategorii */}
      {Object.entries(groupedServices).map(([category, servicesInCategory]) => (
        <div key={category} id={category}>
          <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-20">{category}</h2>
          {servicesInCategory.map((service, sIndex) => (
            <div key={service.name} className={`flex items-center justify-between bg-white p-4 rounded-lg shadow-lg ${sIndex !== 0 ? 'mt-4' : ''}`}>
              <div className="flex items-center">
                <div className="mr-4">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">{service.name}</h3>
                  <p className="text-xl font-bold mt-2 text-[#921d7f]">{service.price}</p>
                  <p className="mt-2 text-gray-600">{service.variant}</p>
                  <p className="mt-2 text-gray-600">{service.variant2}</p>
                  <p className="mt-2 text-gray-600">{service.variant3}</p>
                  <p className="mt-2 text-gray-600">{service.info}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}

      {/* Przycisk do przewijania na górę */}
      <button 
        onClick={scrollToTop} 
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#921d7f] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#7a175e] transition duration-300"
        title="Przewiń do góry"
      >
        ↑
      </button>
    </div>
  );
}
  
  export default PriceList;