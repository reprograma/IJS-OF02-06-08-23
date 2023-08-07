const {calcularHorasDeProjeto}= require('../../dominio/calculadora/Projeto/horasPorProjeto');

describe('calculo de horas totais por projetos', ()=>{
	test('dado uma lista de funcionalidades desejadas por projeto, retornar a soma das horas totais', ()=>{
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

		//acao
		const resultado = calcularHorasDeProjeto(funcionalidades);

		//verificacao
		expect(resultado).toEqual(72);

	});
});