import { Mail, Phone, Instagram, Facebook } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const catalogLinks = [
  { label: "Blindex",      cat: "blindex"      },
  { label: "Espelhos",     cat: "espelhos"      },
  { label: "Películas",    cat: "peliculas"     },
  { label: "Esquadrias",   cat: "esquadrias"    },
  { label: "Pergolados",   cat: "pergolados"    },
  { label: "Guarda Corpo", cat: "guarda-corpo"  },
  { label: "Box",          cat: "box"           },
];

const Footer = () => {
  return (
    <footer className="bg-(--bgfooter) text-footer-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Catalog */}
          <div>
            <h4 className="font-semibold mb-4 text-white/80">Catálogo</h4>
            <ul className="space-y-2 text-sm text-white/60">
              {catalogLinks.map(({ label, cat }) => (
                <li key={cat}>
                  <Link
                    href={`/catalog#${cat}`}
                    className="hover:text-[#259364] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/assets/Logo Aldi.png"
                alt="Aldi Vidros"
                width={96}
                height={96}
                className="drop-shadow-[0_0_4px_#25935F]"
                style={{ mixBlendMode: "screen" }}
              />
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Soluções premium em vidro e alumínio sob medida. Qualidade, design e tecnologia para transformar seus espaços.
            </p>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold mb-4 text-white/80">Contato</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/5561996517827"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-[#25935F] transition-all duration-300 group"
              >
                <Phone className="w-5 h-5 group-hover:drop-shadow-[0_0_8px_hsl(152_60%_36%/0.6)] transition-all duration-300" />
                (61) 9 9651-7827
              </a>
              <a
                href="mailto:aldividros@hotmail.com"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-[#25935F] transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 group-hover:drop-shadow-[0_0_8px_hsl(152_60%_36%/0.6)] transition-all duration-300" />
                aldividros@hotmail.com
              </a>
              <a
                href="https://instagram.com/aldividros"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-[#25935F] transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 group-hover:drop-shadow-[0_0_8px_hsl(152_60%_36%/0.6)] transition-all duration-300" />
                @aldividros
              </a>
              <a
                href="https://facebook.com/aldividros"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-[#25935F] transition-all duration-300 group"
              >
                <Facebook className="w-5 h-5 group-hover:drop-shadow-[0_0_8px_hsl(152_60%_36%/0.6)] transition-all duration-300" />
                Aldi Vidros
              </a>
            </div>
          </div>

          {/* Orçamento */}
          <div>
            <h4 className="font-display font-semibold text-white/80 mb-4">Orçamento</h4>
            <p className="text-sm text-white/60 mb-4">
              Solicite seu orçamento sem compromisso. Atendemos projetos residenciais e comerciais.
            </p>
            <a
              href="https://wa.me/5561996517827?text=Olá%2C%20gostaria%20de%20solicitar%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#259364] mt-4 rounded-full py-3 px-4 text-sm w-full text-center text-white hover:bg-[#1e7a50] transition-colors duration-300"
            >
              Solicitar Orçamento
            </a>
          </div>

        </div>

        <div className="mt-10 pt-6 border-t border-footer-foreground/10 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Aldi Vidros. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
