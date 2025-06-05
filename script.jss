const products = [
  { id: 1, name: "Red Sneakers", price: 1999, image: "images/shoe1.jpg" },
  { id: 2, name: "Blue Hoodie", price: 1499, image: "images/hoodie1.jpg" },
  { id: 3, name: "Digital Watch", price: 899, image: "images/watch1.jpg" },
  { id: 4, name: "Sunglasses", price: 599, image: "images/sunglasses1.jpg" }, // new
  { id: 5, name: "Smartwatch", price: 2499, image: "images/smartwatch1.jpg" }  // new
];

let cartCount = 0;

function loadProducts(productArray = products) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  productArray.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart()">Add to Cart</button>
    `;
    productList.appendChild(card);
  });
}

function addToCart() {
  cartCount++;
  document.getElementById("cart-count").textContent = cartCount;
}

function searchProduct() {
  const query = document.getElementById("search").value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(query));
  loadProducts(filtered);
}

window.onload = () => {
  loadProducts();
};
