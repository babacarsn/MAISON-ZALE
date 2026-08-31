const products = [
  {n:"Oud pour classik", c:"unisexe", p:"30 000", i:"Prouduits/oudPourKlassik.jpeg", d:"Classik Paris", b:"Oud"},
  {n:"Rose bleu Maison massimo", c:"unisexe", p:"75 000", i:"Prouduits/laRoseBleu.jpeg", d:"Maison Massimo", b:"Floral"},
  {n:"Liquid brun", c:"unisexe", p:"25 000", i:"Prouduits/LiquideBrun.jpeg", d:"Liquid Brun", b:"Ambré"},
  {n:"Voyage de nuit", c:"unisexe", p:"75 000", i:"Prouduits/VoyageDeNuit.jpeg", d:"Maison Massimo", b:"Boisé"},
  {n:"Royal oak maison massimo", c:"unisexe", p:"75 000", i:"Prouduits/Royal_oak_maison_massimo .jpeg", d:"Maison Massimo", b:"Boisé"},
  {n:"Oud Madawi", c:"unisexe", p:"150 000", i:"Prouduits/oudMadawi.jpeg", d:"Arabian Oud", b:"Oud"},
  {n:"Coeur blanc maison massimo", c:"unisexe", p:"75 000", i:"Prouduits/Coeur_blanc_maison_massimo .jpeg", d:"Maison Massimo", b:"Floral"},
  {n:"Exotic", c:"unisexe", p:"16 000", i:"Prouduits/Exotic.jpeg", d:"Exotic Perfumes", b:"Exotique"},
  {n:"Taraf arabian oud", c:"unisexe", p:"150 000", i:"Prouduits/tarafArabianOud.jpeg", d:"Arabian Oud", b:"Oud"},
  {n:"Africain gold", c:"unisexe", p:"90 000", i:"Prouduits/Africain_gold.jpeg", d:"Audacieux", b:"Boisé"},
  {n:"Suculent caramel", c:"unisexe", p:"25 000", i:"Prouduits/Suculent_caramel.jpeg", d:"Suculent", b:"Gourmand"},
  {n:"Oud envoutant", c:"unisexe", p:"23 000", i:"Prouduits/Oud_envoutant .jpeg", d:"Oud", b:"Oud"},
  {n:"Club de nuit", c:"homme", p:"25 000", i:"Prouduits/club_de_nuit.jpeg", d:"Floral", b:"Boisé"},
  {n:"Marshmallow", c:"femme", p:"20 000", i:"Prouduits/Marshmallow.jpeg", d:"Sophistiqué", b:"Gourmand"},
  {n:"Gold signature", c:"unisexe", p:"75 000", i:"Prouduits/Gold_signature.jpeg", d:"Explosion", b:"Oriental"},
  {n:"Rifaqat", c:"unisexe", p:"15 000", i:"Prouduits/Rifaqat.jpeg", d:"Raffiné", b:"Oriental"},
  {n:"Intense wayfarer", c:"homme", p:"15 000", i:"Prouduits/Intense_wayfarer.jpeg", d:"Lumineux", b:"Aromatique"},
  {n:"Azzure royal", c:"unisexe", p:"25 000", i:"Prouduits/Azzure_royal.jpg", d:"Boisé", b:"Boisé"},
  {n:"Momento riffs", c:"unisexe", p:"25 000", i:"Prouduits/Momento_riffs .jpg", d:"Gourmand", b:"Gourmand"},
  {n:"Hawas for him", c:"homme", p:"30 000", i:"Prouduits/Hawas_for_him.jpg", d:"Audacieux", b:"Aquatique"},
  {n:"Sultan 9", c:"unisexe", p:"25 000", i:"Prouduits/Sultan_9.jpg", d:"Aventure", b:"Oriental"},
  {n:"Eshal vanilla", c:"femme", p:"20 000", i:"Prouduits/Eshal_vanilla.jpeg", d:"Libre", b:"Vanillé"},
  {n:"Vanilla seduction", c:"femme", p:"25 000", i:"Prouduits/Vanilla_seduction.jpeg", d:"Boisé", b:"Vanillé"},
  {n:"Khair Confection", c:"femme", p:"15 000", i:"Prouduits/khair_confection.jpg", d:"Gourmand", b:"Gourmand"},
  {n:"Khair Fusion", c:"femme", p:"15 000", i:"Prouduits/khair_fusion.jpg", d:"Fruité", b:"Fruité"},
  {n:"Khair Pistachio", c:"femme", p:"15 000", i:"Prouduits/khair_pistachio.jpg", d:"Pistache", b:"Gourmand"},
  {n:"Ignite Oud", c:"unisexe", p:"35 000", i:"Prouduits/Ignite_oud.jpg", d:"Boisé", b:"Oud"},
  {n:"Eclaire Latafa", c:"femme", p:"23 000", i:"Prouduits/Eclaire_latafa.jpeg", d:"Vanillé", b:"Vanillé"},
  {n:"Coeur de pachouli", c:"unisexe", p:"90 000", i:"Prouduits/Coeur_de_pachouli.jpeg", d:"Boisé", b:"Boisé"},
  {n:"Iris gourmand", c:"unisexe", p:"90 000", i:"Prouduits/Iris_gourmand.jpeg", d:"Gourmand", b:"Gourmand"},
  {n:"Collection Meissa 50ml", c:"unisexe", p:"25 000", i:"Prouduits/Collection _Meissa.jpeg", d:"Fruité", b:"Fruité"},
  {n:"Oud sable", c:"unisexe", p:"90 000", i:"Prouduits/Oud_sable.jpeg", d:"Boisé", b:"Oud"},
  {n:"Vanille voyage", c:"femme", p:"25 000", i:"Prouduits/Vanille_voyage.jpeg", d:"Vanillé", b:"Vanillé"},
  {n:"Vulcan feu", c:"unisexe", p:"30 000", i:"Prouduits/Vulcan_feu.jpg", d:"Epicé", b:"Épicé"},
  {n:"Taskem caramel cascade", c:"unisexe", p:"15 000", i:"Prouduits/Taskem_caramel_cascade .jpg", d:"Caramel", b:"Gourmand"},
  {n:"Oud and rose", c:"unisexe", p:"32 500", i:"Prouduits/OUD_&_ROSES.jpg", d:"Floral", b:"Oud & Rose"},
  {n:"Drifft Riffs", c:"unisexe", p:"25 000", i:"Prouduits/Drifft_Riffs.jpg", d:"Parfum unisexe", b:"Boisé"},
  {n:"Vanilla Aura", c:"femme", p:"25 000", i:"Prouduits/Vanilla_Aura.jpg", d:"Vanillé", b:"Vanillé"},
  {n:"Rise Fiffs", c:"unisexe", p:"25 000", i:"Prouduits/Rise_Fiffs.jpg", d:"Parfum unisexe", b:"Boisé"},
  {n:"Blue by Ahmed", c:"unisexe", p:"25 000", i:"Prouduits/Blue_by_Ahmed.jpg", d:"Frais", b:"Aquatique"},
  {n:"Kafh By Ahmed", c:"homme", p:"25 000", i:"Prouduits/Kafh_By_Ahmed.jpg", d:"Boisé", b:"Boisé"},
  {n:"OUD AL MALIK -Blue Musk", c:"unisexe", p:"18 000", i:"Prouduits/oud_al_malick_blue_musk.jpeg", d:"Musc", b:"Musc"},
  {n:"OUD AL MALIK -Casanova", c:"unisexe", p:"18 000", i:"Prouduits/oud_al_malick_casanova.jpeg", d:"Parfum unisexe", b:"Oriental"},
  {n:"Intense Infusion", c:"unisexe", p:"15 000", i:"Prouduits/Intense_infusion.jpeg", d:"Parfum unisexe", b:"Aromatique"},
  {n:"Bint Hooran Rose Passion", c:"femme", p:"15 000", i:"Prouduits/Bint_hooran_rose_passion.jpeg", d:"Parfum floral", b:"Floral"},
  {n:"Oud Embrosia Maison Manel", c:"unisexe", p:"25 000", i:"Prouduits/oud-ambrosia.jpg", d:"Oud", b:"Oud"},
  { n:"Musamam White Intense",c:"unisexe",p:"25 000",i:"Prouduits/Musaman_white_intense_latafa.jpeg",d:"Lattafa",b:"Boisé"},
  {n:"Khamra Waha", c:"unisexe", p:"30 000", i:"Prouduits/Khamra_waha.jpeg", d:"Parfum unisexe", b:"Oriental"},
  {
        n: "Al Fareed",
        c: "unisexe",
        p: "150 000",
        i: "Prouduits/Al_fareed.jpeg",
        d: "Parfum unisexe",
        b: "Oriental"
    },

    {
        n: "Cedrus Blanc",
        c: "unisexe",
        p: "40 000",
        i: "Prouduits/Cedrus_Blanc.jpeg",
        d: "Parfum unisexe",
        b: "Boisé"
    },

    {
        n: "Fayora",
        c: "femme",
        p: "20 000",
        i: "Prouduits/Fayora.jpeg",
        d: "Parfum femme",
        b: "Floral"
    },

    {
        n: "Haramain Amber Oud",
        c: "unisexe",
        p: "200 000",
        i: "Prouduits/Haramain_amber_oud.jpeg",
        d: "Parfum unisexe",
        b: "Ambré"
    },

    {
        n: "Island Vanilla Dunes",
        c: "femme",
        p: "25 000",
        i: "Prouduits/island_vanilla_dunes.jpeg",
        d: "Parfum femme",
        b: "Vanillé"
    },

    {
        n: "Lady Reef",
        c: "femme",
        p: "40 000",
        i: "Prouduits/lady_reef.jpeg",
        d: "Parfum femme",
        b: "Floral"
    },

    {
        n: "Oud Al Malick MAIZON ZALE",
        c: "unisexe",
        p: "18 000",
        i: "Prouduits/oud_AL_MALICK_MZ.jpeg",
        d: "Parfum unisexe",
        b: "Oud"
    },

    {
        n: "Peachy",
        c: "femme",
        p: "25 000",
        i: "Prouduits/Peachy.jpeg",
        d: "Parfum femme",
        b: "Fruité"
    },

    {
        n: "Reef 33",
        c: "unisexe",
        p: "40 000",
        i: "Prouduits/Reef_33.jpeg",
        d: "Parfum unisexe",
        b: "Aromatique"
    },

    {
        n: "Reef Pure Flower",
        c: "unisexe",
        p: "40 000",
        i: "Prouduits/reef_pure_flower.jpeg",
        d: "Parfum floral",
        b: "Floral"
    },

    {
        n: "Reef Pure Musk",
        c: "unisexe",
        p: "40 000",
        i: "Prouduits/reef_pure_musk.jpeg",
        d: "Parfum musqué",
        b: "Musc"
    }
];
const phone = "221710474235";

/*
  SOURCE PRODUITS
  - Par défaut: catalogue local ci-dessus, issu des produits fournis.
  - Pour connecter Google Sheets plus tard: renseigner une URL CSV publiée
    dans GOOGLE_SHEETS_CSV_URL. Les colonnes recommandées sont:
    n,c,p,i,d,b
*/
const GOOGLE_SHEETS_CSV_URL = "";
const catLabel = {femme:"Pour Elle", homme:"Pour Lui", unisexe:"Unisexe"};

let catalog = [...products];
let cart = JSON.parse(localStorage.getItem("zale_cart") || "[]");
let favs = JSON.parse(localStorage.getItem("zale_favs") || "[]");

const money = n => Number(String(n).replace(/\s/g,"").replace(",",".")).toLocaleString("fr-FR") + " FCFA";
const priceNumber = p => Number(String(p).replace(/\s/g,"").replace(/[^\d.]/g,"")) || 0;

function save(){
  localStorage.setItem("zale_cart", JSON.stringify(cart));
  localStorage.setItem("zale_favs", JSON.stringify(favs));
  updateCounts();
}
function updateCounts(){
  const qty = cart.reduce((s,p)=>s+p.qty,0);
  const c = document.getElementById("cartCount");
  const f = document.getElementById("favCount");
  if(c){c.textContent=qty;c.classList.toggle("visible",qty>0);}
  if(f) f.textContent=favs.length;
}
function toast(message){
  const el=document.getElementById("toast");
  if(!el)return;
  el.textContent=message;el.classList.add("show");
  clearTimeout(window.__toast);window.__toast=setTimeout(()=>el.classList.remove("show"),2200);
}
function esc(value){
  return String(value ?? "").replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
}
function productCard(p){
  const fav=favs.includes(p.n);
  return `<article class="product-card" data-name="${esc(p.n)}">
    <div class="product-image">
      <span class="product-badge">${esc(p.b || "Sélection Zale")}</span>
      <button class="fav ${fav?"active":""}" data-fav="${esc(p.n)}" aria-label="Ajouter aux favoris">
        <i class="${fav?"fa-solid":"fa-regular"} fa-heart"></i>
      </button>
      <img loading="lazy" src="${esc(p.i)}" alt="${esc(p.n)}" onerror="this.closest('.product-image').classList.add('image-error')">
    </div>
    <div class="product-info">
      <div class="product-cat">${esc(catLabel[p.c]||p.c)}</div>
      <h3 class="product-name">${esc(p.n)}</h3>
      <p class="product-desc">${esc(p.d||"Signature Maison Zale")}</p>
      <div class="product-bottom">
        <div class="price">${money(p.p)}</div>
        <button class="add-btn" data-add="${esc(p.n)}"><i class="fa-solid fa-bag-shopping"></i> Ajouter</button>
      </div>
    </div>
  </article>`;
}
function renderProducts(list){
  const grid=document.getElementById("productsGrid");
  if(!grid)return;
  grid.innerHTML=list.length?list.map(productCard).join(""):`<div class="no-results"><i class="fa-solid fa-magnifying-glass"></i><p>Aucun produit ne correspond à votre recherche.</p></div>`;
  const count=document.getElementById("resultCount"); if(count) count.textContent=list.length;
}
function applyFilters(){
  const q=(document.getElementById("catalogSearch")?.value||"").trim().toLowerCase();
  const cat=document.querySelector(".filter-chip.active")?.dataset.cat||"tous";
  const sort=document.getElementById("sortSelect")?.value||"default";
  let list=catalog.filter(p=>{
    const text=`${p.n} ${p.c} ${p.d||""} ${p.b||""}`.toLowerCase();
    return (cat==="tous"||p.c===cat) && (!q||text.includes(q));
  });
  if(sort==="priceAsc") list.sort((a,b)=>priceNumber(a.p)-priceNumber(b.p));
  if(sort==="priceDesc") list.sort((a,b)=>priceNumber(b.p)-priceNumber(a.p));
  if(sort==="name") list.sort((a,b)=>a.n.localeCompare(b.n));
  renderProducts(list);
}
function addToCart(p){
  const item=cart.find(x=>x.n===p.n);
  item?item.qty++:cart.push({...p,qty:1});
  save();renderCart();openCart();toast("Produit ajouté au panier");
}
function toggleFav(name){
  const i=favs.indexOf(name);
  i>-1?favs.splice(i,1):favs.push(name);
  save();
  document.querySelectorAll("[data-fav]").forEach(btn=>{
    if(btn.dataset.fav===name){
      const active=favs.includes(name);
      btn.classList.toggle("active",active);
      btn.innerHTML=`<i class="${active?"fa-solid":"fa-regular"} fa-heart"></i>`;
    }
  });
  toast(i>-1?"Retiré des favoris":"Ajouté aux favoris");
}
function openCart(){document.getElementById("cartDrawer")?.classList.add("open");document.getElementById("drawerOverlay")?.classList.add("open");}
function closeCart(){document.getElementById("cartDrawer")?.classList.remove("open");document.getElementById("drawerOverlay")?.classList.remove("open");}
function renderCart(){
  const el=document.getElementById("cartItems"), footer=document.getElementById("cartFooter");
  if(!el)return;
  if(!cart.length){
    el.innerHTML='<div class="cart-empty"><i class="fa-solid fa-bag-shopping"></i><p>Votre panier est vide.</p><span>Ajoutez vos fragrances préférées.</span></div>';
    if(footer)footer.style.display="none"; return;
  }
  if(footer)footer.style.display="block";
  el.innerHTML=cart.map((p,i)=>`<div class="cart-item">
    <img src="${esc(p.i)}" alt="${esc(p.n)}">
    <div><h4>${esc(p.n)}</h4><div class="cart-price">${money(priceNumber(p.p)*p.qty)}</div>
    <div class="qty"><button data-qty="${i}" data-delta="-1">−</button><span>${p.qty}</span><button data-qty="${i}" data-delta="1">+</button></div></div>
    <button class="remove" data-remove="${i}" aria-label="Supprimer"><i class="fa-solid fa-trash"></i></button>
  </div>`).join("");
  const total=cart.reduce((s,p)=>s+priceNumber(p.p)*p.qty,0);
  document.getElementById("cartTotal").textContent=money(total);
}
function changeQty(i,d){
  if(!cart[i])return;
  cart[i].qty+=d;if(cart[i].qty<=0)cart.splice(i,1);
  save();renderCart();
}
function removeItem(i){cart.splice(i,1);save();renderCart();toast("Produit retiré du panier");}

function orderText(customer={}){
  const lines=cart.map(p=>`• ${p.n} x${p.qty} — ${money(priceNumber(p.p)*p.qty)}`);
  const total=cart.reduce((s,p)=>s+priceNumber(p.p)*p.qty,0);
  return `Bonjour Maison Zale,\n\nJe souhaite commander :\n${lines.join("\n")}\n\nTotal produits : ${money(total)}\n\nNom : ${customer.name||"À préciser"}\nTéléphone : ${customer.phone||"À préciser"}\nVille : ${customer.city||"À préciser"}\nAdresse : ${customer.address||"À préciser"}\nMode de livraison : ${customer.delivery||"À préciser"}\n\nMerci.`;
}
function sendWhatsApp(customer={}){
  if(!cart.length){toast("Votre panier est vide");return;}
  const url=`https://wa.me/${phone}?text=${encodeURIComponent(orderText(customer))}`;
  window.open(url,"_blank","noopener");
}
function openOrder(){
  if(!cart.length){toast("Ajoutez au moins un produit");return;}
  document.getElementById("orderModal")?.classList.add("open");
  document.getElementById("drawerOverlay")?.classList.add("open");
}
function closeOrder(){
  document.getElementById("orderModal")?.classList.remove("open");
  document.getElementById("drawerOverlay")?.classList.remove("open");
}

function parseCSV(text){
  const rows=[];let row=[],cell="",quoted=false;
  for(let i=0;i<text.length;i++){
    const ch=text[i],next=text[i+1];
    if(ch==='"' && quoted && next==='"'){cell+='"';i++;continue;}
    if(ch==='"'){quoted=!quoted;continue;}
    if(ch===','&&!quoted){row.push(cell.trim());cell="";continue;}
    if((ch==='\n'||ch==='\r')&&!quoted){if(ch==='\r'&&next==='\n')i++;row.push(cell.trim());if(row.some(Boolean))rows.push(row);row=[];cell="";continue;}
    cell+=ch;
  }
  if(cell||row.length){row.push(cell.trim());rows.push(row);}
  if(!rows.length)return [];
  const headers=rows.shift().map(x=>x.toLowerCase());
  return rows.map(r=>Object.fromEntries(headers.map((h,i)=>[h,r[i]||""]))).map(x=>({
    n:x.n||x.nom||x.name,c:x.c||x.categorie||"unisexe",p:x.p||x.prix||"0",i:x.i||x.image||"",d:x.d||x.description||"",b:x.b||x.badge||"Sélection Zale"
  })).filter(x=>x.n&&x.i);
}
async function loadGoogleSheets(){
  if(!GOOGLE_SHEETS_CSV_URL)return;
  try{
    const res=await fetch(GOOGLE_SHEETS_CSV_URL,{cache:"no-store"});
    if(!res.ok)throw new Error("Sheets inaccessible");
    const data=parseCSV(await res.text());
    if(data.length){catalog=data;renderHome();applyFilters();toast("Catalogue Google Sheets synchronisé");}
  }catch(e){console.warn("Google Sheets:",e);}
}
function renderHome(){
  const featured=document.getElementById("featuredProducts");
  const newEl=document.getElementById("newProducts");
  if(featured)featured.innerHTML=catalog.slice(0,8).map(productCard).join("");
  if(newEl)newEl.innerHTML=catalog.slice(-8).map(productCard).join("");
}
function bind(){
  document.getElementById("cartBtn")?.addEventListener("click",openCart);
  document.getElementById("closeCart")?.addEventListener("click",closeCart);
  document.getElementById("drawerOverlay")?.addEventListener("click",()=>{closeCart();closeOrder();});
  document.getElementById("menuToggle")?.addEventListener("click",()=>document.getElementById("navBar")?.classList.toggle("open"));
  document.getElementById("search")?.addEventListener("input",e=>{const target=document.getElementById("catalogSearch");if(target){target.value=e.target.value;applyFilters();document.getElementById("catalog")?.scrollIntoView({behavior:"smooth"});}});
  document.addEventListener("click",e=>{
    const add=e.target.closest("[data-add]"); if(add){const p=catalog.find(x=>x.n===add.dataset.add);if(p)addToCart(p);}
    const fav=e.target.closest("[data-fav]"); if(fav)toggleFav(fav.dataset.fav);
    const q=e.target.closest("[data-qty]"); if(q)changeQty(Number(q.dataset.qty),Number(q.dataset.delta));
    const rem=e.target.closest("[data-remove]"); if(rem)removeItem(Number(rem.dataset.remove));
    const chip=e.target.closest(".filter-chip"); if(chip){document.querySelectorAll(".filter-chip").forEach(x=>x.classList.remove("active"));chip.classList.add("active");applyFilters();}
    const catLink=e.target.closest("[data-scroll-cat]"); if(catLink){e.preventDefault();document.getElementById("catalog")?.scrollIntoView({behavior:"smooth"});document.querySelector(`.filter-chip[data-cat="${catLink.dataset.scrollCat}"]`)?.click();}
  });
  document.getElementById("sortSelect")?.addEventListener("change",applyFilters);
  document.getElementById("catalogSearch")?.addEventListener("input",applyFilters);
  document.getElementById("orderBtn")?.addEventListener("click",openOrder);
  document.getElementById("closeOrder")?.addEventListener("click",closeOrder);
  document.getElementById("orderForm")?.addEventListener("submit",e=>{
    e.preventDefault();
    const data=Object.fromEntries(new FormData(e.target).entries());
    sendWhatsApp(data);
  });
  document.getElementById("collaborationForm")?.addEventListener("submit",async e=>{
    e.preventDefault();
    const form=e.currentTarget;
    const button=form.querySelector("button[type=submit]");
    const original=button.innerHTML;
    button.disabled=true;
    button.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i> Envoi en cours...';
    try{
      const response=await fetch(form.action,{
        method:"POST",
        body:new FormData(form),
        headers:{"Accept":"application/json"}
      });
      if(!response.ok) throw new Error("send_failed");
      toast("Votre demande de collaboration a bien été envoyée.");
      form.reset();
    }catch(error){
      toast("Impossible d'envoyer le formulaire. Vérifiez votre connexion et réessayez.");
    }finally{
      button.disabled=false;
      button.innerHTML=original;
    }
  });
  document.getElementById("favBtn")?.addEventListener("click",()=>{
    if(!favs.length){toast("Aucun favori pour le moment");return;}
    document.querySelectorAll(".filter-chip").forEach(x=>x.classList.remove("active"));
    document.querySelector('.filter-chip[data-cat="favoris"]')?.classList.add("active");
    const list=catalog.filter(p=>favs.includes(p.n));renderProducts(list);
    document.getElementById("catalog")?.scrollIntoView({behavior:"smooth"});
  });
  updateCounts();renderCart();renderHome();applyFilters();loadGoogleSheets();
}
document.addEventListener("DOMContentLoaded",bind);
