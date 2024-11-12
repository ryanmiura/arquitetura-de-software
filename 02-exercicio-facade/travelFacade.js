const ReservaVoo = require('./reservaVoo');
const ReservaHotel = require('./reservaHotel');
const AluguelCarro = require('./aluguelCarro');

class TravelFacade {
    constructor() {
        this.reservaVoo = new ReservaVoo();
        this.reservaHotel = new ReservaHotel();
        this.aluguelCarro = new AluguelCarro();
    }

    fazerReservaCompleta(origem, destino, dataIda, dataVolta) {
        console.log('🌎Iniciando reserva completa de viagem...');
        this.reservaVoo.fazerReserva(origem, destino, dataIda);
        this.reservaHotel.fazerReserva(destino, dataIda, dataVolta);
        this.aluguelCarro.alugarCarro(destino, dataIda, dataVolta);
        console.log('✅Reserva completa de viagem finalizada com sucesso!');
    }
}

module.exports = TravelFacade;
