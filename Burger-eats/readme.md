# Automatização Desafio AmoPromo

Testes automatizados de página WEB utilizando Cypress

## Como executar aplicação

### Requisitos
* Nodejs versão >= 16.14.0
* npm versão >= 8.3.1
* npx versão >= 8.3.1
* cypress versão = 10.9.0

### Executar
Para executar os testes é necessário clonar o repositório e baixar as dependências executando o comando:
```
npm install
```
Para executar os testes é necessário clonar o repositório e baixar as dependências executando o comando:
```
npm i cypress --save-dev
```
Para executar diretamente no console o comando:
```
npx cypress run
```
Caso queira executar os testes visualizando a interface gráfica, execute:
```
npx cypress open
```
Neste projeto será utilizado upload de imagens, para isso é necessário instalar os seguintes pacotes:
```
npm install cypress-file-upload --save-dev
