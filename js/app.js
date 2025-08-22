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
fetchData("/users", createUser);
const userWrapperEl = document.querySelector(".user-wrapper");
function createUser(data) {
  data?.users?.forEach((item) => {
    const cardEl = document.createElement("div");
    cardEl.className = "user-card";

    cardEl.innerHTML = `
                    <div class="user-card">
                <div class="user-card__image">
                    <img loading="lazy" src="${item.image}" alt="">
                </div>
                <div class="user-card__body">
                    <h3>${item.firstName + item.lastName}</h3>
                    <p>Age - ${item.age} </p>
                </div>
            </div>
        `;
    userWrapperEl.appendChild(cardEl);
  });
}

  function toggleSidebar() {
    const navbarLists = document.querySelector(".navbar-lists");
    navbarLists.classList.toggle("active"); 
  }


// alert("salom")
// prompt("age ?")
// confirm("are you sure?")

// window.alert()
// alert()

// url, options
// fetch("qovun.uz", {
//     method: "GET",
// })

// fetch("qovun.uz", {
//     method: "POST",
//     body: {}
// })

// fetch("qovun.uz/2", {
//     method: "DELETE",
// })

// fetch("qovun.uz/2", {
//     method: "PETCH",
//     body: {}
// })
// const promise = new Promise((resolve, reject)=> {
//     if(true){
//         resolve(5)
//     }else{
//         reject("xato")
//     }
// })

// promise
//     .then(res => res * 2)
//     .then(res => res / 5)
//     .then(res => console.log(res))
//     .catch(err => console.log(err))
