const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote')

describe('calcular pacote correto de acordo com a quantidade de horas', () => {
    test('retorna pacote básico caso a quantidade seja de até 50', ()=>{
    // arrange / setup
    const totalDeHorasPorProjeto = 49; 
        
    // act / ação
    const resultado = calcularPacote(totalDeHorasPorProjeto);
        
    // assert /verificação
    expect(resultado).toEqual('pacote_basico');
    });

    test('retorna pacote básico caso a quantidade seja de igual a 50', ()=>{
    // arrange / setup
    const totalDeHorasPorProjeto = 50; 
        
    // act / ação
    const resultado = calcularPacote(totalDeHorasPorProjeto);
        
    // assert /verificação
    expect(resultado).toEqual('pacote_basico');

    });

    test('retorna pacote intermediário caso a quantidade seja de 51 até 100', ()=>{
    // arrange / setup
    const totalDeHorasPorProjeto = 69; 
        
    // act / ação
    const resultado = calcularPacote(totalDeHorasPorProjeto);
        
    // assert /verificação
    expect(resultado).toEqual('pacote_intermediario');

    })

    test('retorna pacote intermediário caso a quantidade seja de igual a 100', ()=>{
    
    // arrange / setup
    const totalDeHorasPorProjeto = 100; 
        
    // act / ação
    const resultado = calcularPacote(totalDeHorasPorProjeto);
        
    // assert /verificação
    expect(resultado).toEqual('pacote_intermediario');

    })

    test('retorna pacote premium caso a quantidade seja de 101 até 200', ()=>{

    // arrange / setup
    const totalDeHorasPorProjeto = 134; 
        
    // act / ação
    const resultado = calcularPacote(totalDeHorasPorProjeto);
        
    // assert /verificação
    expect(resultado).toEqual('pacote_premium');
    })

})
