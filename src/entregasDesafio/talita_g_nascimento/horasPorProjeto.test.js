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

    test('Com a soma das horas totais, deve recomendar que o projeto seja direcionado a um time.', () => {
        //setup
        const funcionalidades = [
            'setup',//8 horas
            'formulario', //16 horas
            'responsividade', //16 horas
            'responsividade', //16 horas
            'responsividade', //16 horas
            'responsividade', //16 horas
            'responsividade', //16 horas
            'responsividade', //16 horas
            'otimizacao_seo', //16 horas
            'construcao_1_pagina',//8 horas
            'construcao_1_pagina',//8 horas
            'construcao_1_pagina',//8 horas
            'construcao_1_pagina',//8 horas
            'construcao_1_pagina',//8 horas
            'construcao_1_pagina',//8 horas
            'integracao_mailchimp', //16 horas
            'integracao_mailchimp', //16 horas
            'ssr', //8 horas
            'integracao_api_propria', //16 horas
            'desenvolver_banco_de_dados'//16 horas
        ];

        //ação
        const resultado = calcularHorasDeProjeto(funcionalidades);
        //verificação
        expect(resultado).toEqual(256);
    });
});