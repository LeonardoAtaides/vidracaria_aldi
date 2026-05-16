"use client"
import {
  Layers,
  Sparkles,
  Shield,
  LayoutGrid,
  Home,
  Fence,
  Bath,
  Settings,
} from "lucide-react";
import Link from "next/link";

const services = [
  { icon: Layers,      title: "Blindex",              categoryId: "blindex"     },
  { icon: Sparkles,    title: "Espelhos",              categoryId: "espelhos"    },
  { icon: Shield,      title: "Películas",             categoryId: "peliculas"   },
  { icon: LayoutGrid,  title: "Esquadrias",            categoryId: "esquadrias"  },
  { icon: Home,        title: "Pergolados",            categoryId: "pergolados"  },
  { icon: Fence,       title: "Guarda Corpo",          categoryId: "guarda-corpo"},
  { icon: Bath,        title: "Box",                   categoryId: "box"         },
  { icon: Settings,    title: "Soluções sob demanda",  categoryId: "sob-demanda" },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 bg-[#f6f7f9]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Soluções completas em vidros temperados, espelhos e esquadrias para residências e empresas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.categoryId}
              href={`/catalog#${service.categoryId}`}
              className="rounded-xl p-6 text-left border border-gray-300 focus:outline-none focus:ring-2 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_20px_40px_hsl(152_60%_36%_/_0.15),0_8px_16px_hsl(0_0%_0%_/_0.08)] group"
            >
              <div className="w-14 h-14 rounded-xl bg-[#E3F3EC] flex items-center justify-center mb-4 group-hover:bg-[#25935F]/15 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-[#25935F] transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {service.title}
              </h3>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/catalog"
            className="inline-block px-8 py-3 rounded-lg bg-[#25935F] text-white font-semibold transition-all duration-300 ease-in-out hover:-translate-y-[2px] hover:shadow-[0_0_25px_hsl(152_60%_36%_/_0.4),0_0_50px_hsl(152_60%_36%_/_0.15)]"
          >
            Ver mais serviços
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
