const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe('calcular pacote de acordo com a quantidade de horas', () => {
    
    //setup
    test('retorna pacote básico caso a quantidade de horas seja de até 50', () => {

        const totalDeHorasPorProjeto = 50

        //act

        const resultado = calcularPacote(totalDeHorasPorProjeto)
        expect(resultado).toEqual('pacote_basico')
    });
});

test('retorna pacote básico caso a quantidade de horas seja iagual a 50', () => {
    
    //setup
    const totalDeHorasPorProjeto = 50

    //act
    const resultado = calcularPacote(totalDeHorasPorProjeto)
    expect(resultado).toEqual('pacote_basico')
});

test('retorna pacote intermediário caso a quantidade de horas seja de 51 até até 100', () => {
    
    //setup
    const totalDeHorasPorProjeto = 51 || 100

    //act
    const resultado = calcularPacote(totalDeHorasPorProjeto)
    expect(resultado).toEqual('pacote_intermediario')
});

test('retorna pacote premium caso a quantidade de horas seja de 101 até 200', () => {
    
    //setup
    const totalDeHorasPorProjeto = 199

    //act
    const resultado = calcularPacote(totalDeHorasPorProjeto)
    expect(resultado).toEqual('pacote_premium')
});