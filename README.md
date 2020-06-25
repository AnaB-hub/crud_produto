# Crud de Produto
Repositório criado com o intuito de armazenar um CRUD básico de produto. O objetivo é aplicar os conhecimentos em Java (utilizando spring boot) e angular material, adquiridos durante os cursos.

# Instalação
* Clone o projeto: git clone git@github.com:AnaB-hub/crud_produto.git;
* A pasta `CRUD_produto` contém o backend da aplicação e a pasta `crudProduto`contém o frontend;

# BACKEND

### Tecnologias
* Java 8
* Spring Framework 2.3.1
* Lombok
* Postgresql
* PgAdmin 4
* Swagger 2.7.0

### Como subir a aplicação
* Importe o projeto `CRUD_produto` em sua IDE;
* Verifique se todas as dependências foram baixadas;
* No arquivo `CrudProdutoApplication` clique com o botão direito => Run as => Java Application. O projeto subirá na porta 8080;
* É necessário modificar o arquivo `application.properties`, para atender as configurações do seu banco de dados. Não é necessário criar as tabelas no banco de dados, pois a aplicação gera de forma automática.

# FRONTEND

### Tecnologias
* Angular 8
* Angular Material 8.2.0
* Typescript 3.5.3

### Como subir a aplicação
* Abra a pasta `crudProduto` no seu editor, recomendo o VSCode;
* Baixe as depêndencias utilizando `npm install`;
* Suba a aplicação uilizando `npm run start` ou `npm start`. A aplicação subirá na porta 8082, como configurado no arquivo package.json.
