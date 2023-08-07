const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto')
const pacote = require('../../dominio/calculadora/Projeto/pacote')

jest.mock('../../dominio/calculadora/Projeto/pacote')

describe('valor total do projeto', () => {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_basico')
    });

    test('retorno valor total do projeto do pacote básico de acordo com as funcionalides passadas', 
    () => {
        const funcionalidades =[
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
        ] // 48 horas
        const valorHora = 70;
        const resultado = calcularValorTotalProjeto(funcionalidades, valorHora)

        expect(resultado).toEqual(3696)
    });

    test('retorno valor total do projeto do pacote intermediário de acordo com as funcionalidades passadas', () => {
        pacote.calcularPacote.mockReturnValue('pacote_intermediario');
        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'formulario',
            'ssr',
        ] //72 horas
        const valorHora = 85;
        const resultado = calcularValorTotalProjeto(funcionalidades,valorHora);
        expect(resultado).toEqual(6854);
    });

    test('retorno valor total do projeto do pacote premium de acordo com as funcionalidades passadas', () => {
        pacote.calcularPacote.mockReturnValue('pacote_premium');
        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'otimizacao_seo',
            'integracao_api_propria',
        ] //88 horas
        const valorHora = 50;
        const resultado = calcularValorTotalProjeto(funcionalidades,valorHora);
        expect(resultado).toEqual(5060);
    });

});
