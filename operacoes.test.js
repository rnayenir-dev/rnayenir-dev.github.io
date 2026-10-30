const { somar, subtrair, multiplicar, dividir } = require('./operacoes');

describe('Operações matemáticas', () => {
  test('deve somar dois números corretamente', () => {
    expect(somar(2, 3)).toBe(5);
  });

  test('deve subtrair dois números corretamente', () => {
    expect(subtrair(10, 4)).toBe(6);
  });

  test('deve multiplicar dois números corretamente', () => {
    expect(multiplicar(3, 4)).toBe(12);
  });

  test('deve dividir dois números corretamente', () => {
    expect(dividir(12, 3)).toBe(4);
  });

  test('deve lançar erro ao dividir por zero', () => {
    expect(() => dividir(10, 0)).toThrow('Não é possível dividir por zero.');
  });
});
