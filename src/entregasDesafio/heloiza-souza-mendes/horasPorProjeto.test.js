const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe('calcular horas totais do projeto', () => {
    test('dado uma lista de funcionalidade desejadas por projeto, retornar a soma das horas totais', () => {


        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'formulario',
            'ssr',
        ];


        const resultado = calcularHorasDeProjeto(funcionalidades)

        expect(resultado).toEqual(72);
    })
});