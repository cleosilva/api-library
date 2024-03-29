# Api-library Node.js com MongoDB

Código criado atrvés do Curso Api Rest com Express e MongoDB da Alura Cursos.

## Recursos utilizados no desenvolvimento:

- Node.Js;
- Express.Js ~ v.4.0;
- Conceito RestFul;
- MongoDb;
- Mongoose ~ v.6.0;
- JSON data (para retornar os dados);
- PostMan (testar a API criada);

## Testando a Aplicação no Postman:

Caso queira testar as API's criadas no projeto, primeiro baixe o [Postman](https://www.postman.com/).
Depois de realizar o download do Postman, basta agora realizar os passos abaixo para 
poder testar cada API criada!

  ROTA                    |     HTTP(Verbo)   |      Descrição        | 
------------------------- | ----------------- | --------------------- | 
/livros                   |       GET         | Selecionar Todos      |  
/livros/:id               |       GET         | Selecionar Por Id     | 
/livros                   |       POST        | Cadastrar Por Id      |
/livros/:id               |       PUT         | Atualizar Por Id      |    
/livros/:id               |       DELETE      | Excluir Por Id        |

## Executar Localmente

Caso você deseja executar o projeto na sua máquina local, basta seguir os passos abaixo:

## Começando...

Para começar, você deve simplesmente clonar o repositório do projeto na sua máquina e instalar as dependências.

### Pre-Requisitos

Antes de instalar as dependências no projeto, você precisa já ter instalado na sua máquina:

* **Node.Js**: Caso não tenha, basta realizar o download [Aqui](https://nodejs.org/en/)
* **MongoDb**: Caso também não tenha, basta criar uma conta no MongoDB Atlas [Aqui](https://www.mongodb.com/download-center#community)

### Instalando as Dependências

Abre o cmd (caso esteja utilizando o Windows) e digite a path do seu projeto

```
cd "C:\Users\NomeDoComputador\Documents\..."
```

Depois, quando estiver na pasta do projeto, basta digitar no cmd a seguinte instrução:

```
npm install
```

Ao digitar a instrução acima, automaticamente ele irá baixar todas as dependências listadas no arquivo package.json:

* `node_modules` - que contêm os packages do npm que precisará para o projeto.

### Executando a Aplicação

Bom, agora na mesma tela do cmd, basta iniciar o server para o projeto ser executado localmente.

```
npm run dev
```      

Agora, basta abrir o postman criar as rotas, por exemplo, 'http://localhost:3000/livros' e testar a aplicação.