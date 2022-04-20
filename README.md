<p align="center">
  <a href="#pencil-projeto">Projeto</a>&nbsp; &nbsp; |&nbsp; &nbsp;
  <a href="#hammer_and_wrench-tecnologias">Tecnologias</a>&nbsp; &nbsp; |&nbsp; &nbsp;
  <a href="#computer-como-executar">Como executar</a>&nbsp; &nbsp; |&nbsp; &nbsp;
  <a href="#memo-licença">Licença</a>&nbsp; &nbsp; |&nbsp; &nbsp;
</p>

<br>

## :pencil: Projeto

O projeto permite através da aplicação consultar linhas digitáveis de boleto de título bancário
e pagamento de concessionárias, verificando se a mesma é válida ou não. Sendo válida e
possuindo valor e/ou data de vencimento ter o retorno desses dados.

<br>

## :hammer_and_wrench: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node v16.14](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Jest](https://jestjs.io/pt-BR/)
- [Principios SOLID](https://pt.wikipedia.org/wiki/SOLID)

<br>

## :computer: Como executar

Clone o projeto e acesse a pasta do mesmo.

```bash
$ git clone https://github.com/marcuscastilho/api-ewally.git
$ cd api-ewally
```

Para iniciá-lo, siga os passos abaixo:

### Inserir as variáveis de ambiente 
Crie um arquivo com o nome <strong>.env</strong> na raiz do projeto, copie todas variáveis de ambiente do arquivo <strong>.env.example</strong> que também fica na raiz do projeto e cole dentro do arquivo .env criado.

```bash
# Instalar as dependências
$ yarn

# Iniciar o projeto
$ yarn dev

A aplicação estará disponível no endereço http://127.0.0.1:8080. Se passados as mesmas configurações de host e porta nas variáveis de ambinete.

# Iniciar os testes unitários
$ yarn test
```
</br>

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
