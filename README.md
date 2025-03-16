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

Para o cálculo da raízes de uma determinada equação do segundo grau, considerei as raízes complexas também.

```typescript
import Calculo from "./Calculo";
import Root from "./Root"

export default class QuadEquation{
    public coef_a:number;
    public coef_b:number;
    public coef_c:number;
    public raiz:Root;

    constructor(coeficiente_a:number, coeficiente_b:number, coeficiente_c:number){
        this.coef_a = coeficiente_a;
        this.coef_b = coeficiente_b;
        this.coef_c = coeficiente_c;
        this.raiz = new Root();
    }

    public delta():number{
        return ((this.coef_b ** 2) - (4 * this.coef_a * this.coef_c))
    }

    public calcularRaizes():void{
        if(this.delta() < 0){
            let delta_positivo = Math.abs(this.delta())

            let z1_real = -this.coef_b / 2 * this.coef_a
            let z2_real = -this.coef_b / 2 * this.coef_a

            let z1_imag = this.raiz.calcular(delta_positivo, 2) / 2 * this.coef_a
            let z2_imag = this.raiz.calcular(delta_positivo, 2) / 2 * this.coef_a

            let z1 = z1_real + ' + ' + (z1_imag.toFixed(3) + 'i');
            let z2 = z2_real + ' - ' + (z2_imag.toFixed(3) + 'i');

            console.log(`As raízes complexas são: z1 = ${z1} e z2 = ${z2}`)
        }
        else if(this.delta() === 0){
            let result = -this.coef_b / 2 * this.coef_a
            console.log(`A raíz da equação é: ${result}`)
        }
        else{
            let x1 = (-this.coef_b + this.raiz.calcular(this.delta(), 2)) / 2 * this.coef_a
            let x2 = (-this.coef_b - this.raiz.calcular(this.delta(), 2)) / 2 * this.coef_a

            x1 = Math.round(x1)
            x2 = Math.round(x2)
        
            console.log(`As raízes dessa equação são: ${x1} e ${x2}`)
        }
    }
}
```
Considere as equações: 
    1. x^2-4x+4 = 0;
    Única raiz real (raiz dupla): 𝑥 = 2

    2. x^2-5x+6=0;
    Duas raízes reais distintas: 𝑥 = 3 e 𝑥 = 2


    3. x^2+2x+5=0;
    Duas raízes complexas: 𝑥 = −1+2𝑖 e 𝑥 = −1−2𝑖


Como resultado temos

## Biblioteca para receber dados do usuário...

```typescript
import * as readline from 'readline';
```


Módulo readline, do Node.js, permite o recebimento de um fluxo de dados, inseridos pela linha de comando. Por isso, o módulo readline
facilita a entrada ou leitura de dados fornecidos pelo usuário. <br>


https://nodejs.org/api/readline.html
