// Cria um array de 76 posições para marcar os números que já foram sorteados.
var usedNums = new Array(76);

// Gera um novo cartão da sorte.
function novacartela() {
  // Faz um loop de 24 vezes, uma para cada quadrado do cartão.
  for (var i = 0; i < 24; i++) {
    // Gera um número aleatório e o coloca no quadrado correspondente.
    setSquare(i);
  }
}

// Obtém o ID do quadrado atual e gera um número aleatório.
function setSquare(thisSquare) {
    // Obtém o ID do quadrado atual.
    var currSquare = "square" + thisSquare;
    // Gera um número aleatório.
    var newNum;
  
    // Define uma matriz com as posições dos números nos quadrados.
    var colPlace = new Array(0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4);
  
    // Faz um loop `do while` para garantir que o número aleatório não seja repetido.
    do {
      // Gera um número aleatório entre 1 e 75.
      newNum = (colPlace[thisSquare] * 15) + getNewNum() + 1;
    } while (usedNums[newNum]);
  
    // Coloca o número aleatório no quadrado correspondente.
    usedNums[newNum] = true;
    document.getElementById(currSquare).innerHTML = newNum;
  }

  // Gera um número aleatório entre 1 e 75.
function getNewNum() {
    // Usa a função `Math.floor()` para arredonda um número para o menor número inteiro.
    return Math.floor(Math.random() * 75);
  }