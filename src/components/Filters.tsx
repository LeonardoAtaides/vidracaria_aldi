"use client";

import { useState } from "react";
import { Search, X, SlidersHorizontal, ChevronDown } from "lucide-react";
import { allMaterials, allColors } from "@/data/catalog-data";

interface FiltersProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedMaterials: string[];
  onMaterialToggle: (m: string) => void;
  selectedColors: string[];
  onColorToggle: (c: string) => void;
}

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
    Prata:              "#d4d4d4",
  };
  return map[name] || "#999";
}

const Filters = ({
  searchQuery, onSearchChange,
  selectedMaterials, onMaterialToggle,
  selectedColors, onColorToggle,
}: FiltersProps) => {
  const [open, setOpen] = useState(false);
  const activeCount = selectedMaterials.length + selectedColors.length;
  const hasFilters = activeCount > 0 || searchQuery;

  const clearAll = () => {
    onSearchChange("");
    selectedMaterials.forEach(onMaterialToggle);
    selectedColors.forEach(onColorToggle);
  };

  return (
    <div className="space-y-3">
      {/* Linha: busca + botão filtros */}
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar produtos..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
          />
          {searchQuery && (
            <button onClick={() => onSearchChange("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
              <X size={14} />
            </button>
          )}
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium border transition-all duration-200 ${
            open || activeCount > 0
              ? "bg-[#259364] text-white border-[#259364]"
              : "bg-secondary border-border text-foreground hover:border-[#259364] hover:text-[#259364]"
          }`}
        >
          <SlidersHorizontal size={15} />
          <span className="hidden sm:inline">Filtros</span>
          {activeCount > 0 && (
            <span className="w-5 h-5 rounded-full bg-white text-[#259364] text-xs font-bold flex items-center justify-center">
              {activeCount}
            </span>
          )}
          <ChevronDown size={14} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
        </button>

        {hasFilters && (
          <button
            onClick={clearAll}
            className="flex items-center gap-1 px-3 py-2.5 rounded-lg text-sm text-red-500 hover:bg-red-50 border border-red-200 transition-all duration-200"
            title="Limpar filtros"
          >
            <X size={15} />
            <span className="hidden sm:inline">Limpar</span>
          </button>
        )}
      </div>

      {/* Painel de filtros colapsável */}
      {open && (
        <div className="rounded-xl border border-border bg-secondary p-4 space-y-4">
          {/* Materiais */}
          <div>
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">Material</span>
            <div className="flex flex-wrap gap-2">
              {allMaterials.map((m) => (
                <button
                  key={m}
                  onClick={() => onMaterialToggle(m)}
                  className={`text-xs px-3 py-1.5 rounded-full transition-all duration-200 ${
                    selectedMaterials.includes(m)
                      ? "bg-[#259364] text-white"
                      : "text-black bg-[#E3F3EC] hover:text-[#259364]"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* Cores */}
          <div>
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">Cor</span>
            <div className="flex flex-wrap gap-2">
              {allColors.map((c) => (
                <button
                  key={c}
                  onClick={() => onColorToggle(c)}
                  className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full transition-all duration-200 ${
                    selectedColors.includes(c)
                      ? "bg-[#259364] text-white"
                      : "text-black bg-[#E3F3EC] hover:text-[#259364]"
                  }`}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full border border-black/10 shrink-0"
                    style={{ backgroundColor: getColorHex(c) }}
                  />
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Chips dos filtros ativos (quando painel fechado) */}
      {!open && activeCount > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedMaterials.map((m) => (
            <span key={m} className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-[#259364] text-white">
              {m}
              <button onClick={() => onMaterialToggle(m)}><X size={11} /></button>
            </span>
          ))}
          {selectedColors.map((c) => (
            <span key={c} className="flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-[#259364] text-white">
              <span className="w-2 h-2 rounded-full border border-white/30 shrink-0" style={{ backgroundColor: getColorHex(c) }} />
              {c}
              <button onClick={() => onColorToggle(c)}><X size={11} /></button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filters;
