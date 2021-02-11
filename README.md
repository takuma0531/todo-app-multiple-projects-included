# Typescript Todo App

## Description
This is a simple todo app built in typescript.

## Technologies
- express (Node.js/TypeScript)
- mongodb (mongoose as ORM)
- React (JavaScript/TypeScript)

## How to run the project

### Clone the project
```
 git clone https://github.com/ryuichi24/typescript-todo-app
 cd typescript-todo-app
```

### Setup mongodb with docker-compose

Edit `<username>` and `<password>` in a `db/docker-compose.yml` file with your preferred ones:
```
environment:
      MONGO_INITDB_ROOT_USERNAME: <username>
      MONGO_INITDB_ROOT_PASSWORD: <password>
```
execute docker-compose command in `db`:

```
cd db
docker-compose up -d
```

### Run the server:

Make a `.env` file in `src/backend` referring to a `.env.example` file and
run the server

```
cd src/backend
# add content in .env referring to a .env.example
touch .env
yarn dev
```

## How to run tests
```
cd src/backend
yarn test
```



