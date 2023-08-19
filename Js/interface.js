//Captura de Datos para calculo Js
function captura_datos(){
    const regex = /^[0-9]*$/; //Crea expresión regular que va de todo caracter tipo string de 0 a 9
    var costo_prod = document.getElementById("costo_producto").value;
    var por_propi = document.getElementById("por_propina").value;
    var solo_num1 = regex.test(costo_prod);
    var solo_num2 = regex.test(costo_prod);
    //Condicional Null
    if(costo_prod == "" ){
        alert("Debe llenar todas las casillas de color gris");
        document.getElementById("costo_producto").focus();
    }else if(por_propi == ""){
        alert("Debe llenar todas las casillas de color gris");
        document.getElementById("por_propina").focus();
    }else if(solo_num1 && solo_num2 == true){
        var temp1 = parseFloat(costo_prod);
        var temp2 = parseFloat(por_propi);
        if(temp2 >= 0 && temp2 <=100){
            calculo(temp1,temp2);

            document.getElementById("costo_producto").value = "";
            document.getElementById("por_propina").value = "";
            document.getElementById("costo_producto").focus();
        }else{
            alert("Solo se permiten valores en 0% y 100% de propina");
            document.getElementById("por_propina").focus();  
        }
        
    }else{
        alert("Solo se aceptan valores numericos positivos");
        document.getElementById("costo_producto").value = "";
        document.getElementById("por_propina").value = "";
        document.getElementById("costo_producto").focus();
    }
}


function calculo(costo, propina){
    var propina = costo*(propina/100);
    var total = costo + propina;
    console.log(total);
    imprimir_pantalla(total,propina);
}

function imprimir_pantalla(total,propina){
    document.getElementById("total_S").innerHTML = " "+total;
    document.getElementById("propina_S").innerHTML = " "+propina;
}