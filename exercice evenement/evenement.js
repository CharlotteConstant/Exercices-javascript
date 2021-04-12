//au clic dans #wrapper (n'importe où), dupliquer le <span>

let span = document.querySelector("#wrapper");

span.addEventListener("click", function () {
  let cln = span.cloneNode(true);
  span.appendChild(cln);
});

console.log(span);
//au clic sur le lien #inner, ajouter dans la console le texte "Le lien a été cliqué", mais sans dupliquer le span

let inner = document.querySelector("#inner");
inner.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("le lien a été cliqué");
  event.stopPropagation();
});

//lorsqu'on tape quelque chose dans le champ email, afficher le contenu du champ #email dans #form-result (pendant que l'on tape ou lorsqu'on sort du champ)
function afficher() {
  let saisie = document.querySelector("#email").value;
  let formResult = document.querySelector("#form-result");
  formResult.innerHTML = `saisie:` + saisie;
}
document.querySelector("#email").addEventListener("keypress", function () {
  afficher();
});

//ajouter (en js) l'attribut type="submit" au bouton et afficher le contenu du champ email quand le formulaire est soumis (et éviter le rechargement de la page)

let button = document.querySelector("form.form button");
let form = document.querySelector("form.form");
let formResult = document.querySelector("#form-result");
button.setAttribute("type", "submit");

function resultat() {
  formResult.textContent = email.value;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  resultat();
  console.log(email.value);
});
