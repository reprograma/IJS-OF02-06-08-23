const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto');

describe('Cálculo das horas por projeto', () => {
    test('Dado uma lista de funcionalidades desejadas por projeto, retornar a soma das horas totais', () => {
        
        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'formulario',
            'ssr'
        ];

        const resultado = calcularHorasDeProjeto(funcionalidades);
        expect(resultado).toEqual(72);
    })

});