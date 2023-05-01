const res = document.getElementById('res');
const btn = document.getElementById('btn');
const erro = document.getElementById('erro');
let resultado = 0;
res.innerText = 'IMC: ' + resultado;

function calcularImc(){
  const altura = document.getElementById('altura').value;
  const peso = document.getElementById('peso').value;
  if(altura == '' || peso == ''){
    erro.innerText = 'Erro: Os dois campos devem ser preenchidos';
  }else if(isNaN(altura ) || isNaN(peso)){
    erro.innerText = 'Erro: Os campos devem ser numeros';
  }
  else{
    erro.innerText = '';
    resultado = parseFloat(peso)/((parseFloat(altura)/100) * (parseFloat(altura)/100));
    res.innerText = 'IMC: ' + resultado.toFixed(2);
  }
  
}

btn.addEventListener("click", calcularImc);
