const input1 = document.getElementById("numero1");
const input2 = document.getElementById("numero2");
const button = document.getElementById("button");

function Soma(a, b){
	return a + b;
}

button.addEventListener("click", function(){
    console.log(Soma(input1.value, input2.value));
});
