// Array de palavras
const palavras = ["receba", "pai", "graças", "a", "Deus", "em", "nome", "do", "filho", "Espirito","do", "santo","Cristiano","Ronaldo","Jr.","caraio","amem","melhor","mundo"];

// Função para gerar uma frase aleatória
function gerarFraseAleatoria() {

  const numPalavras = Math.floor(Math.random() * 10);
  let frase = "";
  let palavraAleatoriaAnterior = ""
  let palavraAleatoria
  for (let i = 0; i < numPalavras; i++) {
    palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)]; 
    while(palavraAleatoriaAnterior == palavraAleatoria){
         palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)]; 
    }
    frase += palavraAleatoria + " ";
    palavraAleatoriaAnterior = palavraAleatoria;
  }

  return frase.trim(); // Remove o espaço em branco extra no final
}

// Exemplo de uso
const fraseAleatoria = gerarFraseAleatoria();
console.log(fraseAleatoria);