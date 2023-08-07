const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote')

describe('Calcular pacote correto de acordo com a quantidade de horas', () => {
    test('retorna o pacote básico caso a quantidade de horas seja de até 50', () => {


        const totalDeHorasPorProjeto = 49;


        resultado = calcularPacote(totalDeHorasPorProjeto)


        expect(resultado).toEqual('pacote_basico');
    });

    test('retorna o pacote básico caso a quantidade de horas seja de até 50', () => {

        const totalDeHorasPorProjeto = 50;


        resultado = calcularPacote(totalDeHorasPorProjeto)

        expect(resultado).toEqual('pacote_basico');
    });

    test('retorna o pacote intermediario caso a quantidade de horas seja de 51 ate 100', () => {
        //setup
        const totalDeHorasPorProjeto = 51;

        //ação
        resultado = calcularPacote(totalDeHorasPorProjeto)
        //verificação

        expect(resultado).toEqual('pacote_intermediario');
    });


    test('retorna o pacote intermediario caso a quantidade de horas seja de 51 ate 100', () => {
        //setup
        const totalDeHorasPorProjeto = 100;

        //ação
        resultado = calcularPacote(totalDeHorasPorProjeto)
        //verificação

        expect(resultado).toEqual('pacote_intermediario');
    });

    test('retorna o pacote premium caso a quantidade de horas seja de de 101 a 200', () => {
        //setup
        const totalDeHorasPorProjeto = 110;

        //ação
        resultado = calcularPacote(totalDeHorasPorProjeto)
        //verificação

        expect(resultado).toEqual('pacote_premium');
    });


    test('retorna o pacote premium caso a quantidade de horas seja de de 101 a 200', () => {
        //setup
        const totalDeHorasPorProjeto = 200;

        //ação
        resultado = calcularPacote(totalDeHorasPorProjeto)
        //verificação

        expect(resultado).toEqual('pacote_premium');
    });


});
