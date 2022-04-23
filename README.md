# Ignews

IgNews é um projeto do curso Ignite trilha ReactJs. se trata de um site de noticias desenvolvido em NextJs com login social utilizando next-auth, integração com o STRIPE para pagamentos onde os usuários podem ter acesso ao conteúdo de cada postagem de acordo com o status de sua assinatura, com banco de dados FaunaDB, Prismic CMS para controlar o painel de posts e é uma aplicação Serverless, ou seja, todo o processo que dependeria de um backend foi integrado dentro do front e seguindo o padrão da JAMStack.

![home-ignews](https://user-images.githubusercontent.com/56658900/164855217-9a89458c-3470-4d24-8321-32991c6456c7.png)
![posts-gnews](https://user-images.githubusercontent.com/56658900/164855698-9ca200c7-363d-4b44-92b1-9d58cf30636f.png)
![post-gnews-inscrito](https://user-images.githubusercontent.com/56658900/164855814-bb8a66e7-569d-4e83-ba24-a1569c0d5828.png)
![post-ignews-se inscrever](https://user-images.githubusercontent.com/56658900/164856055-fdb229f6-108a-4e71-b821-58040d9bcd2e.png)
![pay-ignews](https://user-images.githubusercontent.com/56658900/164856425-5a08b7e8-acae-4f43-a5e9-f9361c4bede9.png)



### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prismic CMS](https://prismic.io/)
- [Stripe](https://stripe.com/en-br)
- [FaunaDB](https://fauna.com/)


### 🎲 Rodando aplicação

##### Criar um arquivo .env com os seguintes dados:
###### Stripe 
- STRIPE_API_KEY
- NEXT_PUBLIC_STRIPE_PUBLIC_KEY
- STRIPE_WEBHOOK_SECRET
- STRIPE_SUCCESS_URL
- STRIPE_CANCEL_URL

###### Github
- GITHUB_CLIENT_ID
- GITHUB_CLIENT_SECRET

###### FaunaDB
- FAUNADB_KEY

###### Prismic CMS
- PRISMIC_ENDPOINT
- PRIMIC_ACCESS_TOKEN

```bash
# Clone este repositório
$ git clone https://github.com/Adoilson-Freitas/Ignews.git

# Acesse a pasta do projeto no terminal/cmd
$ cd Ignews

# Instale as dependências
$ yarn

# Rode a aplicação
$ yarn dev

Acesse : http://localhost:3000/

```

