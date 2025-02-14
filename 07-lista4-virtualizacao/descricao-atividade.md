# Modelagem de sistema com arquitetura virtualizada baseada em um sistema comercial multicamadas.

Imagine um software comercial tradicional baseado em arquitetura multicamadas para aplicações WEB, utilizado para gestão de pedidos e vendas em um ambiente empresarial. A estrutura original do sistema segue uma arquitetura de três camadas:

1. **Camada de Apresentação:** Interface web desenvolvida em React ou Angular, consumindo APIs REST.

2. **Camada de Negócio:** Aplicativo backend monolítico em Java com Spring Boot, responsável por processar pedidos, calcular impostos e validar pagamentos.

3. **Camada de Dados:** Banco de dados relacional (MySQL ou PostgreSQL) hospedado em um servidor dedicado.

O sistema também utiliza um servidor de autenticação via OAuth 2.0 e interage com serviços de terceiros para processamento de pagamentos.

## Objetivo:
O objetivo é reestruturar essa aplicação para um modelo baseado em arquitetura serverless ou virtualizada, utilizando modelagem UML para documentar a transição. Proponha uma nova modelagem do sistema com base em componentes desacoplados e eventos assíncronos.

## Tarefas
Os alunos (grupo de até 3 alunos) devem criar os diagramas UML para ilustrar a transição, como no exemplo a seguir:

1. **(Exemplo) Diagrama de Componentes:**

    - Representar a arquitetura atual do sistema, incluindo frontend, backend e banco de dados.

    - Propor uma arquitetura serverless, detalhando componentes como API Gateway, Functions as a Service (FaaS) (ex.: AWS Lambda), event-driven processing e bancos de dados serverless (ex.: DynamoDB ou Firebase Firestore).

2. **(Exemplo) Diagrama de Sequência:**

    - Ilustrar o fluxo de processamento de um pedido na arquitetura tradicional (requisições HTTP síncronas ao backend e banco de dados).

    - Representar o mesmo fluxo em uma arquitetura serverless, considerando eventos disparados por serviços como SQS/Kafka, funções serverless e armazenamento distribuído.

3. **(Exemplo) Diagrama de Implantação:**

    - Comparar a infraestrutura tradicional (servidores dedicados, banco de dados centralizado) com a alternativa virtualizada (containers gerenciados via Kubernetes ou ECS/Fargate).

## Exemplo de Modelagem Esperada
- **Diagrama de Componentes:** Deve mostrar como a aplicação tradicional se divide em serviços menores no modelo serverless, cada um executando uma função específica.

- **Diagrama de Sequência:** No modelo antigo, o cliente faz uma requisição HTTP ao backend, que processa e armazena no banco. No modelo novo, a requisição é registrada em um evento de fila e consumida por funções serverless sob demanda.

- **Diagrama de Implantação:** Mostrando a transição de servidores físicos ou VMs para containers ou funções serverless.

## Entrega
Os alunos devem entregar um conjunto de diagramas UML que demonstre a evolução do sistema para uma abordagem serverless ou virtualizada, acompanhados de uma breve explicação sobre as mudanças realizadas. 
Deve ser entregue documentação com os integrantes do grupo e os diagramas em um unico arquivo PDF.