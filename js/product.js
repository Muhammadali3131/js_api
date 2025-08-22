function fetchData(endpoint, callback) {
  const promise = fetch(`https://dummyjson.com${endpoint}`);
  promise
    .then((response) => {
      if (!response.ok) {
        throw new Error("Somesing wents wrong");
      }
      return response.json();
    })
    .then((res) => {
      callback(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally();
}
fetchData("/product", createFood);
const productWrapperEl = document.querySelector(".product-wrapper");
function createFood(data) {
  data?.products?.forEach((item) => {
    const cardEl = document.createElement("div");
    cardEl.className = "product-card";

    cardEl.innerHTML = `
                    <div class="product-card">
                <div class="product-card__image">
                    <img loading="lazy" src="${item.thumbnail}" alt="">
                </div>
                <div class="product-card__body">
                    <h3>${item.title}</h3>
                    <h4>${item.price} $</h4>
                    <p>${item.description} </p>
                </div>
            </div>
        `;
    productWrapperEl.appendChild(cardEl);
  });
}
