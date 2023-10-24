function calcularNivelRankeadas(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";

    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";

    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";

    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário" ;
    } else {
        nivel = "Imortal";
    }

    return `O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}`;
}

let resultado = calcularNivelRankeadas(70, 15);
console.log(resultado); // Saída: O Herói tem saldo de 70 e está no nível de Ouro