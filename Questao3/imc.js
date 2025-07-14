function calcIMC() {
  const altura = document.querySelector('#altura').value;
  const peso = document.querySelector('#peso').value;
  const resultado = document.querySelector('#resultado');

  if (altura && peso) {
    const imc = (peso / (altura * altura)).toFixed(2);
    let classificacao = '';

    if (imc < 18.5) classificacao = 'Abaixo do peso';
    else if (imc < 25) classificacao = 'Peso normal';
    else if (imc < 30) classificacao = 'Sobrepeso';
    else if (imc < 40) classificacao = 'Obesidade grau I';
    else classificacao = 'Obesidade grau II';

    resultado.innerHTML = `IMC: ${imc} - ${classificacao}`;
  } else {
    resultado.innerHTML = 'Preencha os dois campos!';
  }
}
