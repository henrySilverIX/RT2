import Calculo from "./Calculo";


export default class Root extends Calculo{
    public calcular(radicando: number, radical: number): number {
        let result: number = 0;
        let tolerancia: number = 0.000001

        //Nessa declaração do x, ele é um chute inicial
        let x = radicando / radical
        

        for(let iterations:number = 0; iterations < 100; iterations++){
            result = x - (x**radical - radicando) / (radical * x**(radical-1))

            if(Math.abs(result - x) < tolerancia){
                return result;
            }

            x = result
        }
        return result;
    }
}
