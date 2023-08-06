const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe('cálculo de horas totais por projeto', () => {
    test('dado uma lista de funcionalidades desejados por projeto, retomar a soma dos valores totais', ()=>{
        // arrange / setup
        const funcionalidades = [
            'setup',  
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'formulario',
            'ssr',
        ] ; // dado mockado 

        // act / ação
        const resultado = calcularHorasDeProjeto(funcionalidades);

        // assert /verificação
        expect(resultado).toEqual(72);
    })
})