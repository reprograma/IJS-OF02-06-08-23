const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

describe('calcular pacote correto de acordo com a quantidade de horas', () => {
  test('retorna pacote basico caso a quantidade de horas seja de ate 50', () => {
    //setup
    const totalDeHorasPorProjeto = 49;
  
    //ação
    const resultado = calcularPacote(totalDeHorasPorProjeto);
  
    //verificação
    expect(resultado).toEqual('pacote_basico');
  });

  test('retorna pacote basico caso a quantidade de horas seja igual a 50', () => {
    const totalDeHorasPorProjeto = 50;

    const resultado = calcularPacote(totalDeHorasPorProjeto);

    expect(resultado).toEqual('pacote_basico');
  });

  test('retorna pacote intermediario caso a quantidade de horas seja de 51 ate 100', () => {
    const totalDeHorasPorProjeto = 75;

    const resultado = calcularPacote(totalDeHorasPorProjeto);

    expect(resultado).toEqual('pacote_intermediario');
  });

  test('retorna pacote basico caso a quantidade de horas seja igual a 100', () => {
    const totalDeHorasPorProjeto = 100;

    const resultado = calcularPacote(totalDeHorasPorProjeto);

    expect(resultado).toEqual('pacote_intermediario');
  });

  test('retorna pacote premium caso a quantidade de horas seja de 101 ate 200', () => {
    const totalDeHorasPorProjeto = 199;

    const resultado = calcularPacote(totalDeHorasPorProjeto);

    expect(resultado).toEqual('pacote_premium');
  });
});