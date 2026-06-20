const phone = "221710474235";
// git add .
// git commit -m "feat: ajout des parfums v3"
// git push origin main
//d: et :b  ne complete par rien laisse les comme ils sont
const products = [
{n:"Oud pour classik", c:"unisexe", p:"25 000", i:"Prouduits/oudPourKlassik.jpeg", d:"Classik Paris", b:"Collection Oud"},
{n:"Rose bleu Maison massimo", c:"unisexe", p:"75 000", i:"Prouduits/laRoseBleu.jpeg", d:"Maison Massimo", b:"Collection Prestige"},
{n:"Liquid brun", c:"unisexe", p:"25 000", i:"Prouduits/LiquideBrun.jpeg", d:"Liquid Brun", b:"Collection Signature"},
{n:"Voyage de nuit", c:"unisexe", p:"75 000", i:"Prouduits/VoyageDeNuit.jpeg", d:"Maison Massimo", b:"Collection Prestige"},
{n:"Royal oak maison massimo", c:"unisexe", p:"75 000", i:"Prouduits/Royal_oak_maison_massimo .jpeg", d:"Maison Massimo", b:"Collection Prestige"},
{n:"Oud Madawi", c:"unisexe", p:"150 000", i:"Prouduits/oudMadawi.jpeg", d:"Arabian Oud", b:"Collection Oud"},
{n:"Coeur blanc maison massimo", c:"unisexe", p:"75 000", i:"Prouduits/Coeur_blanc_maison_massimo .jpeg", d:"Maison Massimo", b:"Collection Prestige"},
{n:"Exotic", c:"unisexe", p:"16 000", i:"Prouduits/Exotic.jpeg", d:"Exotic Perfumes", b:"Collection Signature"},
{n:"Taraf arabian oud", c:"unisexe", p:"150 000", i:"Prouduits/tarafArabianOud.jpeg", d:"Arabian Oud", b:"Collection Royale"},,
{n:"Africain gold ", c:"unisexe", p:"90 000", i:"Prouduits/Africain_gold.jpeg", d:"Audacieux", b:""},
{n:"Suculent caramel ", c:"unisexe", p:"25 000", i:"Prouduits/Suculent_caramel.jpeg", d:"Suculent", b:""},
    {n:"Oud envoutant ", c:"unisexe", p:"23 000", i:"Prouduits/Oud_envoutant .jpeg", d:"Oud", b:""},
    {n:"Club de nuit ", c:"homme", p:"25 000", i:"Prouduits/club_de_nuit.jpeg", d:"Floral", b:""},
    {n:"Marshmallow", c:"femme", p:"20 000", i:"Prouduits/Marshmallow.jpeg", d:"Sophistiqué", b:""},
    {n:"Gold signature ", c:"unisexe", p:"75000", i:"Prouduits/Gold_signature.jpeg", d:"Explosion", b:""},
    {n:"Rifaqat ", c:"unisexe", p:"15 000", i:"Prouduits/Rifaqat.jpeg", d:"Raffiné", b:""},
    {n:"Intense wayfarer ", c:"homme", p:"15 000", i:"Prouduits/Intense_wayfarer.jpeg", d:"Lumineux", b:""},
    {n:"Azzure royal", c:"Unisexe", p:"25 000", i:"Prouduits/Azzure_royal.jpg", d:"Boisé", b:"Luxe"},
    {n:"Momento riffs ", c:"Unisexe", p:"25 000", i:"Prouduits/Momento_riffs .jpg", d:"Gourmand", b:""},
    {n:"Hawas for him", c:"Unisexe", p:"30 000", i:"Prouduits/Hawas_for_him.jpg", d:"Audacieux", b:"Best Seller"},
    {n:"Sultan 9", c:"Unisexe", p:"25 000", i:"Prouduits/Sultan_9.jpg", d:"Aventure", b:""},
    {n:"Eshal vanilla ", c:"femme", p:"20 000", i:"Prouduits/Eshal_vanilla.jpeg", d:"Libre", b:"Luxe"},
    {n:"Vanilla seduction", c:"femme", p:"25 000", i:"Prouduits/Vanilla_seduction.jpeg", d:"Boisé", b:""},
    {n:"Khair Confection", c:"femme", p:"15 000", i:"Prouduits/khair_confection.jpg", d:"Gourmand", b:"Nouveau"},
    {n:"Khair Fusion", c:"femme", p:"15 000", i:"Prouduits/khair_fusion.jpg", d:"Fruité", b:"Nouveau"},  
    {n:"Khair Pistachio", c:"femme", p:"15 000", i:"Prouduits/khair_pistachio.jpg", d:"Pistache", b:"Best Seller"},
    {n:"Ignite Oud", c:"unisexe", p:"25 000", i:"Prouduits/Ignite_oud.jpg", d:"Boisé", b:"Collection Oud"},
    {n:"Eclaire Latafa", c:"femme", p:"23 000", i:"Prouduits/Eclaire_latafa.jpeg", d:"Vanillé", b:"Nouveau"}
   
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
  // Ouvre le formulaire de livraison avant WhatsApp
  openOrderModal();
}

function openOrderModal() {
  const modal = document.getElementById('orderModal');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  // Reset errors
  document.getElementById('orderFormError').style.display = 'none';
  ['orderPrenom','orderNom','orderTel','orderAdresse'].forEach(id => {
    document.getElementById(id).classList.remove('error');
  });
}

function closeOrderModal() {
  document.getElementById('orderModal').classList.remove('open');
  document.body.style.overflow = '';
}

// Fermer si clic sur l'overlay
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('orderModal').addEventListener('click', function(e) {
    if (e.target === this) closeOrderModal();
  });
});

function confirmOrderAndWhatsApp() {
  const prenom  = document.getElementById('orderPrenom').value.trim();
  const nom     = document.getElementById('orderNom').value.trim();
  const tel     = document.getElementById('orderTel').value.trim();
  const adresse = document.getElementById('orderAdresse').value.trim();

  // Validation
  let hasError = false;
  [['orderPrenom', prenom], ['orderNom', nom], ['orderTel', tel], ['orderAdresse', adresse]].forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (!val) { el.classList.add('error'); hasError = true; }
    else el.classList.remove('error');
  });

  if (hasError) {
    document.getElementById('orderFormError').style.display = 'flex';
    return;
  }
  document.getElementById('orderFormError').style.display = 'none';

  // Construction du message WhatsApp
  let lines = cart.map(item => {
    const unitPrice = parseInt(item.p.replace(/\s/g,'').replace(',',''));
    const total = unitPrice * item.qty;
    return `• *${item.n}* × ${item.qty} = ${total.toLocaleString('fr-FR')} FCFA`;
  }).join('\n');

  const total = cart.reduce((s, item) => {
    return s + parseInt(item.p.replace(/\s/g,'').replace(',','')) * item.qty;
  }, 0);

  const msg = encodeURIComponent(
    `Bonjour Maison Zale 🌹\n\nNom : *${prenom} ${nom}*\n📞 Téléphone : *${tel}*\n📍 Adresse : *${adresse}*\n\n🛍️ Commande :\n\n${lines}\n\n💰 *Total : ${total.toLocaleString('fr-FR')} FCFA*\n\nMerci !`
  );

  closeOrderModal();
  window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
}
