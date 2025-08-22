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
fetchData("/comment", createFood);
const commentWrapperEl = document.querySelector(".comment-wrapper");
function createFood(data) {
  data?.comments?.forEach((item) => {
    const cardEl = document.createElement("div");
    cardEl.className = "comment-card";

    cardEl.innerHTML = `
                    <div class="comment-card">
                <div class="comment-card__image">
                    <img loading="lazy" src="../assets/download.jpeg" alt="">
                </div>
                <div class="comment-card__body">
                    <h3>@${item.user.username}</h3>
                    <p>${item.body}</p>
                </div>
            </div>
        `;
    commentWrapperEl.appendChild(cardEl);
  });
}
