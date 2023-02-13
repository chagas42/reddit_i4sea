<h1 align="center">
  <img alt="reddit" title="reddit" src=".github/logo.png" height="200px"/>
</h1>

## Objetivo

Este aplicativo foi desenvolvido para o teste técnico de uma oportunidade de trabalho na i4sea.


## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React Native](https://reactnative.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Expo Bare Workflow](https://expo.io/)
- [ReduxJS Toolkit](https://callstack.github.io/react-native-testing-library/)
- [react-native-webview](https://github.com/react-native-webview/react-native-webview)

## Descrição do projeto

O aplicativo deveria consumir a [redditHotJsonAPI](https://api.reddit.com/r/pics/hot.json), e ter essas funcionalidades:

- Mostrar uma listagem das postagem no subreddit r/pics;
- Cada postagem deve conter os seguintes dados:
  - Imagem
  - Título
  - Autor
  - Número total de votos (score)
- Armazenar os dados na store global com Mobx;
- Depois que o usuário tocar em uma postagem, navegue até a URL da postagem em um WebView.

Optei por utilizar reduxJs ao invés de mobx, tentei implementar porém não conseguir fazer com que as actions de atualização do estado da lista de posts fossem atualizados da maneira correta.

## Disclaimer (android): 

  No ambiente nativo do android obtive dificuldades em renderizar o contéudo da url
  do reddit na webView, sendo somente a url do reddit que não estava funcionando (colocando 'https://google.com' por exemplo a webview renderizava), ficando uma tela em branco, acredito que possa ser CORS. 



## 🚀 Como executar

```bash
    
    #Clonar o repositório
    $ git clone https://github.com/chagas42/reddit_i4sea

    #Entrar no diretório
    $ cd reddit_i4sea

    #Instalar as dependências 
    $ yarn  

    #Iniciar o projeto no ios
    $ yarn ios

    #Iniciar o projeto no android
    $ yarn android

```

## 📄 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com ♥ [Júnior Chagas](https://github.com/chagas42)