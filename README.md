# Treinando

Site estático de demonstração com lista de jogos e categorias.

## Visão geral

Projeto simples em HTML/CSS/JS que contém páginas de categorias, páginas de jogos, e um contato.

Estrutura principal:

- `index.html` — página inicial
- `categorias.html` — página de categorias
- `css/` — estilos
- `js/` — scripts (inclui `main.js` e `popup.js`)
- `jogos/` — páginas individuais dos jogos
- `sobre/`, `contato/` — páginas institucionais

## Como rodar localmente

1. Abra `index.html` no seu navegador (duplo clique ou `File → Open`).
2. Alternativamente, rode um servidor HTTP simples na raiz do projeto, por exemplo:

```
# Python 3
python -m http.server 8000

# ou, com Node.js (serve instalado globalmente)
npx serve .
```

E então abra `http://localhost:8000`.

## Fazer deploy no GitHub Pages

1. Inicialize um repositório Git na pasta (se ainda não existir):

```
git init
git add .
git commit -m "Initial commit"
git remote add origin <URL-do-repositório-no-GitHub>
git branch -M main
git push -u origin main
```

2. Ative o GitHub Pages nas configurações do repositório (branch `main` / pasta `root`).

## Licença

Coloque aqui a licença desejada (por exemplo, MIT) ou remova esta seção se não aplicável.

## Contato

Crie uma issue ou abra um pull request no repositório para sugestões/erros.
