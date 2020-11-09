
let newArrPoke = [];
let contadorParaGerarPokes = 0;

function ordenaPoke(newArrPoke){
    const load = document.querySelector("#load");
    let x  ;
  

    for(x= contadorParaGerarPokes;x<newArrPoke.length;x++){

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

        let i = 0;
        newArrPoke[x].types.map((currentType)=> {
            const typePoke = document.createElement("span");
            
            let upperCase = currentType.type.name;
            upperCase = upperCase.charAt(0).toUpperCase() + upperCase.slice(1);
            typePoke.innerText= upperCase;
           
            newPokediv.appendChild(typePoke);
            if(i == 0 ){
                changeColor(currentType.type.name,newPoke);
                changeColorSpan(currentType.type.name,typePoke);
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
    contadorParaGerarPokes = contadorParaGerarPokes + 30;            
};