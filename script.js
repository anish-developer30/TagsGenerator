let tag = document.querySelector("#tags");
let input = document.querySelector("#input");

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();

    let li = document.createElement("li");
    let input_val = input.value.trim();

    if (input_val !== "") {
      li.innerText = input_val;
      li.innerHTML += `<button class='delete-btn'>X</botton>`;
      tag.appendChild(li);
      input.value = " ";
    }
  }
});

tag.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentNode.remove();
  }
});
