# Portfólio — Talisson Machado

Site pessoal em Vue 3 + Vite, pronto para deploy na Vercel.

## Rodar localmente

Requer Node.js 18 ou superior.

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Publicar na Vercel (plano gratuito)

Atualização de deploy: 2026-09-08.

### Caminho 1 — pelo GitHub (recomendado)

1. Crie um repositório novo no GitHub, por exemplo `portfolio`.
2. Dentro desta pasta, rode:

```bash
git init
git add .
git commit -m "Portfólio em Vue 3"
git branch -M main
git remote add origin https://github.com/TalissonSouzaDev/portfolio.git
git push -u origin main
```

3. Entre em https://vercel.com e faça login com a conta do GitHub.
4. Clique em **Add New → Project** e selecione o repositório.
5. A Vercel detecta o Vite sozinho. Confirme os campos: framework **Vite**, build `npm run build`, output `dist`.
6. Clique em **Deploy**. Em cerca de um minuto o site fica no ar em `seu-projeto.vercel.app`.

A partir daí, todo `git push` na branch `main` publica uma nova versão automaticamente.

### Caminho 2 — pela linha de comando

```bash
npm install -g vercel
vercel login
vercel --prod
```

Responda as perguntas do assistente aceitando os padrões.

### Domínio próprio

Em **Settings → Domains** dentro do projeto, adicione o domínio e aponte os registros DNS conforme a instrução exibida. O certificado HTTPS é emitido automaticamente.

## Onde editar o conteúdo

Todo o texto — resumo, indicadores, experiências, tecnologias e formação — está em `src/data/perfil.js`. Editar esse arquivo é suficiente para atualizar o site inteiro; nenhum componente precisa ser tocado.

## Estrutura

```
src/
  data/perfil.js              conteúdo do site
  components/
    PainelIndicadores.vue     números de produção na abertura
    LinhaExperiencia.vue      linha do tempo das empresas
  styles/base.css             tokens de cor e tipografia
  App.vue                     layout e seções
```
