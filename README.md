# Exemplo de Tipagem em TypeScript

Este repositório contém exemplos simples de como trabalhar com tipos no TypeScript, incluindo a criação de tipos personalizados e o uso de funções com tipagem de parâmetros e retorno.

## 1. Definindo um Tipo `pessoa`

Primeiro, definimos um tipo `pessoa` que possui duas propriedades: `nome` e `idade`. Usamos o tipo `string` para o nome e `number` para a idade.

```typescript
type pessoa = {
    nome: string;
    idade: number;
};
