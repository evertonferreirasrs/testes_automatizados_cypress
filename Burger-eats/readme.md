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
Neste projeto será utilizado upload de imagens, gerador de cpf e gerador de nome, email fake, para isso é necessário instalar os seguintes pacotes:
```
npm install cypress-file-upload --save-dev
```
npm install --save-dev faker@5.5.3
```
npm install gerador-validador-cpf --save-dev
```


## Informações

Após clonar o repositório, deverá alterar as informações no arquivo cypress.env.json com os dados necessários para teste

dados:
```
    "nome": "José Duarte", 
    "dataAniversario": 19041990,
    "CPF": 22895645167,
    "email": "joses@teste.com",
    "telefone": 35123456789,
    "CEP": 37540000,
    "endereco": "R: Jose Duarte",
    "numero": 192,
    "complemento": "casa",
    "bairro": "Juquita",
    "cidade": "Santa Rita do Sapucai",

    "nomeCartao": "José Duarte",
    "CPFCartao": 22895645167,

    "numeroCartaoAmericanExpress": 4012001037141112,    
    "mesCartaoAmericanExpress": "12",
    "anoCartaoAmericanExpress": "2022",
    "CVVCartaoAmericanExpress": 123,

    "numeroCartaoVisa": 4012001037141112,    
    "mesCartaoVisa": "12",
    "anoCartaoVisa": "2022",
    "CVVCartaoVisa": 123,

    "numeroCartaoMasterCard": 4012001037141112,    
    "mesCartaoMasterCard": "12",
    "anoCartaoMasterCard": "2022",
    "CVVCartaoMasterCard": 123,

    "numeroCartaoElo": 4012001037141112,    
    "mesCartaoElo": "12",
    "anoCartaoElo": "2022",
    "CVVCartaoElo": 123,

    "numeroCartaoDiners": 4012001037141112,    
    "mesCartaoDiners": "12",
    "anoCartaoDiners": "2022",
    "CVVCartaoDiners": 123,

    "cupom": "AMOPROMO"

