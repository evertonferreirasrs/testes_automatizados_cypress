# Automatização Desafio AmoPromo

Testes automatizados de página WEB utilizando Cypress

## Como executar aplicação

### Requisitos
* Nodejs versão >= 16.14.0
* npm versão >= 8.3.1
* npx versão >= 8.3.1
* cypress versão = 9.7

### Executar
Para executar os testes é necessário clonar o repositório e baixar as dependências executando o comando:
```
npm install
```
Para executar os testes é necessário clonar o repositório e baixar as dependências executando o comando:
```
npm i cypress@9.7 --save-dev
```
Para executar diretamente no console o comando:
```
npx cypress run
```
Caso queira executar os testes visualizando a interface gráfica, execute:
```
npx cypress open
```


## Informações

Após clonar o repositório, deverá alterar as informações no arquivo cypress.env.json com os dados necessários para teste

dados:
```
    "nome": "xxxx", 
    "dataAniversario": xxxxxxxx,
    "CPF": xxxxxxxxxxx,
    "email": "teste@teste.com",
    "telefone": xxxxxxxxxxx,
    "CEP": xxxxxxxx,
    "endereco": "xxxxxxxx",
    "numero": xx,
    "complemento": "xxxxx",
    "bairro": "xxxxx",
    "cidade": "xxxxxxxxxx",
    "numeroCartao": xxxxxxxxxxxxxxx,
    "nomeCartao": "xxxx",
    "CPFCartao": xxxxxxxxxxx,
    "mesCartao": "xx",
    "anoCartao": "xxxx",
    "CVVCartao": xxx,
    "cupom": "xxxxxxxxx"

