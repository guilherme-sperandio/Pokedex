
function search(event){
    event.preventDefault();
    var inputpoke = document.querySelector("input").value;
    let lowCase = inputpoke;
    lowCase = lowCase.toLowerCase();
    if(inputpoke.length == 0){
        showError(inputpoke.length,1);
    }
    else{
        fetch(`https://pokeapi.co/api/v2/pokemon/${lowCase}`)
        .then(response =>{
            if(response.status == 404){
                return;
            }
         return response.json()
         
        })
        .then(data => {
            
            if(data == undefined){
                showError(inputpoke.length,data);
                document.querySelector("input").value = "";
            }
            else{
                const back = document.querySelector("#back");
                back.style.visibility = "visible";
                const load = document.querySelector("#load");
                load.style.visibility = "visible";
                document.querySelector("input").value = "";
                const ul = document.querySelector("#ul");
                const lis = document.querySelectorAll("#ul li");
                const todosLinks = document.querySelectorAll("#ul a");
                const todosLinksArr = [...todosLinks];
                const pokemonArr = [...lis];

                todosLinksArr.map((as) =>{
                    return as.remove();
                });
                pokemonArr.map((pokemon)=>{
                    return pokemon.remove()
                });
                 
                const newPoke = document.createElement("li");
                newPoke.className = "pokecard";
                const link = document.createElement("a");
                link.setAttribute('href', `../Info/index.html?id=${data.id}`);
                const newPokediv = document.createElement("div");
                newPokediv.className = "pokeinfo";
                const idPoke = document.createElement("p");
                idPoke.innerText = data.id;
                const namePoke = document.createElement("h2");
                namePoke.innerText = data.name;
        
                newPokediv.appendChild(idPoke);
                newPokediv.appendChild(namePoke);
                var i = 0;
                data.types.map((currentType)=> {
                    const typePoke = document.createElement("span");
                    let upperCase = currentType.type.name;
                    upperCase = upperCase.charAt(0).toUpperCase() + upperCase.slice(1);
                    typePoke.innerText= upperCase;
                    newPokediv.appendChild(typePoke);
                    if(i == 0){
                        changeColor(currentType.type.name,newPoke);
                        changeColorSpan(currentType.type.name,typePoke);
                        i = i+ 1;
                    }
                    else{
                        changeColorSpan(currentType.type.name,typePoke);
                    }
                    return currentType.type.name
                });

                const imagePoke = document.createElement("img");
                imagePoke.setAttribute('src', `../assets/pokemon/${data.id}.svg`);
        
                newPoke.appendChild(newPokediv);
        
                if(data.id < 650){
                    newPoke.appendChild(imagePoke);
                }
              
                link.appendChild(newPoke);
                ul.appendChild(link);
              
                const checkImage = document.querySelector(".imagepoke");
                if(checkImage){
                    checkImage.remove();
                }
        
                if (data.id < 650){
                    const imageDex = document.querySelector("#background-pokemon");
                    const newDexPoke = document.createElement("img");
                    newDexPoke.className = "imagepoke";
                    newDexPoke.setAttribute('src', `../assets/pokemon/${data.id}.svg`);
                    imageDex.appendChild(newDexPoke);
                }
        
                const checkDex = document.querySelector(".pokedex");
                if(checkDex){
                    checkDex.remove();
                }
        
                if(data.id >= 650){
                   const dex = document.querySelector("#background-pokemon");
                    const newDex = document.createElement("img");
                    newDex.className = "pokedex";
                    newDex.setAttribute('src', `../assets/notfound.jpg`);
                    dex.appendChild(newDex);
                }

                else{
                    const dex = document.querySelector("#background-pokemon");
                    const newDex = document.createElement("img");
                    newDex.className = "pokedex";
                    newDex.setAttribute('src', `../assets/pokedexon.jpg`);
                    dex.appendChild(newDex);
                }

                load.style.visibility = "hidden";
            }
           
            return data
          
        });
        
    }
    
}