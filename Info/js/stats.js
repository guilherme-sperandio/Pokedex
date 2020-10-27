var urlParams = new URLSearchParams(window.location.search);
var idPoke = urlParams.get('id');


fetch(`https://pokeapi.co/api/v2/pokemon/${idPoke}`)
.then(response => {
    return response.json();
})
.then(data => {
    const divMain = document.querySelector("#status");

    data.stats.map((stat) => {
        const divInfo = document.createElement("div");
        divInfo.className = "info";
        const divStatus = document.createElement("div");
        const img = document.createElement("img");
        const span = document.createElement("span");
        let nameStat =stat.stat.name;
        nameStat = nameStat.charAt(0).toUpperCase() + nameStat.slice(1);  
        span.innerText = nameStat;
        const p = document.createElement("p");
        p.innerText = stat.base_stat;
       
        if(stat.stat.name == "hp"){
            img.setAttribute('src', `../assets/heart.png`);
        }
        if(stat.stat.name == "attack"){
            img.setAttribute('src', `../assets/swords.png`);
        }
        if(stat.stat.name == "special-attack"){
            img.setAttribute('src', `../assets/magic.png`);
        }
        if(stat.stat.name == "defense" || stat.stat.name == "special-defense"){
            img.setAttribute('src', `../assets/shield.png`);
        }
        if(stat.stat.name == "speed"){
            img.setAttribute('src', `../assets/speed.png`);
        }

        divStatus.appendChild(span);
        divStatus.appendChild(p);
        divInfo.appendChild(divStatus);
        divInfo.appendChild(img);
        divMain.appendChild(divInfo);

    })
    return data;
});