<script setup>
import PainelIndicadores from './components/PainelIndicadores.vue'
import LinhaExperiencia from './components/LinhaExperiencia.vue'
import { perfil, stack, formacao, projetos } from './data/perfil.js'

const secoes = [
  { id: 'perfil', nome: 'Perfil' },
  { id: 'experiencia', nome: 'Experiência' },
  { id: 'projetos', nome: 'Projetos' },
  { id: 'tecnologias', nome: 'Tecnologias' },
  { id: 'formacao', nome: 'Formação' },
  { id: 'contato', nome: 'Contato' }
]

const ano = new Date().getFullYear()
</script>

<template>
  <div class="pagina">
    <aside class="rail">
      <div class="identidade">
        <h1 class="nome">{{ perfil.nome }}</h1>
        <p class="cargo">{{ perfil.cargo }}</p>
        <p class="local">{{ perfil.local }}</p>
      </div>
      <nav class="nav" aria-label="Seções">
        <a v-for="s in secoes" :key="s.id" :href="'#' + s.id">{{ s.nome }}</a>
      </nav>
      <div class="atalhos">
        <a :href="perfil.contato.github" target="_blank" rel="noopener">GitHub</a>
        <a :href="perfil.contato.linkedin" target="_blank" rel="noopener">LinkedIn</a>
      </div>
    </aside>

    <main class="conteudo">
      <section id="perfil" class="secao abertura">
        <h2 class="chamada">Sistemas que precisam ficar de pé todos os dias.</h2>
        <p class="resumo">{{ perfil.resumo }}</p>
        <PainelIndicadores />
      </section>

      <section id="experiencia" class="secao">
        <h2 class="titulo">Experiência</h2>
        <LinhaExperiencia />
      </section>

      <section id="projetos" class="secao">
        <h2 class="titulo">Projetos</h2>
        <div class="grade-projetos">
          <a v-for="p in projetos" :key="p.nome" :href="p.url" target="_blank" rel="noopener" class="projeto">
            <h3 class="nome-projeto">{{ p.nome }}</h3>
            <p class="desc-projeto">{{ p.descricao }}</p>
            <div class="stack-projeto">
              <span v-for="tech in p.stack" :key="tech" class="tech">{{ tech }}</span>
            </div>
          </a>
        </div>
      </section>

      <section id="tecnologias" class="secao">
        <h2 class="titulo">Tecnologias</h2>
        <div class="grade-stack">
          <div v-for="grupo in stack" :key="grupo.area" class="grupo">
            <h3 class="area">{{ grupo.area }}</h3>
            <ul>
              <li v-for="t in grupo.itens" :key="t">{{ t }}</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="formacao" class="secao">
        <h2 class="titulo">Formação</h2>
        <ul class="formacao">
          <li v-for="f in formacao" :key="f.curso">
            <span class="curso">{{ f.curso }}</span>
            <span class="inst">{{ f.instituicao }}</span>
            <span class="per">{{ f.periodo }}</span>
          </li>
        </ul>
      </section>

      <section id="contato" class="secao contato">
        <h2 class="titulo">Contato</h2>
        <p class="convite">
          Aberto a conversar sobre vagas, projetos e integrações. A resposta costuma sair no mesmo dia.
        </p>
        <div class="links">
          <a :href="'mailto:' + perfil.contato.email">{{ perfil.contato.email }}</a>
          <a :href="'tel:' + perfil.contato.telefoneLink">{{ perfil.contato.telefone }}</a>
          <a :href="perfil.contato.linkedin" target="_blank" rel="noopener">LinkedIn</a>
          <a :href="perfil.contato.github" target="_blank" rel="noopener">GitHub</a>
        </div>
        <p class="rodape">{{ perfil.nome }} · {{ ano }} · Feito com Vue 3</p>
      </section>
    </main>
  </div>
</template>

<style scoped>
.pagina {
  display: grid;
  grid-template-columns: var(--rail) minmax(0, 1fr);
  min-height: 100vh;
}

.rail {
  position: sticky;
  top: 0;
  align-self: start;
  height: 100vh;
  padding: 44px 28px;
  display: flex;
  flex-direction: column;
  gap: 36px;
  border-right: 1px solid var(--linha);
  background: var(--papel);
}

.nome {
  font-size: 1.9rem;
  font-weight: 800;
  letter-spacing: -0.035em;
}

.cargo {
  margin-top: 8px;
  font-weight: 600;
  color: var(--azul);
}

.local {
  font-size: 0.86rem;
  color: var(--tinta-suave);
}

.nav {
  display: grid;
  gap: 2px;
}

.nav a {
  color: var(--tinta);
  text-decoration: none;
  padding: 6px 0;
  border-bottom: 1px solid var(--linha);
  font-size: 0.95rem;
}

.nav a:hover {
  color: var(--azul);
}

.atalhos {
  margin-top: auto;
  display: flex;
  gap: 16px;
  font-size: 0.86rem;
}

.conteudo {
  padding: 0 clamp(20px, 5vw, 72px);
  max-width: 980px;
}

.secao {
  padding: 72px 0;
  border-bottom: 1px solid var(--linha);
}

.secao:last-child {
  border-bottom: none;
}

.abertura {
  padding-top: 96px;
}

.chamada {
  font-size: clamp(2.1rem, 5vw, 3.5rem);
  max-width: 17ch;
  font-weight: 800;
}

.resumo {
  margin: 28px 0 44px;
  max-width: 62ch;
  font-size: 1.05rem;
  color: var(--tinta-suave);
}

.titulo {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--tinta-suave);
  margin-bottom: 32px;
  letter-spacing: 0;
}

.grade-stack {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 30px 24px;
}

.area {
  font-size: 1rem;
  color: var(--azul);
  padding-bottom: 8px;
  border-bottom: 2px solid var(--azul);
  margin-bottom: 12px;
}

.grade-stack li {
  font-size: 0.94rem;
  padding: 3px 0;
}

.formacao li {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2px 20px;
  padding: 14px 0;
  border-top: 1px solid var(--linha);
}

.curso {
  font-weight: 600;
  grid-column: 1;
  grid-row: 1;
}

.per {
  grid-row: 1 / span 2;
  grid-column: 2;
  align-self: center;
  color: var(--tinta-suave);
  font-size: 0.86rem;
}

.inst {
  grid-column: 1;
  grid-row: 2;
  color: var(--tinta-suave);
  font-size: 0.9rem;
}

.convite {
  max-width: 52ch;
  color: var(--tinta-suave);
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 14px;
  margin-top: 24px;
}

.links a {
  padding: 9px 16px;
  background: var(--tinta);
  color: var(--papel);
  text-decoration: none;
  font-size: 0.92rem;
}

.links a:hover {
  background: var(--azul);
}

.rodape {
  margin-top: 56px;
  font-size: 0.8rem;
  color: var(--tinta-suave);
}

.grade-projetos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.projeto {
  padding: 20px;
  border: 1px solid var(--linha);
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.projeto:hover {
  border-color: var(--azul);
  background: var(--papel);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.nome-projeto {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--tinta);
  margin: 0;
}

.desc-projeto {
  font-size: 0.9rem;
  color: var(--tinta-suave);
  margin: 0;
  flex-grow: 1;
}

.stack-projeto {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;
}

.tech {
  display: inline-block;
  padding: 3px 8px;
  background: var(--azul);
  color: white;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
}

@media (max-width: 860px) {
  .pagina {
    grid-template-columns: 1fr;
  }
  .rail {
    position: static;
    height: auto;
    padding: 32px 20px;
    gap: 22px;
    border-right: none;
    border-bottom: 1px solid var(--linha);
  }
  .nav {
    display: flex;
    flex-wrap: wrap;
    gap: 6px 16px;
  }
  .nav a {
    border-bottom: none;
    color: var(--azul);
  }
  .atalhos {
    margin-top: 0;
  }
  .abertura {
    padding-top: 48px;
  }
  .secao {
    padding: 48px 0;
  }
}
</style>
