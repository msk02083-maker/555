import { motion } from 'motion/react';

export default function Intro() {
  return (
    <section className="py-24 md:py-32 bg-white border-y border-[#E8DFD8]/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <div className="aspect-[4/5] md:aspect-square overflow-hidden rounded-sm relative bg-[#F5EBE1]">
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80" 
                alt="Warm cafe interior" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h3 className="text-3xl md:text-5xl font-bold text-[#3E2723] mb-8 leading-tight break-keep">
              오늘도빵에서 만나요
            </h3>
            <div className="space-y-6">
              <p className="text-lg text-[#5C4033]/80 leading-relaxed break-keep">
                바쁜 일상 속, 잠시 쉬어갈 수 있는 따뜻한 공간이 되기를 바랍니다. 매일 아침 정성껏 반죽하고 구워낸 빵의 고소한 내음과, 신선한 원두로 내린 커피 한 잔의 여유를 선물합니다.
              </p>
              <p className="text-lg text-[#5C4033]/80 leading-relaxed break-keep">
                소중한 사람들과 함께, 혹은 온전히 나만을 위한 시간을 오늘도빵에서 즐겨보세요.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
