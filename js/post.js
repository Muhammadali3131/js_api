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
fetchData("/post", createPost);
const postWrapperEl = document.querySelector(".post-wrapper");
function createPost(data) {
  data?.posts?.forEach((item) => {
    const cardEl = document.createElement("div");
    cardEl.className = "post-card";

    cardEl.innerHTML = `
                    <div class="post-card">
                <div class="post-card__image">
                    <img loading="lazy" src="../assets/image.png" alt="">
                </div>
                <div class="post-card__body">
                    <h3>${item.title}</h3>
                    <p>${item.body} </p>
                </div>
            </div>
        `;
    postWrapperEl.appendChild(cardEl);
  });
}
