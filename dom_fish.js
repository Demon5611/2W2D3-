let box = document.createElement("div");
box.style.cssText = `
width:340px;
height:340px;
background-color:red;
font-size: 14px;`;
document.body.appendChild(box);

let inputSpace = document.createElement("div");
inputSpace.id = "very-important-message";

document.body.appendChild(inputSpace);

const input1 = document.createElement("input");
input1.placeholder = "property";
input1.type = "text";
inputSpace.appendChild(input1);

const input2 = document.createElement("input");
input2.placeholder = "value";
input2.type = "text";
inputSpace.appendChild(input2);

let btn = document.createElement("button");
btn.style.color = "grey";
btn.innerText = "Push me";
document.body.appendChild(inputSpace);
document.body.appendChild(btn);

function chengeStyle() {
  //  не получается добавить текст на цветной блок при нажатии кнопки
  inputSpace.id = "very-important-message";
  //   inputSpace.createElement("p");
  box.style[input1.value] = [input2.value];
}

btn.addEventListener("click", chengeStyle);
