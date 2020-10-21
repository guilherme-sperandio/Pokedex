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

