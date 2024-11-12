const TravelFacade = require('./travelFacade');

// Criando uma instância do TravelFacade
const sistemaDeViagens = new TravelFacade();

// Usando o Facade para fazer uma reserva completa
sistemaDeViagens.fazerReservaCompleta('Cornelio Procopio-BR', 'Tokyo-JP', '12-11-2024', '12-01-2025');
