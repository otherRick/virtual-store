# Virtual Store

Este é um aplicativo simples que permite aos usuários escolher em uma lista de opções suas figurinhas favoritas para adicionar no carrinho de compras. Ele foi criado usando React Native e a API do [Rick and Morty](https://rickandmortyapi.com/).

## Um pequeno disclaimer

Inicialmente, o app havia sido desenvolvido usando a API REST COUNTRIES (https://restcountries.com/). No entanto, a API ficou fora do ar durante todo o domingo. Para evitar atrasos e incertezas na execução e avaliação do app, foi decidido trocar para uma API mais estável que não alterasse as características do app, ainda mantendo-o como uma loja virtual de aquisição de produtos. No entanto, você ainda pode encontrar a primeira versão com a API REST COUNTRIES no branch chamado "chore/refactory-styles".

## Pré-requisitos

Antes de executar o aplicativo, certifique-se de ter instalado o Node.js e o React Native CLI.

## Como baixar e executar o aplicativo

1. Clone o repositório do aplicativo:

   - HTTPS: [https://github.com/otherRick/virtual-store.git](https://github.com/otherRick/virtual-store)
   - Repositório: [https://github.com/otherRick/virtual-store](https://github.com/otherRick/virtual-store)

2. Navegue até o diretório do aplicativo: `cd VirtualStore`

3. Instale as dependências do aplicativo: `yarn install`

4. Instale as dependências do aplicativo para iOS:

   - Entre na pasta ios: `cd ios`
   - Instale as dependências: `pod install`
   - Retorne ao arquivo principal: `cd ../`

5. Execute o comando para iniciar o app: `yarn start`

## Como usar o aplicativo

Na view "Home" do app, é possível optar por qualquer card quantas vezes quiser em uma lista infinita que carregará novos cards conforme é scrollada para baixo. Cada item selecionado será adicionado ao carrinho na parte superior do app, no "Header".

Clicando no ícone do carrinho no header da view, você será redirecionado para a view "Cart", onde pode visualizar todos os itens selecionados na "Home", bem como o valor multiplicado por unidade dos itens, o valor total, as opções de redução ou exclusão individual e, por fim, a opção de limpar o carrinho excluindo todos os itens.

Caso não haja nenhum item no carrinho, uma mensagem te orientará a voltar à view "Home", dando reinício a todo o processo.

## O que eu gostaria de ter implementado a mais.

Apesar de ter todas as funcionalidades requeridas em implementadas, segue umas lista de features que eu gostaria de ter adicionado:

- Um search bar na header da view "Home", onde o usuário poderia escolher um personagem específico através de alguns filtros.
- Ter um total geral da compra.
- Modal que se abriria quando um personagem fosse clicado mostra todos os detalhes vindos da API e opção de por no carrinho ou favoritar.
- Todos os componentes testados.
- Estender as configuração default do ESLint.
