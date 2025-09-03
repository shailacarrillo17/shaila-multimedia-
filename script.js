const titulo = document.getElementById("tituloprincipal");  
let estadoOriginal = true;
  
titulo.innerText = "Esta es la story";  

titulo.addEventListener("click", () => { 
    if(estadoOriginal === true) {
    titulo.innerText = "Shaiii"; 
     titulo.style.color = "blue";
}

else {
    titulo.innerText = "Shaiii";
    titulo.style.color = "black";
}

estadoOriginal = !estadoOriginal;
})