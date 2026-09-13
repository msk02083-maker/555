import { MapPin, Phone, Clock, Car, Bus, Navigation } from './icons';

export default function Location() {
  return (
    <section id="location" className="scroll-mt-20 py-24 md:py-32 bg-white border-b border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-[#8C6D56] tracking-widest uppercase mb-4">Location</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[#3E2723]">오시는 길</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Information Section */}
          <div className="space-y-8">
            {/* Core Info Cards */}
            <div className="bg-[#FAF8F5] p-8 md:p-10 rounded-sm border border-[#E8DFD8]">
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <MapPin className="text-[#8C6D56] shrink-0 mt-1" size={28} />
                  <div>
                    <h4 className="text-xl font-bold text-[#3E2723] mb-2">주소</h4>
                    <p className="text-[#5C4033]/90 text-lg leading-relaxed break-keep">
                      서울특별시 서대문구 연희로 123-4 1층 오늘도빵
                    </p>
                  </div>
                </li>
                
                <li className="flex gap-4 items-start">
                  <Phone className="text-[#8C6D56] shrink-0 mt-1" size={28} />
                  <div>
                    <h4 className="text-xl font-bold text-[#3E2723] mb-2">전화번호</h4>
                    <p className="text-[#5C4033]/90 text-lg leading-relaxed">
                      02-1234-5678
                    </p>
                  </div>
                </li>

                <li className="flex gap-4 items-start">
                  <Clock className="text-[#8C6D56] shrink-0 mt-1" size={28} />
                  <div>
                    <h4 className="text-xl font-bold text-[#3E2723] mb-2">영업시간</h4>
                    <p className="text-[#5C4033]/90 text-lg leading-relaxed mb-2">
                      <span className="font-bold text-[#3E2723]">화 - 일</span> 09:00 - 20:00
                    </p>
                    <p className="text-[#8C6D56] font-medium leading-relaxed">
                      매주 월요일 정기 휴무
                    </p>
                    <p className="text-[#5C4033]/70 text-sm mt-1 break-keep">
                      (당일 생산된 빵 소진 시 조기 마감될 수 있습니다)
                    </p>
                  </div>
                </li>
              </ul>

              {/* Action Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:02-1234-5678"
                  className="flex-1 flex items-center justify-center gap-2 bg-white border-2 border-[#8C6D56] text-[#8C6D56] py-4 px-6 rounded-md text-lg font-bold hover:bg-[#8C6D56] hover:text-white transition-colors shadow-sm"
                >
                  <Phone size={24} />
                  전화하기
                </a>
                <a 
                  href="https://map.naver.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#8C6D56] border-2 border-[#8C6D56] text-white py-4 px-6 rounded-md text-lg font-bold hover:bg-[#755945] hover:border-[#755945] transition-colors shadow-sm"
                >
                  <Navigation size={24} />
                  길찾기
                </a>
              </div>
            </div>

            {/* Additional Info (Parking & Transit) */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-[#FAF8F5] p-6 md:p-8 rounded-sm border border-[#E8DFD8]">
                <div className="flex gap-3 items-center mb-4">
                  <Car className="text-[#8C6D56]" size={28} />
                  <h4 className="text-xl font-bold text-[#3E2723]">주차 안내</h4>
                </div>
                <p className="text-[#5C4033]/80 text-base leading-relaxed break-keep">
                  매장 측면 전용 주차장(2대) 이용 가능합니다. 만차 시 도보 3분 거리의 '연희 공영주차장'을 이용해 주세요.
                </p>
              </div>
              
              <div className="bg-[#FAF8F5] p-6 md:p-8 rounded-sm border border-[#E8DFD8]">
                <div className="flex gap-3 items-center mb-4">
                  <Bus className="text-[#8C6D56]" size={28} />
                  <h4 className="text-xl font-bold text-[#3E2723]">대중교통</h4>
                </div>
                <p className="text-[#5C4033]/80 text-base leading-relaxed break-keep">
                  '연희동 자치회관' 버스정류장 하차 후 도보 2분 거리입니다. (간선버스 110A, 153 등)
                </p>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="h-[400px] lg:h-full min-h-[500px] md:min-h-[600px] bg-[#E8DFD8] rounded-md overflow-hidden relative shadow-sm border border-[#E8DFD8]">
            <iframe 
              src="https://maps.google.com/maps?q=서울특별시%20서대문구%20연희로&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="오늘도빵 위치 안내"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
