let sabores = []
let opcao = -5

while (opcao != 0) {
    opcao = prompt(`======== MENU ========
    1- Adicionar sabor
    2- Remover sabor
    3- Visualizar sorvete
    4- Finalizar pedido
    `)

    switch(opcao){
        case '1':
            sabores.push(prompt("Adicione um sabor"))
            if(sabores.length > 3){
                alert("Limite de sabores atingido, " + sabores.length + " de 3, remova um sabor!")
            }else{
                alert("Sabor adicionado!")
            }
            break;

        case 2:
            if (sabores.length === 0) {
                    alert("Não existem sabores adicionados!");
            } else {
                        let saborIndex = Number(prompt(`Escolha o número do sabor que deseja remover:\n${sabores.map((sabor, index) => `${index + 1}: ${sabor}`).join('\n')}`));
                        
            if (saborIndex >= 1 && saborIndex <= sabores.length) {
                        let saborRemovido = sabores.splice(saborIndex - 1, 1);
                        alert(`Sabor ${saborRemovido} removido!`);
            }else{
                            alert("Opção inválida!");
}}
                    break;
        case '3':
            if(sabores == 0){
                alert("Seu sorvete não possui sabores!")
            }else{
                alert(`Camada 1: ${sabores[0]}
Camada 2: ${sabores[1]}
Camada 3: ${sabores[2]}
`)
            }
        
        case '4':
            if(sabores == 0){
                alert("Adicione pelo menos um sabor!")
            }else{
                alert("Pedido realizado!")
                opcao = 0;
            }

            break;
        
        case "0":
            alert("Saindo do menu...");
        
        default:
            alert("Opção inválida")
            break;
    }
}


