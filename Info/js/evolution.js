var urlParams = new URLSearchParams(window.location.search);
var idPoke = urlParams.get('id');



fetch(`https://pokeapi.co/api/v2/pokemon/${idPoke}`)
.then(response => {
    return response.json();
})
.then(data => {


    return data;
});





