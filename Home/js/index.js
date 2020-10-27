window.addEventListener('load', () => {
    carregaTodos();
});

let global = 0;
let arrPoke = [];

function carregaTodos(){
    let x = 0 ;
    let y = 1;
    let teste = 30;
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
                        ordenaPoke(newArrPoke);
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
};
