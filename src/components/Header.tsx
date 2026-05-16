"use client"

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isCatalog = pathname === "/catalog";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Serviços", href: "/#servicos" },
    { label: "Sobre nós", href: "/#about" },
    { label: "Contato", href: "/#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--bgheader)]/95 backdrop-blur-md shadow-lg"
          : "bg-[var(--bgheader)]/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-1">
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/assets/Logo Aldi.png"
            alt="Aldi Vidros"
            width={80}
            height={80}
            className="transition-all duration-300 group-hover:scale-105 drop-shadow-[0_0_4px_#25935F]"
            style={{ mixBlendMode: "screen" }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-5 py-2 rounded-lg text-sm font-medium text-white/80 transition-all duration-300 hover:text-white hover:bg-[#25935F]/20 hover:shadow-[0_0_15px_hsl(152_60%_36%/0.3)] relative"
            >
              {item.label}
            </a>
          ))}
          <Link
            href={isCatalog ? "/" : "/catalog"}
            rel="noopener noreferrer"
            className="ml-2 px-5 py-2 rounded-lg text-sm font-semibold bg-[#25935F] text-white transition-all duration-300 ease-in-out hover:-translate-y-[2px] hover:shadow-[0_0_25px_hsl(152_60%_36%_/_0.4),0_0_50px_hsl(152_60%_36%_/_0.15)]"
          >
            {isCatalog ? "Menu Principal" : "Nosso Catálogo"}
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-header/95 backdrop-blur-md border-t border-primary/20 px-4 pb-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 rounded-lg text-white/80 hover:text-white hover:bg-[#25935F]/20 transition-all duration-300"
            >
              {item.label}
            </a>
          ))}
          <Link
            href={isCatalog ? "/" : "/catalog"}
            rel="noopener noreferrer"
            className="block px-4 py-3 rounded-lg text-center font-semibold bg-[#25935F] text-white transition-all duration-300 ease-in-out hover:-translate-y-[2px] hover:shadow-[0_0_25px_hsl(152_60%_36%_/_0.4),0_0_50px_hsl(152_60%_36%_/_0.15)]"
          >
            {isCatalog ? "Menu Principal" : "Nosso Catálogo"}
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
