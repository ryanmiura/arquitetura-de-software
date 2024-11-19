# Exercício 1
## [RESPOSTA](exercicio1.js)
Refatore o seguinte trecho de código JS para torná-lo mais legível e eficiente. Além disso, aplique o princípio "Replace Temp with Query":

    function calculateTotalPrice(products) {
    let total = 0;
    let discount = 0.1;
    let shippingCost = 5;

    for (let i = 0; i < products.length; i++) {
        total += products[i].price * products[i].quantity;
    }

    if (total > 100) {
        total *= (1 - discount);
    }

    if (total < 50) {
        total += shippingCost;
    }

    return total.toFixed(2);
    }

Você deve refatorar o código acima, removendo as variáveis temporárias total, discount, e shippingCost, substituindo-as por consultas diretas. Certifique-se de manter a funcionalidade original do código.

# Exercício 2
## [RESPOSTA](exercicio2.js)
Você foi designado para revisar e refatorar um código legado que realiza cálculos de estatísticas de uma empresa. O código original é funcional, mas está difícil de entender e manter. Sua tarefa é refatorar o código, aplicando pelo menos três técnicas de refatoração para torná-lo mais legível, eficiente e fácil de dar manutenção.

    function calcularMedia(valores) {
        let soma = 0;
        for (let i = 0; i < valores.length; i++) {
            soma = soma + valores[i];
        }
        let media = soma / valores.length;
        return media.toFixed(2);
    }

    function calcularDesvioPadrao(valores) {
        let media = calcularMedia(valores);
        let somaDiferencasQuadradas = 0;
        for (let i = 0; i < valores.length; i++) {
            somaDiferencasQuadradas += (valores[i] - media) ** 2;
        }
        let desvioPadrao = Math.sqrt(somaDiferencasQuadradas / valores.length);
        return desvioPadrao.toFixed(2);
    }

    let valores = [12, 15, 18, 20, 22];
    console.log("Média: " + calcularMedia(valores));
    console.log("Desvio Padrão: " + calcularDesvioPadrao(valores));

Instruções:

Refatore o código original, aplicando pelo menos três técnicas de refatoração diferentes (Método de extração, Método em linha, Extração de variável, Divisão de variável temporária, Remoção de atribuições a parâmetros) .
Mantenha a funcionalidade do código original.
Você pode adicionar funções auxiliares, renomear variáveis e simplificar a lógica, se necessário.
Comente suas alterações explicando as técnicas de refatoração que foram aplicadas e por que elas melhoram o código.