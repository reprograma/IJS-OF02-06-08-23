const {calcularPacote} = require('../../dominio/calculadora/Projeto/pacote');

describe('calcular pacote correto de acordo com a quantidade de horas', ()=>{
    test('retorna pacote básico caso a quantidade de horas seja até a 50',()=>{
        //setup
        const totalDeHorasPorProjeto = 49;
        // acao
        const resultado = calcularPacote(totalDeHorasPorProjeto);
        // verificacao
        expect(resultado).toEqual('pacote_basico');
    });

    test('retorna pacote básico caso a quantidade de horas seja igual a 50',()=>{
        //setup
        const totalDeHorasPorProjeto = 50;
        // acao
        const resultado = calcularPacote(totalDeHorasPorProjeto);
        // verificacao
        expect(resultado).toEqual('pacote_basico');
    });

    test('retorna pacote intermediario caso a quantidade de horas seja de 51 até 100',()=>{
        //setup
        const totalDeHorasPorProjeto = 59;
        // acao
        const resultado = calcularPacote(totalDeHorasPorProjeto);
        // verificacao
        expect(resultado).toEqual('pacote_intermediario');
    });

    test('retorna pacote intermediario caso a quantidade de horas seja igual a 100',()=>{
        //setup
        const totalDeHorasPorProjeto = 100;
        // acao
        const resultado = calcularPacote(totalDeHorasPorProjeto);
        // verificacao
        expect(resultado).toEqual('pacote_intermediario');
    });

    test('retorna pacote intermediario caso a quantidade de horas seja entre 101 até 200',()=>{
        //setup
        const totalDeHorasPorProjeto = 102;
        // acao
        const resultado = calcularPacote(totalDeHorasPorProjeto);
        // verificacao
        expect(resultado).toEqual('pacote_premium');
    });


});