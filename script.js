const phone = "221785417900";

const products = [
    {n:"Chanel N°5", c:"femme", p:"45 000", i:"https://images.unsplash.com/photo-1541643600914-78b084683601", d:"Élégance intemporelle", b:"Best Seller"},
    {n:"Dior Sauvage", c:"homme", p:"42 000", i:"https://images.unsplash.com/photo-1594035910387-fea47794261f", d:"Puissance fraîche", b:"Nouveau"},
    {n:"Black Opium", c:"femme", p:"38 000", i:"https://images.unsplash.com/photo-1592945403244-b3fbafd7f539", d:"Addictif", b:""},
    {n:"Versace Eros", c:"homme", p:"35 000", i:"https://images.unsplash.com/photo-1587017539504-67cfbddac569", d:"Séduction", b:""},
    {n:"La Vie Est Belle", c:"femme", p:"43 000", i:"https://images.unsplash.com/photo-1523293182086-7651a899d37f", d:"Bonheur", b:"Best Seller"},
    {n:"1 Million", c:"homme", p:"36 000", i:"https://images.unsplash.com/photo-1585386959984-a4155224a1ad", d:"Audacieux", b:""},
    {n:"Armani Si", c:"femme", p:"41 000", i:"https://images.unsplash.com/photo-1528740561666-dc2479dc08ab", d:"Élégant", b:""},
    {n:"Le Male", c:"homme", p:"34 000", i:"https://i.pinimg.com/736x/ee/47/38/ee4738e5ab272d04509470fb1c3c6fef.jpg", d:"Classique", b:""},
    {n:"Black Orchid", c:"unisexe", p:"55 000", i:"https://images.unsplash.com/photo-1547887537-6158d64c35b3", d:"Mystérieux", b:"Luxe"},
    {n:"Gucci Bloom", c:"femme", p:"39 000", i:"https://i.pinimg.com/1200x/ad/21/41/ad2141a31d79002bac34decea8461f34.jpg", d:"Floral", b:""},
    {n:"Prada L'Homme", c:"homme", p:"40 000", i:"https://images.unsplash.com/photo-1615634260167-c8cdede054de", d:"Sophistiqué", b:""},
    {n:"Flowerbomb", c:"femme", p:"44 000", i:"https://images.unsplash.com/photo-1563170351-be82bc888aa4", d:"Explosion", b:""},
    {n:"Gentleman", c:"homme", p:"38 000", i:"https://i.pinimg.com/736x/99/a9/c3/99a9c3f9900e3a40c09427923d819255.jpg", d:"Raffiné", b:""},
    {n:"Marc Jacobs Daisy", c:"femme", p:"37 000", i:"https://i.pinimg.com/1200x/2c/eb/85/2ceb85237d72794b9e2ce97332e53f8f.jpg", d:"Lumineux", b:""},
    {n:"Terre d'Hermès", c:"homme", p:"46 000", i:"https://images.unsplash.com/photo-1595425970377-c9703cf48b6d", d:"Boisé", b:"Luxe"},
    {n:"Burberry Her", c:"femme", p:"39 500", i:"https://i.pinimg.com/1200x/40/6c/d3/406cd31536bba98bc4cc07ca7f09492b.jpg", d:"Gourmand", b:""},
    {n:"Good Girl", c:"femme", p:"41 500", i:"https://i.pinimg.com/1200x/b0/21/fa/b021fad89807037767df4d9e9af51dfd.jpg", d:"Audacieux", b:"Best Seller"},
    {n:"Azzaro Wanted", c:"homme", p:"33 000", i:"https://i.pinimg.com/1200x/1c/85/70/1c8570df35e06d6bbb25607d762ac863.jpg", d:"Aventure", b:""},
    {n:"Gypsy Water", c:"unisexe", p:"52 000", i:"https://images.unsplash.com/photo-1557170334-a9632e77c6e4", d:"Libre", b:"Luxe"},
    {n:"Jo Malone Wood Sage", c:"unisexe", p:"48 000", i:"https://i.pinimg.com/1200x/02/da/77/02da77fd10adeca202ffe56fbb8068c1.jpg", d:"Boisé", b:""},
    {n:"Yves Saint Laurent Libre", c:"femme", p:"42 500", i:"https://i.pinimg.com/736x/3e/39/c9/3e39c9086f59c3100d59872b411dc7a2.jpg", d:"Liberté", b:"Best Seller"},
    {n:"Bleu de Chanel", c:"homme", p:"47 000", i:"https://i.pinimg.com/736x/1d/a4/6d/1da46dcb115adabdda5b99c6e9fd3475.jpg", d:"Frais et intense", b:""},
    {n:"Tom Ford Black Orchid", c:"unisexe", p:"60 000", i:"https://i.pinimg.com/1200x/b2/da/2c/b2da2c878ebf0b9283225715e1090dc9.jpg", d:"Mystérieux", b:"Luxe"},
    {n:"Chloé Eau de Parfum", c:"femme", p:"40 500", i:"https://i.pinimg.com/1200x/7e/a5/dd/7ea5dd90adcf9ba8ad392f451f650b2f.jpg", d:"Romantique", b:""},
    {n:"Hugo Boss Bottled", c:"homme", p:"37 500", i:"https://i.pinimg.com/1200x/3f/b8/5d/3fb85d3c63e7d36598e25fbbb28ea255.jpg", d:"Classique", b:""},
    {n:"Narciso Rodriguez For Her", c:"femme", p:"43 000", i:"https://i.pinimg.com/736x/6b/ab/7b/6bab7b9165796ad5a921791514076ea5.jpg", d:"Sensuel", b:""},
    {n:"Dolce & Gabbana Light Blue", c:"femme", p:"38 500", i:"https://i.pinimg.com/1200x/2f/eb/48/2feb48f83ffae354b2513a7c2eaec42c.jpg", d:"Frais et fruité", b:""},
    {n:"Versace Dylan Blue", c:"homme", p:"44 500", i:"https://i.pinimg.com/1200x/9a/75/24/9a752461dae05d3314ee90c213c127af.jpg", d:"Charismatique", b:""},
    {n:"Calvin Klein Euphoria", c:"femme", p:"39 000", i:"https://i.pinimg.com/736x/e3/0d/e3/e30de3ca006a7c1d62b5f0854c12e653.jpg", d:"Mystérieuse", b:""},
    {n:"Givenchy Gentleman", c:"homme", p:"41 000", i:"https://i.pinimg.com/736x/21/4f/7d/214f7dfbef4d9648a1a942582032eab1.jpg", d:"Élégance", b:""},
    {n:"Lancôme La Nuit Tresor", c:"femme", p:"45 000", i:"https://i.pinimg.com/1200x/dd/be/d0/ddbed07dfabe90d12dcf5ec1426bd728.jpg", d:"Romantique", b:"Best Seller"},
    {n:"Paco Rabanne Invictus", c:"homme", p:"39 500", i:"https://i.pinimg.com/736x/c6/bd/fb/c6bdfb8d752a231d524f930da032f675.jpg", d:"Vainqueur", b:""},
    {n:"Bvlgari Omnia", c:"femme", p:"37 500", i:"https://i.pinimg.com/1200x/25/76/42/2576426a9053f3a854acacc0dd31d34f.jpg", d:"Éclatant", b:""},
    {n:"Hermès Un Jardin Sur Le Nil", c:"unisexe", p:"50 000", i:"https://i.pinimg.com/736x/85/1d/61/851d61c4906b033e9ff84214a9f67dfc.jpg", d:"Naturel", b:"Luxe"},
    {n:"Jean Paul Gaultier Scandal", c:"femme", p:"44 500", i:"https://i.pinimg.com/736x/6a/61/5b/6a615bb430b5b17c6f778cd5589b4f23.jpg", d:"Provocante", b:""},
    {n:"Aventus Creed", c:"homme", p:"120 000", i:"https://i.pinimg.com/736x/4f/f2/31/4ff231f98a5a5e0613c062ed7710eac4.jpg", d:"Puissant", b:"Luxe"},
    {n:"Miss Dior", c:"femme", p:"42 000", i:"https://i.pinimg.com/736x/32/4e/2d/324e2db21d282d323a4602f03a140286.jpg", d:"Romantique", b:"Best Seller"},
    {n:"Mont Blanc Legend", c:"homme", p:"36 500", i:"https://i.pinimg.com/1200x/ef/d1/56/efd156127ff36f2ce9f2bf105bf53057.jpg", d:"Classique", b:""},
    {n:"Tommy Girl", c:"femme", p:"35 000", i:"https://i.pinimg.com/1200x/1c/cf/97/1ccf97081c6adb10321dfe7e916c0f85.jpg", d:"Fraîche", b:""},
    {n:"Viktor & Rolf Spicebomb", c:"homme", p:"43 500", i:"https://i.pinimg.com/736x/b6/8a/05/b68a0533b5d18ccf3ceb2386eda24797.jpg", d:"Épicé", b:""},
    {n:"Elie Saab Le Parfum", c:"femme", p:"46 000", i:"https://i.pinimg.com/736x/da/37/0b/da370bdfa60cdb6ee71da2c0a7e734e0.jpg", d:"Floral et sucré", b:"Best Seller"},
    {n:"Dunhill Icon", c:"homme", p:"38 000", i:"https://i.pinimg.com/1200x/a4/d1/f8/a4d1f821a5094936a34cd304b9484dbb.jpg", d:"Élégant", b:""},
    {n:"Carolina Herrera Good Girl Legere", c:"femme", p:"41 000", i:"https://i.pinimg.com/736x/d9/e1/96/d9e1967c3a16a5821ac65be1c94eed7c.jpg", d:"Audacieuse", b:""},
    {n:"Creed Green Irish Tweed", c:"homme", p:"115 000", i:"https://i.pinimg.com/736x/60/cf/07/60cf07782461d372c7e8daca4c596256.jpg", d:"Frais et classique", b:"Luxe"},
    {n:"Chanel Chance", c:"femme", p:"43 500", i:"https://i.pinimg.com/736x/e0/e7/27/e0e72726db63eb25490dd0d6f5c5e895.jpg", d:"Chanceux", b:"Best Seller"},
    {n:"Dolce & Gabbana The One", c:"homme", p:"42 000", i:"https://i.pinimg.com/736x/b5/30/88/b5308848d37e54808240c2fe1af62127.jpg", d:"Séduisant", b:""},
    {n:"Jo Malone Peony & Blush Suede", c:"femme", p:"47 500", i:"https://i.pinimg.com/1200x/e4/08/e7/e408e7d8f95afefb72d6156b04356ea0.jpg", d:"Floral", b:""},
    {n:"Maison Margiela Replica Jazz Club", c:"homme", p:"50 000", i:"https://i.pinimg.com/1200x/5c/93/37/5c93374de64519069d63b63fb4829ae4.jpg", d:"Boisé et fumé", b:"Luxe"},
    ];

const catIcons = {
  femme: 'fa-venus',
  homme: 'fa-mars',
  unisexe: 'fa-infinity'
};
const catLabels = { femme: 'Pour Elle', homme: 'Pour Lui', unisexe: 'Unisexe' };

const grid = document.getElementById('products');
const searchInput = document.getElementById('search');
const filterBtns = document.querySelectorAll('.filter-btn');
const countLabel = document.getElementById('count-label');

let currentCat = 'tous';

function render() {
  const q = searchInput.value.toLowerCase().trim();
  const filtered = products.filter(p =>
    (currentCat === 'tous' || p.c === currentCat) &&
    p.n.toLowerCase().includes(q)
  );

  countLabel.textContent = `(${filtered.length})`;

  if (!filtered.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-bottle-droplet"></i>
        <p>Aucun parfum trouvé pour votre recherche.</p>
      </div>`;
    return;
  }

  grid.innerHTML = filtered.map((p, i) => {
    const badgeHtml = p.b ? `<div class="card-badge ${p.b.toLowerCase() === 'luxe' ? 'luxe' : ''}">${p.b}</div>` : '';
    const icon = catIcons[p.c] || 'fa-spray-can';
    const label = catLabels[p.c] || p.c;
    const whatsappMsg = encodeURIComponent(`Bonjour Maison Zale 🌹\n\nJe souhaite commander :\n✨ *${p.n}*\n💰 Prix : ${p.p} FCFA\n\nMerci !`);
    return `
      <div class="product-card" style="animation-delay:${i * 0.04}s">
        <div class="card-image">
          ${badgeHtml}
          <img loading="lazy" src="${p.i}?auto=format&fit=crop&w=600&q=80" alt="${p.n}">
        </div>
        <div class="card-body">
          <div class="card-cat"><i class="fas ${icon}"></i>${label}</div>
          <div class="card-name">${p.n}</div>
          <div class="card-desc">${p.d}</div>
          <div class="card-footer">
            <div class="card-price">
              ${p.p}
              <span>FCFA</span>
            </div>
            <button class="card-btn" onclick='addToCart(${JSON.stringify(p)})'>
              <i class="fas fa-shopping-bag"></i>Ajouter
            </button>
          </div>
        </div>
      </div>`;
  }).join('');
}

searchInput.addEventListener('input', render);
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCat = btn.dataset.cat;
    render();
  });
});

// Header scroll effect
window.addEventListener('scroll', () => {
  document.getElementById('header').classList.toggle('scrolled', window.scrollY > 60);
});

render();

// ===== CART LOGIC =====
let cart = [];

function addToCart(product) {
  const existing = cart.find(i => i.n === product.n);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  updateCartUI();
  openCart();
  // Mini animation on button
  const countEl = document.getElementById('cartCount');
  countEl.style.transform = 'scale(1.5)';
  setTimeout(() => countEl.style.transform = 'scale(1)', 200);
}

function removeFromCart(name) {
  cart = cart.filter(i => i.n !== name);
  updateCartUI();
}

function changeQty(name, delta) {
  const item = cart.find(i => i.n === name);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i.n !== name);
  updateCartUI();
}

function clearCart() {
  cart = [];
  updateCartUI();
}

function openCart() {
  document.getElementById('cartPanel').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartPanel').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function updateCartUI() {
  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  const countEl = document.getElementById('cartCount');
  countEl.textContent = totalItems;
  countEl.classList.toggle('visible', totalItems > 0);

  const footer = document.getElementById('cartFooter');
  const itemsEl = document.getElementById('cartItems');

  if (cart.length === 0) {
    itemsEl.innerHTML = `
      <div class="cart-empty">
        <i class="fas fa-bottle-droplet"></i>
        <p>Votre panier est vide.<br>Ajoutez vos parfums préférés !</p>
      </div>`;
    footer.style.display = 'none';
    return;
  }

  footer.style.display = 'block';

  itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img class="cart-item-img" src="${item.i}?auto=format&fit=crop&w=140&q=80" alt="${item.n}">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.n}</div>
        <div class="cart-item-price">${(parseInt(item.p.replace(/\s/g,'').replace(',','')) * item.qty).toLocaleString('fr-FR')} FCFA</div>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="changeQty('${item.n.replace(/'/g,"\\'")}', -1)">−</button>
          <span class="qty-value">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty('${item.n.replace(/'/g,"\\'")}', 1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart('${item.n.replace(/'/g,"\\'")}')">
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>
  `).join('');

  const total = cart.reduce((s, item) => {
    return s + parseInt(item.p.replace(/\s/g,'').replace(',','')) * item.qty;
  }, 0);
  document.getElementById('cartTotal').innerHTML = `${total.toLocaleString('fr-FR')} <span>FCFA</span>`;
}

function orderOnWhatsApp() {
  if (cart.length === 0) return;
  let lines = cart.map(item => {
    const unitPrice = parseInt(item.p.replace(/\s/g,'').replace(',',''));
    const total = unitPrice * item.qty;
    return `• *${item.n}* × ${item.qty} = ${total.toLocaleString('fr-FR')} FCFA`;
  }).join('\n');

  const total = cart.reduce((s, item) => {
    return s + parseInt(item.p.replace(/\s/g,'').replace(',','')) * item.qty;
  }, 0);

  const msg = encodeURIComponent(
    `Bonjour Maison Zale 🌹\n\nJe souhaite commander :\n\n${lines}\n\n💰 *Total : ${total.toLocaleString('fr-FR')} FCFA*\n\nMerci !`
  );
  window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
}
