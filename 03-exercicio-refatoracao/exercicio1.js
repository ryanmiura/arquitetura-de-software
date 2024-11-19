function calculateTotalPrice(products) {
  // Calcula o total dos produtos usando o método reduce, 
  // eliminando a necessidade da variável temporária 'total'.
  const total = products.reduce((acc, product) => acc + product.price * product.quantity, 0);

  // Calcula o desconto usando o operador ternário, 
  // eliminando a necessidade da variável temporária 'discount'.
  const discount = total > 100 ? 0.1 : 0;

  // Calcula o custo de envio usando o operador ternário,
  // eliminando a necessidade da variável temporária 'shippingCost'.
  const shippingCost = total < 50 ? 5 : 0;

  // Retorna o preço total com desconto e custo de envio, 
  // formatado para duas casas decimais.
  return (total * (1 - discount) + shippingCost).toFixed(2);
}
