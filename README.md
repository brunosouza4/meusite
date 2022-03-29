# Projeto para Teste Desenvolvedor(a) Júnior
## por Bruno Figueiredo de Souza

O desenvolvimento do projeto foi realizado sem utilização de templates, achei válido a criação da interface do zero, pois também queria aprender sobre essa parte.

## Estrutura
Criei uma estrutura de páginas e dividi meus arquivos para que pudesse ficar mais organizado, os arquivos são:
- telainicial.js -> Aqui é onde realizo a consulta da API fornecida e apresento os produtos.
- carrinho.js -> Aqui é onde apresento os produtos que foram colocados no carrinho ao clicar comprar na tela inicial.

Essa divisão em páginas foi criada utilizando a biblioteca react-router-dom, onde a telaincial pode ser acessada pelo link '/' e a tela do carrinho pelo link '/carrinho'.

Para criar a navegação, ao clicar no botão do carrinho ele te direciona para a página '/carrinho', e ao clicar no logotipo ele te direciona para a página '/'.

Criei um outro arquivo para o cabeçalho, chamado de header.js, que é chamado tanto em telainicial quanto carrinho.

Para que os produtos do carrinho fossem reconhecidos tanto no arquivo carrinho.js quando no arquivo header.js, foi criado o arquivo cartContext.js, e utilizando as ferramentas de context do próprio react.

Dentro dessa lógica do Context, sempre se clicar o botão comprar em um produto na tela inicial, ele será adicionado a uma lista JSON de produtos chamada de 'cart'.

Dentro das funções do Context, após realizar cada passo, a informação é salva também no armazenamento local do navegador, para caso o usuário atualize a página, ele não perca as informações do carrinho.

Foi criado também uma lógica para que caso um produto seja adicionado ao carrinho mais de uma vez, fosse acrescentado em um contador de quantidade.

Com essa lista, foi possível adicionar um contador de produtos no Cabeçalho, e também exibir quais são os produtos escolhidos dentro do carrinho.

Dentro do carrinho, criei um botão para remover produtos do carrinho, assim como a opção de escolher a quantidade de itens e ver o preço total daquele item.

## O que faltou
Criação de uma ferramenta de filtro para os produtos na tela inicial;
Criação do formulário de cadastro do cliente;
Salvar o carrinho e o formulário em um banco de dados ao final da compra;

## Instalações

Essas foram as instalações necessárias para o projeto:

```sh
npm install --save axios 
```
```sh
npm install react-router-dom@6
```



