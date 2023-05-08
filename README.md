# TypeScript-Bank 👾
Projeto desenvolvido com conceitos básicos de typescript

## Start project
1º - Clone o repositório

2º - Instale as dependências

```shell
npm install
```

3º - Execute o projeto

```shell
npm run dev
```

## Implementações realizadas
1º - Métodos de depósito (deposit) e saque (withdraw)
* Os valores dos saldos podem ser alterados, de acordo com o valor informado para depósito
* Apenas contas com o status true e saldo (balance) maior que o valor solicitado podem fazer saques

2º - Método de empréstimo (getLoan) 
* Os valores do saldos sãp acrescidos, de acordo com o valor informado para empréstimo
* Apenas contas com o status true podem fazer empréstimo

3º - Novo tipo de conta
* Esta conta tem um método de depósito, que acresce 10 a mais ao valor informado para depósito. (Ex: Um depósito de 100, será de 110 no final)

4º - Todos os atributos de conta são privados

5º - Os atributos name e accountNumber não podem ser alterados internamente ou externamente
