
const messageEvolution = document.querySelector("#message-evo");
function incluiPoke(pokeArr){
    console.log(pokeArr);
    if(pokeArr == "Vaporeon/Jolteon/Flareon/Espeon/Umbreon/Leafeon/Glaceon/Sylveon" || pokeArr == "Slowbro/Slowking"){
        console.log("a");
        pokeArr = arrumaArr(pokeArr);
    }
    if(pokeArr.length == 0){
        console.log("pokemon sem evo");
        messageEvolution.style.display = "block";
    }
    else{
        messageEvolution.style.display = "none";
        for(i=0; i < pokeArr.length ; i++){
            let lowCase = pokeArr[i];
            lowCase = lowCase.charAt(0).toLowerCase() + lowCase.slice(1);
            fetch(`https://pokeapi.co/api/v2/pokemon/${lowCase}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                
                const divPrincipal = document.querySelector("#principal");
                const link = document.createElement("a");
                link.setAttribute('href', ` ../Info/index.html?id=${data.id}`)
                const divPokecard = document.createElement("div");
                divPokecard.className = "pokecard";
                const pokeImg = document.createElement("img");
                pokeImg.setAttribute('src', `../../assets/pokemon/${data.id}.svg`);
                const article = document.createElement("article");
                const idPoke = document.createElement("p");
                idPoke.innerText = data.id;
                const namePoke = document.createElement("h1");
                namePoke.innerText = data.name;
    
                article.appendChild(idPoke);
                article.appendChild(namePoke);
    
                var i = 0;
                data.types.map((currentType)=> {
                    const typePoke = document.createElement("span");
                    let upperCase = currentType.type.name;
                    upperCase = upperCase.charAt(0).toUpperCase() + upperCase.slice(1);
                    typePoke.innerText= upperCase;
                    article.appendChild(typePoke);
                    if(i == 0){
                        changeColor(currentType.type.name,divPokecard);
                        changeColorSpan(currentType.type.name,typePoke);
                        i = i+ 1;
                    }
                    else{
                        changeColorSpan(currentType.type.name,typePoke);
                    }
                    return currentType.type.name
                });
    
                divPokecard.appendChild(pokeImg);
                divPokecard.appendChild(article);
                link.appendChild(divPokecard);
                divPrincipal.appendChild(link);
            });
        }
    }
    
}
messageEvolution.style.display = "none";