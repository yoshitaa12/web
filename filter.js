const products = [
  { name: "Laptop", category: "electronics", price: 1000, rating: 4.5 },
  { name: "Headphones", category: "electronics", price: 200, rating: 4.2 },
  { name: "Harry Potter", category: "books", price: 25, rating: 4.8 },
  { name: "Goosebumps", category: "books", price: 15, rating: 4.3 },
  { name: "Speaker", category: "electronics", price: 1900, rating: 4.52 },
  { name: "Spirit", category: "books", price: 70, rating: 4.32 },

];

function filterAndSort() {
  const category = document.getElementById("categoryFilter").value;
  const sort = document.getElementById("sortOption").value;
  let filtered = category === "all" ? products : products.filter(p => p.category === category);

  if (sort === "price") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  displayProducts(filtered);
}

function displayProducts(list) {
  const container = document.getElementById("productList");
  container.innerHTML = "";
  list.forEach(p => {
    container.innerHTML += `<div>${p.name} - $${p.price} - ${p.rating}</div>`;
  });
}

window.onload = filterAndSort;
