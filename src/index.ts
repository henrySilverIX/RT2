import * as readline from "readline";
import Calculo from "../operations/Calculo";
import Addition from "../operations/Addition";
import Subtraction from "../operations/Subtraction";
import Multiplication from "../operations/Multiplication";
import Division from "../operations/Division";
import Power from "../operations/Power";
import Root from "../operations/Root";
import QuadEquation from "../operations/QuadEquation";

const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

leitor.question(
  "Quais são os seus números e a operação desejada? (Para as operações digite soma, " +
    "subtrair, multiplicar, dividir, potencia ou raiz)\n",
  (valor) => {
    let termos = valor.split(" ");
    let numero1 = Number(termos[0]);
    let numero2 = Number(termos[1]);
    let operacao = termos[2].toLowerCase();

    if (termos.length == 1) {
      operacao = termos[0];
    }

    console.log(`Estas foram as suas instruções: ${termos}\n`);

    //Tratando a informação da operação

    let calculo: Calculo;

    switch (operacao) {
      case "soma":
        calculo = new Addition();
        console.log(
          `O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`
        );
        break;
      case "subtrair":
        calculo = new Subtraction();
        console.log(
          `O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`
        );
        break;
      case "multiplicar":
        calculo = new Multiplication();
        console.log(
          `O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`
        );
        break;
      case "dividir":
        calculo = new Division();
        console.log(
          `O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`
        );
        break;
      case "potencia":
        calculo = new Power();
        console.log(
          `O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`
        );
        break;
      case "raiz":
        calculo = new Root();
        console.log(
          `O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`
        );
        break;
      default:
        console.log("Digite uma operação válida");
        break;
    }

    console.log(
      "Considere a fórmula geral da equação do segundo grau: ax^2 + bx + c = 0."
    );

    leitor.question(
      "Digite os coeficientes a, b e c para o cálculo das raízes de uma equação quadrática: ",
      (coeficientes) => {
        let lista_coef = coeficientes.split(" ");
        let equacao_2 = new QuadEquation(
          Number(lista_coef[0]),
          Number(lista_coef[1]),
          Number(lista_coef[2])
        );
    
        equacao_2.calcularRaizes();
    
        leitor.close();
      }
    );

  }
);



