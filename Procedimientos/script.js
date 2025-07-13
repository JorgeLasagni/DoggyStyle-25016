// script.js – detecta en qué página está y actúa
//const URL_JSON = "productos.json";
const URL_JSON = "../assets/productos.json";
let productos = [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Elementos globales
const cartCountSpan = document.getElementById("cart-count");

const currency = n => n.toLocaleString("es-AR",{style:"currency",currency:"ARS"});
const saveCart = () => localStorage.setItem("cart",JSON.stringify(cart));
const cartQty = () => cart.reduce((s,i)=>s+i.qty,0);
const cartSum = () => cart.reduce((s,i)=>s+i.qty*i.price,0);
const updateBadge = () => { if(cartCountSpan) cartCountSpan.textContent = cartQty(); };

updateBadge();

/* Página Productos */
const productosContainer = document.getElementById("productos-container");
if(productosContainer){
  fetch(URL_JSON).then(r=>r.json()).then(data=>{productos=data; renderProductos();})
                 .catch(()=>productosContainer.innerHTML="<p>Error al cargar productos</p>");
  function renderProductos(){
    productosContainer.innerHTML = productos.map(p=>`
      <div class="card">
        <img src="${p.image}" alt="${p.title}">
        <h3>${p.title}</h3>
        <p>${currency(p.price)}</p>
        <button data-id="${p.id}">Agregar</button>
      </div>`).join("");
  }
  productosContainer.addEventListener("click",e=>{
    if(!e.target.matches("button[data-id]")) return;
    const id = +e.target.dataset.id;
    const prod = productos.find(p=>p.id===id);
    const idx = cart.findIndex(i=>i.id===id);
    idx>=0 ? cart[idx].qty++ : cart.push({...prod, qty:1});
    saveCart(); updateBadge();
  });
}
/* Página Carrito */
const cartBody = document.getElementById("cart-body");
if(cartBody){
  const cartTotal = document.getElementById("cart-total");
  const btnVaciar = document.getElementById("vaciar-carrito");
  const btnFin = document.getElementById("finalizar-compra");
  const checkoutSection = document.getElementById("checkout-section");
  const formCheckout = document.getElementById("checkout-form");
  const campoPedido = document.getElementById("campo-pedido");

  renderCart();

  cartBody.addEventListener("click",e=>{
    const id = +e.target.dataset.id;
    const idx = cart.findIndex(i=>i.id===id);
    if(idx<0) return;
    if(e.target.classList.contains("inc")) cart[idx].qty++;
    if(e.target.classList.contains("dec")) cart[idx].qty = Math.max(1, cart[idx].qty-1);
    if(e.target.classList.contains("del")) cart.splice(idx,1);
    saveCart(); renderCart(); updateBadge();
  });

  btnVaciar.addEventListener("click",()=>{ if(confirm("Vaciar carrito?")){ cart=[]; saveCart(); renderCart(); updateBadge(); }});
  btnFin.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("El carrito está vacío");
    return;
  }
  if (!confirm("¿Confirmás tu compra?")) return;

  // construir resumen
  const resumen = {
    items: cart.map(i => ({id: i.id, titulo: i.title, precio: i.price, cantidad: i.qty})),
    total: cartSum()
  };
  const campoPedido = document.getElementById("campo-pedido");
  if (campoPedido) {
    campoPedido.value = JSON.stringify(resumen);
    document.getElementById("checkout-form").submit();
  } else {
    console.error("No se encontró el campo oculto 'pedido'.");
  }
  cart = [];
  saveCart();
  renderCart();
  updateBadge();
});
// });
  formCheckout.addEventListener("submit",()=>{ campoPedido.value = JSON.stringify({items:cart.map(i=>({id:i.id,titulo:i.title,precio:i.price,cantidad:i.qty})), total:cartSum()}); setTimeout(()=>{cart=[]; saveCart(); updateBadge();},500); });

  function renderCart(){
    cartBody.innerHTML = cart.length ? cart.map(i=>`<tr>
      <td>${i.title}</td>
      <td><button class="dec" data-id="${i.id}">-</button> ${i.qty} <button class="inc" data-id="${i.id}">+</button></td>
      <td>${currency(i.price)}</td>
      <td>${currency(i.price*i.qty)}</td>
      <td><button class="del" data-id="${i.id}">✖</button></td>`).join("") : `<tr><td colspan="5">Carrito vacío</td></tr>`;
    cartTotal.textContent = currency(cartSum());
  }
}
