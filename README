
<h1 align="center">
  <img alt="QuerryContacts" title="QuerryContacts" src="./bg-querrycontacts.png" width="100px" />
</h1>

<h1 align="center">
  Querry Contacts - Full Satck
</h1>

<p align = "center">
Este é a aplicação QuerryContacts - Uma aplicação feita para você ter um controle melhor em seus contatos, onde fica um fácil acesso em um site.
</p>

<h2 align="center">
  Para Rodar a aplicação irá precisar seguir alguns passos
</h2>


### PASSO 1 - INSTALAR AS DEPENDÊNCIAS BACKEND

Estamos prontos para começar. Note que temos duas pastas, uma delas escrito backend.

Vá para seu prompt de comando, `cd` para o diretório *backend*

Agora você precisa conectar seu banco de dados.

Aconselho que use docker desktop, por ser mais fácil e útil, você pode acessar ele nesse <a target="_blank" href='https://www.docker.com'>Link</a>

Não esqueça de configurar o arquivo *.env*, você pode pegar o *.env.example* para saber as variaveis que irá utilizar.

Depois, você vai poder instalar as dependencias, utilizando esse seguinte código em seu prompt de comando:

```sh

$ yarn

```

Será impresso uma tonelada de coisas. Isto porque está sendo lido nosso arquivo JSON feito a instalação de todas as coisas listadas no *dependencies* (sim, incluindo o Express - nós instalamos o material de alto nível, mas ainda temos que instalar algum código que será necessário para este projeto em particular). Uma vez que o yarn percorreu seu caminho, você terá um diretório `node_modules` que contém todas as suas dependências para este tutorial.

Agora você pode gerar uma migração, ainda em seu pormpt, digite:


```sh

$ yarn migration:generate

```

Note que ele criou uma pasta chamada *migrations*. Siga as imagens para entender como colocar a sua migration no projeto:

<img alt="QuerryContacts" title="QuerryContacts" src="./doc/passo1.png" width="100px" />

Acesse o arquivo gerado, e copie o  nome sublinhado em vermelho:

<img alt="QuerryContacts" title="QuerryContacts" src="./doc/passo2.png" width="100px" />

Em seguida vá até o arquivo data-source, faça o import desse arquivo, e coloque em *migrations:*, dentro do array, se você gerar mais de uma, basta acrecentar uma virgula, e seguir os mesmos passos.

Depois desse processo, você pode abrir seu prompt de comando novamente, e e digitar:

```sh

$ yarn migration:run

```

Agora você tem uma aplicação em pleno funcionamento e esperando para ser rodada. Vamos testá-la! No prompt, e digite:

```sh

$ yarn dev

```

Aperte enter. Você vai obter isso:

```sh

🔥 Server running 🔥

```

### PASSO 2 - ACESSANDO OS ENDPOINTS PELO INSOMNIA

Incrível! Abra seu navegador e digite `http://locahost:3000`. Agora você pode acessar as rotas. Mas para ficar melhor, vamos fazer isso no Insomnia. Caso não tenha baixado, basta acessar esse <a href='https://insomnia.rest/download' target="_blank">Link</a>.

Veja que na pasta *backend*  tem um arquivo chamado `workspace.json`, você pode acessar ele pelo insomnia, acessando dessa forma: 

1 - Abra o Insomnia REST Client.
2 - A partir da lista de Insomnia, selecione Importar / Exportar.

<img alt="QuerryContacts" title="QuerryContacts" src="./doc/passo4.png" width="100px" />


<p align="center">
  <a href="#endpoints">Endpoints</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

## **Endpoints**

A API tem um total de 12 endpoints, sendo em volta principalmente do usuário - podendo cadastrar seu perfil, e seus contatos. <br/>

## Rotas que não precisam de autenticação

<h2 align ='center'> Listando usuários </h2>

Nessa aplicação o usuário sem fazer login ou se cadastrar pode ver os usuarios já cadastrados na plataforma, na API podemos acessar a lista dessa forma:
Aqui conseguimos ver os usuários, suas tecnologias e seus trabalhos cadastrados.

`GET /users - FORMATO DA RESPOSTA - STATUS 200`

```json
[
	{
		"id": "e14e4d6f-7029-4445-b51b-c85211b01a4b",
		"name": "Thaisa",
		"lastname": "Alice",
		"email": "alice@mail.com",
		"phone": "(99)99909-9999",
		"createdAt": "2023-03-23T19:00:02.849Z",
		"updatedAt": "2023-03-23T19:37:03.422Z",
		"password": "$2a$08$w221mJ9nou2cQCKeXU4S1214Ok2322naksnafvYk284I4K88RBpbSb393Ac9X5H7zey",
		"contacts": [
			{
				"id": "69bdac44-3f5a-4ab8-9d33-df6c5318477d",
				"name": "Fernanda",
				"lastname": "Pereira",
				"email": "nanda@mail.com",
				"phone": "(99) 99909-9999",
				"createAt": "2023-03-23T19:42:42.722Z"
			},
			{
				"id": "2552e478-20ad-423c-9eeb-548f0d00b3d9",
				"name": "Leandro",
				"lastname": "Kurby",
				"email": "kurby@mail.com",
				"phone": "(44)49949-9999",
				"createAt": "2023-03-28T06:02:33.427Z"
			},
			{
				"id": "17c0d4c0-151d-4715-ac27-788aa41ea0d7",
				"name": "Matheus",
				"lastname": "Vicente",
				"email": "vicentinho@mail.com",
				"phone": "(59)239909-9999",
				"createAt": "2023-03-28T06:02:37.311Z"
			},
			{
				"id": "e5f1e9ec-a5b0-41d3-95e2-16643c02634b",
				"name": "Kauan",
				"lastname": "Fernandes",
				"email": "kaun@mail.com",
				"phone": "(79)679909-9999",
				"createAt": "2023-03-28T06:02:42.480Z"
			}
		]
	},
	{
		"id": "83526ef3-c780-41cd-a028-e0d3a718f312",
		"name": "Lucas",
		"lastname": "Matos",
		"email": "lucas_matos@mail.com",
		"phone": "(99)99909-9999",
		"createdAt": "2023-03-27T23:37:49.411Z",
		"updatedAt": "2023-03-27T23:37:49.411Z",
		"password": "$2a$08$wmJ9noucQCKeXU4S4OkROefvYk284I4K88RBpbSb393Ac9X5H7zey",
		"contacts": [
						{
				"id": "69bdac44-3f5a-4ab8-9d33-df6c5318477d",
				"name": "Fernanda",
				"lastname": "Pereira",
				"email": "nanda@mail.com",
				"phone": "(99) 99909-9999",
				"createAt": "2023-03-23T19:42:42.722Z"
			},
			{
				"id": "2552e478-20ad-423c-9eeb-548f0d00b3d9",
				"name": "Leandro",
				"lastname": "Kurby",
				"email": "kurby@mail.com",
				"phone": "(44)49949-9999",
				"createAt": "2023-03-28T06:02:33.427Z"
			},
			{
				"id": "17c0d4c0-151d-4715-ac27-788aa41ea0d7",
				"name": "Matheus",
				"lastname": "Vicente",
				"email": "vicentinho@mail.com",
				"phone": "(59)239909-9999",
				"createAt": "2023-03-28T06:02:37.311Z"
			},
			{
				"id": "e5f1e9ec-a5b0-41d3-95e2-16643c02634b",
				"name": "Kauan",
				"lastname": "Fernandes",
				"email": "kaun@mail.com",
				"phone": "(79)679909-9999",
				"createAt": "2023-03-28T06:02:42.480Z"
			}
		]
	}
]
```

## Rotas que precisam de autorização

Rotas que necessitam de autorização deve ser informado no cabeçalho da requisição o campo "Authorization", dessa forma:

> Authorization: Bearer {token}

Após o usuário estar logado, ele deve conseguir cadastrar contatos.

<h2 align ='center'> Buscar Perfil do usuário logado (token) </h2>

`GET /profile - FORMATO DA REQUISIÇÃO`

<blockquote>Na requisição apenas é necessário o TOKEN, a aplicação ficará responsável em buscar o id do usuário no token e retorna ele.</blockquote>

<br>

`GET /profile - FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"id": "fdfe3ed9-8c5f-48ca-a2ec-0748d45bd656",
	"name": "Thaisa",
	"lastname": "Alice",
	"email": "alice@mail.com",
	"phone": "(99)99909-9999",
	"createdAt": "2023-03-30T01:26:33.739Z",
	"updatedAt": "2023-03-30T01:26:33.739Z",
	"password": "$2a$08$DBl57qtnLUIjfS9dTfskEuHoEgITDzbdosFMh0ExL7z8mnvpetyee",
}
```

Podemos acessar um usuário específico utilizando o endpoint:

`GET /users/:user_id - FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"id": "fdfe3ed9-8c5f-48ca-a2ec-0748d45bd656",
	"name": "Thaisa",
	"lastname": "Alice",
	"email": "alice@mail.com",
	"phone": "(99)99909-9999",
	"createdAt": "2023-03-30T01:26:33.739Z",
	"updatedAt": "2023-03-30T01:26:33.739Z",
	"password": "$2a$08$DBl57qtnLUIjfS9dTfskEuHoEgITDzbdosFMh0ExL7z8mnvpetyee",
	"contacts": [
    	{
				"id": "69bdac44-3f5a-4ab8-9d33-df6c5318477d",
				"name": "Fernanda",
				"lastname": "Pereira",
				"email": "nanda@mail.com",
				"phone": "(99) 99909-9999",
				"createAt": "2023-03-23T19:42:42.722Z"
			},
			{
				"id": "2552e478-20ad-423c-9eeb-548f0d00b3d9",
				"name": "Leandro",
				"lastname": "Kurby",
				"email": "kurby@mail.com",
				"phone": "(44)49949-9999",
				"createAt": "2023-03-28T06:02:33.427Z"
			},
			{
				"id": "17c0d4c0-151d-4715-ac27-788aa41ea0d7",
				"name": "Matheus",
				"lastname": "Vicente",
				"email": "vicentinho@mail.com",
				"phone": "(59)239909-9999",
				"createAt": "2023-03-28T06:02:37.311Z"
			},
			{
				"id": "e5f1e9ec-a5b0-41d3-95e2-16643c02634b",
				"name": "Kauan",
				"lastname": "Fernandes",
				"email": "kaun@mail.com",
				"phone": "(79)679909-9999",
				"createAt": "2023-03-28T06:02:42.480Z"
			}
  ]
}
```

<h2 align ='center'> Criação de usuário </h2>

`POST /users - FORMATO DA REQUISIÇÃO`

```json
{
	"name": "Thaisa",
	"lastname": "Alice",
	"email": "alice@mail.com",
	"phone": "(99)99909-9999",
	"password": "@Lice-0102"
}
```

Caso dê tudo certo, a resposta será assim:

`POST /users - FORMATO DA RESPOSTA - STATUS 201`

```json
{
	"name": "Thaisa",
	"lastname": "Alice",
	"email": "alice@mail.com",
	"phone": "(99)99909-9999",
	"id": "fdfe3ed9-8c5f-48ca-a2ec-0748d45bd656",
	"createdAt": "2023-03-30T01:26:33.739Z",
	"updatedAt": "2023-03-30T01:26:33.739Z"
}
```

Erro de email já cadastrado:

`POST /users - `
` FORMATO DA RESPOSTA - STATUS 400`

```json
{
  "status": "error",
  "message": "Email already exists"
}
```

<h2 align = "center"> Login </h2>

`POST /login- FORMATO DA REQUISIÇÃO`

```json
{
	"email": "alice@mail.com",
	"password": "@Lice-0102"
}
```

Caso dê tudo certo, a resposta será assim:

`POST /login- FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDcxODM3NzYsImV4cCI6MTYwNzQ0Mjk3Niwic3ViIjoiMmE3NWUxMmQtZmQxYy00ODFkLWJhODgtNGQ4YjE3MTAzYjJhIn0.UY67X23mPYAAzT43uFWZDHPUakd2STo5w4AuOcppkyQ"
}
```

<h2 align ='center'> Cadastrar contatos em seu usuario </h2>

`POST /contacts - FORMATO DA REQUISIÇÃO`

```json
{
	"name": "Gabriel",
	"lastname": "Tsunoda",
	"email": "tsunode@kenzie.com",
	"phone": "(41) 99909-1234"
}
```

`POST /contacts - FORMATO DA RESPOSTA - STATUS 201`

```json
{
	"name": "Gabriel",
	"lastname": "Tsunoda",
	"email": "tsunode@kenzie.com",
	"phone": "(41) 99909-1234",
	"user": {
		"id": "83526ef3-c780-41cd-a028-e0d3a718f312",
		"name": "Thaisa",
		"lastname": "Alice",
		"email": "alice@mail.com",
		"phone": "(99)99909-9999",
		"createdAt": "2023-03-27T23:37:49.411Z",
		"updatedAt": "2023-03-27T23:37:49.411Z",
		"password": "$2a$08$wmJ9noucQCKeXU4S4OkROefvYk284I4K88RBpbSb393Ac9X5H7zey"
	},
	"id": "bdb41c7e-7f04-4ded-bb56-93e57ff721d9",
	"createAt": "2023-03-30T01:34:29.162Z"
}
```

<h2 align ='center'> Edição de usuario </h2>

`PATCH /contacts/:contact_id - FORMATO DA REQUISIÇÃO`

```json
{
  {
	"name": "Gabriel",
	"lastname": "Tsunoda",
	"email": "tsunode@mail.com",
	"phone": "(42) 98909-1234"
}
}
```

`POST /contacts - FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"id": "e14e4d6f-7029-4445-b51b-c85211b01a4b",
	"name": "Gabriel",
	"lastname": "Tsunoda",
	"email": "tsunode@mail.com",
	"phone": "(42) 98909-1234",
	"createAt": "2023-03-23T19:17:51.550Z"
}
```

Também é possível deletar uma tecnologia, utilizando este endpoint:

`DELETE /contacts/:contact_id`

```
Não é necessário um corpo da requisição.
```

Caso queira acessar mais rotas, aqui estão todas as rotas que você pode utilizar para interagir com a API:

- `GET /users` - Lista todos os usuários cadastrados
- `GET /profile` - Lista o usuario logado
- `GET /users/:id` - Lista um unico usuário
- `POST /login` - Consegue logar um usuario
- `PATCH /users/:id` - Atualiza um usuário pelo ID
- `POST /users/` - Cria um usuario
- `DELETE /users/:id` - Exclui um usuário pelo ID
- `POST /contacts` - Cria um contato para um usuário pelo ID
- `GET /contacts` - Lista todos os usuarios de um contato
- `PATCH /users/:id` - Atualiza um contato pelo ID
- `DELETE /contatcs/:id` - Exclui um contato do usuario pelo ID


Feito com ♥ por T. Alice :wave:
