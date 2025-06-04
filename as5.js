const products = [
      { id: 1, name: "Wireless Headphones", price: 59.99 },
      { id: 2, name: "Smart Watch", price: 99.99 },
      { id: 3, name: "USB-C Charger", price: 19.99 },
      { id: 4, name: "Bluetooth Speaker", price: 49.99 },
      { id: 5, name: "Portable SSD", price: 79.99 },
      { id: 6, name: "Gaming Mouse", price: 39.99 },
      { id: 7, name: "Mechanical Keyboard", price: 89.99 },
      { id: 8, name: "Noise Cancelling Earbuds", price: 129.99 },
      { id: 9, name: "4K HDMI Cable", price: 14.99 },
      { id: 10, name: "Laptop Stand", price: 29.99 },
      { id: 11, name: "Wireless Charger", price: 24.99 },
      { id: 12, name: "Fitness Tracker", price: 44.99 },
      { id: 13, name: "Smart Home Plug", price: 22.49 },
      { id: 14, name: "LED Desk Lamp", price: 34.95 },
      { id: 15, name: "VR Headset", price: 199.99 }
    ];

    let cart = [];

    function renderProducts() {
      const productList = document.getElementById("product-list");
      productList.innerHTML = "";

      products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
          <h3>${product.name}</h3>
          <p>$${product.price.toFixed(2)}</p>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;

        productList.appendChild(card);
      });
    }

    function addToCart(productId) {
      const product = products.find(p => p.id === productId);
      if (product) {
        cart.push(product);
        updateCartCount();
        updateCartView();
      }
    }

    function updateCartCount() {
      document.getElementById("cart-count").innerText = cart.length;
    }

    function updateCartView() {
      const cartItemsDiv = document.getElementById("cart-items");
      const cartTotalSpan = document.getElementById("cart-total");

      cartItemsDiv.innerHTML = "";

      let total = 0;

      cart.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "cart-item";
        itemDiv.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsDiv.appendChild(itemDiv);
        total += item.price;
      });

      cartTotalSpan.innerText = total.toFixed(2);
    }

    function toggleCart() {
      const cartDiv = document.getElementById("cart");
      cartDiv.style.display = cartDiv.style.display === "none" ? "block" : "none";
    }

    window.onload = renderProducts;