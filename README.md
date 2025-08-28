# Gestão de Usuários - Frontend
 Frontend do projeto gestão de usuários. Teste técnico 27486. 

Este projeto foi implementado utilizando **Angular 17** e segue boas práticas de organização de código.

## Tecnologias Utilizadas

- **Angular 17**  
- **NVM** para gerenciamento do Node.js (Versão utilizada: 20)  
- **Angular Material** para estilização das telas  

## Como Rodar o Projeto
- npm install para baixar as dependências
- ng serve ou npm start para iniar a aplicação

- Após iniciar a aplicação, acesse:
  http://localhost:4200/
  
## Decisões Técnicas

- O projeto segue a organização **Package by Feature**, onde o código é estruturado por domínio.
- Os domínios do projeto são:  
  - **Usuários**  

- Neste domínio estão localizados os diretórios contendo as  camadas internas, como:  
  - `controllers`  
  - `models`  
  - `services`  
  - Entre outros componentes específicos do domínio
- Foram criados componentes reutilizáveis na pasta shared para crud de cada domínio
- Foi criado um arquivo json com dados , no caminho src/assets/mock-usuarios.json e o service contendo todos métodos crud simulando o retorno de uma API real.

Essa organização facilita a manutenção, escalabilidade e permite que cada feature seja desenvolvida de forma mais independente.

## Projeto estático do 

Exemplo da estrutura por domínio:

