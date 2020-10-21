var urlParams = new URLSearchParams(window.location.search);
var idPoke = urlParams.get('id');



fetch(`https://pokeapi.co/api/v2/pokemon/${idPoke}`)
.then(response => {
    return response.json();
})
.then(data => {


    return data;
});






fetch(`https://pokeapi.glitch.me/v1/pokemon/1/`,{
    header : {
        'Access-Control-Allow-Origin': '*',
        'Origin': 'http://127.0.0.1:5501/',
     },
     mode:'no-cors'
})
.then(response => {
    return response
})
.then(data => {
    console.log(data);
    return data;
})
