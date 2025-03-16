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
        return (this.coef_b ** 2) - (4 * this.coef_a * this.coef_c)
    }

    public calcularRaizes():void{
        if(this.delta() < 0){
            console.log("O número é complexo")
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