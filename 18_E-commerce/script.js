async function showProduct() {
  const productList = document.getElementById("product-list");

  try {
    const response = await fetch(
      "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json",
    );

    const productData = await response.json();

    productList.innerHTML = "";

    productData.forEach((p) => {
      productList.innerHTML += `
        <div class="col-md-4 mt-3">
          <div class="card product-card shadow rounded-4 h-100">
            <img src="${p.image}" class="card-img-top img-fluid rounded-4" alt="${p.name}">
            
            <div class="card-body text-center">
              <h5 class="card-title">${p.name}</h5>
              <h4 class="card-text">₹${p.priceCents}</h4>

              <button class="btn btn-outline-primary" onclick="addToCart(${p.id})">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      `;
    });

    console.log(productData);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

showProduct();

localStorage.setItem("cart", JSON.stringify(cart));

let data = JSON.parse(localStorage.getItem("cart"));

localStorage.removeItem("cart");

localStorage.clear();
