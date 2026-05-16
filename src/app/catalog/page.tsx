"use client"

import { useState, useMemo, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryMenu from "@/components/CategoryMenu";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import Filters from "@/components/Filters";
import { products, categories, type Product } from "@/data/catalog-data";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && categories.some((c) => c.id === hash)) {
      setActiveCategory(hash);
    }
  }, []);

  const toggleMaterial = (m: string) =>
    setSelectedMaterials((prev) =>
      prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m]
    );

  const toggleColor = (c: string) =>
    setSelectedColors((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]
    );

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      if (activeCategory && p.category !== activeCategory) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        if (
          !p.name.toLowerCase().includes(q) &&
          !p.description.toLowerCase().includes(q)
        )
          return false;
      }
      if (
        selectedMaterials.length > 0 &&
        !selectedMaterials.some((m) => p.materials.includes(m))
      )
        return false;
      if (
        selectedColors.length > 0 &&
        !selectedColors.some((c) => p.colors.includes(c))
      )
        return false;
      return true;
    });
  }, [activeCategory, searchQuery, selectedMaterials, selectedColors]);

  const activeCategoryData = categories.find((c) => c.id === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />

      {/* Catalog Section */}
      <section id="catalogo" className="container px-4 mx-auto pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs font-medium uppercase tracking-wider text-primary">Nossos Produtos</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Catálogo Completo
          </h2>
          {activeCategoryData && (
            <p className="text-muted-foreground mt-2">{activeCategoryData.description}</p>
          )}
        </motion.div>

        {/* Category Menu */}
        <div className="mb-6">
          <CategoryMenu activeCategory={activeCategory} onSelect={setActiveCategory} />
        </div>

        {/* Filters */}
        <div className="mb-8">
          <Filters
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedMaterials={selectedMaterials}
            onMaterialToggle={toggleMaterial}
            selectedColors={selectedColors}
            onColorToggle={toggleColor}
          />
        </div>

        {/* Results count */}
        <p className="text-sm text-muted-foreground mb-6">
          {filteredProducts.length} {filteredProducts.length === 1 ? "produto encontrado" : "produtos encontrados"}
        </p>

        {/* Product Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${searchQuery}-${selectedMaterials.join()}-${selectedColors.join()}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredProducts.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                index={i}
                onSelect={setSelectedProduct}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">Nenhum produto encontrado.</p>
            <p className="text-sm text-muted-foreground mt-1">Tente ajustar os filtros.</p>
          </div>
        )}
      </section>

      <Footer />
      <WhatsAppButton />

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
};

export default Index;
