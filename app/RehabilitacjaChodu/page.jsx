import React from 'react';

const Pragma = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col justify-center items-center">
      <div className="relative h-[520px] sm:h-[400px] md:h-[520px] w-full overflow-hidden">
        <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay muted loop>
          <source src="/assets/movie9.mp4" type="video/mp4" />
          Twoja przeglądarka nie obsługuje tagu video.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-5"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Pragma System</h1>
          <p className="text-base sm:text-lg md:text-xl text-white mt-4">Rehabilitacja - Pionizacja - Reedukacja chodu</p>
        </div>
      </div>
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer">
        <div className="md:flex md:justify-center text-center">
          <div className="md:w-3/4">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-700 mb-4">
                Sprzęt medyczny do placówek medycznych
                <br />
                z zakresu rehabilitacji, pionizacji oraz reedukacji.
              </h2>
              <p className="text-sm sm:text-base text-slate-700 mb-4">
                Dzięki systemowi pacjenci z niepełnosprawnościami w każdym wieku zyskują większą samodzielność. We własnym zakresie wykonują ćwiczenia, które wcześniej były możliwe wyłącznie z udziałem fizjoterapeuty.
              </p>
              <p className="text-sm sm:text-base text-slate-700 mb-4">
                Elastyczny system odciążania, z użyciem gum tubingowych ma rewolucyjny wpływ na odczucia pacjentów, a przez to na efekt fizjoterapii. Przy podwieszeniu sztywnym lub w egzoszkielecie, pacjent nie może czuć się swobodnie. Zupełnie inaczej jest z naszym urządzeniem. Podczas rehabilitacji pacjenci zyskują większą świadomość ciała i swoich możliwości.
              </p>
              <p className="text-sm sm:text-base text-slate-700 mb-4">
                Z urządzenia mogą korzystać praktycznie wszyscy. Będzie przydatne w rehabilitacji pacjentów z wszelkimi niepełnosprawnościami. Będzie najlepszą pomocą dla osób z chorobami neurologicznymi i osób starszych, które mają problemy ruchowe i przede wszystkim dla dzieci - również maluszków z problemami z narządami ruchu.
              </p>
              <p className="text-sm sm:text-base text-slate-700 mb-4">
                Z urządzenia korzystają osoby leżące, poruszające się na wózku inwalidzkim i pacjenci sparaliżowani. W każdym z wymienionych przypadków nasz system znajduje zastosowanie terapeutyczne.
              </p>
              <p className="text-sm sm:text-base text-slate-700 mb-4">
                Dzięki urządzeniu pacjenci wykonują ćwiczenia w pozycjach, które były dla nich wcześniej trudne lub niedostępne (np. pozycja czworacza). Jest to możliwe dzięki dużej ilości akcesoriów terapeutycznych dołączanych do każdego zestawu.
              </p>
              <p className="text-sm sm:text-base text-slate-700 mb-4">
                Akcesoria są praktyczne i wygodne, ponieważ zostały zaprojektowane na podstawie rekomendacji pacjentów i fizjoterapeutów. Są odporne na przetarcia i zabrudzenia. Przy częstym stosowaniu utrzymują dobry wygląd i zachowują pierwotny kształt.
              </p>
              <p className="text-sm sm:text-base text-slate-700 mb-4">
                Rehabilitacja stawów kulistych (staw biodrowy i staw ramienny), odbywa się we wszystkich płaszczyznach. Możliwe jest uzyskanie pełnego zakresu ruchu.
              </p>
              <p className="text-sm sm:text-base text-slate-700 mb-4">
                Nasz system zastępuje wiele różnych urządzeń rehabilitacyjnych. Pozwala na stosowanie licznych metod oraz terapii.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
              <p className="text-base sm:text-lg md:text-xl font-bold text-slate-700 mb-4">
                NOWE MOŻLIWOŚCI TERAPEUTYCZNE I WIDOCZNE EFEKTY
              </p>
              <p className="text-sm sm:text-base text-slate-700 mb-4">
                Dlaczego ten argument stawiamy na pierwszym miejscu? Ponieważ celem naszej pracy są sprawni i zadowoleni pacjenci. Dzięki Pragma System możliwe będzie wykonywanie ćwiczeń w każdej pozycji, bez angażowania siły fizjoterapeuty. Cały ciężar pacjentów przejmą gumy tubingowe i akcesoria dołączone do każdego zestawu.
              </p>
              <p className="text-sm sm:text-base text-slate-700">
                Pacjenci będą wykonywać ćwiczenia samodzielnie, wykorzystując własny potencjał i przez to bardziej angażować się w terapię. W pozycji pionowej będą czuli się bezpiecznie, przy zachowaniu pełnej swobody ruchu. To proste rozwiązanie okazało się przełomowe dla pionizacji, nauki chodu i rehabilitacji stawów kulistych.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pragma;
