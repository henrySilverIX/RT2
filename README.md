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

## Calculadora

