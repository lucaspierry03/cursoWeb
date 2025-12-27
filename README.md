# Projeto: exerciciosJs

Repositório com exercícios e exemplos em JavaScript organizados na pasta `exerciciosJs/funcao`.

O objetivo: conter pequenos exemplos que ilustram conceitos de funções em JavaScript — callbacks, closures, IIFE, factories, função construtora, contexto léxico e variações de declaração.

Arquivos principais (exemplos encontrados em `exerciciosJs/funcao`):
- callAplly.js
- callback1.js
- callback2.js
- callback3.js
- classeVsFactory.js
- closure.js
- contextoLexico.js
- desafioFuncaoConstrutora.js
- factory1.js
- factory2.js
- funcaoConstrutora.js
- iife.js
- tiposDeclaracao.js

Como executar

1) Rodar um arquivo no terminal com Node.js

- Requisito: ter o Node.js instalado.
- Comando (a partir da raiz do projeto):

```bash
node ./exerciciosJs/funcao/closure.js
```

Substitua `closure.js` pelo arquivo que quiser executar.

2) Testar um exemplo no navegador

Alguns arquivos foram pensados para rodar no ambiente do navegador (p. ex. se manipulam o DOM). Para testar no navegador:

- Método rápido: crie um HTML simples que inclua o seu script e abra o arquivo HTML no navegador. Exemplo mínimo:

```html
<!doctype html>
<html lang="pt-BR">
<body>
<script src="conteudosJs/funcao/closure.js"></script>
</body>
</html>
```

Abra esse HTML no navegador (arrastando o arquivo para uma aba ou usando `File → Open`).

- Método recomendável para desenvolvimento: use uma extensão ou servidor local (por exemplo, a extensão Live Server do VS Code ou um servidor simples como `npx http-server`) para servir os arquivos e evitar restrições de CORS/arquivo.

3) Executar/Depurar dentro do IDE (PhpStorm)

- Para executar rapidamente: abra o arquivo no PhpStorm, clique com o botão direito e escolha `Run '<arquivo>'`.
- Para depurar: crie uma configuração Run/Debug do tipo Node.js (Settings → Run/Debug Configurations → + → Node.js) e execute com o atalho do seu keymap.

Observações rápidas

- Alguns exercícios são puramente de console (funcionam via Node). Outros usam APIs do navegador (DOM) e precisam ser executados em um browser.
- Se quiser, eu posso:
  - adicionar um `package.json` com scripts (`npm run <exemplo>`) para facilitar a execução, ou
  - criar um pequeno HTML de demonstração para os exemplos que usam o DOM.

Quer que eu adicione um desses (package.json ou HTML demo)?
