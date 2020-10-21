const teste = document.querySelector("#ul");


window.addEventListener('load', () => {
    carregaTodos();
});


function onSubmit(event){
  
    event.preventDefault();
   
    var inputpoke = document.querySelector("input").value;
    if(inputpoke.length == 0){
        alert("O campo esta vazio!!!")
        console.log("DIGITA AI CORNAO");
    }
    else{
        fetch(`https://pokeapi.co/api/v2/pokemon/${inputpoke}`)
      
        .then(response =>{
            if(response.status == 404){
                console.log("n tem esse poke corno");
                return;
            }
         return response.json()
         
    })
        .then(data => {
            if(data == undefined){
                alert("Pokemon não encontrado!!!");
            }
            else{
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
            }
           
            
            return data
          
            
        
        });
    }
    
}



let global = 0;
var arrPoke = [];
var newArrPoke = [];

function carregaTodos(){
    var x = 0 ;
    var y = 1;
    var teste = 30;

        const load = document.querySelector("#load");
        load.style.visibility = "visible";
        
                fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${global}&limit=30`)
                .then(response =>{
                return response.json()
            })
                .then(data => {
                  
                try{
                    for(x =0 ; x <30; x++){
                 
                        const url = data.results[x].url;
                        fetch(url)
                        .then(response => {
                            return response.json()
                        })
                        .then (data => {
                            
                            arrPoke.push(data);
                            newArrPoke= arrPoke.sort(function(a, b){return a.id - b.id});
                          
                            if(y == teste){
                                insereTeste(newArrPoke);
                                teste = teste + 30;
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
        global +=30; 
                
      
 
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
    
       load.style.visibility = "hidden";
       soma = soma + 30;
                   
 };

       




