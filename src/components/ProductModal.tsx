import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import type { Product } from "@/data/catalog-data";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
  const [imgIndex, setImgIndex] = useState(0);

  if (!product) return null;

  const images = product.images;

  const prev = () => setImgIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setImgIndex((i) => (i + 1) % images.length);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative glass-strong rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors"
              aria-label="Fechar"
            >
              <X size={18} />
            </button>

            {/* Image carousel */}
            <div className="relative aspect-video overflow-hidden rounded-t-2xl group/modal">
              <img
                src={images[imgIndex]}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

              {images.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 flex items-center justify-center text-white opacity-0 group-hover/modal:opacity-100 transition-opacity hover:bg-black/70"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 flex items-center justify-center text-white opacity-0 group-hover/modal:opacity-100 transition-opacity hover:bg-black/70"
                  >
                    <ChevronRight size={20} />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setImgIndex(i)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          i === imgIndex ? "bg-white scale-125" : "bg-white/40"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 bg-[#E3F3EC]">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-black mb-2">
                {product.name}
              </h2>
              <p className="text-black mb-6">{product.description}</p>

              {/* Materials */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-black mb-2">Materiais</h4>
                <div className="flex flex-wrap gap-2">
                  {product.materials.map((m) => (
                    <span key={m} className="px-3 py-1.5 rounded-lg bg-[#93DBA1] text-black text-sm">
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bisotê thickness */}
              {product.thicknessOptions && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-black mb-2">Espessura do Bisotê</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.thicknessOptions.map((t) => (
                      <span key={t} className="px-3 py-1.5 rounded-lg bg-[#93DBA1] text-black text-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Colors — grouped or flat */}
              <div className="mb-8">
                {product.colorGroups ? (
                  <div className="space-y-3">
                    {product.colorGroups.map((group) => (
                      <div key={group.label}>
                        <h4 className="text-sm font-semibold text-black mb-2">{group.label}</h4>
                        <div className="flex flex-wrap gap-2">
                          {group.colors.map((color) => (
                            <div key={color} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#93DBA1] text-sm">
                              <span
                                className="w-4 h-4 rounded-full border border-white/40"
                                style={{ backgroundColor: getColorHex(color) }}
                              />
                              <span className="text-black">{color}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    <h4 className="text-sm font-semibold text-black mb-2">Cores disponíveis</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.colors.map((color) => (
                        <div key={color} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#93DBA1] text-sm">
                          <span
                            className="w-4 h-4 rounded-full border border-white/40"
                            style={{ backgroundColor: getColorHex(color) }}
                          />
                          <span className="text-black">{color}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* CTA */}
              <a
                href={`https://wa.me/5561996517827?text=${encodeURIComponent(
                  `Olá, tenho interesse no produto: ${product.name}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-medium transition-all duration-300 w-full text-center text-base bg-[#25935F] text-white hover:shadow-[0_0_20px_hsl(152_58%_42%_/_0.3)]"
              >
                <FaWhatsapp size={22} />
                Solicitar Orçamento
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function getColorHex(name: string): string {
  const map: Record<string, string> = {
    Incolor:            "#e0e0e0",
    Fumê:               "#555555",
    Verde:              "#2a7d4f",
    Bronze:             "#8B6914",
    Espelhado:          "#c0c0c0",
    "Espelhado Bronze": "#7a5c1e",
    Preto:              "#1a1a1a",
    Branco:             "#f5f5f5",
    "Natural Fosco":    "#a0a0a0",
    Prata:              "#c0c0c0",
  };
  return map[name] || "#999";
}

export default ProductModal;
