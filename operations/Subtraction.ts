import Calculo from "./Calculo";

export default class Subtraction extends Calculo{
    public calcular(num1: number, num2: number): number {
        return num1 - num2;
    }
}