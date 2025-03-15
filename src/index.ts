import * as readline from 'readline';
import Calculo from "../operations/Calculo";
import Addition from "../operations/Addition";
import Subtraction from "../operations/Subtraction";
import Multiplication from "../operations/Multiplication";
import Division from "../operations/Division";
import Power from "../operations/Power";
import Root from "../operations/Root"


const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})



leitor.question("Quais são os seus números e a operação desejada?\n", (valor)=>{
    let termos = valor.split(' ')
    let numero1 = Number(termos[0])
    let numero2 = Number(termos[1])
    let operacao = termos[2]
    termos.forEach((element) => console.log(element))
    leitor.close()
})




let calc = new Root()

console.log(calc.calcular(5,4))