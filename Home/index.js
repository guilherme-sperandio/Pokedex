

function onSubmit(event){
  
    event.preventDefault();
    var inputpoke = document.querySelector("input").value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputpoke}`)
        .then(response =>{
         return response.json()
    })
        .then(data => {
        const ul = document.querySelector("#jorge");
        const lis = document.querySelectorAll("#jorge li");
        const pokemonArr = [...lis];
        pokemonArr.map((pokemon)=>{
            return pokemon.remove()
        });
         
        const newPoke = document.createElement("li");
        newPoke.className = "pokecard";
        const newPokediv = document.createElement("div");
        newPokediv.className = "pokeinfo";
        const idPoke = document.createElement("p");
        idPoke.innerText = data.id;
        const namePoke = document.createElement("h2");
        namePoke.innerText = data.name;

        newPokediv.appendChild(idPoke);
        newPokediv.appendChild(namePoke);
        data.types.map((currentType)=> {
            const typePoke = document.createElement("span");
            typePoke.innerText = currentType.type.name;
            newPokediv.appendChild(typePoke);
            return currentType.type.name
        });
        const imagePoke = document.createElement("img");
        
        
        imagePoke.setAttribute('src', `../assets/pokemon/${data.id}.svg`);

        newPoke.appendChild(newPokediv);

        if(data.id < 650){
            newPoke.appendChild(imagePoke);
        }
        

        ul.appendChild(newPoke);

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
        
        return data
        
    });
}




