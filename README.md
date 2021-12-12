<img src="https://storage.googleapis.com/golden-wind/experts-club/capa-github.svg" />

# Utilizando Angular Guards e Preload

Buscamos esclarecer nesta aula como proteger o carregamento de certas rotas utilizando as boas práticas recomendadas pelo framework, como uso de canActivate e canLoad guard services.

Abordaremos alguns casos de uso e análises em um cenário reduzido, porém aplicável tanto a pequenos e grandes projetos, promovendo esta discussão saudável e reflexão, para buscarmos sempre implementar o que há de melhor prática, mas sempre pensando no contexto, e o contexto sempre muda a cada projeto, não existe bala de prata. 
 
**Fica sempre a análise:** Sempre preciso utilizar lazy loading? Até que ponto devo utilizar? O usuário está tendo uma boa experiência / não carregando dados desnecessários para sua utilização?

Link para documentação:
- [Angular CanActive](https://angular.io/api/router/CanActivate)
- [Angular CanLoad](https://angular.io/api/router/CanLoad)
- [Angular PreloadingStrategy](https://angular.io/api/router/PreloadingStrategy)

## Configuração Inicial Mínima (Requisitos)

- NodeJS versão LTS v13.13.0 (LTS recomendada / mínima compatível v12.20)
- Angular CLI (versão atual: 13.1.0) `npm i -g @angular/cli`

## Como rodar o projeto localmente

- Clonar o projeto: `git clone https://github.com/rocketseat-experts-club/angular-guards-preload-2021-12-12.git`
- Dentro da pasta do projeto, instalar as dependências: `npm install`
- Rodar a api: `npm run api` - Acesse em: [http://localhost:3000](http://localhost:3000)
- Em um novo terminal, rodar o app: `npm run start` - Acesse em: [http://localhost:4200](http://localhost:4200)

## Bibliotecas (libs) utilizadas

### Angular material (UI)

Para agilizar e focarmos na implementação das funcionalidades principais, já vamos iniciar a aula utilizando uma estrutura inicial de componentes importados do Angular Material (button, input, toolbar etc) o projeto com algum conteúdo inicial (páginas, componentes, serviços)

Link para documentação: [Angular Material Components](https://material.angular.io/components)

### Json Server Auth

Uma forma bem simples de simular uma api com endpoints para recursos e suas operações básicas (CRUD - Create, Read, Update and Delete), e também para simular endpoints de autenticação e tornar recursos privados.

`POST /register` | `POST /login`

`GET /movies` | `GET /movies/:id` | `POST /movies` | `PUT /movies/:id` | `DELETE /movies/:id`

Link para documentação: [Json Server Auth](https://www.npmjs.com/package/json-server-auth)

## Casos de Uso

- [ ] CanActivate para previnir o acesso à rotas internas já baixadas na aplicação
- [ ] CanLoad para prevenir o carregamento de módulos lazy (tardio)
- [ ] PreloadingStrategy (NoPreloading, PreloadAll)

## Links Adicionais

- Angular Reactive Forms: [Link](https://angular.io/guide/reactive-forms)
- RxJS Operators (tap, delay, catchError, finalize): [Link](https://rxjs.dev/api/operators)
- Lazy-loading feature modules: [Link](https://angular.io/guide/lazy-loading-ngmodules)

## Expert Creator

| [<img src="https://avatars.githubusercontent.com/u/35535982?v=4" width="75px;"/>](https://github.com/rpaivabr) |
| :-: |
|[Rafael Paiva](https://github.com/rpaivabr)|