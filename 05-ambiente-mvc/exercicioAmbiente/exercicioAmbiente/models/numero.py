class Numero:
    def __init__(self, valor):
        self.valor = valor
        self.dobro = self.calcular_dobro()

    def calcular_dobro(self):
        return self.valor * 2
