import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle } from 'lucide-react';

const breadOptions = [
  '시그니처 소금빵',
  '무화과 깜빠뉴',
  '클래식 크루아상',
  '천연발효 사워도우'
];

export default function Reservation() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const today = new Date().toISOString().split('T')[0];
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    menu: breadOptions[0],
    quantity: 1,
    date: '',
    time: '',
    requests: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      menu: breadOptions[0],
      quantity: 1,
      date: '',
      time: '',
      requests: ''
    });
    setIsSubmitted(false);
  };

  return (
    <section id="reservation" className="scroll-mt-20 py-24 md:py-32 bg-[#F0E6DD]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-[#8C6D56] tracking-widest uppercase mb-4">Reservation</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[#3E2723]">빵 예약하기</h3>
          <p className="mt-4 text-lg text-[#5C4033]/80 break-keep">
            매장에서 바로 픽업하실 수 있도록 갓 구운 빵을 미리 포장해 드립니다.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form 
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="bg-white p-8 md:p-12 rounded-sm shadow-sm border border-[#E8DFD8]/60"
            >
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xl font-bold text-[#3E2723] mb-3">
                    예약자 성함 <span className="text-[#8C6D56]">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="홍길동"
                    className="w-full p-4 text-lg border-2 border-[#E8DFD8] rounded-md focus:border-[#8C6D56] outline-none transition-colors bg-[#FAF8F5]"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-xl font-bold text-[#3E2723] mb-3">
                    연락처 <span className="text-[#8C6D56]">*</span>
                  </label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="010-0000-0000"
                    className="w-full p-4 text-lg border-2 border-[#E8DFD8] rounded-md focus:border-[#8C6D56] outline-none transition-colors bg-[#FAF8F5]"
                  />
                </div>

                {/* Menu */}
                <div>
                  <label htmlFor="menu" className="block text-xl font-bold text-[#3E2723] mb-3">
                    예약 메뉴 <span className="text-[#8C6D56]">*</span>
                  </label>
                  <select 
                    id="menu"
                    name="menu"
                    value={formData.menu}
                    onChange={handleChange}
                    className="w-full p-4 text-lg border-2 border-[#E8DFD8] rounded-md focus:border-[#8C6D56] outline-none transition-colors bg-[#FAF8F5] cursor-pointer"
                  >
                    {breadOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                {/* Quantity */}
                <div>
                  <label htmlFor="quantity" className="block text-xl font-bold text-[#3E2723] mb-3">
                    수량 (개) <span className="text-[#8C6D56]">*</span>
                  </label>
                  <input 
                    type="number" 
                    id="quantity"
                    name="quantity"
                    min="1"
                    max="20"
                    required
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full p-4 text-lg border-2 border-[#E8DFD8] rounded-md focus:border-[#8C6D56] outline-none transition-colors bg-[#FAF8F5]"
                  />
                </div>

                {/* Date */}
                <div>
                  <label htmlFor="date" className="block text-xl font-bold text-[#3E2723] mb-3">
                    픽업 날짜 <span className="text-[#8C6D56]">*</span>
                  </label>
                  <input 
                    type="date" 
                    id="date"
                    name="date"
                    required
                    min={today}
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full p-4 text-lg border-2 border-[#E8DFD8] rounded-md focus:border-[#8C6D56] outline-none transition-colors bg-[#FAF8F5]"
                  />
                </div>

                {/* Time */}
                <div>
                  <label htmlFor="time" className="block text-xl font-bold text-[#3E2723] mb-3">
                    픽업 시간 <span className="text-[#8C6D56]">*</span>
                  </label>
                  <input 
                    type="time" 
                    id="time"
                    name="time"
                    min="09:00"
                    max="19:30"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full p-4 text-lg border-2 border-[#E8DFD8] rounded-md focus:border-[#8C6D56] outline-none transition-colors bg-[#FAF8F5]"
                  />
                  <p className="text-sm text-[#8C6D56] mt-2 font-medium">※ 영업시간: 09:00 ~ 20:00</p>
                </div>
              </div>

              {/* Requests */}
              <div className="mb-10">
                <label htmlFor="requests" className="block text-xl font-bold text-[#3E2723] mb-3">
                  요청사항 (선택)
                </label>
                <textarea 
                  id="requests"
                  name="requests"
                  rows={3}
                  value={formData.requests}
                  onChange={handleChange}
                  placeholder="추가로 전달하실 내용을 적어주세요."
                  className="w-full p-4 text-lg border-2 border-[#E8DFD8] rounded-md focus:border-[#8C6D56] outline-none transition-colors bg-[#FAF8F5] resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#8C6D56] text-white py-5 text-2xl font-bold rounded-md hover:bg-[#755945] transition-colors shadow-sm"
              >
                예약하기
              </button>
            </motion.form>
          ) : (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-16 rounded-sm shadow-sm border border-[#E8DFD8]/60 text-center"
            >
              <CheckCircle className="w-24 h-24 text-[#8C6D56] mx-auto mb-8" />
              <h4 className="text-3xl md:text-4xl font-bold text-[#3E2723] mb-4">예약이 접수되었습니다!</h4>
              <p className="text-xl text-[#5C4033]/80 mb-10 break-keep">
                입력하신 연락처로 확인 문자를 보내드리겠습니다.<br className="hidden md:block" /> 정성껏 준비하여 기다리겠습니다.
              </p>
              
              <div className="bg-[#FAF8F5] border border-[#E8DFD8] p-6 md:p-8 rounded-md text-left max-w-md mx-auto space-y-4 mb-10">
                <div className="flex justify-between items-center border-b border-[#E8DFD8] pb-4">
                  <span className="text-lg font-medium text-[#5C4033]/70">예약자</span>
                  <span className="text-xl font-bold text-[#3E2723]">{formData.name} 님</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#E8DFD8] pb-4">
                  <span className="text-lg font-medium text-[#5C4033]/70">메뉴</span>
                  <span className="text-xl font-bold text-[#3E2723]">{formData.menu} ({formData.quantity}개)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-[#5C4033]/70">픽업 일시</span>
                  <span className="text-xl font-bold text-[#3E2723] text-right">
                    {formData.date}<br className="md:hidden" /> {formData.time}
                  </span>
                </div>
              </div>

              <button 
                onClick={resetForm}
                className="inline-block border-2 border-[#8C6D56] text-[#8C6D56] px-10 py-4 text-xl font-bold rounded-md hover:bg-[#8C6D56] hover:text-white transition-colors"
              >
                다른 메뉴 추가 예약하기
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
