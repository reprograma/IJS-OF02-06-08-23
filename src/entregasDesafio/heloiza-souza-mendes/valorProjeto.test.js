const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');
const pacote = require('../../dominio/calculadora/Projeto/pacote');


jest.mock('../../dominio/calculadora/Projeto/pacote')



describe('Valor total do projeto', () => {

    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_basico');
    });

    test('Retorna valor total do projeto do plano básico do acordo com as funcionalidades passadas', () => {
        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
        ];
        const valorHora = 70;
        const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);
        expect(resultado).toEqual(3696);

    });
});


describe('Valor total do projeto', () => {

    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_intermediario');
    });

    test('Retorna valor total do projeto do pacote intermediario do acordo com as funcionalidades passadas', () => {
        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
        ];
        const valorHora = 70;

        const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);
        expect(resultado).toEqual(3763, 1);

    });
});


describe('Valor total do projeto', () => {

    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_premium');
    });

    test('Retorna valor total do projeto do pacote premium do acordo com as funcionalidades passadas', () => {
        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
        ];
        const valorHora = 70;
        const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);
        expect(resultado).toEqual(3864);

    });
});


describe('Verifica o tipo de retorno', () => {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_premium'); // taxa 1.15
    })
    test('Verifica se o retorno é um número', () => {
        const funcionalidades = [
            'setup',
            'responsividade',
        ];
        const valorHora = 1;


        const result = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(typeof result).toBe('number')
    })

})


describe('Verifica se o retorno é arredondado corretamente para baixo', () => {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_intermediario'); // taxa 1.12
    })
    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('Verificar se o  valor retornado é arredondado corretamente', () => {
        const resultadoDecimal = 17.92;
        const valorArredondadoParaBaixo = Math.round(resultadoDecimal);

        jest.spyOn(Math, 'round').mockReturnValue(valorArredondadoParaBaixo);

        const funcionalidades = [
            'responsividade',
        ];
        const valorHora = 1;

        const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);


        expect(resultado).toEqual(18);

    });

})