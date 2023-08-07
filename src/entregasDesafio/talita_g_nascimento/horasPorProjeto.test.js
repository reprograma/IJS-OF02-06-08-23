const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto');

describe('Deve fazer o cálculo de horas totais por projeto', () => {
    test('Com uma lista de funcionalidades desejadas por projeto, deve retornar a soma das horas totais', () => {//esse valor vem do arquivo constantes.js
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

        //ação
        const resultado = calcularHorasDeProjeto(funcionalidades);
        //verificação
        expect(resultado).toEqual(72);
    });
});