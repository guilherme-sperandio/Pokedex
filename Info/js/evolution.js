var urlParams = new URLSearchParams(window.location.search);
var idPoke = urlParams.get('id');

let evolution = [];

async function getContent(){
    try {
        const response = await fetch('http://localhost:4567/',{
            headers:{
                Authorization: idPoke,
            }
        });
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
    
    incluiPoke(pokeArr[0]);
}