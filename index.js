let nomeHeroi = "Luis"
let expHeroi = 6432;
let nivelHeroi;

if (expHeroi <= 1000) {
    nivelHeroi = "Ferro";
} else if (expHeroi <= 2000) {
    nivelHeroi = "Bronze";
} else if (expHeroi <= 5000) {
    nivelHeroi = "Prata";
} else if (expHeroi <= 7000) {
    nivelHeroi = "Ouro";
} else if (expHeroi <= 8000) {
    nivelHeroi = "Platina";
} else if (expHeroi <= 9000) {
    nivelHeroi = "Ascendente";
} else if (expHeroi <= 10000) {
    nivelHeroi = "Imortal";
} else {
    nivelHeroi = "Radiante";
}

console.log(`O Herói de nome **${nomeHeroi}** está no nível de **${nivelHeroi}**`)