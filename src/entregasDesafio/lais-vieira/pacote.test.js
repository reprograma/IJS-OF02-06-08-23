const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

describe("definir o pacote a partir do total de horas", () => {
  test("retorna o pacote básico, caso a quantidade de horas seja até 50", () => {
    const totalDeHorasPorProjeto = 49;
    const resultado = calcularPacote(totalDeHorasPorProjeto);
    expect(resultado).toEqual("pacote_basico");
  });

  test("retorna o pacote básico, caso a quantidade de horas seja igual a 50", () => {
    const totalDeHorasPorProjeto = 50;
    const resultado = calcularPacote(totalDeHorasPorProjeto);
    expect(resultado).toEqual("pacote_basico");
  });

  test("retorna o pacote intermediário, caso a quantidade de horas seja maior igual a 50 e até 100", () => {
    const totalDeHorasPorProjeto = 69;
    const resultado = calcularPacote(totalDeHorasPorProjeto);
    expect(resultado).toEqual("pacote_intermediario");
  });

  test("retorna o pacote intermediário, caso a quantidade de horas seja igual a 100", () => {
    const totalDeHorasPorProjeto = 100;
    const resultado = calcularPacote(totalDeHorasPorProjeto);
    expect(resultado).toEqual("pacote_intermediario");
  });

  test("retorna o pacote premium, caso a quantidade de horas seja maior que 100 e até 200", () => {
    const totalDeHorasPorProjeto = 101;
    const resultado = calcularPacote(totalDeHorasPorProjeto);
    expect(resultado).toEqual("pacote_premium");
  });

  test("retorna o pacote premium, caso a quantidade de horas seja de 200", () => {
    const totalDeHorasPorProjeto = 200;
    const resultado = calcularPacote(totalDeHorasPorProjeto);
    expect(resultado).toEqual("pacote_premium");
  });
});
