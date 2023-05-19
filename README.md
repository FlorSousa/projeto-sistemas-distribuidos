
# Trabalho de Sistemas Distribuídos - Autoscaling Horizontal com Kubernetes

Este repositório contém o código fonte e as instruções necessárias para configurar um ambiente de autoscaling horizontal usando Kubernetes para uma aplicação API Node.js e um banco de dados PostgreSQL. Além disso, um script Python é fornecido para gerar carga de requisições e testar o autoscaling.

## Arquitetura

A arquitetura do sistema distribuído consiste nos seguintes componentes:

- **API Node.js**: Uma aplicação Node.js que expõe uma API para gerenciar recursos e realizar operações no banco de dados.
- **Banco de Dados PostgreSQL**: Um banco de dados PostgreSQL para armazenar os dados da aplicação.
- **Kubernetes**: A infraestrutura de orquestração de contêineres Kubernetes é utilizada para realizar o autoscaling horizontal com base na carga de requisições.
- **Script Python**: Um script Python é fornecido para gerar carga de requisições simulando o tráfego de usuários.

## Pré-requisitos

Certifique-se de ter os seguintes requisitos instalados em seu ambiente de desenvolvimento:

- [Docker](https://www.docker.com/)
- [Kubernetes](https://kubernetes.io/)
- [Node.js](https://nodejs.org/)
- [Python](https://www.python.org/)
- [PostgreSQL](https://www.postgresql.org/)

## Configuração e Implantação

Siga as instruções abaixo para configurar e implantar o ambiente de autoscaling:

1. Clone este repositório em sua máquina local:

```bash
git clone https://github.com/FlorSousa/projeto-sistemas-distribuidos.git
```

2. Navegue até o diretório do projeto:

```bash
cd projeto-sistemas-distribuidos
```

3. Configuração da API Node.js:

- ...
- ...

4. Configuração do Banco de Dados PostgreSQL:

- ...
- ...

5. Implantação no Kubernetes:

- ...
- ...

## Testando o Autoscaling

Utilize o script Python fornecido para gerar carga de requisições e testar o autoscaling. Certifique-se de ter o Python instalado e execute o seguinte comando no diretório raiz do projeto:

```bash
python request.py
```

O script irá gerar uma carga simulada de requisições à API Node.js, permitindo avaliar o comportamento do autoscaling horizontal.

## Licença

Este projeto está licenciado sob a licença [MIT](LICENSE).
