let num = [1, 2, 8, 6, 5, 4, 7, 3]
num.sort()
/*
for(let pos=0;pos<num.length;pos++) {
    console.log(num[pos])
}*/

for(let pos in num) {
    console.log(num[pos])
}