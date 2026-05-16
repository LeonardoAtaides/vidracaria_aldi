"use client"

import { useEffect, useRef, useState } from "react";
import { Award, Clock, Palette, Handshake } from "lucide-react";

const differentials = [
  { icon: Award, title: "Qualidade de Serviço", desc: "Utilizamos materiais de primeira linha e uma equipe altamente capacitada." },
  { icon: Clock, title: "Durabilidade", desc: "Produtos com garantia de longa vida útil e resistência superior." },
  { icon: Palette, title: "Versatilidade", desc: "Soluções para todos os ambientes e estilos arquitetônicos." },
  { icon: Handshake, title: "Compromisso", desc: "Cumprimos prazos e entregamos exatamente o que foi combinado." },
];

const DifferentialsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="diferenciais" className="py-20 bg-[#e8eaee80]/50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
            Por que escolher a <span className="text-gradient">Aldi <span className="text-[#25935F]">Vidros</span>
            </span>?
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Excelência, confiança e inovação em cada projeto.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((item, i) => (
            <div
              key={i}
              className={`text-center ${
                visible ? `animate-fade-up animate-fade-up-delay-${i + 1}` : "opacity-0"
              }`}
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#E3F3EC] flex items-center justify-center mb-4">
                <item.icon className="w-8 h-8 text-[#25935F]" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
