function openImage(url){
  window.open(url, "_blank");
}

function buy(produto, preco){
  const numero = "5599999999999"; // 👈 COLOQUE SEU WHATSAPP AQUI
  const mensagem = `
Olá! Tenho interesse no produto abaixo:

🛍️ Produto: ${produto}
💰 Valor: R$ ${preco}

Gostaria de finalizar a compra.
`;
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}


const categoryFilter = document.getElementById("categoryFilter");
const sortFilter = document.getElementById("sortFilter");
const products = document.querySelectorAll(".card");

categoryFilter.addEventListener("change", ()=>{
  const v = categoryFilter.value;
  products.forEach(p=>{
    p.style.display = (v==="all"||p.dataset.category===v)?"block":"none";
  });
});

sortFilter.addEventListener("change", ()=>{
  const list = document.getElementById("productList");
  const items = Array.from(products);
  const type = sortFilter.value;

  items.sort((a,b)=>{
    if(type==="low") return a.dataset.price-b.dataset.price;
    if(type==="high") return b.dataset.price-a.dataset.price;
    return 0;
  });

  items.forEach(i=>list.appendChild(i));
});

