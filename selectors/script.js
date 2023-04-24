let rand = (min, max) => Math.floor(Math.random() * (max - min)) + min

for(x of document.querySelectorAll(".important")){
    x.title = "This is an important item"
}

for(img of document.querySelectorAll("img")){
    if(img.class != "important"){
        img.style.display = "none"
    }
}

for(text of document.querySelectorAll("p")){
    console.log(text.innerText)
    if(text.classList.length > 0){
        console.log(text.className)
    }
}

for(text of document.querySelectorAll("p")){
    if(!text.classList.length > 0){
        text.style.color = "rgb("+rand(0, 256)+","+rand(0, 256)+","+rand(0, 256)+")"
    }
}