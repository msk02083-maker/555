import { motion } from 'motion/react';

const menus = [
  {
    category: 'Coffee',
    items: [
      { name: '아메리카노', price: '4,500', desc: '고소한 견과류의 풍미와 깔끔한 여운' },
      { name: '카페라떼', price: '5,000', desc: '신선한 우유와 진한 에스프레소의 조화' },
      { name: '바닐라 빈 라떼', price: '5,500', desc: '수제 바닐라빈 시럽을 더한 달콤한 라떼' },
      { name: '오트 라떼', price: '5,500', desc: '고소한 귀리 우유로 만든 비건 라떼' },
    ]
  },
  {
    category: 'Non-Coffee & Tea',
    items: [
      { name: '제주 말차 라떼', price: '6,000', desc: '진하고 쌉싸름한 유기농 제주 말차' },
      { name: '생과일 에이드 (시즌)', price: '6,500', desc: '신선한 제철 과일로 만든 청량한 음료' },
      { name: '얼그레이 리저브', price: '5,000', desc: '은은한 베르가못 향의 프리미엄 홍차' },
      { name: '캐모마일 릴렉서', price: '5,000', desc: '마음을 편안하게 해주는 허브티' },
    ]
  }
];

export default function MenuList() {
  return (
    <section id="menu" className="scroll-mt-20 py-24 md:py-32 bg-[#F0E6DD]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-[#8C6D56] tracking-widest uppercase mb-4">Cafe Menu</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[#3E2723]">음료 메뉴</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {menus.map((section, idx) => (
            <motion.div 
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <h4 className="text-2xl font-bold text-[#8C6D56] mb-8 pb-4 border-b border-[#E8DFD8]">
                {section.category}
              </h4>
              <div className="space-y-8">
                {section.items.map((item) => (
                  <div key={item.name}>
                    <div className="flex justify-between items-baseline mb-2">
                      <h5 className="text-lg font-bold text-[#3E2723]">{item.name}</h5>
                      <span className="text-[#8C6D56] font-medium">{item.price}</span>
                    </div>
                    <p className="text-sm text-[#5C4033]/70">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
