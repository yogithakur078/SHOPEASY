const container = document.getElementById("container");
const loading = document.getElementById("loading");

// show loading
loading.style.display = "block";

fetch("https://dummyjson.com/products")
  .then(res => res.json())
  .then(data => {

    loading.style.display = "none"; // hide loading after data comes

    let item = [];
    for (let i = 0; i < 30; i++) {
      item.push(data.products[i]);
    }

    let total = "";

    item.forEach(items => {
      total += `
        <a href="product.html?id=${items.id}" class="product-card">
          <img src=${items.thumbnail} alt="">
          <p>${items.title}</p>
          <div class="price">₹ ${items.price}</div>
          <button>Buy Now</button>
        </a>
      `;
    });

    container.innerHTML = total;
  })
  .catch(err => {
    loading.innerText = "Failed to load products ❌";
    console.log(err);
  });