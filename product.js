function goBack() {
  window.location.href = "index.html";
}

const params= new URLSearchParams(window.location.search)
const id = params.get("id")

const products =  fetch(`https://dummyjson.com/products/${id}`)
 .then(req => req.json())
    .then(data => {
        console.log(data)
        document.getElementById("product-detail").innerHTML=`
        
        <div class="product-detail-card">
            <img src=${data.thumbnail} alt="">
            <div >
           
            <h2>${data.title}</h2>
            <p>${data.description}</p>
            <div class="price">₹ ${data.price}</div>
            <button class="buy-btn">Buy Now</button>
             </div>
        </div>
        `
    }).catch(err => console.log("API not found"));