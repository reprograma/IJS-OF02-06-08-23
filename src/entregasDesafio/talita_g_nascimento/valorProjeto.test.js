const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');
const pacote = require('../../dominio/calculadora/Projeto/pacote');

jest.mock('../../dominio/calculadora/Projeto/pacote');

describe('Deve calcular o valor total do projeto, de acordo com os parâmetros de funcionalidades informados.', () => {

    beforeEach(() => {// executa um mock da função calcularPacote, antes que os testes do arquivo sejam executados
        pacote.calcularPacote.mockReturnValue('pacote_basico');
    })

    test('mock do pacote_basico, deve retornar o valor total do projeto, de acordo com as funcionalidades passadas', () => {
        const funcionalidades = [
            'setup',//8 horas
            'responsividade', //16 horas
            'construcao_1_pagina',//8 horas
            'construcao_1_pagina',//8 horas
            'construcao_1_pagina',//8 horas
        ] //48 horas
        const valorHora = 29;
        const resultado = calcularValorTotalProjeto(funcionalidades,valorHora);
        expect(resultado).toEqual(1531);
    });

    test('mock do pacote_intermediario, deve retornar o valor total do projeto, de acordo com as funcionalidades passadas', () => {
        pacote.calcularPacote.mockReturnValue('pacote_intermediario');
        const funcionalidades = [
            'setup',//8 horas
            'responsividade', //16 horas
            'otimizacao_seo', //16 horas
            'construcao_1_pagina',//8 horas
            'construcao_1_pagina',//8 horas
            'construcao_1_pagina',//8 horas
            'construcao_1_pagina',//8 horas
            'ssr' //8 horas
        ] //80 horas
        const valorHora = 29;
        const resultado = calcularValorTotalProjeto(funcionalidades,valorHora);
        expect(resultado).toEqual(2598);
    });

    test('mock do pacote_premium, deve retornar o valor total do projeto, de acordo com as funcionalidades passadas', () => {
        pacote.calcularPacote.mockReturnValue('pacote_premium');
        const funcionalidades = [
            'setup',//8 horas
            'formulario', //16 horas
            'responsividade', //16 horas
            'otimizacao_seo', //16 horas
            'construcao_1_pagina',//8 horas
            'construcao_1_pagina',//8 horas
            'construcao_1_pagina',//8 horas
            'construcao_1_pagina',//8 horas
            'integracao_mailchimp', //16 horas
            'ssr', //8 horas
            'integracao_api_propria' //16 horas

        ]//128 horas
        const valorHora = 29;
        const resultado = calcularValorTotalProjeto(funcionalidades,valorHora);
        expect(resultado).toEqual(4269);
    });
});