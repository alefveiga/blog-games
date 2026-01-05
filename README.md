# Blog Games

Este repositório contém um site estático que lista jogos por categorias. O conteúdo é composto por arquivos HTML, CSS, imagens e um pequeno JavaScript de interação.

## Estrutura do projeto

- `index.html` — página principal.
- `categorias.html` e `categorias/` — páginas de categorias.
- `jogos/` — páginas individuais de jogos.
- `sobre/` — página "Sobre".
- `contato/` e `contato/contato.html` — página de contato.
- `css/` — estilos do site.
- `js/` — scripts JavaScript (o arquivo `main.js` foi removido).
- `assets/` — imagens e ícones.

## Como visualizar localmente

Opções para servir os arquivos localmente (site é estático):

- Usando Python 3 (porta 8000):

```bash
python -m http.server 8000
# então abra http://localhost:8000 no navegador
```

- Usando Live Server no VS Code (extensão): clique em "Go Live".

## Deploy (GitHub Pages)

O repositório já está remoto em: https://github.com/alefveiga/blog-games.git

Para publicar com GitHub Pages (branch `main`):

1. Vá em `Settings` → `Pages` no GitHub.
2. Em `Source`, selecione a branch `main` e a pasta `/ (root)`.
3. Salve — a URL pública ficará disponível em alguns minutos.

## O que foi alterado agora

- Removido `js/main.js` conforme solicitado.
- Atualizado este `README.md` com instruções e estrutura do projeto.

## Contribuições e contato

Se quiser que eu faça mais alterações (ex.: reconstruir o script JS, otimizar imagens, configurar Actions para deploy automático), diga o que prefere.

Contato: abra uma issue no repositório ou me diga aqui o que deseja mudar.

