let ul = document.querySelector("ul");
let newCard = document.createElement("li");
newCard.id = "fish-9";
newCard.className = "fish-list-card flex-column light";
ul.appendChild(newCard);

let newImg = document.createElement("img");
newImg.className = "fish-list-card-image";
newImg.src = "./images/green-wrasse.jpg";
newImg.alt = "fish pic";
newCard.appendChild(newImg);

let newSpan = document.querySelector("span");
newSpan.className = "fish-list-card-name";
newSpan.innerText = "Green Wrasse";
newCard.appendChild(newSpan);

let all_Ul = document.querySelectorAll("li");
for (let i = 0; i < all_Ul.length; i++) {
  btn = document.createElement("botton");
  btn.id = "botton";
  btn.innerText = "Купить";
  btn.style.cssText = `
  background-color: #1234;
  font-size: 14px;
  size-bottom: 40px;
  margin-bottom: 20px`;

  btn.addEventListener("click", () => {
    let name = document.querySelectorAll(".fish-list-card-name");
    alert("Вы хотите купить " + name[i].innerText + " ?");
  });

  all_Ul[i].appendChild(btn);
}
