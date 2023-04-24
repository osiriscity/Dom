const members = ["Abel Fortunati", "Anthony Denayer", "Bruno Lafont","Delphine Lecorney","Emilien Volkaert","Ethen Dias Marques","Julien Arnould","Louka Cadau","Nikko Di Bernardo","Willy Seghers","Alexandra Petit","Benjamin Mayeur","Ismaël Mesmoudi","Jodie Addis","Loïc Lion","Luciano Ciarrocchi","Marine Fassin","Noa Cayphas","Steve Grard","Sylvain Jacobs","Thomas M"];
const article = document.querySelector("article");

members.forEach(member => {

  // create a element section
  const section = document.createElement("section")

  // random backgroundcolor
  const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16)
  section.style.backgroundColor = randomColor

  // color text change for backgroundcolor
  const luminosity = (0.299 * parseInt(randomColor.substr(1,2), 16)) + (0.587 * parseInt(randomColor.substr(3,2), 16)) + (0.114 * parseInt(randomColor.substr(5,2), 16))
  section.style.color = (luminosity > 128) ? "black" : "white"

  // create a p for learner
  const paragraphe = document.createElement("p")
  paragraphe.textContent = member

  // add p  at section
  section.appendChild(para)

  // add section at article
  article.appendChild(section)
});

for (let i = article.children.length; i >= 0; i--) {
  article.appendChild(article.children[Math.random() * i | 0]);
}