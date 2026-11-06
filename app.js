/**
 * FRUTOS DE GOIÁS - UNIDADES SANTA LUZIA & SÃO BENEDITO
 * Sistema de E-Commerce & Cardápio Digital Interativo
 */

// Informações das Unidades
const STORE_UNITS = {
  'santa-luzia': {
    id: 'santa-luzia',
    name: 'Santa Luzia',
    address: 'R. Jaime Carlos Afonso Teixeira, 66 - Bela Vista, Santa Luzia - MG, 33010-515',
    whatsappNumber: '5531995809341', // Número com DDI e DDD
    displayPhone: '(31) 99580-9341',
    deliveryFee: 5.00,
    minOrder: 15.00,
    hours: 'Aberto · Fecha às 21:00'
  },
  'sao-benedito': {
    id: 'sao-benedito',
    name: 'São Benedito',
    address: 'Av. Brasília, 1858 - São Benedito, Santa Luzia - MG, 33105-515',
    whatsappNumber: '5531999555848',
    displayPhone: '(31) 99955-5848',
    deliveryFee: 5.00,
    minOrder: 15.00,
    hours: '12:00 às 23:00'
  }
};

// Catálogo de Produtos
const PRODUCTS_DATA = [
  // --- CATEGORIA: AÇAÍ & BARCAS ---
  {
    id: 'acai-barca',
    category: 'acai',
    name: 'Barca de Açaí Frutos de Goiás',
    description: 'Nossa famosa barca recheada com açaí artesanal super cremoso. Inclui frutas frescas, leite Ninho, Nutella e paçoca crocante.',
    price: 34.90,
    badge: '⭐ Mais Pedido',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=600&q=80',
    tags: ['destaques', 'acai'],
    customizable: true,
    sizes: [
      { name: 'Barca P (Aprox. 500ml)', price: 34.90 },
      { name: 'Barca M (Aprox. 700ml)', price: 43.90 },
      { name: 'Barca G Família (Aprox. 1.1 Litros)', price: 58.90 }
    ],
    freeComplementsLimit: 3,
    freeComplements: [
      'Banana fatiada',
      'Morango fresco picado',
      'Leite em pó (Ninho)',
      'Granola tradicional',
      'Paçoca de amendoim triturada',
      'Flocos de tapioca crocante',
      'Gotas de chocolate meio amargo',
      'Leite condensado'
    ],
    paidAdditions: [
      { name: 'Dose Extra de Nutella Original', price: 6.00 },
      { name: 'Castanha de Baru do Cerrado Torrada', price: 5.50 },
      { name: 'Bombom Ouro Branco picado', price: 4.50 },
      { name: 'KitKat crocante em pedaços', price: 5.00 },
      { name: 'Kiwi fresco picado', price: 4.50 },
      { name: 'Mel puro de abelha', price: 3.50 }
    ],
    sauces: ['Sem calda', 'Calda de Morango', 'Calda de Chocolate', 'Calda de Caramelo', 'Leite Condensado']
  },
  {
    id: 'acai-taca-tradicional',
    category: 'acai',
    name: 'Açaí na Taça Tradicional',
    description: 'O puro açaí cremoso batido na textura perfeita com xarope de guaraná suave ou sem açúcar. Acompanha granola e banana.',
    price: 18.90,
    badge: 'Refrescante',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=600&q=80',
    tags: ['acai'],
    customizable: true,
    sizes: [
      { name: 'Taça 300ml', price: 18.90 },
      { name: 'Taça 500ml', price: 24.90 },
      { name: 'Taça 700ml (Generosa)', price: 31.90 }
    ],
    freeComplementsLimit: 2,
    freeComplements: [
      'Banana fatiada',
      'Granola artesanal',
      'Leite Ninho',
      'Paçoca',
      'Leite condensado'
    ],
    paidAdditions: [
      { name: 'Morango fresco', price: 4.00 },
      { name: 'Nutella Original', price: 5.50 },
      { name: 'Castanha de Baru', price: 5.50 },
      { name: 'Gotas de Chocolate', price: 3.50 }
    ],
    sauces: ['Sem calda', 'Leite Condensado', 'Morango', 'Chocolate']
  },
  {
    id: 'acai-trufado-especial',
    category: 'acai',
    name: 'Taça Açaí Trufado Supremo',
    description: 'Taça de 500ml com paredes cobertas de Nutella pura, camadas de açaí artesanal, muito leite Ninho e morangos frescos selecionados.',
    price: 28.90,
    badge: '👑 Trufado',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80',
    tags: ['destaques', 'acai'],
    customizable: true,
    sizes: [
      { name: 'Taça Trufada 500ml', price: 28.90 },
      { name: 'Taça Mega Trufada 700ml', price: 36.90 }
    ],
    freeComplementsLimit: 2,
    freeComplements: [
      'Morangos frescos extras',
      'Leite Ninho em pó',
      'Granola',
      'Gotas de chocolate'
    ],
    paidAdditions: [
      { name: 'Castanha de Baru Nobre', price: 5.50 },
      { name: 'Bombom Sonho de Valsa', price: 4.50 },
      { name: 'Ouro Branco picado', price: 4.50 }
    ],
    sauces: ['Ganache de Chocolate Belga', 'Leite Condensado', 'Sem calda extra']
  },
  {
    id: 'acai-fit-zero',
    category: 'acai',
    name: 'Açaí Fit 100% Puro (Zero Açúcar)',
    description: 'Polpa de açaí pura sem adição de xarope ou açúcar. Perfeito para quem mantém a dieta ou busca o sabor autêntico e saudável do fruto.',
    price: 20.90,
    badge: '🌱 Zero Açúcar',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=600&q=80',
    tags: ['fit', 'acai'],
    customizable: true,
    sizes: [
      { name: 'Pote Fit 350ml', price: 20.90 },
      { name: 'Pote Fit 500ml', price: 26.90 }
    ],
    freeComplementsLimit: 3,
    freeComplements: [
      'Banana fatiada',
      'Morango fresco picado',
      'Chia e Linhaça Dourada',
      'Aveia em flocos finos',
      'Granola Zero Açúcar'
    ],
    paidAdditions: [
      { name: 'Castanha de Baru (Superalimento do Cerrado)', price: 5.50 },
      { name: 'Mel puro de abelha silvestre', price: 3.50 },
      { name: 'Pasta de Amendoim Integral', price: 4.50 },
      { name: 'Whey Protein Isolado (Dose)', price: 7.00 }
    ],
    sauces: ['Sem calda', 'Mel Puro']
  },
  {
    id: 'acai-supreme-barca-familia',
    category: 'acai',
    name: 'Mega Barca Supreme (1.3L Para Compartilhar)',
    description: 'A maior barca da Frutos de Goiás: serve até 4 pessoas! Açaí cremoso, morangos, bananas, uvas sem semente, Ninho, Nutella, KitKat, Ouro Branco e baru.',
    price: 68.90,
    badge: '🎉 Família',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=600&q=80',
    tags: ['acai'],
    customizable: true,
    sizes: [
      { name: 'Mega Barca 1.3 Litros (Até 4 pessoas)', price: 68.90 }
    ],
    freeComplementsLimit: 5,
    freeComplements: [
      'Morango fresco fatiado',
      'Banana em rodelas',
      'Leite Ninho em abundância',
      'Nutella generosa',
      'Paçoca triturada',
      'Granola artesanal crocante',
      'Gotas de chocolate'
    ],
    paidAdditions: [
      { name: 'Castanha de Baru do Cerrado', price: 5.50 },
      { name: 'Sorvete Artesanal (1 Bola)', price: 6.00 }
    ],
    sauces: ['Leite Condensado', 'Calda de Morango Artesanal', 'Calda de Chocolate']
  },

  // --- CATEGORIA: SOBREMESAS ESPECIAIS ---
  {
    id: 'grand-shake',
    category: 'sobremesas',
    name: 'Grand Shake Trufado na Taça',
    description: 'Taça de 550ml besuntada com brigadeiro gourmet e castanhas, milkshake artesanal ultracremoso, chantilly fresco e picolé Frutos de Goiás espetado.',
    price: 29.90,
    badge: '👑 Destaque Especial',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80',
    tags: ['destaques', 'sobremesas'],
    customizable: true,
    sizes: [
      { name: 'Taça Grande 550ml', price: 29.90 }
    ],
    freeComplementsLimit: 1,
    freeComplements: [
      'Sabor: Ninho com Nutella',
      'Sabor: Chocolate Belga Intenso',
      'Sabor: Morango com Calda Artesanal',
      'Sabor: Castanha de Baru com Caramelo'
    ],
    paidAdditions: [
      { name: 'Adicionar Picolé Extra', price: 8.00 },
      { name: 'Farofa crocante de Baru', price: 4.50 },
      { name: 'Bombom Ouro Branco', price: 4.50 }
    ],
    sauces: ['Ganache de Chocolate Belga', 'Caramelo Toffee', 'Morango']
  },
  {
    id: 'petit-gateau',
    category: 'sobremesas',
    name: 'Petit Gateau Supremo com Sorvete Artesanal',
    description: 'Bolinho quente de chocolate belga com recheio cremoso escorrendo, acompanhado de bola de sorvete artesanal e calda quente de chocolate.',
    price: 25.90,
    badge: '🍫 Quente & Frio',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80',
    tags: ['destaques', 'sobremesas'],
    customizable: true,
    sizes: [
      { name: 'Porção Individual Completa', price: 25.90 }
    ],
    freeComplementsLimit: 1,
    freeComplements: [
      'Sorvete de Baunilha Bourbon Artesanal',
      'Sorvete de Creme de Castanha de Baru',
      'Sorvete de Doce de Leite com Queijo',
      'Sorvete de Ninho Trufado'
    ],
    paidAdditions: [
      { name: 'Bola Extra de Sorvete', price: 6.50 },
      { name: 'Morangos frescos picados', price: 4.00 },
      { name: 'Castanha de Baru triturada', price: 4.50 }
    ],
    sauces: ['Calda Quente de Chocolate Belga', 'Calda Quente de Caramelo Salgado', 'Calda de Frutas Vermelhas']
  },
  {
    id: 'sorvete-assado',
    category: 'sobremesas',
    name: 'Sorvete Assado Tradicional',
    description: 'Uma das criações mais elogiadas da Frutos de Goiás: fatia generosa de pão de ló, sorvete artesanal e coberto com merengue maçaricado e dourado ao forno.',
    price: 27.90,
    badge: '✨ Receita Exclusiva',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80',
    tags: ['destaques', 'sobremesas'],
    customizable: true,
    sizes: [
      { name: 'Porção Individual na Travessinha', price: 27.90 }
    ],
    freeComplementsLimit: 1,
    freeComplements: [
      'Sorvete de Baunilha e Morango',
      'Sorvete de Castanha de Baru',
      'Sorvete de Pequi Suave',
      'Sorvete de Flocos'
    ],
    paidAdditions: [
      { name: 'Castanha de Baru crocante', price: 4.50 },
      { name: 'Morangos frescos', price: 4.00 }
    ],
    sauces: ['Calda de Caramelo', 'Calda de Frutas Vermelhas']
  },
  {
    id: 'banana-split',
    category: 'sobremesas',
    name: 'Banana Split Clássica da Casa',
    description: 'Banana fresca cortada ao meio, 3 bolas de sorvete à sua escolha, coberturas de chocolate, morango e caramelo, chantilly cremoso, castanhas e cereja.',
    price: 26.90,
    badge: '🍌 Clássico',
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=600&q=80',
    tags: ['sobremesas'],
    customizable: true,
    sizes: [
      { name: 'Taça Tradicional Completa (3 Bolas)', price: 26.90 }
    ],
    freeComplementsLimit: 3,
    freeComplements: [
      'Bola 1: Chocolate Belga',
      'Bola 2: Morango com Pedaços',
      'Bola 3: Creme de Baru',
      'Opção: Baunilha Bourbon',
      'Opção: Flocos Artesanal'
    ],
    paidAdditions: [
      { name: 'Nutella adicional', price: 5.50 },
      { name: 'Castanha de Baru triturada', price: 4.50 }
    ],
    sauces: ['Trio de Caldas (Chocolate, Morango e Caramelo)', 'Apenas Chocolate', 'Apenas Caramelo']
  },
  {
    id: 'sundae-especial',
    category: 'sobremesas',
    name: 'Sundae Especial Frutos de Goiás',
    description: '2 bolas generosas de sorvete à sua escolha, calda quente e brilhante de chocolate belga, chantilly leve e finalizado com castanhas tostadas.',
    price: 19.90,
    badge: 'Delicioso',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80',
    tags: ['sobremesas'],
    customizable: true,
    sizes: [
      { name: 'Taça Sundae (2 Bolas)', price: 19.90 }
    ],
    freeComplementsLimit: 2,
    freeComplements: [
      'Sorvete de Baunilha',
      'Sorvete de Chocolate',
      'Sorvete de Morango',
      'Sorvete de Mangaba (Cerrado)',
      'Sorvete de Cajá'
    ],
    paidAdditions: [
      { name: 'Chantilly Extra', price: 3.50 },
      { name: 'Castanha de Baru', price: 4.50 }
    ],
    sauces: ['Calda Quente de Chocolate', 'Calda de Morango', 'Calda de Caramelo']
  },
  {
    id: 'bolo-na-taca',
    category: 'sobremesas',
    name: 'Bolo na Taça Ninho com Morango',
    description: 'Camadas de bolo de baunilha úmido e fofinho, recheio trufado de leite Ninho, morangos frescos picados e uma bola do nosso sorvete artesanal.',
    price: 24.90,
    badge: '🍰 Irresistível',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80',
    tags: ['sobremesas'],
    customizable: true,
    sizes: [
      { name: 'Taça de 400ml', price: 24.90 }
    ],
    freeComplementsLimit: 1,
    freeComplements: [
      'Sorvete de Ninho Trufado',
      'Sorvete de Morango com pedaços',
      'Sorvete de Baunilha'
    ],
    paidAdditions: [
      { name: 'Nutella na borda', price: 5.00 },
      { name: 'Morangos frescos extras', price: 4.00 }
    ],
    sauces: ['Calda de Morango Artesanal', 'Sem calda extra']
  },

  // --- CATEGORIA: MILK SHAKES & VITAMINAS ---
  {
    id: 'shake-ovomaltine',
    category: 'shakes',
    name: 'Milk Shake Ovomaltine Crocante 500ml',
    description: 'O clássico mais amado: sorvete cremoso de baunilha batido com bastante Ovomaltine suíço, calda de chocolate e pedacinhos crocantes.',
    price: 21.90,
    badge: 'Crocante',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80',
    tags: ['shakes'],
    customizable: true,
    sizes: [
      { name: 'Copo 500ml', price: 21.90 },
      { name: 'Copo Mega 700ml', price: 27.90 }
    ],
    freeComplementsLimit: 1,
    freeComplements: [
      'Com Chantilly tradicional',
      'Sem Chantilly (só o shake puro)'
    ],
    paidAdditions: [
      { name: 'Ovomaltine Crocante Extra no topo', price: 3.50 },
      { name: 'Borda com Nutella', price: 5.00 }
    ],
    sauces: ['Calda de Chocolate', 'Sem calda']
  },
  {
    id: 'shake-ninho-nutella',
    category: 'shakes',
    name: 'Milk Shake Ninho com Nutella 500ml',
    description: 'Bordas lambuzadas com pura Nutella, batido com sorvete artesanal de leite Ninho e finalizado com leite condensado e ninho polvilhado.',
    price: 23.90,
    badge: '👑 Campeão de Pedidos',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80',
    tags: ['destaques', 'shakes'],
    customizable: true,
    sizes: [
      { name: 'Copo 500ml', price: 23.90 },
      { name: 'Copo Mega 700ml', price: 29.90 }
    ],
    freeComplementsLimit: 1,
    freeComplements: [
      'Com Chantilly',
      'Sem Chantilly'
    ],
    paidAdditions: [
      { name: 'Nutella Extra no recheio', price: 5.50 },
      { name: 'Morangos frescos batidos juntos', price: 4.50 }
    ],
    sauces: ['Nutella', 'Calda de Chocolate']
  },
  {
    id: 'shake-cerrado-baru',
    category: 'shakes',
    name: 'Milk Shake Especial Castanha de Baru do Cerrado',
    description: 'Uma criação exclusiva da Frutos de Goiás: sorvete de baru nobre batido com doce de leite caseiro e finalizado com farofa de baru torrada.',
    price: 24.90,
    badge: '🌿 Exclusivo do Cerrado',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80',
    tags: ['cerrado', 'shakes'],
    customizable: true,
    sizes: [
      { name: 'Copo 500ml', price: 24.90 }
    ],
    freeComplementsLimit: 1,
    freeComplements: [
      'Com Chantilly & Farofa de Baru',
      'Sem Chantilly'
    ],
    paidAdditions: [
      { name: 'Castanha de Baru Extra', price: 5.50 }
    ],
    sauces: ['Doce de Leite Cremoso', 'Calda de Caramelo Toffee']
  },
  {
    id: 'vitamina-acai-banana',
    category: 'shakes',
    name: 'Vitamina de Açaí com Banana & Guaraná 500ml',
    description: 'Vitamina revigorante e energética batida com açaí artesanal, banana madura, xarope de guaraná e leite geladinho.',
    price: 18.90,
    badge: '⚡ Energia Pura',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=600&q=80',
    tags: ['shakes'],
    customizable: true,
    sizes: [
      { name: 'Copo 500ml', price: 18.90 },
      { name: 'Copo 700ml', price: 23.90 }
    ],
    freeComplementsLimit: 1,
    freeComplements: [
      'Com leite integral',
      'Com água (estilo smoothie)',
      'Com leite vegetal / sem lactose (+R$ 2,50)'
    ],
    paidAdditions: [
      { name: 'Dose de Aveia & Chia', price: 3.00 },
      { name: 'Mel Silvestre', price: 3.50 },
      { name: 'Paçoca triturada', price: 3.00 }
    ],
    sauces: ['Sem calda']
  },
  {
    id: 'vitamina-cerrado-cupuacu',
    category: 'shakes',
    name: 'Vitamina Tropical Açaí com Cupuaçu',
    description: 'O contraste perfeito entre o sabor aveludado do açaí e a acidez aromática do cupuaçu. Uma delícia refrescante e cheia de antioxidantes.',
    price: 20.90,
    badge: '🌿 Frutas Nativas',
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=600&q=80',
    tags: ['cerrado', 'shakes'],
    customizable: true,
    sizes: [
      { name: 'Copo 500ml', price: 20.90 }
    ],
    freeComplementsLimit: 1,
    freeComplements: [
      'Com leite integral',
      'Com água mineral'
    ],
    paidAdditions: [
      { name: 'Mel puro de abelha', price: 3.50 },
      { name: 'Granola artesanal crocante', price: 3.00 }
    ],
    sauces: ['Sem calda']
  },

  // --- CATEGORIA: POTES DE SORVETE (TRADIÇÃO & CERRADO) ---
  {
    id: 'pote-cerrado-1l',
    category: 'potes-cerrado',
    name: 'Pote 1 Litro - Sabores Autênticos do Cerrado',
    description: 'Leve para casa os sabores raros e premiados da Frutos de Goiás! Feito com polpa pura das frutas do Cerrado brasileiro.',
    price: 44.90,
    badge: '🌿 Tradição Goiana',
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=600&q=80',
    tags: ['cerrado', 'destaques', 'potes'],
    customizable: true,
    sizes: [
      { name: 'Pote 1 Litro', price: 44.90 },
      { name: 'Pote 1.5 Litros (Família)', price: 59.90 },
      { name: 'Pote 2 Litros (Festa)', price: 74.90 }
    ],
    freeComplementsLimit: 2,
    freeComplements: [
      'Castanha de Baru (Cremoso e marcante)',
      'Pequi Nobre (O autêntico sabor goiano)',
      'Mangaba (Aroma floral doce e aveludado)',
      'Cajá (Refrescante e tropical)',
      'Buriti (Sabor rústico e cor vibrante)',
      'Cupuaçu (Cremosidade pura com toque cítrico)',
      'Murici (Tradição do interior goiano)'
    ],
    paidAdditions: [
      { name: 'Pacote com 6 Casquinhas Crocantes Artesanais', price: 6.90 },
      { name: 'Pote de Calda Artesanal de Caramelo (100ml)', price: 6.50 },
      { name: 'Pote de Farofa de Baru Tostada (100g)', price: 9.90 }
    ],
    sauces: ['Embalado em bolsa térmica para garantir a temperatura']
  },
  {
    id: 'pote-tradicional-1l',
    category: 'potes-cerrado',
    name: 'Pote 1 Litro - Sabores Clássicos & Especiais',
    description: 'Nossos sorvetes artesanais tradicionais preparados com ingredientes selecionados, textura aveludada e baixíssimo teor de gordura hidrogenada.',
    price: 39.90,
    badge: 'Super Cremoso',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80',
    tags: ['potes'],
    customizable: true,
    sizes: [
      { name: 'Pote 1 Litro', price: 39.90 },
      { name: 'Pote 1.5 Litros', price: 54.90 },
      { name: 'Pote 2 Litros', price: 67.90 }
    ],
    freeComplementsLimit: 2,
    freeComplements: [
      'Chocolate Belga Intenso',
      'Ninho Trufado com Ganache',
      'Flocos Crocantes',
      'Morango com Pedaços Reais da Fruta',
      'Baunilha Bourbon Especial',
      'Doce de Leite com Queijo Minas',
      'Torta de Limão com Biscoito',
      'Pistache Suave'
    ],
    paidAdditions: [
      { name: 'Kit 6 Casquinhas Crocantes', price: 6.90 },
      { name: 'Pote Calda de Chocolate Belga (100ml)', price: 6.50 }
    ],
    sauces: ['Embalado para entrega sem descongelar']
  },
  {
    id: 'pote-acai-1l',
    category: 'potes-cerrado',
    name: 'Pote de Açaí Cremoso Puro 1 Litro',
    description: 'Pote térmico com 1 Litro do açaí puro Frutos de Goiás pronto para você servir como quiser em casa.',
    price: 36.90,
    badge: 'Açaí Puro',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=600&q=80',
    tags: ['acai', 'potes'],
    customizable: true,
    sizes: [
      { name: 'Pote 1 Litro', price: 36.90 },
      { name: 'Pote 2 Litros (Super Econômico)', price: 62.90 }
    ],
    freeComplementsLimit: 1,
    freeComplements: [
      'Tradicional Cremoso com Xarope Suave',
      'Zero Adição de Açúcar (Fit)'
    ],
    paidAdditions: [
      { name: 'Pacote de Granola Artesanal 200g', price: 7.50 },
      { name: 'Pote de Leite Ninho 150g', price: 8.00 },
      { name: 'Pote de Nutella 140g', price: 12.00 }
    ],
    sauces: ['Sem calda inclusa']
  },

  // --- CATEGORIA: PICOLÉS ARTESANAIS ---
  {
    id: 'picole-fruta-cerrado',
    category: 'picoles',
    name: 'Picolé Frutas do Cerrado 100% Natural',
    description: 'Feito com polpa pura da fruta e água mineral. Super refrescante, vegano e sem leite. Sabores: Cajá, Mangaba, Pequi, Tamarindo, Açaí e Graviola.',
    price: 7.50,
    badge: '🌿 100% Fruta',
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=600&q=80',
    tags: ['cerrado', 'fit', 'picoles'],
    customizable: true,
    sizes: [
      { name: 'Unidade Individual', price: 7.50 },
      { name: 'Combo 5 Picolés de Fruta', price: 34.90 }
    ],
    freeComplementsLimit: 1,
    freeComplements: [
      'Sabor: Cajá Puro',
      'Sabor: Mangaba do Cerrado',
      'Sabor: Pequi Tradicional',
      'Sabor: Tamarindo Azedinho',
      'Sabor: Açaí Puro',
      'Sabor: Cupuaçu Refrescante'
    ],
    paidAdditions: [
      { name: 'Bolsa Térmica Pequena para Transporte', price: 4.00 }
    ],
    sauces: ['Enviado em embalagem térmica com gelo']
  },
  {
    id: 'picole-ao-leite',
    category: 'picoles',
    name: 'Picolé Cremoso ao Leite',
    description: 'Cremoso, sabor marcante e com ingredientes de verdade. Sabores: Ninho Trufado, Milho Verde com Canela, Coco Queimado, Doce de Leite.',
    price: 8.50,
    badge: 'Cremoso',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80',
    tags: ['picoles'],
    customizable: true,
    sizes: [
      { name: 'Unidade Individual', price: 8.50 },
      { name: 'Combo 5 Picolés ao Leite', price: 39.90 }
    ],
    freeComplementsLimit: 1,
    freeComplements: [
      'Sabor: Ninho Trufado',
      'Sabor: Milho Verde',
      'Sabor: Doce de Leite Goiano',
      'Sabor: Coco Queimado',
      'Sabor: Castanha de Baru'
    ],
    paidAdditions: [
      { name: 'Bolsa Térmica Pequena', price: 4.00 }
    ],
    sauces: ['Enviado geladinho']
  },
  {
    id: 'picole-gourmet-recheado',
    category: 'picoles',
    name: 'Picolé Gourmet Super Recheado',
    description: 'Nossa linha de picolés com recheio cremoso e casquinha de chocolate. Açaí com Leite Condensado ou Chocolate Belga com Brigadeiro.',
    price: 11.90,
    badge: '👑 Recheado',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80',
    tags: ['destaques', 'picoles'],
    customizable: true,
    sizes: [
      { name: 'Unidade Individual', price: 11.90 },
      { name: 'Combo 3 Picolés Recheados', price: 32.90 }
    ],
    freeComplementsLimit: 1,
    freeComplements: [
      'Açaí Recheado com Leite Condensado',
      'Chocolate Belga com Brigadeiro Mole',
      'Torta de Limão com Biscoito',
      'Morango Recheado com Leite Moça'
    ],
    paidAdditions: [
      { name: 'Bolsa Térmica para Transporte', price: 4.00 }
    ],
    sauces: ['Entregue intacto']
  },
  {
    id: 'kit-degustacao-cerrado',
    category: 'picoles',
    name: 'Kit Degustação: 10 Picolés do Cerrado',
    description: 'Um passeio sensorial completo pelos tesouros de Goiás: 10 picolés com os sabores mais marcantes do Cerrado em caixa térmica para presente.',
    price: 69.90,
    badge: '🎁 Campeão para Família',
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=600&q=80',
    tags: ['cerrado', 'destaques', 'picoles'],
    customizable: true,
    sizes: [
      { name: 'Caixa Térmica com 10 Picolés Variados', price: 69.90 }
    ],
    freeComplementsLimit: 1,
    freeComplements: [
      'Mix Padrão: 2 Pequi, 2 Baru, 2 Mangaba, 2 Cajá, 1 Cupuaçu e 1 Buriti',
      'Personalizar sabores nas observações'
    ],
    paidAdditions: [
      { name: 'Cartão de Presente Personalizado', price: 3.00 }
    ],
    sauces: ['Embalagem Térmica Especial Inclusa']
  }
];

// Estado Global da Aplicação
let currentStoreUnit = 'santa-luzia';
let currentCategory = 'all';
let currentTagFilter = 'all';
let currentSearchQuery = '';
let currentDeliveryType = 'delivery'; // 'delivery' ou 'retirada'
let currentPaymentMethod = 'PIX';

// Estado do Carrinho (Carregado do localStorage ou inicializado vazio)
let cart = [];

// Estado temporário do modal de personalização
let customizerCurrentProduct = null;
let customizerSelectedSize = null;
let customizerSelectedFree = [];
let customizerSelectedAdditions = [];
let customizerSelectedSauce = '';
let customizerQuantity = 1;
let customizerNotes = '';

// ==========================================================================
// INICIALIZAÇÃO
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  loadSavedStoreUnit();
  loadCartFromStorage();
  renderProducts();
  updateCartUI();
  setupEventListeners();
});

function loadSavedStoreUnit() {
  const savedUnit = localStorage.getItem('fg_selected_unit');
  if (savedUnit && STORE_UNITS[savedUnit]) {
    currentStoreUnit = savedUnit;
  }
  const selectElem = document.getElementById('store-unit-select');
  if (selectElem) {
    selectElem.value = currentStoreUnit;
  }
  updateUnitBannerUI();
}

function changeStoreUnit(unitKey) {
  if (!STORE_UNITS[unitKey]) return;
  currentStoreUnit = unitKey;
  localStorage.setItem('fg_selected_unit', unitKey);

  const selectElem = document.getElementById('store-unit-select');
  if (selectElem) selectElem.value = unitKey;

  // Atualizar banners e cart drawer
  updateUnitBannerUI();
  updateCartUI();

  showToast(`Unidade alterada para ${STORE_UNITS[unitKey].name}!`);
}

function updateUnitBannerUI() {
  const cardSL = document.getElementById('unitCardSantaLuzia');
  const cardSB = document.getElementById('unitCardSaoBenedito');
  const cartUnitLabel = document.getElementById('cartUnitName');

  if (cardSL && cardSB) {
    if (currentStoreUnit === 'santa-luzia') {
      cardSL.classList.add('active');
      cardSB.classList.remove('active');
      cardSL.querySelector('.unit-select-btn').textContent = 'Selecionada';
      cardSB.querySelector('.unit-select-btn').textContent = 'Selecionar';
    } else {
      cardSB.classList.add('active');
      cardSL.classList.remove('active');
      cardSB.querySelector('.unit-select-btn').textContent = 'Selecionada';
      cardSL.querySelector('.unit-select-btn').textContent = 'Selecionar';
    }
  }

  if (cartUnitLabel) {
    cartUnitLabel.textContent = STORE_UNITS[currentStoreUnit].name;
  }
}

function selectUnitAndGoToMenu(unitKey) {
  changeStoreUnit(unitKey);
  const menuElem = document.getElementById('cardapio');
  if (menuElem) {
    menuElem.scrollIntoView({ behavior: 'smooth' });
  }
}

// ==========================================================================
// RENDERIZAÇÃO DO CARDÁPIO DIGITAL
// ==========================================================================
function renderProducts() {
  const container = document.getElementById('menuProductsContainer');
  const emptyState = document.getElementById('emptySearchState');
  if (!container) return;

  // Filtragem
  let filtered = PRODUCTS_DATA.filter(product => {
    // Categoria
    if (currentCategory !== 'all' && product.category !== currentCategory) {
      return false;
    }

    // Tag Filter
    if (currentTagFilter !== 'all') {
      if (currentTagFilter === 'destaques' && !product.tags.includes('destaques')) return false;
      if (currentTagFilter === 'cerrado' && !product.tags.includes('cerrado')) return false;
      if (currentTagFilter === 'fit' && !product.tags.includes('fit')) return false;
      if (currentTagFilter === 'sobremesas' && product.category !== 'sobremesas') return false;
    }

    // Busca textual
    if (currentSearchQuery.trim() !== '') {
      const q = currentSearchQuery.toLowerCase();
      const matchName = product.name.toLowerCase().includes(q);
      const matchDesc = product.description.toLowerCase().includes(q);
      const matchTags = product.tags.some(t => t.toLowerCase().includes(q));
      if (!matchName && !matchDesc && !matchTags) return false;
    }

    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  container.innerHTML = filtered.map(product => {
    return `
      <div class="product-card" data-product-id="${product.id}">
        ${product.badge ? `<div class="product-card-badge ribbon-luxo">${product.badge}</div>` : ''}
        <div class="product-image-wrap">
          <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy" onerror="handleImageFallback(this, '${product.name.replace(/'/g, "\\'")}')">
        </div>
        <div class="product-content">
          <span class="product-category-tag">${getCategoryName(product.category)}</span>
          <h3 class="product-title">${product.name}</h3>
          <p class="product-desc">${product.description}</p>
          <div class="product-card-footer">
            <div class="product-price">
              <small>${product.sizes && product.sizes.length > 1 ? 'A partir de' : 'Valor'}</small>
              <strong>R$ ${product.price.toFixed(2).replace('.', ',')}</strong>
            </div>
            <button class="btn btn-primary btn-sm btn-pedir" onclick="openProductCustomizer('${product.id}')">
              <span>${product.customizable ? 'Personalizar' : 'Adicionar'}</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function handleImageFallback(imgElement, productName) {
  imgElement.onerror = null;
  const safeTitle = (productName || 'Frutos de Goiás').substring(0, 24);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1e5631"/>
        <stop offset="100%" stop-color="#2d6a4f"/>
      </linearGradient>
    </defs>
    <rect width="600" height="400" fill="url(#bg)"/>
    <circle cx="300" cy="170" r="70" fill="#f59e0b" opacity="0.9"/>
    <text x="300" y="185" font-family="sans-serif" font-size="50" text-anchor="middle" fill="#ffffff">🍨</text>
    <text x="300" y="275" font-family="sans-serif" font-weight="bold" font-size="22" text-anchor="middle" fill="#ffffff">${safeTitle}</text>
    <text x="300" y="310" font-family="sans-serif" font-size="15" text-anchor="middle" fill="#fef3c7">Frutos de Goiás • Santa Luzia</text>
  </svg>`;
  imgElement.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

function getCategoryName(cat) {
  const map = {
    'acai': 'Açaí & Barcas',
    'sobremesas': 'Sobremesas Especiais',
    'shakes': 'Milk Shakes & Vitaminas',
    'potes-cerrado': 'Potes do Cerrado & Tradicionais',
    'picoles': 'Picolés Artesanais'
  };
  return map[cat] || 'Cardápio';
}

function selectCategory(catKey) {
  currentCategory = catKey;
  // Atualizar visual das abas
  const tabs = document.querySelectorAll('.category-tab');
  tabs.forEach(tab => {
    if (tab.dataset.cat === catKey) {
      tab.classList.add('active');
      tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    } else {
      tab.classList.remove('active');
    }
  });

  renderProducts();

  // Se o usuário clicar em uma categoria pelo footer, rolar até o cardápio
  const menuSec = document.getElementById('cardapio');
  if (menuSec && window.scrollY < menuSec.offsetTop - 150) {
    menuSec.scrollIntoView({ behavior: 'smooth' });
  }
}

function filterByTag(tagKey, element) {
  currentTagFilter = tagKey;
  const pills = document.querySelectorAll('.filter-pill');
  pills.forEach(p => p.classList.remove('active'));
  if (element) element.classList.add('active');
  renderProducts();
}

function filterMenuByCerrado(fruit) {
  const searchInput = document.getElementById('menuSearchInput');
  if (searchInput) {
    searchInput.value = fruit;
    currentSearchQuery = fruit;
    const clearBtn = document.getElementById('clearSearchBtn');
    if (clearBtn) clearBtn.style.display = 'block';
  }
  selectCategory('all');
  renderProducts();

  const menuSec = document.getElementById('cardapio');
  if (menuSec) {
    menuSec.scrollIntoView({ behavior: 'smooth' });
  }
}

function handleMenuSearch(val) {
  currentSearchQuery = val;
  const clearBtn = document.getElementById('clearSearchBtn');
  if (clearBtn) {
    clearBtn.style.display = val.length > 0 ? 'flex' : 'none';
  }
  renderProducts();
}

function clearSearch() {
  const input = document.getElementById('menuSearchInput');
  if (input) input.value = '';
  currentSearchQuery = '';
  const clearBtn = document.getElementById('clearSearchBtn');
  if (clearBtn) clearBtn.style.display = 'none';
  renderProducts();
}

function focusSearchInput() {
  const input = document.getElementById('menuSearchInput');
  if (input) {
    input.focus();
    input.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

// ==========================================================================
// MODAL DE PERSONALIZAÇÃO (MONTADOR DE PRODUTO)
// ==========================================================================
function openProductCustomizer(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  customizerCurrentProduct = product;
  customizerQuantity = 1;
  customizerNotes = '';

  // Inicializar tamanho selecionado (primeiro por padrão)
  if (product.sizes && product.sizes.length > 0) {
    customizerSelectedSize = product.sizes[0];
  } else {
    customizerSelectedSize = { name: 'Padrão', price: product.price };
  }

  customizerSelectedFree = [];
  customizerSelectedAdditions = [];
  customizerSelectedSauce = product.sauces && product.sauces.length > 0 ? product.sauces[0] : '';

  // Preencher Header do Modal
  const modalImg = document.getElementById('customizerImg');
  modalImg.onerror = () => handleImageFallback(modalImg, product.name);
  modalImg.src = product.image;
  document.getElementById('customizerCategory').textContent = getCategoryName(product.category);
  document.getElementById('customizerTitle').textContent = product.name;
  document.getElementById('customizerDesc').textContent = product.description;
  document.getElementById('customizerBasePrice').textContent = customizerSelectedSize.price.toFixed(2).replace('.', ',');
  document.getElementById('customizerQty').textContent = customizerQuantity;

  // Montar Seções de Opções Dinamicamente
  const body = document.getElementById('customizerOptionsBody');
  let html = '';

  // 1. Seletor de Tamanho
  if (product.sizes && product.sizes.length > 1) {
    html += `
      <div class="opt-section">
        <div class="opt-section-header">
          <span class="opt-title">1. Escolha o Tamanho</span>
          <span class="opt-badge opt-badge-required">Obrigatório</span>
        </div>
        <div class="opt-list">
          ${product.sizes.map((s, idx) => `
            <label class="opt-choice-label ${idx === 0 ? 'selected' : ''}" onclick="selectCustomizerSize(${idx}, this)">
              <div class="opt-left">
                <input type="radio" name="optSizeRadio" value="${idx}" ${idx === 0 ? 'checked' : ''} style="accent-color: var(--color-primary)">
                <span class="opt-name">${s.name}</span>
              </div>
              <span class="opt-price-add">R$ ${s.price.toFixed(2).replace('.', ',')}</span>
            </label>
          `).join('')}
        </div>
      </div>
    `;
  }

  // 2. Complementos Inclusos (Grátis)
  if (product.freeComplements && product.freeComplements.length > 0) {
    const limit = product.freeComplementsLimit || 2;
    html += `
      <div class="opt-section">
        <div class="opt-section-header">
          <span class="opt-title">2. Acompanhamentos Inclusos</span>
          <span class="opt-badge opt-badge-optional">Escolha até ${limit}</span>
        </div>
        <div class="opt-list">
          ${product.freeComplements.map((item, idx) => `
            <label class="opt-choice-label" onclick="toggleCustomizerFree('${item.replace(/'/g, "\\'")}', this, ${limit})">
              <div class="opt-left">
                <input type="checkbox" data-free-item="${item}" style="accent-color: var(--color-primary)">
                <span class="opt-name">${item}</span>
              </div>
              <span class="opt-price-add" style="color: var(--color-success)">Incluso</span>
            </label>
          `).join('')}
        </div>
      </div>
    `;
  }

  // 3. Adicionais Pagos / Extras
  if (product.paidAdditions && product.paidAdditions.length > 0) {
    html += `
      <div class="opt-section">
        <div class="opt-section-header">
          <span class="opt-title">3. Turbinar com Adicionais Pagos?</span>
          <span class="opt-badge opt-badge-optional">Opcional</span>
        </div>
        <div class="opt-list">
          ${product.paidAdditions.map((extra, idx) => `
            <label class="opt-choice-label" onclick="toggleCustomizerAddition(${idx}, this)">
              <div class="opt-left">
                <input type="checkbox" data-add-index="${idx}" style="accent-color: var(--color-primary)">
                <span class="opt-name">${extra.name}</span>
              </div>
              <span class="opt-price-add">+ R$ ${extra.price.toFixed(2).replace('.', ',')}</span>
            </label>
          `).join('')}
        </div>
      </div>
    `;
  }

  // 4. Coberturas / Caldas
  if (product.sauces && product.sauces.length > 0) {
    html += `
      <div class="opt-section">
        <div class="opt-section-header">
          <span class="opt-title">4. Cobertura ou Calda</span>
          <span class="opt-badge opt-badge-optional">Escolha 1</span>
        </div>
        <div class="opt-list">
          ${product.sauces.map((sauce, idx) => `
            <label class="opt-choice-label ${idx === 0 ? 'selected' : ''}" onclick="selectCustomizerSauce('${sauce.replace(/'/g, "\\'")}', this)">
              <div class="opt-left">
                <input type="radio" name="optSauceRadio" value="${sauce}" ${idx === 0 ? 'checked' : ''} style="accent-color: var(--color-primary)">
                <span class="opt-name">${sauce}</span>
              </div>
            </label>
          `).join('')}
        </div>
      </div>
    `;
  }

  // 5. Observações Especiais
  html += `
    <div class="opt-section">
      <div class="opt-section-header">
        <span class="opt-title">5. Alguma observação especial?</span>
        <span class="opt-badge opt-badge-optional">Opcional</span>
      </div>
      <textarea id="customizerNotesInput" class="opt-textarea" rows="2" placeholder="Ex: Calda separada, mandar colheres extras, sem banana..."></textarea>
    </div>
  `;

  body.innerHTML = html;
  recalculateCustomizerTotal();

  // Abrir Modal
  const modal = document.getElementById('customizerModalOverlay');
  if (modal) modal.classList.add('active');
}

function closeProductCustomizer() {
  const modal = document.getElementById('customizerModalOverlay');
  if (modal) modal.classList.remove('active');
  customizerCurrentProduct = null;
}

function selectCustomizerSize(idx, labelElem) {
  if (!customizerCurrentProduct || !customizerCurrentProduct.sizes) return;
  customizerSelectedSize = customizerCurrentProduct.sizes[idx];

  const parent = labelElem.closest('.opt-list');
  if (parent) {
    parent.querySelectorAll('.opt-choice-label').forEach(l => l.classList.remove('selected'));
  }
  labelElem.classList.add('selected');

  const radio = labelElem.querySelector('input[type="radio"]');
  if (radio) radio.checked = true;

  document.getElementById('customizerBasePrice').textContent = customizerSelectedSize.price.toFixed(2).replace('.', ',');
  recalculateCustomizerTotal();
}

function toggleCustomizerFree(itemName, labelElem, maxLimit) {
  const checkbox = labelElem.querySelector('input[type="checkbox"]');
  if (!checkbox) return;

  const isChecked = !checkbox.checked;
  checkbox.checked = isChecked;

  if (isChecked) {
    if (customizerSelectedFree.length >= maxLimit) {
      checkbox.checked = false;
      showToast(`Você pode escolher no máximo ${maxLimit} acompanhamentos inclusos!`);
      return;
    }
    customizerSelectedFree.push(itemName);
    labelElem.classList.add('selected');
  } else {
    customizerSelectedFree = customizerSelectedFree.filter(i => i !== itemName);
    labelElem.classList.remove('selected');
  }
}

function toggleCustomizerAddition(idx, labelElem) {
  if (!customizerCurrentProduct || !customizerCurrentProduct.paidAdditions) return;
  const addition = customizerCurrentProduct.paidAdditions[idx];
  const checkbox = labelElem.querySelector('input[type="checkbox"]');
  if (!checkbox) return;

  const isChecked = !checkbox.checked;
  checkbox.checked = isChecked;

  if (isChecked) {
    customizerSelectedAdditions.push(addition);
    labelElem.classList.add('selected');
  } else {
    customizerSelectedAdditions = customizerSelectedAdditions.filter(a => a.name !== addition.name);
    labelElem.classList.remove('selected');
  }

  recalculateCustomizerTotal();
}

function selectCustomizerSauce(sauceName, labelElem) {
  customizerSelectedSauce = sauceName;
  const parent = labelElem.closest('.opt-list');
  if (parent) {
    parent.querySelectorAll('.opt-choice-label').forEach(l => l.classList.remove('selected'));
  }
  labelElem.classList.add('selected');

  const radio = labelElem.querySelector('input[type="radio"]');
  if (radio) radio.checked = true;
}

function adjustCustomizerQty(delta) {
  customizerQuantity += delta;
  if (customizerQuantity < 1) customizerQuantity = 1;
  document.getElementById('customizerQty').textContent = customizerQuantity;
  recalculateCustomizerTotal();
}

function recalculateCustomizerTotal() {
  if (!customizerCurrentProduct) return;
  let unitTotal = customizerSelectedSize ? customizerSelectedSize.price : customizerCurrentProduct.price;

  customizerSelectedAdditions.forEach(add => {
    unitTotal += add.price;
  });

  const grandTotal = unitTotal * customizerQuantity;
  const previewElem = document.getElementById('customizerTotalPreview');
  if (previewElem) {
    previewElem.textContent = `R$ ${grandTotal.toFixed(2).replace('.', ',')}`;
  }
}

function addCustomizedProductToCart() {
  if (!customizerCurrentProduct) return;

  const notesInput = document.getElementById('customizerNotesInput');
  const userNotes = notesInput ? notesInput.value.trim() : '';

  let unitPrice = customizerSelectedSize ? customizerSelectedSize.price : customizerCurrentProduct.price;
  customizerSelectedAdditions.forEach(add => unitPrice += add.price);

  const cartItem = {
    cartItemId: Date.now() + Math.random().toString(36).substring(2, 6),
    productId: customizerCurrentProduct.id,
    name: customizerCurrentProduct.name,
    sizeName: customizerSelectedSize ? customizerSelectedSize.name : '',
    unitPrice: unitPrice,
    quantity: customizerQuantity,
    freeComplements: [...customizerSelectedFree],
    paidAdditions: [...customizerSelectedAdditions],
    sauce: customizerSelectedSauce,
    notes: userNotes,
    image: customizerCurrentProduct.image
  };

  cart.push(cartItem);
  saveCartToStorage();
  updateCartUI();
  closeProductCustomizer();

  showToast(`Adicionado ao pedido: ${cartItem.name}!`);

  // Animar botão do carrinho no topo
  const badge = document.getElementById('cartCountBadge');
  if (badge) {
    badge.classList.add('shadow-pulse');
    setTimeout(() => badge.classList.remove('shadow-pulse'), 1000);
  }
}

// ==========================================================================
// GERENCIAMENTO DO CARRINHO (CART DRAWER)
// ==========================================================================
function saveCartToStorage() {
  localStorage.setItem('fg_user_cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem('fg_user_cart');
    if (saved) {
      cart = JSON.parse(saved);
    }
  } catch (e) {
    cart = [];
  }
}

function openCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer && overlay) {
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer && overlay) {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function updateCartUI() {
  const countBadge = document.getElementById('cartCountBadge');
  const totalHeader = document.getElementById('cartTotalHeader');
  const itemsContainer = document.getElementById('cartItemsContainer');
  const emptyMsg = document.getElementById('cartEmptyMessage');
  const footerSection = document.getElementById('cartFooterSection');
  const itemsCountLabel = document.getElementById('cartItemsCountLabel');
  const subtotalElem = document.getElementById('cartSubtotalValue');
  const grandTotalElem = document.getElementById('cartGrandTotalValue');
  const deliveryFeeElem = document.getElementById('cartDeliveryFeeValue');
  const mobileBar = document.getElementById('mobileCartBar');
  const mobileCount = document.getElementById('mobileCartCount');
  const mobileTotal = document.getElementById('mobileCartTotal');

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);
  const deliveryFee = STORE_UNITS[currentStoreUnit].deliveryFee;
  const grandTotal = subtotal + deliveryFee;

  // Header & Badges
  if (countBadge) countBadge.textContent = totalItems;
  if (totalHeader) totalHeader.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
  if (itemsCountLabel) itemsCountLabel.textContent = `(${totalItems} ${totalItems === 1 ? 'item' : 'itens'})`;

  // Mobile Bottom Bar
  if (mobileBar) {
    if (totalItems > 0) {
      mobileBar.classList.add('visible');
      if (mobileCount) mobileCount.textContent = totalItems;
      if (mobileTotal) mobileTotal.textContent = `R$ ${grandTotal.toFixed(2).replace('.', ',')}`;
    } else {
      mobileBar.classList.remove('visible');
    }
  }

  // Drawer Content
  if (cart.length === 0) {
    if (emptyMsg) emptyMsg.style.display = 'block';
    if (footerSection) footerSection.style.display = 'none';
    if (itemsContainer) {
      itemsContainer.innerHTML = '';
      itemsContainer.appendChild(emptyMsg);
    }
    return;
  }

  if (emptyMsg) emptyMsg.style.display = 'none';
  if (footerSection) footerSection.style.display = 'block';

  if (subtotalElem) subtotalElem.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
  if (deliveryFeeElem) deliveryFeeElem.textContent = `R$ ${deliveryFee.toFixed(2).replace('.', ',')}`;
  if (grandTotalElem) grandTotalElem.textContent = `R$ ${grandTotal.toFixed(2).replace('.', ',')}`;

  if (itemsContainer) {
    itemsContainer.innerHTML = cart.map(item => {
      let detailsArray = [];
      if (item.sizeName) detailsArray.push(`<strong>Tamanho:</strong> ${item.sizeName}`);
      if (item.freeComplements && item.freeComplements.length > 0) {
        detailsArray.push(`<strong>Inclusos:</strong> ${item.freeComplements.join(', ')}`);
      }
      if (item.paidAdditions && item.paidAdditions.length > 0) {
        const adds = item.paidAdditions.map(a => `${a.name} (+R$ ${a.price.toFixed(2)})`).join(', ');
        detailsArray.push(`<strong>Adicionais:</strong> ${adds}`);
      }
      if (item.sauce) detailsArray.push(`<strong>Calda:</strong> ${item.sauce}`);
      if (item.notes) detailsArray.push(`<strong>Obs:</strong> <em>"${item.notes}"</em>`);

      return `
        <div class="cart-item-card" data-item-id="${item.cartItemId}">
          <div class="cart-item-top">
            <div class="cart-item-info">
              <h4 class="cart-item-name">${item.name}</h4>
              <div class="cart-item-details">${detailsArray.join('<br>')}</div>
            </div>
            <button class="cart-item-remove-btn" onclick="removeCartItem('${item.cartItemId}')" title="Remover item">✕</button>
          </div>
          <div class="cart-item-bottom">
            <div class="item-qty-control">
              <button class="item-qty-btn" onclick="updateCartItemQty('${item.cartItemId}', -1)">−</button>
              <span class="item-qty-count">${item.quantity}</span>
              <button class="item-qty-btn" onclick="updateCartItemQty('${item.cartItemId}', 1)">+</button>
            </div>
            <span class="cart-item-price">R$ ${(item.unitPrice * item.quantity).toFixed(2).replace('.', ',')}</span>
          </div>
        </div>
      `;
    }).join('');
  }
}

function updateCartItemQty(cartItemId, delta) {
  const itemIndex = cart.findIndex(i => i.cartItemId === cartItemId);
  if (itemIndex === -1) return;

  cart[itemIndex].quantity += delta;
  if (cart[itemIndex].quantity <= 0) {
    cart.splice(itemIndex, 1);
  }

  saveCartToStorage();
  updateCartUI();
}

function removeCartItem(cartItemId) {
  cart = cart.filter(i => i.cartItemId !== cartItemId);
  saveCartToStorage();
  updateCartUI();
  showToast('Item removido do pedido');
}

function clearCart() {
  if (confirm('Tem certeza de que deseja esvaziar o seu carrinho?')) {
    cart = [];
    saveCartToStorage();
    updateCartUI();
    showToast('Carrinho esvaziado.');
  }
}

function toggleCartUnitSwitch() {
  const newUnit = currentStoreUnit === 'santa-luzia' ? 'sao-benedito' : 'santa-luzia';
  changeStoreUnit(newUnit);
}

// ==========================================================================
// CHECKOUT & INTEGRAÇÃO WHATSAPP
// ==========================================================================
function openCheckoutModal() {
  if (cart.length === 0) {
    showToast('Seu carrinho está vazio! Adicione um item antes.');
    return;
  }

  closeCartDrawer();

  // Atualizar radio buttons de unidade no checkout
  const unitRadios = document.getElementsByName('checkoutUnit');
  unitRadios.forEach(r => {
    if (r.value === currentStoreUnit) r.checked = true;
  });

  updateCheckoutFinancialSummary();

  const modal = document.getElementById('checkoutModalOverlay');
  if (modal) modal.classList.add('active');
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkoutModalOverlay');
  if (modal) modal.classList.remove('active');
}

function onCheckoutUnitChange(unitKey) {
  currentStoreUnit = unitKey;
  updateUnitBannerUI();
  updateCheckoutFinancialSummary();
}

function setDeliveryType(type) {
  currentDeliveryType = type;
  const btnDeliv = document.getElementById('btnTypeDelivery');
  const btnPick = document.getElementById('btnTypePickup');
  const addrSection = document.getElementById('addressSection');

  if (type === 'delivery') {
    if (btnDeliv) btnDeliv.classList.add('active');
    if (btnPick) btnPick.classList.remove('active');
    if (addrSection) addrSection.style.display = 'block';
  } else {
    if (btnPick) btnPick.classList.add('active');
    if (btnDeliv) btnDeliv.classList.remove('active');
    if (addrSection) addrSection.style.display = 'none';
  }

  updateCheckoutFinancialSummary();
}

function onPaymentMethodChange(method) {
  currentPaymentMethod = method;
  const changeGroup = document.getElementById('changeGroup');
  if (changeGroup) {
    changeGroup.style.display = method === 'Dinheiro' ? 'block' : 'none';
  }
}

function updateCheckoutFinancialSummary() {
  const subtotal = cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);
  const deliveryFee = currentDeliveryType === 'delivery' ? STORE_UNITS[currentStoreUnit].deliveryFee : 0;
  const total = subtotal + deliveryFee;

  const subElem = document.getElementById('checkoutSubtotal');
  const feeElem = document.getElementById('checkoutDeliveryFee');
  const feeRow = document.getElementById('checkoutDeliveryRow');
  const totalElem = document.getElementById('checkoutGrandTotal');

  if (subElem) subElem.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
  if (feeElem) {
    feeElem.textContent = currentDeliveryType === 'delivery' ? `R$ ${deliveryFee.toFixed(2).replace('.', ',')}` : 'Grátis (Retirada)';
  }
  if (feeRow) {
    feeRow.style.display = currentDeliveryType === 'delivery' ? 'flex' : 'none';
  }
  if (totalElem) totalElem.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

function maskPhone(input) {
  let val = input.value.replace(/\D/g, '');
  if (val.length > 11) val = val.substring(0, 11);

  if (val.length > 6) {
    input.value = `(${val.substring(0, 2)}) ${val.substring(2, 7)}-${val.substring(7)}`;
  } else if (val.length > 2) {
    input.value = `(${val.substring(0, 2)}) ${val.substring(2)}`;
  } else if (val.length > 0) {
    input.value = `(${val}`;
  }
}

function handleCheckoutSubmit(event) {
  event.preventDefault();

  if (cart.length === 0) {
    alert('Seu carrinho está vazio.');
    return;
  }

  const name = document.getElementById('clientName').value.trim();
  const phone = document.getElementById('clientPhone').value.trim();
  const notes = document.getElementById('orderNotes').value.trim();

  if (!name || !phone) {
    alert('Por favor, informe seu Nome e Telefone / WhatsApp.');
    return;
  }

  let addressInfo = '';
  if (currentDeliveryType === 'delivery') {
    const street = document.getElementById('addrStreet').value.trim();
    const number = document.getElementById('addrNumber').value.trim();
    const neighborhood = document.getElementById('addrNeighborhood').value.trim();
    const complement = document.getElementById('addrComplement').value.trim();
    const reference = document.getElementById('addrReference').value.trim();

    if (!street || !number || !neighborhood) {
      alert('Por favor, preencha a Rua, Número e Bairro para a entrega!');
      return;
    }

    addressInfo = `${street}, nº ${number} - ${neighborhood}${complement ? ` (${complement})` : ''}${reference ? ` [Ponto de Ref: ${reference}]` : ''}`;
  }

  const changeFor = document.getElementById('needChangeFor') ? document.getElementById('needChangeFor').value.trim() : '';

  const unit = STORE_UNITS[currentStoreUnit];
  const subtotal = cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);
  const deliveryFee = currentDeliveryType === 'delivery' ? unit.deliveryFee : 0;
  const grandTotal = subtotal + deliveryFee;

  // Montagem da mensagem estruturada e elegante para WhatsApp
  let message = `🍃 *NOVO PEDIDO - FRUTOS DE GOIÁS* 🍃\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `📍 *Unidade:* ${unit.name}\n`;
  message += `👤 *Cliente:* ${name}\n`;
  message += `📱 *WhatsApp:* ${phone}\n`;
  message += `🛵 *Modalidade:* ${currentDeliveryType === 'delivery' ? 'ENTREGA / DELIVERY' : 'RETIRADA NO BALCÃO'}\n`;

  if (currentDeliveryType === 'delivery') {
    message += `🏠 *Endereço:* ${addressInfo}\n`;
  }
  message += `━━━━━━━━━━━━━━━━━━━━━\n\n`;

  message += `🍦 *ITENS DO PEDIDO:*\n`;
  cart.forEach((item, index) => {
    message += `*${item.quantity}x ${item.name}*`;
    if (item.sizeName) message += ` (${item.sizeName})`;
    message += ` - R$ ${(item.unitPrice * item.quantity).toFixed(2).replace('.', ',')}\n`;

    if (item.freeComplements && item.freeComplements.length > 0) {
      message += `   ▫️ *Acompanhamentos:* ${item.freeComplements.join(', ')}\n`;
    }
    if (item.paidAdditions && item.paidAdditions.length > 0) {
      const adds = item.paidAdditions.map(a => a.name).join(', ');
      message += `   ▫️ *Adicionais:* ${adds}\n`;
    }
    if (item.sauce) {
      message += `   ▫️ *Calda:* ${item.sauce}\n`;
    }
    if (item.notes) {
      message += `   ▫️ *Obs:* ${item.notes}\n`;
    }
    message += `\n`;
  });

  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `💵 *Subtotal dos Itens:* R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;
  if (currentDeliveryType === 'delivery') {
    message += `🛵 *Taxa de Entrega:* R$ ${deliveryFee.toFixed(2).replace('.', ',')}\n`;
  }
  message += `💰 *VALOR TOTAL:* R$ ${grandTotal.toFixed(2).replace('.', ',')}\n`;
  message += `💳 *Forma de Pagamento:* ${currentPaymentMethod}`;
  if (currentPaymentMethod === 'Dinheiro' && changeFor) {
    message += ` (Troco para: ${changeFor})`;
  }
  message += `\n`;

  if (notes) {
    message += `📝 *Observações Gerais:* ${notes}\n`;
  }

  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `_Pedido gerado via Cardápio Digital Frutos de Goiás_ ✨`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${unit.whatsappNumber}&text=${encodedMessage}`;

  // Exibir Modal de Sucesso com resumo e link direto
  closeCheckoutModal();
  showSuccessModal(unit.name, cart, grandTotal, whatsappUrl);

  // Redirecionamento automático ou abertura em nova aba
  window.open(whatsappUrl, '_blank');

  // Limpar carrinho
  cart = [];
  saveCartToStorage();
  updateCartUI();
}

function showSuccessModal(unitName, orderItems, total, whatsappUrl) {
  const successModal = document.getElementById('orderSuccessModal');
  const unitElem = document.getElementById('successUnitName');
  const summaryBox = document.getElementById('successSummaryBox');
  const waLink = document.getElementById('successWhatsAppLink');

  if (unitElem) unitElem.textContent = unitName;
  if (waLink) waLink.href = whatsappUrl;

  if (summaryBox) {
    summaryBox.innerHTML = `
      <p style="margin-bottom:8px;"><strong>Resumo do seu pedido:</strong></p>
      <ul style="padding-left:18px; margin-bottom:8px;">
        ${orderItems.map(item => `<li>${item.quantity}x ${item.name} (${item.sizeName || 'Padrão'})</li>`).join('')}
      </ul>
      <p><strong>Total: R$ ${total.toFixed(2).replace('.', ',')}</strong></p>
    `;
  }

  if (successModal) successModal.classList.add('active');
}

function closeSuccessModalAndReset() {
  const successModal = document.getElementById('orderSuccessModal');
  if (successModal) successModal.classList.remove('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openWhatsAppDirect() {
  const unit = STORE_UNITS[currentStoreUnit];
  const url = `https://api.whatsapp.com/send?phone=${unit.whatsappNumber}&text=Ol%C3%A1!%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20a%20Frutos%20de%20Goi%C3%A1s%20(${encodeURIComponent(unit.name)}).`;
  window.open(url, '_blank');
}

// ==========================================================================
// TOASTS & UTILITÁRIOS
// ==========================================================================
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>🍦</span> <span>${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

function toggleMobileNav() {
  const panel = document.getElementById('mobileNavPanel');
  if (panel) {
    panel.classList.toggle('open');
  }
}

function closeMobileNav() {
  const panel = document.getElementById('mobileNavPanel');
  if (panel) {
    panel.classList.remove('open');
  }
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add('active');
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('active');
}

function setupEventListeners() {
  // Fechar modais ao clicar no overlay escuro
  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      e.target.classList.remove('active');
    }
  });

  // Fechar com tecla Escape
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.active').forEach(m => m.classList.remove('active'));
      closeCartDrawer();
      closeMobileNav();
    }
  });
}
