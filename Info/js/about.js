var urlParams = new URLSearchParams(window.location.search);
var idPoke = urlParams.get('id');
const load = document.querySelector("#load");
load.style.visibility = "visible";

fetch(`https://pokeapi.co/api/v2/pokemon/${idPoke}`)
.then(response =>{
    return response.json();
})
.then(data => {
    const divMain = document.querySelector("#habilidades");
    const divSec = document.querySelector("#peso-alt");
    const height = document.createElement("h2");
    const weight = document.createElement("h2");
    const h1 = document.createElement("h1");
    
    divMain.appendChild(h1);
    h1.innerText = "Skills";
    if(data.abilities.length == 0 ){
        const habilidade = document.createElement("span");
        habilidade.className = "span";
        habilidade.innerText = "Não foi encontrado informação sobre as habilidades do Pokemon acima";
        divMain.appendChild(habilidade);
    }
    else{
        data.abilities.map((ability) =>{
       
            const habilidade = document.createElement("span");
            habilidade.className = "span";
           
            habilidade.innerText = ability.ability.name;
            
            
    
            fetch(ability.ability.url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                data.effect_entries.map((effects) => {
                    
                    const p = document.createElement("p");
                    p.innerText = effects.effect;
                    habilidade.appendChild(p);
                });;
            }); 
    
            divMain.appendChild(habilidade);
            
        });
    }

    height.innerText = "Height"
    const spanHeight = document.createElement("span");
    spanHeight.innerText = data.height

    weight.innerText = "Weight"
    const spanWeight = document.createElement("span");
    spanWeight.innerText = data.weight;

    divSec.appendChild(height);
    divSec.appendChild(spanHeight);
    divSec.appendChild(weight);
    divSec.appendChild(spanWeight);


    load.style.visibility = "hidden";

    return data;
});
