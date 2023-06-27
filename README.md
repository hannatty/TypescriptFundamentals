# Sistema de Bancário Básico em TypeScript
O objetivo do programa é fornecer funcionalidades básicas para gerenciar contas bancárias, enquanto explora os pilares da programação orientada a objetos.

## Funcionalidades

O sistema desenvolvido comporta três tipos de conta, cada uma herdando de uma conta principal. Essas contas possuem os seguintes atributos e métodos:

### Account (Conta Principal)

A conta principal é uma classe abstrata e serve de base a instanciação de novos tipos de conta. Possui os seguintes atributos privados:

- `name`: nome do titular da conta (string)
- `accountNumber`: número identificador da conta (number)
- `balance`: saldo atual da conta (number)
- `status`:se true, indica que conta encontra-se ativa e pode realizar operações (boolean)


E os seguintes métodos:

- `setName`
- `getName`
- `getAccountNumber`
- `setStatus`
- `getStatus`
- `getBalance`
- `validateAccountStatus`
- `deposit`
- `withDraw`

### PFAccount (Conta de Pessoa Física)

A conta de pessoa física é um tipo de conta derivada da conta principal e inclui o seguinte atributo adicional:

- `cpf`: (number)

### PJAccount (Conta de Pessoa Jurídica)

A conta de pessoa jurídica é um tipo de conta derivada da conta principal e inclui os seguinte atributo e método adicional, respectivamente:

- `cnpj`: (number)
- `getLoan`

### Special Account ( Conta Especial)
A conta especial é um tipo de conta derivada da conta principal. Não inlui atributos adicionais mas possui um método adicional de depósito que acresce em 10 qualquer valor  depositado.

- `specialDeposit`: (number)

## Tecnologias Utilizadas

[![VSCode](https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

