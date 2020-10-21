var urlParams = new URLSearchParams(window.location.search);
var idPoke = urlParams.get('id');



fetch(`https://pokeapi.co/api/v2/pokemon/${idPoke}`)
.then(response =>{
    return response.json();
})
.then(data => {
    const divMain = document.querySelector("#pokeheader");
    const divPrincipal = document.createElement("div");
    divPrincipal.className = "principal";
    const pokeImg = document.createElement("img");
    if(idPoke < 650){
        pokeImg.setAttribute('src' , `../assets/pokemon/${idPoke}.svg`);
    }
    else{
        pokeImg.setAttribute('src' , `../assets/notfoundpoke.jpg`);
    }
    const divInfo = document.createElement("div");
    divInfo.className = "pokeinfo";
    const p = document.createElement("p");
    p.innerText = idPoke;
    const h1 = document.createElement("h1");
    h1.innerText = data.name;
    const label = document.querySelectorAll("label");
    

    divInfo.appendChild(p);
    divInfo.appendChild(h1);

    var i = 0;
        data.types.map((currentType)=> {
            
            const typePoke = document.createElement("span");
            typePoke.innerText = currentType.type.name;
            divInfo.appendChild(typePoke);
            if(i == 0 ){
                changeColor(currentType.type.name,typePoke,divPrincipal);
                i = i+ 1;
            }
            else {
                changeColorSpan(currentType.type.name,typePoke);
            }
            
            return currentType.type.name
        });

    divPrincipal.appendChild(pokeImg)
    divPrincipal.appendChild(divInfo);

    divMain.appendChild(divPrincipal)


    return data;
});