export default function Footer() {
  return (
    <footer className="bg-[#FAF8F5] py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-[#5C4033] mb-2">
            오늘도빵
          </h2>
          <p className="text-sm text-[#5C4033]/60">
            Fresh Bakery & Warm Coffee
          </p>
        </div>
        
        <div className="text-sm text-[#5C4033]/50">
          <p>대표: 김제빵 | 사업자등록번호: 123-45-67890</p>
          <p className="mt-1">&copy; {new Date().getFullYear()} 오늘도빵. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
