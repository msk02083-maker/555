import { motion } from 'motion/react';
import { Coffee, CalendarCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[500px] h-[60vh] md:min-h-[600px] md:h-[70vh] flex items-center bg-[#FAF8F5] overflow-hidden">
      {/* Background Image Area */}
      <div className="absolute inset-0 z-0">
        {/* 
          사용자가 업로드한 이미지를 보여주기 위한 경로입니다. 
          public 폴더에 hero-bg.png 가 없으면 기본 이미지가 노출됩니다.
        */}
        <img 
          src="/hero-bg.png" 
          alt="오늘도빵 메인 배경" 
          className="w-full h-full object-cover opacity-90"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=1920&q=80";
          }}
        />
        {/* 텍스트가 잘 보이도록 좌측에 부드러운 그라데이션 오버레이 적용 */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent w-full md:w-2/3"></div>
      </div>

      {/* Content Container (Left side) */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl pt-12 md:pt-0"
        >
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#3E2723] mb-6 leading-[1.3] break-keep drop-shadow-sm">
            수제빵과 커피가 있는<br />
            우리 동네 작은 카페
          </h1>
          
          {/* Body Text */}
          <p className="text-[#5C4033]/90 text-lg md:text-xl font-medium mb-10 leading-relaxed break-keep max-w-md drop-shadow-sm">
            매일 아침 직접 굽는 신선한 빵과<br />
            향긋한 커피 한 잔의 여유를 만나보세요.
          </p>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="#bakery"
              className="inline-flex items-center justify-center gap-2 bg-[#8C6D56] text-white px-8 py-4 rounded-md text-lg font-bold hover:bg-[#755945] transition-colors shadow-sm"
            >
              <Coffee size={20} />
              오늘의 빵
            </a>
            <a 
              href="#reservation"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-[#8C6D56] text-[#8C6D56] px-8 py-4 rounded-md text-lg font-bold hover:bg-[#8C6D56] hover:text-white transition-colors shadow-sm"
            >
              <CalendarCheck size={20} />
              예약하기
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
