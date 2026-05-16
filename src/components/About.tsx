"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  const stats = [
    { number: "500+", label: "Projetos" },
    { number: "10+", label: "Anos" },
    { number: "100%", label: "Garantia" },
  ];

  return (
    <section
      id="about"
      className="container mx-auto px-4 py-2 md:py-20"
    >
      <div className="grid md:grid-cols-2 gap-4 md:gap-12 items-center">
        
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-xl"
        >
          <span className="text-xs font-medium uppercase tracking-wider text-primary">
            Sobre Nós
          </span>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6 leading-tight">
            Referência em soluções
            <br />
            <span className="text-[#259364]">
              em vidro e alumínio
            </span>
          </h2>

          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
            A Aldi Vidros é especialista em soluções sob medida em vidro temperado,
            laminado, espelhos e esquadrias de alumínio. Atendemos projetos
            residenciais, comerciais e corporativos com qualidade premium.
          </p>

          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
            Nosso compromisso é entregar excelência em cada projeto, combinando
            materiais de primeira linha, mão de obra qualificada e design
            contemporâneo.
          </p>

          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center bg-[#E3F3EC] rounded-2xl p-4"
              >
                <div className="font-display text-xl md:text-2xl font-bold text-[#259364]">
                  {stat.number}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Imagem */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="w-full max-w-md mx-auto md:max-w-full aspect-square rounded-2xl bg-white p-4 ">
            <div className="relative w-full h-full overflow-hidden rounded-xl">
              <Image
                src="/assets/carousel/carousel-4.jpg"
                alt="Projeto de arquitetura em vidro"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}