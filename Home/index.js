const teste = document.querySelector("#ul");


window.addEventListener('load', () => {
    carregaTodos();
});

function onSubmit(event){
  
    event.preventDefault();
   
    var inputpoke = document.querySelector("input").value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputpoke}`)
        .then(response =>{
         return response.json()
    })
        .then(data => {
        console.log(data);
        const ul = document.querySelector("#ul");
        const ul1 = document.querySelector("#ul");
        const lis = document.querySelectorAll("#ul li");
        
        const pokemonArr = [...lis];
        
        pokemonArr.map((pokemon)=>{
            return pokemon.remove()
        });
         
        const newPoke = document.createElement("li");
        newPoke.className = "pokecard";
        const link = document.createElement("a");
        link.setAttribute('href', "https://www.google.com.br/");
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
            typePoke.innerText = currentType.type.name;
            newPokediv.appendChild(typePoke);
            if(i == 0 ){
                changeColor(currentType.type.name,typePoke,newPoke);
                i = i+ 1;
            }
            else {
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
        //verificar depois pois ficou feio trazer a imagem de 404 quando n acha o poke
        //else{
          //  imagePoke.setAttribute('src', `../assets/notfoundpoke.jpg`);
            //newPoke.appendChild(imagePoke);
        //}
        link.appendChild(newPoke);

        ul.appendChild(link);
        console.log(ul);

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


function changeColor(type,typePoke,newPoke){

    switch(type){
        case 'grass':
            newPoke.style.backgroundColor = "#63bb5b";
            typePoke.style.backgroundColor = "#a7db8d"; 
        break;
        case 'normal':
            newPoke.style.backgroundColor = "#9099a1";
            typePoke.style.backgroundColor = "#c6c6a7"; 
        break;
        case 'fighting':
            newPoke.style.backgroundColor = "#ce4069";
            typePoke.style.backgroundColor = "#d67873"; 
        break;
        case 'flying':
            newPoke.style.backgroundColor = "#8fa8dd";
            typePoke.style.backgroundColor = "#c6b7f5"; 
        break;
        case 'poison':
            newPoke.style.backgroundColor = "#ab6ac8";
            typePoke.style.backgroundColor = "#c183c1"; 
        break;
        case 'ground':
            newPoke.style.backgroundColor = "#d97746";
            typePoke.style.backgroundColor = "#ebd69d"; 
        break;
        case 'rock':
            newPoke.style.backgroundColor = "#c7b78b";
            typePoke.style.backgroundColor = "#d1c17d"; 
        break;
        case 'bug':
            newPoke.style.backgroundColor = "#90c12c";
            typePoke.style.backgroundColor = "#c6d16e"; 
        break;
        case 'ghost':
            newPoke.style.backgroundColor = "#5269ac";
            typePoke.style.backgroundColor = "#a292bc"; 
        break;
        case 'steel':
            newPoke.style.backgroundColor = "#5a8ea1";
            typePoke.style.backgroundColor = "#d1d1e0"; 
        break;
        case 'fire':
            newPoke.style.backgroundColor = "#ff9c54";
            typePoke.style.backgroundColor = "##f5ac78"; 
        break;
        case 'water':
            newPoke.style.backgroundColor = "#4d90d5";
            typePoke.style.backgroundColor = "#9db7f5"; 
        break;
        case 'electric':
            newPoke.style.backgroundColor = "#f3d23b";
            typePoke.style.backgroundColor = "#fae078"; 
        break;
        case 'psychic':
            newPoke.style.backgroundColor = "#f97176";
            typePoke.style.backgroundColor = "#fa92b2"; 
        break;
        case 'ice':
            newPoke.style.backgroundColor = "#74cec0";
            typePoke.style.backgroundColor = "#bce6e6"; 
        break;
        case 'dragon':
            newPoke.style.backgroundColor = "#0a6dc4";
            typePoke.style.backgroundColor = "#a27dfa"; 
        break;
        case 'dark':
            newPoke.style.backgroundColor = "#5a5366";
            typePoke.style.backgroundColor = "#a29288"; 
        break;
        case 'fairy':
            newPoke.style.backgroundColor = "#ec8fe6";
            typePoke.style.backgroundColor = "#f4bdc9"; 
        break;
    default:
        console.log("teste");   
    }
}



function changeColorSpan(type,typePoke){
    switch(type){
        case 'grass':
            
            typePoke.style.backgroundColor = "#a7db8d"; 
        break;
        case 'normal':
            
            typePoke.style.backgroundColor = "#c6c6a7"; 
        break;
        case 'fighting':
            
            typePoke.style.backgroundColor = "#d67873"; 
        break;
        case 'flying':
            
            typePoke.style.backgroundColor = "#c6b7f5"; 
        break;
        case 'poison':
            
            typePoke.style.backgroundColor = "#c183c1"; 
        break;
        case 'ground':
            
            typePoke.style.backgroundColor = "#ebd69d"; 
        break;
        case 'rock':
            
            typePoke.style.backgroundColor = "#d1c17d"; 
        break;
        case 'bug':
            
            typePoke.style.backgroundColor = "#c6d16e"; 
        break;
        case 'ghost':
            
            typePoke.style.backgroundColor = "#a292bc"; 
        break;
        case 'steel':
            
            typePoke.style.backgroundColor = "#d1d1e0"; 
        break;
        case 'fire':
            
            typePoke.style.backgroundColor = "#f5ac78"; 
        break;
        case 'water':
            
            typePoke.style.backgroundColor = "#9db7f5"; 
        break;
        case 'electric':
            typePoke.style.backgroundColor = "#fae078"; 
        break;
        case 'psychic':
            
            typePoke.style.backgroundColor = "#fa92b2"; 
        break;
        case 'ice':
            
            typePoke.style.backgroundColor = "#bce6e6"; 
        break;
        case 'dragon':
            
            typePoke.style.backgroundColor = "#a27dfa"; 
        break;
        case 'dark':
            
            typePoke.style.backgroundColor = "#a29288"; 
        break;
        case 'fairy':
            
            typePoke.style.backgroundColor = "#f4bdc9"; 
        break;
    default:
        console.log("teste");   
    }
}




let global = 0;
var arrPoke = [];
var newArrPoke = [];

function carregaTodos(){
    var x = 0 ;
    var y = 1;
    var teste = 20;

        const load = document.querySelector("#load");
        load.style.visibility = "visible";
        
                fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${global}&limit=20`)
                .then(response =>{
                return response.json()
            })
                .then(data => {
                  
                try{
                    for(x =0 ; x <20; x++){
                 
                        const url = data.results[x].url;
                        fetch(url)
                        .then(response => {
                            return response.json()
                        })
                        .then (data => {
                            
                            arrPoke.push(data);
                            newArrPoke= arrPoke.sort(function(a, b){return a.id - b.id});
                          
                            if(y == teste){
                                ;
                                insereTeste(newArrPoke);
                                teste = teste + 20;
                            }
                            else{
                                y++;
                            };
                       
                            return data;
                        });
                       
                     }; 
                } 
                catch{
                    load.style.visibility = "hidden"; 
                };
                
                
                 
             });
        global +=20; 
                
      
 
} ;


// scroll infinito
teste.addEventListener('scroll', function() {
  
    if (teste.scrollTop + teste.clientHeight > teste.scrollHeight) {
       
        carregaTodos();
    }
  });


  /////
  /////
  let soma = 0;
  function insereTeste(newArrPoke){
    const load = document.querySelector("#load");
    
        var x  ;
        for(x= soma;x<newArrPoke.length;x++){
           const ul = document.querySelector("#ul");
           const newPoke = document.createElement("li");
           newPoke.className = "pokecard";
           const link = document.createElement("a");
           link.setAttribute('href', `../Info/index.html?id=${newArrPoke[x].id}`);
           const newPokediv = document.createElement("div");
           newPokediv.className = "pokeinfo";
           const idPoke = document.createElement("p");
           idPoke.innerText = newArrPoke[x].id;
           const namePoke = document.createElement("h2");
           namePoke.innerText = newArrPoke[x].name;


           newPokediv.appendChild(idPoke);
           newPokediv.appendChild(namePoke);

           var i = 0;
           newArrPoke[x].types.map((currentType)=> {
               const typePoke = document.createElement("span");
               typePoke.innerText = currentType.type.name;
               newPokediv.appendChild(typePoke);
               if(i == 0 ){
                   changeColor(currentType.type.name,typePoke,newPoke);
                   i = i+ 1;
               }
               else {
                   changeColorSpan(currentType.type.name,typePoke);
               }
                       
               return currentType.type.name
           });
               
           const imagePoke = document.createElement("img");
           imagePoke.setAttribute('src', `../assets/pokemon/${newArrPoke[x].id}.svg`);
           newPoke.appendChild(newPokediv);

           if(newArrPoke[x].id < 650){
               newPoke.appendChild(imagePoke);
           }
          

           link.appendChild(newPoke);
          
           ul.appendChild(link);
           load.style.visibility = "hidden";
           ul.style.visibility = "visible"
           

       }  
       console.log("teste");
       load.style.visibility = "hidden";
       soma = soma + 20;
                   
 };

       




