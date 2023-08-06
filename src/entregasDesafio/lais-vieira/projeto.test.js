const {
  calcularValorTotalProjeto,
} = require("../../dominio/calculadora/Projeto/valorProjeto");
const pacote = require("../../dominio/calculadora/Projeto/pacote");

//mock: consegue chamar um arquivo e depois definir valores para o teste focar na função que desejamos
jest.mock("../../dominio/calculadora/Projeto/pacote");

describe("valor total do projeto", () => {
  //ação anterior à realização do teste
  beforeEach(() => {
    pacote.calcularPacote.mockReturnValue("pacote_basico");
  });
  test("retorna o valor total do projeto do pacote básico, de acordo com as funcionalidades passadas", () => {
    const funcionalidades = [
      "setup",
      "responsividade",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "construcao_1_pagina",
    ]; // 48h

    const valorHora = 70;

    const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);

    expect(resultado).toEqual(3696);
  });
});
