let numeros = [];
function analisarNumero() {
  let selectNumero = document.getElementById("select");
  let num = document.getElementById("num");
  if (num.value > 100 || num.value < 1) {
    alert("Por favor, digite um numero válido!");
  } else if (numeros.indexOf(num) != -1) {
    alert("Numero já encontrado na lista!");
  } else {
    adicionarItem(num.value, selectNumero);
    num.value = ''
  }
}

function adicionarItem(num, selectNumero) {
  let res = document.getElementById("resultado");
  res.innerHTML = "";
  let item = document.createElement("option");
  let c = 1;
  item.text = `valor ${num} adicionado`;
  item.value = `numero ${c}`;
  c++;
  selectNumero.appendChild(item);
  numeros.push(Number(num));
  num.value = ''
}

function finalizar() {
  if (numeros.length == 0) {
    alert("por favor, informe os numeros antes de finalizar a operação");
  } else {
    let res = document.getElementById("resultado");
    res.innerHTML = `<p>Ao todo temos ${contarNumeros()} números cadastrados</p>`;
    res.innerHTML += `<p> O maior valor informado foi ${maiorValor()} </p>`;
    res.innerHTML += `<p> O menor valor informado foi ${menorValor()} </p>`;
    res.innerHTML += `<p> Somando todos os valores, temos ${somarValores()} </p>`;
    res.innerHTML += `<p> A média dos valores digitados é ${calcularMedia()} </p>`;
  }
}

function contarNumeros() {
  return numeros.length;
}

function maiorValor() {
  return Math.max(...numeros);
}

function menorValor() {
  return Math.min(...numeros);
}

function somarValores() {
  let soma = 0;
  for (let contador = 0; contador < numeros.length; contador++) {
    soma += numeros[contador];
  }
  return soma;
}

function calcularMedia() {
  let soma = somarValores();
  let contador = 0;
  numeros.forEach((element) => {
    contador++;
  });
  return soma / contador;
}
