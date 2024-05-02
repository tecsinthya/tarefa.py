const livros = require('./listalivros');
const menorvalor = require('./menorvalor');
 

            //1
for(let atual = 0; atual < livros.length - 1; atual++) {
        let menor = menorvalor (livros, atual)


    let livroatual = livros [atual];
    console.log('posição atual', atual)
    console.log('livro atual', livros[atual])
    let livroMenorPreco = livros [menor];
    console.log('livro menor preço', livros [menor])
    
    
    livros[atual1] = livroMenorPreco
    livros[menor] = livroatual



    console.log(livros)








}