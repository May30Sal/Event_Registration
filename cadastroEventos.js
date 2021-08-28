//Sistema para cadastrar eventos
console.log("Vamos cadastrar o seu evento? Informe a data pretendida:");

//Validando a data
const dataAtual = new Date();
let dataDoEvento = new Date(2021, 12, 02);

if (dataDoEvento < dataAtual) {
    console.log("Data Inválida! Cadastro não permitido.");
    console.log("Informe uma data posterior à atual");
} else {
    console.log(`A data é ${dataDoEvento}.
Correto, vamos continuar.`);

    //Validando a idade
    let idadeDoParticipante = 20;
    const IDADE_MINIMA = 18;

    if (idadeDoParticipante < IDADE_MINIMA) {
        console.log("Menor de Idade. Cadastro não permitido");
    } else {
        console.log(`A idade é ${idadeDoParticipante}.
Cadastro permitido. Vamos continuar.`)

        //Validando quantidade de participantes
        let quantidadeDeParticipantes = ["Maria", "Marcos", "João", "Pedro", "Caio"];
        console.log(quantidadeDeParticipantes);

        if (quantidadeDeParticipantes.length < 100) {
            console.log(`Evento cadastrado com ${quantidadeDeParticipantes.length} participantes.
É possível adicionar mais participantes 🤩`);
            quantidadeDeParticipantes.push("Ana");
            console.log(quantidadeDeParticipantes);
        } else {
            console.log("Limite excedido! Cadastro não permitido.");
        }
    }
}




