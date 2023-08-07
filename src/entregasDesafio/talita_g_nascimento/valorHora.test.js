const {calcularValorPorHora } = require ('../../dominio/calculadora/Hora/valorHora');

describe('Deve calcular o valor do projeto por hora', () => {
    test('Deve verificar se o retorno do valor arredondado está correto, dado o valor informado no mês', () =>{ //parte descritiva do teste; qual é o cenário esperado que ele faça, etc.

        //arrange/setup = salva na memória uma variável pra ser testada
        const valorMes = 5000; //dado mockado = fixado para testar a hipótese do teste

        //act/ação = função que o teste vai executar e validar
        const resultado = calcularValorPorHora(valorMes);

        //assert / verificação = o que é esperado de resultado do teste
        expect(resultado).toEqual(29);
    });
});