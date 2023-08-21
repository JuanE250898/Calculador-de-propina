CalculadorPropinaController = {
    validacionDatos: function(propina) {
        if(propina.porventajePropina >= 0 && 
            propina.porventajePropina <=100) {
                propina.setMontoCalculadoPropina(propina.valorBruto * (propina.porventajePropina / 100));
                propina.setValorNeto(propina.valorBruto + propina.montoCalculadoPropina)

                return propina;
        } else {
            alert("Solo se permiten valores en 0% y 100% de propina");
            document.getElementById("por_propina").focus();  
        }
    }
}