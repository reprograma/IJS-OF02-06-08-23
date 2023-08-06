const {
  calcularHorasDeProjeto,
} = require("../../dominio/calculadora/Projeto/horasPorProjeto");

describe("cálculo de horas por projeto", () => {
  test("teste 1: dado lista 1 de funcionalidades desejada por projeto , retornar a soma das horas totais", () => {
    const funcionalidades = [
      "setup",
      "responsividade",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "formulario",
      "ssr",
    ];

    const resultado = calcularHorasDeProjeto(funcionalidades);

    expect(resultado).toEqual(72);
  });

  test("teste 2: dado lista 2 de funcionalidades desejada por projeto , retornar a soma das horas totais", () => {
    //arrange
    const funcionalidades = [
      "ssr",
      "responsividade",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "integracao_api_propria",
      "otimizacao_seo",
      "integracao_mailchimp",
    ];
    const resultado = calcularHorasDeProjeto(funcionalidades);

    expect(resultado).toEqual(88);
  });
});
