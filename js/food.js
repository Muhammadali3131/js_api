const API = "https://dummyjson.com";

const getData = async (endPoint) => {
  const data = await fetch(`${API}/${endPoint}`);
  const parse = await data.json();
  await drawEats(parse);
};

const foodWrapper = document.querySelector(".food-wrapper");

async function drawEats(data) {
  console.log(data.recipes);

  data.recipes.forEach((food) => {
    const cardEl = document.createElement("div");
    cardEl.classList.add("food-card");
    const { image, rating, name } = food;
    cardEl.innerHTML = `
                <div class="food-card__image">
                    <img src=${image} alt="">
                </div>
                <div class="food-card__body">
                    <h3>${name}</h3>
                    <p>${rating}</p>
                </div>`;
    foodWrapper.appendChild(cardEl);
  });
}

getData("recipes");

