# <img height="30" src="https://avatars.githubusercontent.com/u/1459110?s=200&v=4" alt="React Native" title="React Native"/> IBM Challenge - API

<br />

## Configurações

<br />

Na raiz do projeto instale as dependências:

```
npm install
```

<br />

## Iniciando a aplicação:

<br />

Renomeie o arquivo `.env.example` na raiz do projeto para `.env` e altere os valores

<br />

Suba uma imagem docker

```
docker run --name postgres -e POSTGRES_PASSWORD=strapi -e POSTGRES_USER=strapi -e POSTGRES_DB=strapi -p 5432:5432 postgres
```

<br />

rode o comando.

```
npm run develop
```

## Admin

- acesse `http://localhost:1337/admin` e crie o seu usuário.

- acesse no menu `Settings > Roles(users & permissions)` e de permissões para as seguintes rotas:

```
  Authenticated
      Car
        - create
        - find
        - findOne

      Upload
        - upload

      Users & permissions
        - me

  Public
      Users & permissions
        - register
```
