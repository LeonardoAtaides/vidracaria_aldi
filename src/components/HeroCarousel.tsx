"use client"
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


const slides = [
  { image:"/assets/carousel/carousel-1.jpg", title: "Instalação de Box Moderno", desc: "Elegância e segurança para seu banheiro" },
  { image:"/assets/carousel/carousel-2.jpg", title: "Fachadas em Blindex", desc: "Sofisticação e resistência para seu negócio" },
  { image:"/assets/carousel/carousel-3.jpg", title: "Espelhos Decorativos", desc: "Amplitude e estilo para seus ambientes" },
  { image:"/assets/carousel/carousel-4.jpg", title: "Guarda Corpo em Vidro", desc: "Proteção com design moderno" },
  { image:"/assets/carousel/carousel-5.jpg", title: "Projetos Personalizados", desc: "Soluções em vidro sob medida" },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-end pb-20 md:pb-28">
        <div className="container mx-auto px-4">
          <div key={current} className="animate-fade-up max-w-2xl">
            <h2 className="text-3xl md:text-[47px] font-display font-bold text-white mb-3 drop-shadow-lg">
              {slides[current].title}
            </h2>
            <p className="text-lg md:text-xl text-white/80 font-light">
              {slides[current].desc}
            </p>
            <a
              href="https://wa.me/5561996517827"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-8 py-3 rounded-lg bg-[#25935F] text-white font-semibold transition-all duration-300 ease-in-out hover:-translate-y-[2px] hover:shadow-[0_0_25px_hsl(152_60%_36%_/_0.4),0_0_50px_hsl(152_60%_36%_/_0.15)]"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 backdrop-blur-sm text-white hover:bg-[#25935F]/60 transition-all duration-300"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 backdrop-blur-sm text-white hover:bg-[#25935F]/60 transition-all duration-300"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-[#25935F] w-8" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
