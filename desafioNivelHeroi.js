// Definindo o nome e a quantidade de experiência (XP) do herói
var nomeDoHeroi = "Tabata"
var xp = 7500

// Utilizando uma estrutura de decisão para determinar o nível do herói
var nivelDeHeroi = " "

if (xp < 1000) {
    nivelDeHeroi = "Ferro"
} else if (xp >= 1001 && xp <= 2000) {
    nivelDeHeroi = "Bronze"
} else if (xp >= 2001 && xp <= 5000) {
    nivelDeHeroi = "Prata"
} else if (xp >= 5001 && xp <= 7000) {
    nivelDeHeroi = "Ouro"
} else if (xp >= 7001 && xp <= 8000) {
    nivelDeHeroi = "Platina"
} else if (xp >= 8001 && xp <= 9000) {
    nivelDeHeroi = "Ascendente"
} else if (xp >= 9001 && xp <= 10000) {
    nivelDeHeroi = "Imortal"
} else {
    nivelDeHeroi = "Radiante"
}

// Exibindo a mensagem com o nível do herói
console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivelDeHeroi)

