import { motion } from 'motion/react';

const breads = [
  {
    name: '시그니처 소금빵',
    desc: '프랑스산 고메버터와 게랑드 소금이 어우러진 담백하고 고소한 풍미',
    img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: '오늘도 드립 커피',
    desc: '매일 아침 갓 로스팅한 원두로 정성껏 내려 은은한 향이 매력적인 커피',
    img: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: '무화과 깜빠뉴',
    desc: '천연 발효종으로 건강하게 구워내 톡톡 씹히는 무화과가 듬뿍 들어간 빵',
    img: 'https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?auto=format&fit=crop&w=800&q=80'
  }
];

export default function Bakery() {
  return (
    <section id="bakery" className="scroll-mt-20 py-24 md:py-32 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-[#8C6D56] tracking-widest uppercase mb-4">Signature</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[#3E2723]">대표 메뉴</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {breads.map((bread, idx) => (
            <motion.div 
              key={bread.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col h-full border border-[#E8DFD8]/60"
            >
              <div className="aspect-[4/3] overflow-hidden relative bg-[#F5EBE1]">
                <img 
                  src={bread.img} 
                  alt={bread.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow text-center md:text-left">
                <h4 className="text-xl font-bold text-[#3E2723] mb-3">{bread.name}</h4>
                <p className="text-[#5C4033]/80 leading-relaxed text-sm flex-grow break-keep">
                  {bread.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
