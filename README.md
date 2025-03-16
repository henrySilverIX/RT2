# RT2

## Fixando os conceitos principais da POO


Para aprender, adequadamente, a programação orientada à objetos
é preciso treinar!
O exercício proposto ajudará ao desenvolvedor iniciante praticar a
criação de objetos, o conceito de herança, o conceito de
encapsulamento e o conceito de polimorfismo.
O exercício está separado em duas partes de objetivos.



## Programando uma calculadora especial
Considere que você foi contratado para desenvolver uma
calculadora, que funcione como um aplicativo do tipo cli (commandline interface), feito em TypeScript.
A calculadora deve realizar as operações básicas, como soma,
subtração, divisão, potência, etc...
Cada operação deve ser realizada por uma classe específica. Veja no exemplo!


## Exemplos...

```typescript
export default abstract class Calculo{
    public abstract calcular(num1:number, num2:number):number
}
```


```typescript
export default class Soma extends Calculo{
    public calcular(num1: number, num2: number): number {
        return num1 + num2;
    }
}
```

```typescript
export default class Multiplicacao extends Calculo{
    public calcular(num1: number, num2: number): number {
        return num1 * num2;
    }
}
```

## Operações

Cada operação ocorrerá sempre sobre dois números, que serão fornecidos pelo usuário.

```typescript
switch(operacao){
    case 'Somar':
        let calculo = new Soma()
        console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
        break;
    case 'Subtrair':
        let calculo = new Subtracao()
        console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
        break;
    case 'Multiplicar':
        let calculo = new Multiplicacao()
        console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
        break;
}
```

O usuário poderá escolher quais operações ele quer fazer, sobre os dois números.

## Um processo para cada operação

Cada operação deverá ser feita por uma classe, utilizando o polimorfismo.


## Objetivo, parte 1

A primeira parte de objetivos é o desenvolvimento das operações básicas.

A calculadora deve permitir os cálculos de soma, subtração, divisão, potenciação e radiciação.

Os cálculos devem sempre utilizar dois números!

## Objetivos, parte 2

Construa também, a opção de calcular as raízes de uma função do segundo grau, utilizando a fórmula de bhaskara. Neste caso, o
usuário poderá informar mais que dois número.

## Biblioteca para receber dados do usuário...

```typescript
import * as readline from 'readline';
```


Módulo readline, do Node.js, permite o recebimento de um fluxo de dados, inseridos pela linha de comando. Por isso, o módulo readline
facilita a entrada ou leitura de dados fornecidos pelo usuário. <br>


https://nodejs.org/api/readline.html
