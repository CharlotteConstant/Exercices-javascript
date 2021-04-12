//--Cibler la balise footer de 2 manières : par son attribut ìd (avec la méthode dédiée et avec querySelector) et lui ajouter la classe footer--

let footer = document.querySelector("#footer");

footer.classList.add("footer");

console.log(footer);

//Autre solution: let footer = document.getElementById(`footer`);

//--Ajouter une balise p à la fin de main contenant ce texte : Ceci est un contenu <strong>très important</strong>--

let element = document.getElementById(`main`);
element.innerHTML += "Ceci est un contenu <strong>très important</strong>";

console.log(element);

//--Cibler toutes les balises p de la page et changer la couleur du texte (#000F00) et remplacer la classe paragraph par la classe text--

let paragraphe = document.querySelectorAll("p");
for (let i = 0; i < paragraphe.length; i++) {
  paragraphe[i].style.color = "#00FF00";
  paragraphe[i].classList.replace("paragraph", "text");
}

console.log(paragraphe);

//Ajouter une balise ul dans la balise header, avec 4 li à l'intérieur (avec class= list_element), data, ajout de texte.

let newElement = document.createElement("ul");
newElement.setAttribute("id", "important-list");
newElement.classList.add("list");

for (let j = 0; j < 4; j++) {
  let list = document.createElement("li");
  list.classList.add("list_element");
  list.dataset.num = j + 1;
  list.textContent = `Ceci est l'élement n°` + j;
  newElement.appendChild(list);
}

let elementHeader = document.querySelector("header").appendChild(newElement);

console.log(newElement);
console.log(elementHeader);
