const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe('calcular pacote correto de acordo com a quantidade de horas', () => {
    test('retorna pacote basico caso a quantidade de horas seja < 50', () => {
        //setup
        const totalDeHorasPorProjeto = 49;

        //acao
        const resultado = calcularPacote(totalDeHorasPorProjeto);

        //verificacao
        expect(resultado).toEqual('pacote_basico');
    });

    test('retorna pacote basico caso a quantidade de horas seja === 50', () => {
        const totalDeHorasPorProjeto = 50;
        const resultado = calcularPacote(totalDeHorasPorProjeto);
        expect(resultado).toEqual('pacote_basico');
    });

    test('retorna pacote intermediario caso a quantidade de horas seja > 51 ate 100', () => {
        const totalDeHorasPorProjeto = 60;
        const resultado = calcularPacote(totalDeHorasPorProjeto);
        expect(resultado).toEqual('pacote_intermediario');
    });

    test('retorna pacote intermediario caso a quantidade de horas seja === 100', () => {
        const totalDeHorasPorProjeto = 100;
        const resultado = calcularPacote(totalDeHorasPorProjeto);
        expect(resultado).toEqual('pacote_intermediario');
    });

    test('retorna pacote premium caso a quantidade de horas seja de 101 ate 200', () => {
        const totalDeHorasPorProjeto = 150;
        const resultado = calcularPacote(totalDeHorasPorProjeto);
        expect(resultado).toEqual('pacote_premium');
    });

    test('verifica se calcularPacote é uma função', () => {
       expect(typeof calcularPacote).toBe('function');
    });

    test('verifica se a função é definida', () => {
        expect(calcularPacote).toBeDefined();
    });

    test('verifica se a função retorna dados do tipo string', () => {
        expect(typeof calcularPacote(40)).toBe('string');
    });

    test('verifica se a função sem parâmetro retorna undefined', () => {
        expect(calcularPacote()).toBeUndefined();
    });

    test('retorna um erro caso a quantidade de horas for > que 201', () => {
        const totalDeHorasPorProjeto = 205;
        const resultado = calcularPacote(totalDeHorasPorProjeto);
        expect(resultado).toThrow('Não foi possível calcular o total de horas para este projeto');
    });
});