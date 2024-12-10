from django.shortcuts import render
from exercicioAmbiente.models import Numero

def calcular_dobro(request):
    numero = request.GET.get('numero')
    num = Numero(int(numero))
    return render(request, 'resultado.html', {'numero': num.valor, 'dobro': num.dobro})
