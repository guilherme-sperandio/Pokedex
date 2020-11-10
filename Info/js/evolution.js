var urlParams = new URLSearchParams(window.location.search);
var idPoke = urlParams.get('id');

let evolution = [];

async function getContent(){
    try {
        const response = await fetch(`https://backend-poke.herokuapp.com/?idpoke=${idPoke}`);
        console.log("ok");
        const [data] = await response.json();
        
        let pokeName = data.name;
        evolution.push(data.family.evolutionLine);
        verificaEvo(pokeName,evolution);
    } catch (error) {
        console.log('errou');
    }
}

getContent();




function verificaEvo(pokeName, pokeArr){
   
    for (i=0;i<pokeArr[0].length; i++){
        if(pokeName == pokeArr[0][i]){
            pokeArr[0].splice([i],1);
            
        }
    }
    console.log(pokeArr[0]);
    incluiPoke(pokeArr[0]);
}