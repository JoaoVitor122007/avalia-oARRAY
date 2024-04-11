let alunos = []
let notas = []

let acimaDe5 = 0
let acumuladorAcima5 = 0

for(let i = 0; i < 5; i++){
    alunos.push(prompt("Digite o nome do aluno:"))
    notas.push(Number(prompt("Digite a nota do aluno na prova de matemática")))

    if(notas[i] > 5){
        acimaDe5++;
    }
}

let soma = 0;
for(let i = 0; i < 5; i ++){
    soma += notas[i];
}

let media = soma / acimaDe5
alert("A média das notas acima de 5 é: " + media)