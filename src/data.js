const images = [
  "https://images.unsplash.com/photo-1509389928833-fe62aef36deb?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1574360773950-133867861ae9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1589275776107-e193042128bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1629726797843-618688139f5a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1491677533189-49af044391ed?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3"
];

const mockTestimonials = [
  { 
    nome: 'João Silva', 
    cidade: 'São Paulo', 
    depoimento: 'Reduzi minha conta em 70%!', 
    foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop' 
  },
  { 
    nome: 'Maria Oliveira', 
    cidade: 'Rio de Janeiro', 
    depoimento: 'Serviço impecável!', 
    foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop' 
  },
  { 
    nome: 'Carlos Souza', 
    cidade: 'Belo Horizonte', 
    depoimento: 'Instalação rápida e eficiente.', 
    foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop' 
  }
];

const marcas = [
  { 
    nome: 'FOXess',
    logo: `src/foxess.svg`
  },
  { 
    nome: 'Growatt',
    logo: `src/growatt.svg`
  },
  { 
    nome: 'Helius',
    logo: `src/helius.svg`
  },
  { 
    nome: 'Honor',
    logo: `src/honor.svg`
  },
  { 
    nome: 'Leapton',
    logo: `src/leapton.svg`
  },
  { 
    nome: 'Osda',
    logo: `src/osda.svg`
  },
  { 
    nome: 'Sungrow',
    logo: `src/sungrow.svg`
  },
  { 
    nome: 'Deye',
    logo: `src/deye.svg`
  },
  { 
    nome: 'Dah',
    logo: `src/dah.svg`
  },
  { 
    nome: 'Canadian',
    logo: `src/canadian.svg`
  },
  { 
    nome: 'Astronergy',
    logo: `src/astronergy.svg`
  }
];

const galeria = [
  { 
    nome: 'Residência SP', 
    imagem: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop' 
  },
  { 
    nome: 'Fazenda MG', 
    imagem: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=600&auto=format&fit=crop' 
  },
  { 
    nome: 'Empresa RJ', 
    imagem: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop' 
  }
];

const bancos = [
  { nome: 'Banco do Brasil', logo: 'lg-bb' },
  { nome: 'BV Financeira', logo: 'lg-bv' },
  { nome: 'Sicoob', logo: 'lg-sicoob' },
  { nome: 'Bradesco', logo: 'lg-bradesco' },
  { nome: 'Viacredi', logo: 'lg-viacredi' },
  { nome: 'BRB', logo: 'lg-brb' },
  { nome: 'Porto Bank', logo: 'lg-porto' },
  { nome: 'Solfacil', logo: 'lg-solfacil' },
  { nome: 'BNDES', logo: 'lg-bndes' },
  { nome: 'Sicredi', logo: 'lg-sicredi' },
  { nome: 'Itaú', logo: 'lg-itau' }
];

export { images, mockTestimonials, marcas, galeria, bancos };