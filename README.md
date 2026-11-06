# 🍃 Frutos de Goiás - Santa Luzia & São Benedito
### Site de E-Commerce & Cardápio Digital Interativo de Alta Conversão

Website moderno, responsivo e mobile-first desenvolvido especialmente para a **Frutos de Goiás** (Unidades Santa Luzia e São Benedito). O objetivo principal é proporcionar uma experiência de compra ágil, visualmente apaixonante e de altíssima conversão, permitindo que os clientes acessem pelo celular (especialmente via Instagram) e façam pedidos personalizados diretamente para o WhatsApp oficial de cada loja.

---

## 🎨 Identidade Visual & Design System

- **Paleta de Cores Inspirada no Cerrado Goiano:**
  - `Verde Folha Cerrado`: `#1E5631` e `#2D6A4F` (predominante, transmitindo frescor e natureza)
  - `Amarelo-Alaranjado Quente`: `#F59E0B` e `#EA580C` (tons de sol e frutos maduros como baru e pequi)
  - `Roxo Açaí Profundo`: `#4A154B` (destaque para açaí e produtos especiais)
  - `Off-white Aconchegante`: `#FAF8F5` (fundo quente e convidativo)
- **Tipografia:** `Plus Jakarta Sans` para títulos imponentes e acolhedores, e `Inter` para legibilidade máxima em telas móveis.
- **Formas Orgânicas & Detalhes:** Folhas estilizadas em SVG, divisores em onda orgânica e badges de destaque cultural.

---

## 🚀 Funcionalidades Principais

### 1. Seletor Inteligente de Unidade
- Alternância imediata no topo do site e dentro do carrinho entre:
  - **Unidade 01: Santa Luzia (R. Jaime Carlos Afonso Teixeira, 66 - Bela Vista)** • WhatsApp: `(31) 99580-9341` • Horário: Até às 21:00
  - **Unidade 02: São Benedito (Av. Brasília, 1858)** • WhatsApp: `(31) 99955-5848` • Horário: Até às 23:00
- O pedido é direcionado automaticamente para o número de WhatsApp da unidade selecionada.

### 2. Destaques da Casa (Campeões de Pedidos)
Cards de conversão rápida na página inicial destacando:
- **Barca de Açaí Frutos de Goiás** (Morangos, Ninho, Nutella e Paçoca crocante)
- **Grand Shake Trufado** (Taça lambuzada com ganache, sorvete artesanal e picolé gourmet)
- **Petit Gateau Supremo** (Bolo vulcão quente com sorvete artesanal e calda quente)
- **Sorvete Assado Tradicional** (Bolo, sorvete e merengue maçaricado ao forno)

### 3. Seção Especial: Sabores Autênticos do Cerrado
- Destaque cultural e sensorial sobre a polpa pura e história das frutas nativas: **Pequi, Castanha de Baru, Mangaba, Cajá, Buriti e Cupuaçu**.
- Botões interativos (chips) que filtram o cardápio instantaneamente com um clique.

### 4. Cardápio Digital Completo e Interativo
- **Categorias Organizadas em Abas Fixas (Sticky Navigation):**
  - 🍧 Açaí na Taça & Barcas (P, M, G e Barca Supreme Família)
  - 🍨 Sobremesas Especiais (Sorvete Assado, Sundae, Banana Split, Bolo na Taça, Grand Shake, Petit Gateau)
  - 🥤 Milk Shakes & Vitaminas (Ovomaltine, Ninho c/ Nutella, Baru c/ Doce de Leite, Vitaminas Energéticas)
  - 🍦 Potes de Sorvete para Levar (Sabores do Cerrado e Linha Tradicional Italiana - 500ml, 1L, 1.5L e 2L)
  - 🍡 Picolés Artesanais (Fruta 100% natural do Cerrado, ao Leite e Gourmet Recheados)
- **Filtros Rápidos por Tags:** Mais Pedidos, Frutos do Cerrado, Opção Fit / Zero Açúcar e Sobremesas Quentes.
- **Busca em Tempo Real:** Campo de pesquisa instantâneo com botão de limpar.

### 5. Montador de Produto Interativo (Modal Customizer)
Permite que o cliente monte o item exatamente como preferir:
- Escolha de tamanho com atualização dinâmica de preço;
- Seleção de complementos inclusos (com contador de limite);
- Adição de adicionais pagos (Nutella, baru tostado, ouro branco, kitkat, etc.);
- Escolha de caldas e coberturas;
- Campo para observações personalizadas ("Sem banana", "Mandar colheres extras");
- Seletor de quantidade com cálculo em tempo real.

### 6. Carrinho Flutuante & Checkout Integrado ao WhatsApp
- **Barra Flutuante Mobile:** Sempre visível ao adicionar produtos no celular, exibindo total e botão de avançar.
- **Gaveta Lateral do Carrinho (Cart Drawer):**
  - Controle de quantidade (`+` e `−`), remoção de itens e limpeza geral;
  - Resumo de subtotal, taxa de entrega calculada e total geral;
  - Persistência no navegador (`localStorage`) para o cliente não perder o pedido caso feche a aba.
- **Modal de Checkout Completo:**
  - Escolha de modalidade: **Entrega (Delivery)** ou **Retirada no Balcão**;
  - Dados do cliente (Nome completo e WhatsApp com máscara automática);
  - Endereço de entrega detalhado (Rua, Número, Bairro, Complemento e Ponto de Referência);
  - Formas de pagamento: **PIX**, **Cartão de Crédito**, **Cartão de Débito** e **Dinheiro** (com campo para informar valor do troco);
  - Geração de mensagem formatada em Markdown profissional direto para o WhatsApp da unidade;
  - Modal de confirmação com link alternativo para abrir o WhatsApp caso o bloqueador de pop-ups impeça o redirecionamento.

### 7. Rodapé & Confiança
- Horários de atendimento de ambas as lojas;
- Link para o Instagram oficial `@frutosdegoiassantaluzia`;
- Modais com Política de Privacidade e Termos de Pedido;
- Avaliações de clientes reais (Social Proof).

---

## 📁 Estrutura de Arquivos

```
Site Frutos de Goias/
│
├── index.html        # Estrutura HTML5 semântica e acessível
├── styles.css        # Folha de estilos completa, responsiva e com tokens do Cerrado
├── app.js            # Lógica do catálogo, filtros, montador de pedido, carrinho e checkout
└── README.md         # Documentação completa do projeto
```

---

## 💻 Como Executar / Abrir o Site

Como o projeto foi desenvolvido em **HTML5, CSS3 e JavaScript puro**, ele **não requer Node.js, compilação ou instalação de pacotes**:

1. Basta dar um duplo clique no arquivo `index.html` para abri-lo no seu navegador padrão (Google Chrome, Microsoft Edge, Safari, Firefox).
2. Para publicar na internet, basta subir os arquivos para qualquer hospedagem estática gratuita ou servidor (ex: Vercel, Netlify, GitHub Pages, Hostinger ou Cloudflare Pages).
