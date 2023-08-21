class PropinaModel {
    valorNeto;
    montoCalculadoPropina;

    constructor(valorBruto, porventajePropina) {
        this.valorBruto = valorBruto;
        this.porventajePropina = porventajePropina;
    }

    setValorNeto(valorNeto) {
        this.valorNeto = valorNeto
    }

    setMontoCalculadoPropina(montoCalculadoPropina) {
        this.montoCalculadoPropina = montoCalculadoPropina
    }
}
  