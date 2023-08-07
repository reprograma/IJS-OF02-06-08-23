const {
  calcularHorasDeProjeto,
} = require("../../dominio/calculadora/Projeto/horasPorProjeto");

describe("cálculo de horas totais por projeto", () => {
  test("dado uma lista de funcionalidades desejadas por projeto, retornar a soma das horas totais", () => {
    // setup
    const funcionalidades = [
      "setup",
      "responsividade",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "formulario",
      "ssr",
    ];

    // ação
    const resultado = calcularHorasDeProjeto(funcionalidades);

    // verificação
    expect(resultado).toEqual(72);
  });

  test("dado uma lista de funcionalidades desejadas por projeto, retornar a soma das horas totais", () => {
    // setup
    const funcionalidades = [
      "setup",
      "responsividade",
      "construcao_1_pagina",
      "integracao_api_propria",
    ];

    // ação
    const resultado = calcularHorasDeProjeto(funcionalidades);

    // verificação
    expect(resultado).toEqual(48);
  });

  test("caso minha lista for passada em branco, retornar o valor 0", () => {
    // setup
    const funcionalidades = [];

    // ação
    const resultado = calcularHorasDeProjeto(funcionalidades);

    // verificação
    expect(resultado).toEqual(0);
  });
});
