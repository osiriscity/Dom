console.log(document.title)
document.title = "modifying the dom"
console.log(document.title)

document.body.style.backgroundColor = "#FF69B4"

const elem = document.body

for (x of elem.children) {
    console.log(x.tagName);
  }