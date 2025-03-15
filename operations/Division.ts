import Calculo from "./Calculo";

export default class Division extends Calculo{
    public calcular(num1: number, num2: number): number {
        return num1 / num2;
    }
}