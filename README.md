# api-rolar-dados
![Image](https://github.com/user-attachments/assets/51ff2b94-6b24-4f93-936c-163955dc6ff3)

## Sobre

Este projeto é um modelo simplificado de API que possui um GET para retornar um número aleatório, dependendo do número de faces fornecido pelo frontend, ele é baseado frouxamente em uma arquitetura MVC.

- [Repositório Frontend](https://github.com/jutdelu/front-rolar-dados)

## Status do projeto

Ainda em desenvolvimento.

## Instalação

- Clone este repositório;
- Acesse a pasta pelo terminal/cmd;
- Instale as dependências:
~~~javascript
npm init -y
~~~
- Instale o express + cors:
~~~javascript
npm instal express cors
~~~
- Rode a aplicação:
~~~javascript
node src/server.js
~~~

## Como usar
Executado o comando de inicialização, já é possível ver no CLI a mensagem "Servidor rodando na porta 3000", é possível fazer os testes de requisição em qualquer API Client. Se tiver o frontend rodando, é possível ver a parte gráfica do projeto, sem a necessidade de um API Client.

## Tecnologias utilizadas
Foram utilizados no projeto as seguintes tecnologias:
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [cors](https://www.npmjs.com/package/cors)
