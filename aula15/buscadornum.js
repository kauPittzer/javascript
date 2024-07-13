let num = [4, 5, 6, 7, 8]
let pos = 5

if(num.indexOf(pos)== -1) {
    console.log('Este número não está no nosso banco de dados!')
} else {
    console.log(`O número ${num[num.indexOf(pos)]} está na posição ${num.indexOf(pos)+1}`)
}