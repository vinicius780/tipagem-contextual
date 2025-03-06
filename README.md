# Exemplo de Tipagem em TypeScript

Este repositório contém exemplos simples de como trabalhar com tipos no TypeScript, incluindo a criação de tipos personalizados e o uso de funções com tipagem de parâmetros e retorno.

## 1. Definindo um Tipo `pessoa`

Primeiro, definimos um tipo `pessoa` que possui duas propriedades: `nome` e `idade`. Usamos o tipo `string` para o nome e `number` para a idade.

```typescript
type pessoa = {
    nome: string;
    idade: number;
};
O tipo pessoa é um objeto que deve conter:

 nome: Uma string que representa o nome da pessoa.
idade: Um número que representa a idade da pessoa.
 Como Usar:
# O TypeScript garante que qualquer objeto que seja do tipo pessoa tenha as propriedades nome e idade corretamente tipadas, o que ajuda a evitar erros de tipo.

 2. Função criarPessoa
A função criarPessoa recebe dois parâmetros (nome e idade) e retorna um objeto do tipo pessoa, contendo essas duas propriedades. O TypeScript infere que o retorno da função é do tipo pessoa devido à tipagem explícita que definimos.

typescript
function criarPessoa(nome: string, idade: number): pessoa {
    return { nome, idade };
}
##Como Usar:
Aqui, a função criarPessoa cria e retorna um objeto pessoa com as propriedades nome e idade passadas como parâmetros:

typescript
const novaPessoa = criarPessoa("Vinicius", 23);
console.log(novaPessoa);  // Saída: { nome: "Vinicius", idade: 23 }
Como o TypeScript Ajuda:
O TypeScript infere que o retorno de criarPessoa será do tipo pessoa, garantindo que o objeto retornado tenha as propriedades nome e idade corretamente tipadas. Isso ajuda a evitar erros durante o desenvolvimento e melhora a legibilidade do código.

3. Função processNumber com Callback
A função processNumber recebe um parâmetro callback, que é uma função que aceita dois números e retorna um número. O callback é chamado dentro da função, passando os valores 10 e 5 como argumentos, e o resultado da execução do callback é impresso no console.



