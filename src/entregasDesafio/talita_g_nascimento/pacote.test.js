const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe('Deve calcular pacote correto de acordo com a quantidade de horas', () => {

    test('retorna pacote_basico caso a quantidade de horas seja de até 50', () => {
        //setup
        const totalDeHorasPorProjeto = 48;

        //ação
        const resultado = calcularPacote(totalDeHorasPorProjeto);

        //verificação
        expect(resultado).toEqual('pacote_basico');

    });

    test('retorna pacote_intermediario caso a quantidade de horas seja de 51 até 100', () => {
        //setup
        const totalDeHorasPorProjeto = 80;

        //ação
        const resultado = calcularPacote(totalDeHorasPorProjeto);

        //verificação
        expect(resultado).toEqual('pacote_intermediario');

    });

    test('retorna pacote_premium caso a quantidade de horas seja de 101 até 200', () => {
        //setup
        const totalDeHorasPorProjeto = 128;

        //ação
        const resultado = calcularPacote(totalDeHorasPorProjeto);

        //verificação
        expect(resultado).toEqual('pacote_premium');

    });
});