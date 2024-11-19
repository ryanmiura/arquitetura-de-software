// Extração de Método: A lógica para calcular a soma foi extraída para a função calcularSoma.
function calcularSoma(valores) {
    return valores.reduce((acc, valor) => acc + valor, 0);
}

// Método Inline: O cálculo da soma foi incorporado diretamente na função calcularMedia.
function calcularMedia(valores) {
    const soma = calcularSoma(valores);
    return (soma / valores.length).toFixed(2);
}

// Extração de Método: A lógica para calcular as diferenças quadradas foi extraída para a função calcularDiferencasQuadradas.
function calcularDiferencasQuadradas(valores, media) {
    return valores.map(valor => (valor - media) ** 2);
}

// Extração de Método: A lógica para calcular a soma das diferenças quadradas foi extraída para a função calcularSomaDiferencasQuadradas.
function calcularSomaDiferencasQuadradas(valores, media) {
    const diferencasQuadradas = calcularDiferencasQuadradas(valores, media);
    return calcularSoma(diferencasQuadradas);
}

function calcularDesvioPadrao(valores) {
    const media = calcularMedia(valores);
    const somaDiferencasQuadradas = calcularSomaDiferencasQuadradas(valores, media);
    const desvioPadrao = Math.sqrt(somaDiferencasQuadradas / valores.length);
    return desvioPadrao.toFixed(2);
}

let valores = [12, 15, 18, 20, 22];
console.log("Média: " + calcularMedia(valores));
console.log("Desvio Padrão: " + calcularDesvioPadrao(valores));
