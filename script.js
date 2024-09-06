
function mostraSoma() {

    let indice = 13;
    let soma = 0;
    let k = 0;

    while (k < indice) {
        k = k + 1;
        soma = soma + k;
    };

    alert(soma);
};

function sequenciaFibonacci() {
    const entrada = parseInt(prompt("Digite um número para verificar se pertence à sequência de Fibonacci:"));
  
    if (entrada === 0 || entrada === 1) {
      return alert(`O número ${entrada} pertence à sequência de Fibonacci.`);
    }
  
    let a = 0;
    let b = 1;
    let next = a + b;
  
    while (next <= entrada) {
      if (next === entrada) {
        return alert(`O número ${entrada} pertence à sequência de Fibonacci.`);
      }
      a = b;
      b = next;
      next = a + b;
    }
  
    return alert(`O número ${entrada} não pertence à sequência de Fibonacci.`);
  }
  
 
