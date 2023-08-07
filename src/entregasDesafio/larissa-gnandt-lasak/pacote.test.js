const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

describe("calcular pacote correto de acordo com a quantidade de horas", () => {
  test("retornar pacote básico caso a quantidade de horas seja até 50 horas", () => {
    // setup
    const totalDeHorasPorProjeto = 49;

    // ação
    const resultado = calcularPacote(totalDeHorasPorProjeto);

    // verificação
    expect(resultado).toEqual("pacote_basico");
  });

  test("retornar pacote básico caso a quantidade de horas seja até 50 horas", () => {
    // setup
    const totalDeHorasPorProjeto = 50;

    // ação
    const resultado = calcularPacote(totalDeHorasPorProjeto);

    // verificação
    expect(resultado).toEqual("pacote_basico");
  });

  test("retornar pacote intermediário caso a quantidade de horas seja de 51 a 100 horas", () => {
    // setup
    const totalDeHorasPorProjeto = 51;

    // ação
    const resultado = calcularPacote(totalDeHorasPorProjeto);

    // verificação
    expect(resultado).toEqual("pacote_intermediario");
  });

  test("retornar pacote intermediário caso a quantidade de horas seja igual a 100 horas", () => {
    // setup
    const totalDeHorasPorProjeto = 100;

    // ação
    const resultado = calcularPacote(totalDeHorasPorProjeto);

    // verificação
    expect(resultado).toEqual("pacote_intermediario");
  });

  test("retornar pacote premium caso a quantidade de horas seja de 101 a 200 horas", () => {
    // setup
    const totalDeHorasPorProjeto = 101;

    // ação
    const resultado = calcularPacote(totalDeHorasPorProjeto);

    // verificação
    expect(resultado).toEqual("pacote_premium");
  });

  test("retornar pacote premium caso a quantidade de horas seja de 101 a 200 horas", () => {
    // setup
    const totalDeHorasPorProjeto = 200;

    // ação
    const resultado = calcularPacote(totalDeHorasPorProjeto);

    // verificação
    expect(resultado).toEqual("pacote_premium");
  });
});
