const { calcularHorasDeProjeto } = require ('../../dominio/calculadora/Projeto/horasPorProjeto');

describe('cálcule horas por projeto', () => {
    test('dado uma lista de funcionalidades desejadas por projeto, retornar as somas das horas totais', () => {

        //setup

        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'formulario',
            'ssr'
        ];
        //act

        const resultado = calcularHorasDeProjeto(funcionalidades);

        //verify

        expect(resultado).toEqual(72);

    });
});



