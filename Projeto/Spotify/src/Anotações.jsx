import React from "react";

const App2 = () => {
  return <div>App2</div>;
};

export default App2;

// arrow function
// const App2 = () => <h1>Olá, mundo!</h1>;

// rafce

// nomeação de componentes
// PascalCase => Header | App | MainSection

// nomeação de variavel, funçâo...
// camelCase => logoSpotify

// nomeação de de classe
// kebab casa

// export default, posso importar com qualquer nome e sem chaves
// export "sem deafault", só posso importar entre cahves e com o nome exportado

// self closing tag => <Header></Header> = <Header/>

// nomeação de classes em CSS
// metodologia BEM
// blocks = componente => bloco
// elements => __elemento
// modifiers => --modificador
// header
// header__link
// header__link--small

// componentes recebem "props"

// Array(items)
//           .fill()
//           .map((index) => (
//             <SingleItem key={`${title}-${index}`} />
//           ))

// quando componentes se re-renderizão?
// quando variaveis de estados sao atualizadas em um componente

// Hook - useState
