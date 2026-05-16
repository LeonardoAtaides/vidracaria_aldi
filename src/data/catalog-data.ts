export interface ColorGroup {
  label: string;
  colors: string[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  materials: string[];
  colors: string[];
  colorGroups?: ColorGroup[];
  images: string[];
  thicknessOptions?: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

// ── Padrões reutilizáveis ──────────────────────────────────────────────────
const alColors   = ["Branco", "Preto", "Natural Fosco", "Bronze"];
const viColors   = ["Verde", "Incolor", "Bronze", "Fumê"];
const alViFlat   = [...alColors, ...viColors];
const alViGroups: ColorGroup[] = [
  { label: "Cores de Alumínio", colors: alColors },
  { label: "Cores de Vidro",    colors: viColors },
];

const mirrorMaterials = ["Espelho Guardian Evolution"];
const mirrorColors    = ["Prata", "Fumê", "Bronze"];

// ── Categorias ──────────────────────────────────────────────────────────────
export const categories: Category[] = [
  { id: "blindex",     name: "Blindex",           icon: "PanelTop",  description: "Soluções em vidro temperado para ambientes modernos" },
  { id: "espelhos",    name: "Espelhos",           icon: "Sparkles",  description: "Espelhos decorativos e funcionais sob medida" },
  { id: "peliculas",   name: "Películas",          icon: "Layers",    description: "Películas de controle solar, privacidade e segurança" },
  { id: "esquadrias",  name: "Esquadrias",         icon: "DoorOpen",  description: "Esquadrias em alumínio de alta performance" },
  { id: "pergolados",  name: "Pergolados",         icon: "Home",      description: "Coberturas em vidro e alumínio para áreas externas" },
  { id: "guarda-corpo",name: "Guarda Corpo",       icon: "Shield",    description: "Guarda-corpos em vidro e alumínio" },
  { id: "box",         name: "Box",                icon: "Square",    description: "Box para banheiro com acabamento premium" },
  { id: "sob-demanda", name: "Sob Demanda",        icon: "Settings",  description: "Projetos personalizados e soluções especiais" },
];

export const products: Product[] = [

  // ── BLINDEX ───────────────────────────────────────────────────────────────

  {
    id: "bl-1",
    name: "Janelas de Vidro",
    description: "Janelas em vidro temperado com perfis de alumínio de alta resistência. Disponíveis nos sistemas de correr, basculante e maxim-ar, proporcionam luminosidade, isolamento acústico e vedação eficiente contra vento e chuva.",
    category: "blindex",
    materials: ["Vidro Temperado", "Alumínio"],
    colors: alViFlat,
    colorGroups: alViGroups,
    images: [
      "/assets/janelas blindex/janela-blindex-aprimorada.png",
      "/assets/janelas blindex/janela-blindex-bronze-fiel-aprimorada.png",
      "/assets/janelas blindex/janela-palmeiras-aprimorada.png",
      "/assets/janelas blindex/janela-blindex-verde-aprimorada.png",
      "/assets/janelas blindex/janela-blindex-fume-flores-aprimorada.png",
    ],
  },
  {
    id: "bl-2",
    name: "Portas Blindex",
    description: "Portas em vidro temperado com perfis de alumínio e sistema de trilho com rolamentos silenciosos. Fechaduras e puxadores em alumínio anodizado. Ideais para ambientes internos e externos.",
    category: "blindex",
    materials: ["Vidro Temperado", "Alumínio"],
    colors: alViFlat,
    colorGroups: alViGroups,
    images: [
      "/assets/Portas blindex/porta-correr-rede-aprimorada.png",
      "/assets/Portas blindex/porta-correr-fina-aprimorada.png",
      "/assets/Portas blindex/porta-vidro-fosco-aprimorada.png",
      "/assets/Portas blindex/porta-vidro-madeira-aprimorada.png",
      "/assets/Portas blindex/porta-vidro-pivotante-aprimorada.png",
    ],
  },
  {
    id: "bl-3",
    name: "Fachadas de Vidro",
    description: "Fachadas em vidro temperado ou laminado com sistema structural glazing. Oferecem design moderno, eficiência energética e valorização do imóvel para projetos residenciais e comerciais de alto padrão.",
    category: "blindex",
    materials: ["Vidro Temperado", "Vidro Laminado", "Alumínio"],
    colors: [...alViFlat, "Espelhado", "Espelhado Bronze"],
    colorGroups: [
      { label: "Cores de Alumínio", colors: alColors },
      { label: "Cores de Vidro",    colors: [...viColors, "Espelhado", "Espelhado Bronze"] },
    ],
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "bl-4",
    name: "Divisórias de Vidro",
    description: "Divisórias fixas e deslizantes em vidro temperado com perfis de alumínio para escritórios e ambientes corporativos. Permitem circulação de luz e integração visual mantendo o isolamento acústico.",
    category: "blindex",
    materials: ["Vidro Temperado", "Alumínio"],
    colors: alViFlat,
    colorGroups: alViGroups,
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "bl-5",
    name: "Fechamentos de Vidro",
    description: "Fechamento de varandas, áreas gourmet e terraços com painéis de vidro temperado em perfis de alumínio. Protege contra vento e chuva sem comprometer a iluminação natural e a vista panorâmica.",
    category: "blindex",
    materials: ["Vidro Temperado", "Alumínio"],
    colors: alViFlat,
    colorGroups: alViGroups,
    images: [
      "/assets/fechamentos/fechamento-1.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },

  // ── ESPELHOS ──────────────────────────────────────────────────────────────

  {
    id: "es-1",
    name: "Espelho Decorativo",
    description: "Espelhos decorativos sob medida em espelho Guardian Evolution com bordas polidas. Alta definição de imagem e resistência à umidade. Ideais para salas, halls de entrada, corredores e ambientes comerciais.",
    category: "espelhos",
    materials: mirrorMaterials,
    colors: mirrorColors,
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "es-2",
    name: "Espelho com LED",
    description: "Espelho Guardian Evolution com iluminação LED integrada ao suporte em alumínio. Ideal para banheiros, closets e salões de beleza. LED pode ser instalado com sensor de toque ou dimmer de intensidade.",
    category: "espelhos",
    materials: [...mirrorMaterials, "Suporte para LED em Alumínio", "LED (opcional)"],
    colors: mirrorColors,
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "es-3",
    name: "Espelho Bisotado",
    description: "Espelho Guardian Evolution com acabamento bisotado artesanal nas bordas. O bisotê cria um efeito tridimensional que valoriza o espelho como peça decorativa. Disponível em diferentes espessuras de bisotê.",
    category: "espelhos",
    materials: mirrorMaterials,
    colors: mirrorColors,
    thicknessOptions: ["0,5mm", "1mm", "2mm", "3mm", "4mm"],
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "es-4",
    name: "Espelho Jateado",
    description: "Espelho Guardian Evolution com tratamento jateado em regiões específicas, criando áreas translúcidas que combinam reflexo e privacidade. Ideal para divisórias, portas e ambientes que pedem um toque diferenciado.",
    category: "espelhos",
    materials: mirrorMaterials,
    colors: mirrorColors,
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },

  // ── PELÍCULAS ─────────────────────────────────────────────────────────────

  {
    id: "pe-1",
    name: "Película Controle Solar",
    description: "Película de alta performance que reduz até 79% do calor solar e bloqueia 99% dos raios UV sem comprometer a visibilidade. Prolonga a vida útil de móveis e pisos expostos ao sol e reduz o custo com climatização.",
    category: "peliculas",
    materials: ["Película", "Vinil"],
    colors: ["Fumê", "Incolor", "Verde"],
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "pe-2",
    name: "Película de Privacidade",
    description: "Película fosca ou jateada que garante privacidade total ou parcial sem comprometer a entrada de luz natural. Disponível em diferentes níveis de opacidade. Ideal para banheiros, escritórios e divisórias.",
    category: "peliculas",
    materials: ["Película", "Vinil"],
    colors: ["Incolor", "Fumê"],
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "pe-3",
    name: "Película Espelhada",
    description: "Efeito espelhado unidirecional: de fora vê-se o reflexo, por dentro a visão permanece clara durante o dia. Proporciona privacidade, estética diferenciada e redução de calor para residências e fachadas comerciais.",
    category: "peliculas",
    materials: ["Película", "Vinil"],
    colors: ["Espelhado", "Espelhado Bronze", "Preto"],
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "pe-4",
    name: "Película de Segurança",
    description: "Película anti-estilhaçamento que mantém os fragmentos de vidro unidos após impacto. Aumenta a resistência a impactos e tentativas de invasão, reduzindo riscos de acidentes. Invisível e aplicável em qualquer vidro.",
    category: "peliculas",
    materials: ["Película", "Vinil"],
    colors: ["Incolor"],
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },

  // ── ESQUADRIAS ────────────────────────────────────────────────────────────

  {
    id: "eq-1",
    name: "Janela de Correr",
    description: "Janela de alumínio com 2 a 4 folhas deslizantes. Trilho com calha de drenagem, vedação em borracha EPDM e rolamentos silenciosos. Alta estanqueidade à água e ao ar. Disponível com bandeira superior.",
    category: "esquadrias",
    materials: ["Alumínio", "Vidro Temperado"],
    colors: alColors,
    colorGroups: [{ label: "Cores de Alumínio", colors: alColors }],
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "eq-2",
    name: "Janela Maxim-Ar",
    description: "Folhas articuladas que abrem para fora no eixo horizontal. Permite ventilação eficiente mesmo em dias de chuva leve, sem entrada de água. Ideal para banheiros, lavanderias e áreas de serviço.",
    category: "esquadrias",
    materials: ["Alumínio", "Vidro Temperado"],
    colors: alColors,
    colorGroups: [{ label: "Cores de Alumínio", colors: alColors }],
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "eq-3",
    name: "Janela Basculante",
    description: "Janela com abertura por basculamento da folha, excelente para ventilação cruzada e resistência à chuva. Ideal para banheiros, lavanderias e ambientes onde a privacidade é prioridade.",
    category: "esquadrias",
    materials: ["Alumínio", "Vidro Temperado"],
    colors: alColors,
    colorGroups: [{ label: "Cores de Alumínio", colors: alColors }],
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "eq-4",
    name: "Porta de Correr",
    description: "Porta de alumínio com folhas deslizantes e trilho robusto com rolamentos de alta durabilidade. Sistema de alinhamento automático e perfil de vedação perimetral. Disponível em versão com 2 ou 4 folhas.",
    category: "esquadrias",
    materials: ["Alumínio", "Vidro Temperado"],
    colors: alColors,
    colorGroups: [{ label: "Cores de Alumínio", colors: alColors }],
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "eq-5",
    name: "Porta de Giro",
    description: "Porta de alumínio com abertura em pivô ou dobradiças. Disponível em versão simples ou dupla folha. Perfil robusto com vedação em EPDM, ideal para entradas sociais e ambientes de alto tráfego.",
    category: "esquadrias",
    materials: ["Alumínio", "Vidro Temperado"],
    colors: alColors,
    colorGroups: [{ label: "Cores de Alumínio", colors: alColors }],
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },

  // ── PERGOLADOS ────────────────────────────────────────────────────────────

  {
    id: "pg-1",
    name: "Cobertura Plana em Vidro",
    description: "Estrutura de alumínio com painéis de vidro laminado fixados horizontalmente. Permite entrada de luz natural com total proteção contra chuva. Ideal para varandas, áreas gourmet e jardins de inverno.",
    category: "pergolados",
    materials: ["Alumínio", "Vidro Laminado"],
    colors: alViFlat,
    colorGroups: alViGroups,
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "pg-2",
    name: "Cobertura Inclinada em Vidro",
    description: "Estrutura de alumínio com inclinação de 10° a 30°, cobertura em vidro temperado e calha integrada para drenagem de água pluvial. Combina estética moderna com funcionalidade em espaços externos.",
    category: "pergolados",
    materials: ["Alumínio", "Vidro Temperado"],
    colors: alViFlat,
    colorGroups: alViGroups,
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "pg-3",
    name: "Fechamento Lateral em Vidro",
    description: "Painéis verticais de vidro temperado em perfis de alumínio para fechamento lateral do pergolado. Proteção eficiente contra vento e chuva com visibilidade total e design minimalista.",
    category: "pergolados",
    materials: ["Alumínio", "Vidro Temperado"],
    colors: alViFlat,
    colorGroups: alViGroups,
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "pg-4",
    name: "Telhado de Vidro",
    description: "Cobertura total em vidro laminado de segurança com estrutura em alumínio e perfis de fixação ocultos. Visual clean e contemporâneo, ideal para jardins de inverno e áreas de lazer cobertas.",
    category: "pergolados",
    materials: ["Alumínio", "Vidro Laminado"],
    colors: alViFlat,
    colorGroups: alViGroups,
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },

  // ── GUARDA CORPO ──────────────────────────────────────────────────────────

  {
    id: "gc-1",
    name: "Guarda Corpo Frameless",
    description: "Sistema sem perfis aparentes com fixação por pino ou sapata de alumínio embutida no piso. Visual completamente limpo e minimalista. Vidro laminado de segurança com alta resistência a impactos.",
    category: "guarda-corpo",
    materials: ["Vidro Laminado", "Alumínio"],
    colors: alViFlat,
    colorGroups: alViGroups,
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "gc-2",
    name: "Guarda Corpo com Perfil em Alumínio",
    description: "Montantes e trilho superior em alumínio extrudado com painéis de vidro temperado encaixados nos perfis. Resistente e durável, conforme norma NBR 14718. Ideal para sacadas, escadas e mezaninos.",
    category: "guarda-corpo",
    materials: ["Vidro Temperado", "Alumínio"],
    colors: alViFlat,
    colorGroups: alViGroups,
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "gc-3",
    name: "Guarda Corpo com Corrimão",
    description: "Guarda corpo com corrimão em tubo oval de alumínio anodizado fixado sobre montantes. Disponível em várias alturas conforme a norma NBR 14718. Combina segurança, design e facilidade de manutenção.",
    category: "guarda-corpo",
    materials: ["Vidro Temperado", "Alumínio"],
    colors: alViFlat,
    colorGroups: alViGroups,
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "gc-4",
    name: "Guarda Corpo para Piscinas",
    description: "Guarda corpo em vidro temperado com perfis de alumínio anodizado resistente à umidade e produtos químicos. Vidro com tratamento antifungo. Ideal para bordas de piscina, decks e áreas molhadas.",
    category: "guarda-corpo",
    materials: ["Vidro Temperado", "Alumínio"],
    colors: alViFlat,
    colorGroups: alViGroups,
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },

  // ── BOX ───────────────────────────────────────────────────────────────────

  {
    id: "bx-1",
    name: "Box Fixo",
    description: "Painel único de vidro temperado sem dobradiças, fixado com perfis de alumínio ou silicone estrutural. Ideal para chuveiros com espaço generoso. Fácil limpeza e manutenção zero.",
    category: "box",
    materials: ["Vidro Temperado", "Alumínio"],
    colors: ["Incolor", "Fumê", "Bronze"],
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "bx-2",
    name: "Box de Abrir",
    description: "Porta de vidro temperado com dobradiças de alumínio e mola de retorno. Abertura de 90° para fora do box. Disponível em versão de canto com 1 ou 2 portas.",
    category: "box",
    materials: ["Vidro Temperado", "Alumínio"],
    colors: ["Incolor", "Fumê", "Bronze"],
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "bx-3",
    name: "Box Flex",
    description: "Sistema dobrável em sanfona que permite abrir o box para dentro ou fora. Ideal para banheiros com espaço limitado onde uma porta convencional não cabe. Perfis em alumínio anodizado.",
    category: "box",
    materials: ["Vidro Temperado", "Alumínio"],
    colors: ["Incolor", "Fumê"],
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "bx-4",
    name: "Box Light",
    description: "Linha leve com vidro 6mm e perfis slim em alumínio. Design clean e minimalista com visual contemporâneo. Instalação rápida e econômica, sem abrir mão da qualidade e da segurança.",
    category: "box",
    materials: ["Vidro Temperado", "Alumínio"],
    colors: ["Incolor", "Fumê", "Bronze"],
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "bx-5",
    name: "Box de Canto",
    description: "Configuração em L para banheiros com box de canto. Disponível com porta de abrir, painel fixo ou combinação dos dois. Perfis de alumínio com vedação em borracha PVC de alta durabilidade.",
    category: "box",
    materials: ["Vidro Temperado", "Alumínio"],
    colors: ["Incolor", "Fumê", "Bronze"],
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "bx-7",
    name: "Box Elegance",
    description: "Linha premium com perfis ultra-slim em alumínio anodizado e vidro temperado de alta claridade. Dobradiças e puxadores com acabamento em alumínio escovado. Para banheiros que exigem sofisticação e design exclusivo.",
    category: "box",
    materials: ["Vidro Temperado", "Alumínio"],
    colors: ["Incolor", "Fumê", "Bronze", "Preto"],
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "bx-6",
    name: "Box Até o Teto",
    description: "Box do piso ao teto com vedação total e visual contemporâneo. Elimina respingos, evita mofo nas paredes e facilita a limpeza. Disponível com porta de abrir ou painel fixo.",
    category: "box",
    materials: ["Vidro Temperado", "Alumínio"],
    colors: ["Incolor", "Fumê"],
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },

  // ── SOB DEMANDA ───────────────────────────────────────────────────────────

  {
    id: "sd-1",
    name: "Projeto Residencial",
    description: "Soluções completas em vidro e alumínio para residências de alto padrão. Janelas, portas, fechamentos, box, espelhos e guarda corpos integrados em um único projeto com acompanhamento técnico do início ao fim.",
    category: "sob-demanda",
    materials: ["Vidro Temperado", "Vidro Laminado", "Alumínio"],
    colors: alViFlat,
    colorGroups: alViGroups,
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "sd-2",
    name: "Projeto Comercial",
    description: "Fachadas em vidro, divisórias, vitrines e fechamentos para lojas, restaurantes e espaços comerciais. Valorizamos a identidade do seu negócio com soluções que combinam segurança, estética e funcionalidade.",
    category: "sob-demanda",
    materials: ["Vidro Temperado", "Vidro Laminado", "Alumínio"],
    colors: [...alViFlat, "Espelhado", "Espelhado Bronze"],
    colorGroups: [
      { label: "Cores de Alumínio", colors: alColors },
      { label: "Cores de Vidro",    colors: [...viColors, "Espelhado", "Espelhado Bronze"] },
    ],
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "sd-3",
    name: "Retrofit e Reforma",
    description: "Substituição e modernização de esquadrias e fechamentos existentes. Avaliamos as estruturas atuais, indicamos as melhores soluções e executamos a troca com o mínimo de impacto na rotina do imóvel.",
    category: "sob-demanda",
    materials: ["Vidro Temperado", "Alumínio"],
    colors: alViFlat,
    colorGroups: alViGroups,
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "sd-4",
    name: "Consultoria e Projeto Sob Medida",
    description: "Visita técnica, levantamento de medidas, elaboração de projeto personalizado e orçamento detalhado sem compromisso. Desenvolvemos soluções exclusivas para necessidades únicas e projetos arquitetônicos especiais.",
    category: "sob-demanda",
    materials: ["Vidro Temperado", "Vidro Laminado", "Alumínio"],
    colors: [...alViFlat, "Espelhado", "Espelhado Bronze", "Prata"],
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
];

export const allMaterials = [
  "Vidro Temperado",
  "Vidro Laminado",
  "Alumínio",
  "Espelho Guardian Evolution",
  "Película",
  "Vinil",
];

export const allColors = [
  "Branco",
  "Preto",
  "Natural Fosco",
  "Incolor",
  "Verde",
  "Fumê",
  "Bronze",
  "Espelhado",
  "Espelhado Bronze",
  "Prata",
];

