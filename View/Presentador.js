Presentador = {
    capturaDatos: function () {
        const regex = /^[0-9]*$/;

        var propina = new PropinaModel(
            parseFloat(document.getElementById("costo_producto").value),
            parseFloat(document.getElementById("por_propina").value),
        );

        if (propina.valorBruto == "") {
            alert("Debe llenar todas las casillas de color gris");
            document.getElementById("costo_producto").focus();
        } else if (propina.porventajePropina == "") {
            alert("Debe llenar todas las casillas de color gris");
            document.getElementById("por_propina").focus();
        }

        if (regex.test(propina.valorBruto) && 
            regex.test(propina.porventajePropina)) {
            propina = CalculadorPropinaController.validacionDatos(propina);
            this.limpiarCampos()
            this.imprimirPantalla(propina.valorNeto, propina.montoCalculadoPropina)
        } else {
            alert("Solo se aceptan valores numericos positivos");
            this.limpiarCampos()
        }
    },

    imprimirPantalla: function(total, propina) {
        document.getElementById("total_S").innerHTML = " " + total;
        document.getElementById("propina_S").innerHTML = " " + propina;
    },

    limpiarCampos: function() {
        document.getElementById("costo_producto").value = "";
        document.getElementById("por_propina").value = "";
        document.getElementById("costo_producto").focus();
    }
}