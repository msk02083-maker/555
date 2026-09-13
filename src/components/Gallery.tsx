import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from './icons';

const photos = [
  { src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80', alt: '매장에서 빵을 만드는 모습' },
  { src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80', alt: '갓 구운 빵' },
  { src: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&w=800&q=80', alt: '커피' },
  { src: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=800&q=80', alt: '카페 내부' },
  { src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80', alt: '대표 메뉴' },
  { src: 'https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?auto=format&fit=crop&w=800&q=80', alt: '계절 메뉴' }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null);

  // Prevent scrolling when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <section id="gallery" className="scroll-mt-20 py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-[#8C6D56] tracking-widest uppercase mb-4">Gallery</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[#3E2723]">우리의 일상</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {photos.map((photo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="aspect-square bg-[#E8DFD8] overflow-hidden relative group cursor-pointer rounded-sm"
              onClick={() => setSelectedImage(photo)}
            >
              <img 
                src={photo.src} 
                alt={photo.alt} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Hover overlay with label */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium text-lg tracking-wide">{photo.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-12 cursor-zoom-out"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              aria-label="Close image"
            >
              <X size={32} />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-full flex flex-col items-center justify-center cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="max-w-full max-h-[85vh] object-contain rounded-md shadow-2xl bg-black/50"
              />
              <p className="text-white/90 mt-6 text-lg font-medium">{selectedImage.alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
