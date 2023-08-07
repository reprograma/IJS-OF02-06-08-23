const { calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto");

describe('calculo de horas totais por projeto', () => {
  test('dado uma lista de funcionalidades desejadas por projeto, retornar a soma das horas totais', () => {
    //setup
    const funcionalidades = [
      'setup',
      'responsividade',
      'construcao_1_pagina',
      'otimizacao_seo',
      'construcao_1_pagina',
      'formulario',
      'ssr'
    ];

    //ação
    const resultado = calcularHorasDeProjeto(funcionalidades);

    //verificação
    expect(resultado).toEqual(80);
  });
});