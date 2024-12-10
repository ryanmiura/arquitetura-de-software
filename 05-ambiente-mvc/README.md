# Como rodar
Vá para a pasta do projeto Django

    cd exercicioAmbiante

inicie o servidor

    python manage.py runserver


# Enunciado: Configuração do Ambiente para MVC
1. Escolha um framework MVC:

- Node.js com Express: Um framework leve e flexível para criar aplicações web.
- Django (Python): Framework robusto com suporte nativo a MVC.
- Spring Boot (Java): Para aplicações mais estruturadas em Java.
- Ruby on Rails: Simples e ideal para protótipos rápidos.
2. Passo a Passo:

- Instale as dependências do framework escolhido.
    - Node.js: npm init -y seguido de npm install express.
    - Django: pip install django.
    - Spring Boot: Configure um projeto com Spring Initializr.
- Configure uma estrutura básica de diretórios


/project-root
├── /models
├── /views
├── /controllers
├── /routes (opcional para frameworks com roteamento separado)
├── server/app.py|.js|.java (arquivo principal)


### Implemente uma funcionalidade básica:

- Crie uma página inicial (/) que exiba uma mensagem "Ambiente configurado".
- Configure um modelo simples para navegar um parâmetro que, por meio de um controlador, passe por alguma transformação lógica.