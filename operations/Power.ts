import Calculo from "./Calculo";

export default class Power extends Calculo{
    public calcular(base: number, exp: number): number {
        let vezes:number
        return Math.pow(base,exp)
    }
}