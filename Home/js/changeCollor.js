const colors= {
    grass:{
        primary: '#63bb5b',
        secondary: '#a7db8d'
    },
    normal:{
        primary: '#9099a1',
        secondary: '#c6c6a7'
    },
    fighting:{
        primary: '#ce4069',
        secondary: '#d67873'
    },
    flying:{
        primary: '#8fa8dd',
        secondary: '#c6b7f5'
    },
    poison:{
        primary: '#ab6ac8',
        secondary: '#c183c1'
    },
    ground:{
        primary: '#d97746',
        secondary: '#ebd69d'
    },
    rock:{
        primary: '#c7b78b',
        secondary: '#d1c17d'
    },
    bug:{
        primary: '#90c12c',
        secondary: '#c6d16e'
    },
    ghost:{
        primary: '#5269ac',
        secondary: '#a292bc'
    },
    steel:{
        primary: '#5a8ea1',
        secondary: '#d1d1e0'
    },
    fire:{
        primary: '#ff9c54',
        secondary: '#f5ac78'
    },
    water:{
        primary: '#4d90d5',
        secondary: '#9db7f5'
    },
    electric:{
        primary: '#f3d23b',
        secondary: '#fae078'
    },
    psychic:{
        primary: '#f97176',
        secondary: '#fa92b2'
    },
    ice:{
        primary: '#74cec0',
        secondary: '#bce6e6'
    },
    dragon:{
        primary: '#0a6dc4',
        secondary: '#a27dfa'
    },
    dark:{
        primary: '#5a5366',
        secondary: '#a29288'
    },
    fairy:{
        primary: '#ec8fe6',
        secondary: '#f4bdc9'
    },

}

function changeColor(type,divPrincipal){
    divPrincipal.style.background = colors[type].primary;
}

function changeColorSpan(type,typePoke){
    typePoke.style.background = colors[type].secondary;
}

