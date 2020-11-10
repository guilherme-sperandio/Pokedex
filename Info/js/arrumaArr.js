function arrumaArr(pokeArr){
    if(pokeArr == "Vaporeon/Jolteon/Flareon/Espeon/Umbreon/Leafeon/Glaceon/Sylveon" ){
        const poke1 = pokeArr[0].split('/')[0].trim();
        const poke2 = pokeArr[0].split('/')[1].trim();
        const poke3 = pokeArr[0].split('/')[2].trim();
        const poke4 = pokeArr[0].split('/')[3].trim();
        const poke5 = pokeArr[0].split('/')[4].trim();
        const poke6 = pokeArr[0].split('/')[5].trim();
        const poke7 = pokeArr[0].split('/')[6].trim();
        const poke8 = pokeArr[0].split('/')[7].trim();
    
        const newArr = [];
        newArr.push(poke1,poke2,poke3,poke4,poke5,poke6,poke7,poke8);
        return newArr;
    }else{
        const poke1 = pokeArr[0].split('/')[0].trim();
        const poke2 = pokeArr[0].split('/')[1].trim();
        const newArr = [];
        newArr.push(poke1,poke2);
        return newArr;
    }
   
    
   
}