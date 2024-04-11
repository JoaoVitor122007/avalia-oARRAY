pri = [];
pri2 = []
for(let i = 0; i < 10; i++){
    pri.push(Number(prompt("Digite 10 numeros")))
}
alert("Números do primeiro array: " + pri)

for(let i = 0; i < pri.length; i++){
    if(pri[i] % 2 == 1){
        pri2.push(pri[i])
    }
}
alert("Números impares da array são: " + pri2)