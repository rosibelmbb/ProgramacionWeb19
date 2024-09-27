let ValorPantalla = ""; 
let Operador = null;
let ValorPrevio = null;
let AcumDisplay ="";


// Actualizar el valor de pantalla 
function updateDisplay() {
    document.getElementById("display").value = ValorPantalla || "0";
}

  //DisplayAcumulado
function DisplayAcum(){
    document.getElementById("displayacum").value = AcumDisplay || "0";  

}

// Agrego un numero 
function AddNumero(numero){
    ValorPantalla += numero;
    AcumDisplay += numero;
    updateDisplay();
    DisplayAcum();
}

//Agrego el operador 
function AddOperador(operador){
    if(ValorPrevio === null){
    ValorPrevio = parseFloat(ValorPantalla);
    }else{
    calculate();  
    }
    Operador = operador;
    ValorPantalla = ""; 
    AcumDisplay = AcumDisplay + Operador;

}

// Vamos a crear una funcion para hacer los calculos segun sea el operador
function calculate(){
    if(Operador === null || ValorPrevio === null) return;
    const currentValue = parseFloat(ValorPantalla);
  
    if(Operador === "+"){
      ValorPrevio += currentValue
    }else if(Operador === "-"){
      ValorPrevio -= currentValue;
    }else if(Operador === "*"){
      ValorPrevio *= currentValue;
    } else if(Operador === "/"){
      ValorPrevio = currentValue !== 0 ? ValorPrevio / currentValue : "No se puede dividir entre 0";
    }
  
    ValorPantalla = ValorPrevio.toString();
    Operador = null;
    updateDisplay();
  };




  //Limpiar pantalla
  function clearDisplay(){
    ValorPantalla = "";
    AcumDisplay = "";
    ValorPrevio = null;
    Operador = null;
    updateDisplay();
    DisplayAcum();
   
}

