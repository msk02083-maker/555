import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24 md:py-32 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-sm font-bold text-[#8C6D56] tracking-widest uppercase mb-4">Our Story</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[#3E2723]">오늘도빵 이야기</h3>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <div className="aspect-[4/5] rounded-sm overflow-hidden relative bg-[#E8DFD8]">
              <img 
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80" 
                alt="Baking process" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3E2723] mb-8 leading-tight break-keep">
              매일 아침,<br/>작은 오븐에서 시작합니다.
            </h3>
            <div className="space-y-6">
              <p className="text-lg text-[#5C4033]/80 leading-relaxed break-keep">
                새벽 공기가 가시기도 전, 오늘도빵의 하루는 밀가루를 채치고 반죽을 빚는 손길로 시작됩니다. 
                느리지만 정직하게, 인공 첨가물 없이 오랜 시간 자연 발효를 거쳐 속이 편안한 건강한 빵을 만듭니다.
              </p>
              <p className="text-lg text-[#5C4033]/80 leading-relaxed break-keep">
                갓 구워내 겉은 바삭하고 속은 쫄깃한 수제 빵 한 조각. 
                그리고 그 빵과 가장 잘 어울리도록 스페셜티 원두를 엄선해 정성껏 내린 따뜻한 커피 한 잔.
              </p>
              <p className="text-lg text-[#5C4033]/80 leading-relaxed break-keep">
                이 작은 공간에서 피어나는 고소한 내음이 당신의 평범한 하루에 따뜻한 위로가 되기를 바랍니다. 
                진심을 담은 빵과 커피로 언제나 같은 자리에서 기다리겠습니다.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
