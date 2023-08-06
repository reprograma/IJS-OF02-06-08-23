const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto')
const pacote = require('../../dominio/calculadora/Projeto/pacote')

jest.mock('../../dominio/calculadora/Projeto/pacote');

describe('valor total do Projeto', () => {
    beforeEach( () => {
        pacote.calcularPacote.mockReturnValue('pacote_basico')
    });

    test('retorna valor total do projeto do pacote básico de acordo com a funcionalidade passada', ()=>{
    // arrange / setup
    const funcionalidades = [
        'setup',  
        'responsividade',
        'construcao_1_pagina',
        'construcao_1_pagina',
        'construcao_1_pagina',
         ] //48 horas

    const valorHora = 70;

    // act / ação
    const resultado = calcularValorTotalProjeto(funcionalidades, valorHora)
        
    // assert /verificação
    // expect(resultado).toEqual(3864);
    expect(resultado).toEqual(3696);

    });
})

describe('valor total do Projeto Pacote Intermediário', () => {
 beforeEach( () => {
        pacote.calcularPacote.mockReturnValue('pacote_intermediario')
    });

    test('retorna valor total do projeto do pacote intermediário de acordo com a funcionalidade passada', ()=>{

        // arrange / setup
    const funcionalidades = [
        'setup',  
        'responsividade',
        'construcao_1_pagina',
        'construcao_1_pagina',
        'construcao_1_pagina',
        'formulario',
        'ssr',
        ] //72 horas

    const valorHora = 70;

    // act / ação
    const resultado = calcularValorTotalProjeto(funcionalidades, valorHora)
        
    // assert /verificação
    expect(resultado).toEqual(5645);
    });
})

describe('valor total do Projeto Pacote Premium', () => {
beforeEach( () => {
        pacote.calcularPacote.mockReturnValue('pacote_premium')
    });

    test('retorna valor total do projeto do pacote premium de acordo com a funcionalidade passada', ()=>{

        // arrange / setup
    const funcionalidades = [
        'setup',  
        'responsividade',
        'construcao_1_pagina',
        'construcao_1_pagina',
        'construcao_1_pagina',
        'formulario',
        'ssr',
        'setup',  
        'responsividade',
        'construcao_1_pagina',
        'construcao_1_pagina',
        'construcao_1_pagina',
        'formulario',
        'ssr',
        ] //144 horas

    const valorHora = 70;

    // act / ação
    const resultado = calcularValorTotalProjeto(funcionalidades, valorHora)
        
    // assert /verificação
    expect(resultado).toEqual(11592);
    });
})
