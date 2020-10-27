const error = document.querySelector("#error");

function showError (length,data){
    if(document.querySelector(".modal-error")){
        document.querySelector(".modal-error").remove();
    }
   
    const modal =  document.createElement("div");
    modal.className = "modal-error";
    const h2 = document.createElement("h2");
    const img = document.createElement("img");
    img.setAttribute("src","../assets/remove.svg");

    if(length == 0){
       h2.innerText = "Campo de pesquisa está vazio";
    }
    if(data == undefined){
        h2.innerText = "Pokemon não encontrado";
    }
    
    modal.appendChild(h2);
    modal.appendChild(img);
    error.appendChild(modal);
    error.style.visibility = "visible";

}

function closeError(){
    error.style.visibility = "hidden";
}