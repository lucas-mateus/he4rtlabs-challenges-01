
var button = document.querySelector('button');
var resultado = document.querySelector('div#resultado p');

var diarioInput = document.querySelector('input[name=diario]');
var diasInput = document.querySelector('input[name=dias]');
var feriasInput = document.querySelector('input[name=ferias]');
var totalInput = document.querySelector('input[name=total]');


button.onclick = function() {
	var horasDiarias = parseInt(diarioInput.value);
	var diasEfetivos = parseInt(diasInput.value);
	var diasFerias = parseInt(feriasInput.value);
	var valorProjeto = parseInt(totalInput.value);

	var verify = isNaN(horasDiarias+diasEfetivos+diasFerias+valorProjeto);
	

	if(verify !== true){
		var valorHora = (valorProjeto / (diasEfetivos * 4 * horasDiarias) ) + ( ( diasFerias * diasEfetivos * horasDiarias ) )
		resultado.innerHTML = "R$: "+valorHora.toFixed(2);
	
	}else{
		alert("INSERIR NÚMEROS!");
		window.location.reload()
	}
  
}




