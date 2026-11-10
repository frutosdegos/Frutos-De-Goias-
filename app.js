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
    hours: 'Aberto · Fecha às 21:00',
    ifoodUrl: 'https://linktr.ee/frutosdegoiassantaluzia?utm_source=ig&utm_medium=social&utm_content=link_in_bio'
  },
  'sao-benedito': {
    id: 'sao-benedito',
    name: 'São Benedito',
    address: 'Av. Brasília, 1858 - São Benedito, Santa Luzia - MG, 33105-515',
    whatsappNumber: '5531999555848',
    displayPhone: '(31) 99955-5848',
    deliveryFee: 5.00,
    minOrder: 15.00,
    hours: '10:00 às 21:00',
    ifoodUrl: 'https://linktr.ee/frutosdegoiassantaluzia?utm_source=ig&utm_medium=social&utm_content=link_in_bio'
  }
};

// Redirecionamento Direto para o iFood
function redirectToIfood(productId) {
  const unit = (typeof currentStoreUnit !== 'undefined' && STORE_UNITS[currentStoreUnit]) 
    ? STORE_UNITS[currentStoreUnit] 
    : STORE_UNITS['santa-luzia'];
  const url = unit.ifoodUrl || 'https://linktr.ee/frutosdegoiassantaluzia?utm_source=ig&utm_medium=social&utm_content=link_in_bio';
  window.open(url, '_blank');
}

// Catálogo de Produtos Atualizado (iFood Frutos de Goiás)
const PRODUCTS_DATA = [
  // ==========================================================================
  // --- 1. AÇAÍ ---
  // ==========================================================================
  {
    id: 'acai-premium-1l',
    category: 'acai',
    name: 'Açaí Premium 1 L',
    description: 'Pote de Açaí Premium 1L. Máxima concentração, cremosidade artesanal incomparável e sabor puro Frutos de Goiás.',
    price: 85.90,
    badge: '⭐ Pote 1 Litro',
    image: 'assets/acai_premium_1l.jpg',
    tags: ['destaques', 'acai', 'potes'],
    customizable: false
  },
  {
    id: 'acai-tradicional-360',
    category: 'acai',
    name: 'Açaí tradicional 360 Ml',
    description: 'Açaí tradicional super cremoso servido no copo 360ml Frutos de Goiás.',
    price: 24.90,
    badge: 'Cremoso',
    image: 'assets/acai_tradicional_copo.jpg',
    tags: ['acai'],
    customizable: false
  },
  {
    id: 'acai-tradicional-480',
    category: 'acai',
    name: 'Açaí tradicional 480 Ml',
    description: 'Açaí tradicional batido e cremoso servido em copo de 480ml Frutos de Goiás.',
    price: 32.90,
    badge: 'Mais Pedido',
    image: 'assets/acai_tradicional_copo.jpg',
    tags: ['destaques', 'acai'],
    customizable: false
  },
  {
    id: 'acai-premium-sorvete-360',
    category: 'acai',
    name: 'Açaí Premium (com opção de sorvete) | 360ml + complementos gratuitos',
    description: 'Escolha três sabores da sua preferência. Acompanha complementos inclusos generosos.',
    price: 32.90,
    badge: 'Com Complementos',
    image: 'assets/acai_premium_copo.jpg',
    tags: ['acai'],
    customizable: false
  },
  {
    id: 'acai-premium-sorvete-480',
    category: 'acai',
    name: 'Açaí Premium (com opção de sorvete) | 480 Ml + complementos gratuitos',
    description: 'Escolha 4 sabores da sua preferência. Acompanha complementos gratuitos e montagem especial.',
    price: 44.90,
    badge: '👑 Campeão de Pedidos',
    image: 'assets/acai_premium_copo.jpg',
    tags: ['destaques', 'acai'],
    customizable: false
  },
  {
    id: 'potes-acai-variados',
    category: 'acai',
    name: 'Potes de açaí | Tradicional, Zero Açúcar e Zero lactose',
    description: 'Açaí tradicional e zero lactose nos tamanhos de 1,5l e 250ml, além da opção zero açúcar 1 Litro.',
    price: 25.30,
    badge: 'A partir de R$ 25,30',
    image: 'assets/potes_acai_variados.jpg',
    tags: ['acai', 'potes', 'zero'],
    customizable: false
  },

  // ==========================================================================
  // --- 2. PICOLÉS E PALETAS ---
  // ==========================================================================
  {
    id: 'picoles-tradicionais-leite',
    category: 'picoles',
    name: 'Picolés Tradicionais | Base de leite',
    description: 'Picolés tradicionais à base de leite, cremosos e autênticos (Limão Suíço, Abacate, Coco Branco, Amendoim e muito mais).',
    price: 10.99,
    badge: 'A partir de R$ 10,99',
    image: 'assets/picoles_tradicionais_leite.jpg',
    tags: ['picoles'],
    customizable: false
  },
  {
    id: 'picoles-tradicionais-zero-lactose',
    category: 'picoles',
    name: 'Picolés Tradicionais | Zero Lactose',
    description: 'À base de água e polpa pura de frutas naturais: Melancia, Abacaxi, Limão, Morango e frutos autênticos do cerrado.',
    price: 10.99,
    badge: '100% Fruta',
    image: 'assets/picoles_zero_lactose.jpg',
    tags: ['picoles', 'zero'],
    customizable: false
  },
  {
    id: 'picoles-premium',
    category: 'picoles',
    name: 'Picolés Premium',
    description: 'Picolés especiais com casquinha e recheios trufados artesanais irresistíveis. Serve 1 pessoa.',
    price: 13.99,
    badge: 'Trufado',
    image: 'assets/picole_premium_trufado.jpg',
    tags: ['picoles', 'destaques'],
    customizable: false
  },
  {
    id: 'picoles-gourmet',
    category: 'picoles',
    name: 'Picolés Gourmet',
    description: 'Linha gourmet de alta sofisticação com sabores exclusivos como Pistache Nobre e casquinha especial.',
    price: 16.10,
    badge: 'Linha Gourmet',
    image: 'assets/picole_gourmet_pistache.jpg',
    tags: ['picoles'],
    customizable: false
  },
  {
    id: 'paletas-recheadas',
    category: 'picoles',
    name: 'Paletas Recheadas',
    description: 'Verdadeiras paletas mexicanas artesanais com recheio cremoso generoso, como Morango com Leite Condensado.',
    price: 25.90,
    badge: 'Super Recheada',
    image: 'assets/paletas_recheadas.jpg',
    tags: ['picoles', 'destaques'],
    customizable: false
  },
  {
    id: 'picoles-diet',
    category: 'picoles',
    name: 'Picolés Diet | sem adição de açúcar',
    description: 'Toda a cremosidade e autenticidade da Frutos de Goiás sem adição de açúcar (Morango, Ninho Trufado, Abacaxi).',
    price: 13.99,
    badge: 'Zero Açúcar',
    image: 'assets/picoles_diet.jpg',
    tags: ['picoles', 'zero'],
    customizable: false
  },

  // ==========================================================================
  // --- 3. COMBOS DE PICOLÉS ---
  // ==========================================================================
  {
    id: 'combo-6-picoles-tradicionais',
    category: 'combos',
    name: 'Combo 6 Picolés Tradicionais',
    description: 'Escolha 6 sabores de picolés tradicionais a base de água e zero lactose, e ganhe um super desconto.',
    price: 54.95,
    badge: 'Super Desconto',
    image: 'assets/picoles_tradicionais_leite.jpg',
    tags: ['combos'],
    customizable: false
  },
  {
    id: 'combo-12-picoles-tradicionais',
    category: 'combos',
    name: 'Combo 12 Picolés Tradicionais',
    description: 'Escolha 12 sabores de picolés tradicionais a base de água e zero lactose, e ganhe um super desconto.',
    price: 109.90,
    badge: 'Mais Vendido',
    image: 'assets/picoles_tradicionais_leite.jpg',
    tags: ['combos', 'destaques'],
    customizable: false
  },
  {
    id: 'combo-6-picoles-premium',
    category: 'combos',
    name: 'Combo 6 Picolés Premium',
    description: 'Escolha 6 picolés premium e ganhe um super desconto.',
    price: 69.95,
    badge: 'Desconto Especial',
    image: 'assets/picole_premium_trufado.jpg',
    tags: ['combos'],
    customizable: false
  },
  {
    id: 'combo-12-picoles-premium',
    category: 'combos',
    name: 'Combo 12 picolés Premium',
    description: 'Escolha 12 picolés premium e ganhe um super desconto.',
    price: 139.90,
    badge: 'Combo Família',
    image: 'assets/picole_premium_trufado.jpg',
    tags: ['combos'],
    customizable: false
  },
  {
    id: 'combo-6-picoles-gourmet',
    category: 'combos',
    name: 'Combo 6 Picolés Gourmet',
    description: 'Escolha 6 picolés gourmet Frutos de Goiás.',
    price: 79.95,
    badge: 'Gourmet',
    image: 'assets/picole_gourmet_pistache.jpg',
    tags: ['combos'],
    customizable: false
  },
  {
    id: 'combo-12-picoles-gourmet',
    category: 'combos',
    name: 'Combo 12 Picolés Gourmet',
    description: 'Escolha 12 picolés gourmet com super desconto exclusivo.',
    price: 159.90,
    badge: 'Máxima Economia',
    image: 'assets/picole_gourmet_pistache.jpg',
    tags: ['combos'],
    customizable: false
  },

  // ==========================================================================
  // --- 4. SORVETES ---
  // ==========================================================================
  {
    id: 'sorvete-360-completo',
    category: 'sorvetes',
    name: 'Sorvete 360ml | Com complementos Gratuitos',
    description: 'Escolha 3 sabores. Acompanha complementos inclusos para você saborear o melhor do sorvete artesanal.',
    price: 32.90,
    badge: '3 Sabores',
    image: 'assets/sorvete_copo_sabores.jpg',
    tags: ['sorvetes'],
    customizable: false
  },
  {
    id: 'sorvete-480-completo',
    category: 'sorvetes',
    name: 'Sorvete 480 Ml | Complementos Gratuitos',
    description: 'Escolha 4 sabores da sua preferência. Acompanha complementos gratuitos.',
    price: 44.90,
    badge: '4 Sabores',
    image: 'assets/sorvete_copo_sabores.jpg',
    tags: ['sorvetes', 'destaques'],
    customizable: false
  },
  {
    id: 'pote-sorvete-15l',
    category: 'sorvetes',
    name: 'Pote de sorvete 1,5 L Tradicional ou Premium',
    description: 'Pote de 1,5 Litros de sorvete tradicional e premium (Ninho Trufado, etc.). Perfeito para compartilhar.',
    price: 79.90,
    badge: 'A partir de R$ 79,90',
    image: 'assets/pote_sorvete_15l.jpg',
    tags: ['sorvetes', 'potes', 'destaques'],
    customizable: false
  },
  {
    id: 'pote-sorvete-zero-1l',
    category: 'sorvetes',
    name: 'Pote de sorvete zero açúcar 1 Litro',
    description: 'Serve 4 pessoas. Sorvete cremoso zero açúcar artesanal com o autêntico sabor Frutos de Goiás.',
    price: 109.90,
    badge: 'Zero Açúcar',
    image: 'assets/pote_sorvete_zero_1l.jpg',
    tags: ['sorvetes', 'potes', 'zero'],
    customizable: false
  },
  {
    id: 'pote-sorvete-1l-premium',
    category: 'sorvetes',
    name: 'Pote de Sorvete 1l Premium',
    description: 'Pote de Sorvete 1l Premium, receitas nobres exclusivas como Caramelo Salgado e ingredientes nobres.',
    price: 71.90,
    badge: 'Linha Premium 1L',
    image: 'assets/pote_sorvete_1l_premium.jpg',
    tags: ['sorvetes', 'potes'],
    customizable: false
  },

  // ==========================================================================
  // --- 5. SOBREMESAS DA LOJA (CARDÁPIO FÍSICO) ---
  // ==========================================================================
  {
    id: 'acai-barca',
    category: 'sobremesas',
    name: 'Barca Frutos de Goiás (Açaí ou Sorvete)',
    description: 'Açaí artesanal ou sorvete servidos na famosa barca com Banana, Morango, Manga, Leite Ninho e Leite Condensado.',
    price: 65.90,
    badge: '⭐ Famosa Barca',
    image: 'assets/barca.jpg',
    tags: ['sobremesas', 'destaques', 'acai'],
    customizable: false
  },
  {
    id: 'acai-taca-tradicional',
    category: 'sobremesas',
    name: 'Taça de Açaí Frutos de Goiás',
    description: 'A mais famosa do Brasil! Banana, Manga, Morango, Granola, Leite em Pó e Leite Condensado.',
    price: 32.90,
    badge: 'Mais Famosa do Brasil',
    image: 'assets/taca_acai.jpg',
    tags: ['sobremesas', 'acai'],
    customizable: false
  },
  {
    id: 'grand-shake-especial',
    category: 'sobremesas',
    name: 'Grand Shake Trufado Frutos de Goiás 500ml',
    description: 'Chocolate dentro e fora da taça, ganache, chocoball, 1 Picolé gourmet mergulhado e Bombom Ouro Branco.',
    price: 43.90,
    badge: '👑 Grand Shake',
    image: 'assets/grand_shake.jpg',
    tags: ['sobremesas', 'destaques'],
    customizable: false
  },
  {
    id: 'sorvete-assado-especial',
    category: 'sobremesas',
    name: 'Sorvete Assado Tradicional',
    description: 'Cumbuca com pão de ló, 2 sabores de sorvete ou açaí, 2 frutas e marshmallow crocante maçaricado.',
    price: 38.90,
    badge: '✨ Receita Exclusiva',
    image: 'assets/sorvete_assado.jpg',
    tags: ['sobremesas'],
    customizable: false
  },
  {
    id: 'sundae-especial',
    category: 'sobremesas',
    name: 'Sundae Frutos de Goiás',
    description: 'Um clássico que nunca morre com o sabor Frutos de Goiás. 2 sabores de sorvete, 2 frutas e calda generosa.',
    price: 32.90,
    badge: 'Clássico',
    image: 'assets/sundae.jpg',
    tags: ['sobremesas'],
    customizable: false
  },
  {
    id: 'banana-split-artesanal',
    category: 'sobremesas',
    name: 'Banana Split Especial',
    description: 'Sobremesa servida em canoa tradicional com 3 bolas de sorvete, banana fatiada e coberturas.',
    price: 38.90,
    badge: 'Tradicional',
    image: 'assets/banana_split.jpg',
    tags: ['sobremesas'],
    customizable: false
  },
  {
    id: 'petit-gateau-supremo',
    category: 'sobremesas',
    name: 'Petit Gateau Quentinho',
    description: 'Delicioso Petit quentinho crocante por fora e cremoso por dentro, bola de sorvete artesanal e calda.',
    price: 38.90,
    badge: '🍫 Quente & Frio',
    image: 'assets/petit_gateau.jpg',
    tags: ['sobremesas'],
    customizable: false
  },
  {
    id: 'milk-shake-tradicional',
    category: 'sobremesas',
    name: 'Milk Shake Frutos de Goiás',
    description: 'Cremoso e refrescante servido na taça! Escolha o sabor do sorvete artesanal e coberturas.',
    price: 27.90,
    badge: 'Super Cremoso',
    image: 'assets/milk_shake.jpg',
    tags: ['sobremesas'],
    customizable: false
  },
  {
    id: 'bolo-na-taca',
    category: 'sobremesas',
    name: 'Bolo na Taça Brownie Especial',
    description: 'Delicioso brownie quentinho na taça com Morango, Confete Chocoball, Leite em Pó e cobertura.',
    price: 65.90,
    badge: 'Brownie na Taça',
    image: 'assets/bolo_taca.jpg',
    tags: ['sobremesas'],
    customizable: false
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
    if (currentCategory !== 'all') {
      if (currentCategory === 'potes') {
        if (!product.tags.includes('potes') && product.category !== 'potes') return false;
      } else if (currentCategory === 'zero') {
        if (!product.tags.includes('zero') && product.category !== 'zero') return false;
      } else if (product.category !== currentCategory) {
        return false;
      }
    }

    // Tag Filter
    if (currentTagFilter !== 'all') {
      if (currentTagFilter === 'destaques' && !product.tags.includes('destaques')) return false;
      if (currentTagFilter === 'zero' && !product.tags.includes('zero')) return false;
      if (currentTagFilter === 'combos' && product.category !== 'combos') return false;
      if (currentTagFilter === 'potes' && !product.tags.includes('potes')) return false;
      if (currentTagFilter === 'fit' && !product.tags.includes('zero') && !product.tags.includes('fit')) return false;
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
    'acai': 'Açaí',
    'picoles': 'Picolés e Paletas',
    'combos': 'Combos de Picolés',
    'sorvetes': 'Sorvetes',
    'potes': 'Potes para Compartilhar',
    'zero': 'Zero Açúcar & Diet',
    'sobremesas': 'Sobremesas da Loja',
    'shakes': 'Milk Shakes'
  };
  return map[cat] || 'Frutos de Goiás';
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
  const qtyEl = document.getElementById('customizerQty');
  if (qtyEl) qtyEl.textContent = customizerQuantity;

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
  redirectToIfood();
}

function closeCartDrawer() {
  // Carrinho substituído por redirecionamento direto para o iFood
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

  // Mobile Bottom Bar (iFood bar fica sempre ativa ou visível para redirecionamento)
  if (mobileBar && !mobileBar.classList.contains('ifood-floating-bar')) {
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
