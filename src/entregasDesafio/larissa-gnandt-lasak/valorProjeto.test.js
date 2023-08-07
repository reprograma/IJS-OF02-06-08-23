const pacote = require("../../dominio/calculadora/Projeto/pacote");
const {
  calcularValorTotalProjeto,
} = require("../../dominio/calculadora/Projeto/valorProjeto");

jest.mock("../../dominio/calculadora/Projeto/pacote");

describe("valor total do projeto", () => {
  const funcionalidades = [
    "setup",
    "responsividade",
    "construcao_1_pagina",
    "construcao_1_pagina",
    "construcao_1_pagina",
  ]; //48horas
  const valorHora = 70;

  test("retorna valor total do projeto do pacote básico de acordo com as funcionalidades passadas", () => {
    pacote.calcularPacote.mockReturnValue("pacote_basico");

    const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);

    expect(resultado).toEqual(3696);
  });

  test("retorna valor total do projeto do pacote intermediário de acordo com as funcionalidades passadas", () => {
    pacote.calcularPacote.mockReturnValue("pacote_intermediario");

    const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);

    expect(resultado).toEqual(3763);
  });

  test("retorna valor total do projeto do pacote premium de acordo com as funcionalidades passadas", () => {
    pacote.calcularPacote.mockReturnValue("pacote_premium");

    const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);

    expect(resultado).toEqual(3864);
  });
});
