"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import type { Product } from "@/data/catalog-data";

interface ProductCardProps {
  product: Product;
  index: number;
  onSelect: (product: Product) => void;
}

const ProductCard = ({ product, index, onSelect }: ProductCardProps) => {
  const [imgIndex, setImgIndex] = useState(0);
  const images = product.images;

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIndex((i) => (i - 1 + images.length) % images.length);
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIndex((i) => (i + 1) % images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      layout
      className="cursor-pointer glass rounded-xl overflow-hidden border border-gray-300 hover:border-[#E3F3EC] transition-all duration-300 hover:shadow-[0_0_30px_hsl(152_58%_42%_/_0.2),0_8px_32px_hsl(0_0%_0%_/_0.3)] hover:-translate-y-1"
      onClick={() => onSelect(product)}
    >
      {/* Carousel */}
      <div className="relative overflow-hidden aspect-[4/3] group/img">
        <img
          src={images[imgIndex]}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {images.length > 1 && (
          <>
            {/* Arrows */}
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 flex items-center justify-center text-white opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 hover:bg-black/70"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 flex items-center justify-center text-white opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 hover:bg-black/70"
            >
              <ChevronRight size={16} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 right-3 flex gap-1">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                    i === imgIndex ? "bg-white scale-125" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </>
        )}

        {/* Color dots */}
        <div className="absolute bottom-3 left-3 flex gap-1.5">
          {product.colors.slice(0, 4).map((color) => (
            <span
              key={color}
              className="w-3 h-3 rounded-full border border-white/30"
              style={{ backgroundColor: getColorHex(color) }}
              title={color}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display font-semibold text-black mb-3 group-hover:text-[#25935F] transition-colors duration-300">
          {product.name}
        </h3>

        {/* Materials */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.materials.slice(0, 3).map((m) => (
            <span key={m} className="text-xs px-2 py-0.5 rounded-full bg-[#E3F3EC] text-black">
              {m}
            </span>
          ))}
        </div>

        <div className="flex items-center text-sm text-primary font-medium gap-1 transition-all duration-300">
          Ver detalhes
          <ArrowRight size={14} />
        </div>
      </div>
    </motion.div>
  );
};

function getColorHex(name: string): string {
  const map: Record<string, string> = {
    Incolor:          "#e0e0e0",
    Fumê:             "#555555",
    Verde:            "#2a7d4f",
    Bronze:           "#8B6914",
    Espelhado:        "#c0c0c0",
    "Espelhado Bronze": "#7a5c1e",
    Preto:            "#1a1a1a",
    Branco:           "#f5f5f5",
    "Natural Fosco":  "#a0a0a0",
    Prata:            "#c0c0c0",
  };
  return map[name] || "#999";
}

export default ProductCard;
