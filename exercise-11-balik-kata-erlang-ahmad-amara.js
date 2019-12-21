function balikKata(kata){
    var kataTerbalik = '';
    for(i = kata.length - 1; i >= 0; i--){
        //getWord = i - 1;
        container = kata[i];
        kataTerbalik += container;
    }
    return kataTerbalik;
}

console.log(balikKata('Hello World and Coders'));
console.log(balikKata('John Doe'));
console.log(balikKata('I am a bookworm'));
console.log(balikKata('Coding is my hobby'));
console.log(balikKata('Super'));