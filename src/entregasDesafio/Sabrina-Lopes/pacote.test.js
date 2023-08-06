const{calcularPacote} = require('../../dominio/calculadora/Projeto/pacote');

describe ('calcular pacote correto de acordo com a quantidade de horas', () => {
    test('retornar pacote básico caso a quantidade de horas seja de ate 50', () => {
        
   
    //setup
    const totalDeHorasPorProjeto = 49;
    //ação
    const resultado = calcularPacote(totalDeHorasPorProjeto);
    //assert
    expect(resultado).toEqual('pacote_basico');
     });

     test('retornar pacote básico caso a quantidade de horas seja 50', () => {
        
   
    //setup
    const totalDeHorasPorProjeto = 50;
    //ação
    const resultado = calcularPacote(totalDeHorasPorProjeto);
    //assert
    expect(resultado).toEqual('pacote_basico');
     });

 test('retornar pacote intermediário caso a quantidade de horas seja de 51 ate 100', () => {
    //setup
    const totalDeHorasPorProjeto = 75;
    //ação
    const resultado = calcularPacote(totalDeHorasPorProjeto);
    //assert
    expect(resultado).toEqual('pacote_intermediario');        
    });

    test('retornar pacote premium caso a quantidade de horas seja de 101 ate 200', () => {
        //setup
    const totalDeHorasPorProjeto = 150;
    //ação
    const resultado = calcularPacote(totalDeHorasPorProjeto);
    //assert
    expect(resultado).toEqual('pacote_premium');        
    });

      test('retornar pacote premium caso a quantidade de horas seja 200', () => {
    //setup
    const totalDeHorasPorProjeto = 200;
    //ação
    const resultado = calcularPacote(totalDeHorasPorProjeto);
    //assert
    expect(resultado).toEqual('pacote_premium');        
    });

    });








