# Typescript Todo App

## Description

This is a simple todo app built in typescript.

## Technologies

- express (Node.js/TypeScript)
- mongodb (mongoose as ORM)
- React (JavaScript/TypeScript)
- docker/docker-compose (dev container and deployment)

## How to run the project

### Run the project locally (need a mongodb running)

```
 $ git clone https://github.com/ryuichi24/typescript-todo-app

 $ cd typescript-todo-app/src/backend

 $ yarn

 $ touch .env  # please refer to ".env.example"

 $ yarn dev
```

### Run the project in the dev container (not need a mongodb running)

With docker running, please run the following commands:

```
# install a vscode extension to work in a dev container
$ code --install-extension ms-vscode-remote.remote-containers

# reopen vscode and a popup appears saying "reopen in container"
# you can also do "Remote-Containers: Reopen in Container"
# in Command pallette (Shift + Cmd + p or Ctrl + Shift + p)

$ cd src/backend

$ touch .env  # please refer to ".env.example"

$ yarn dev
```
