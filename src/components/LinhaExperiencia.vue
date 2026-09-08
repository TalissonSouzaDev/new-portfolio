<script setup>
import { experiencias } from '../data/perfil.js'
</script>

<template>
  <ol class="linha">
    <li v-for="exp in experiencias" :key="exp.empresa + exp.periodo" class="etapa">
      <div class="marco" :class="{ ativo: exp.atual }" aria-hidden="true"></div>
      <div class="conteudo">
        <p class="periodo">
          {{ exp.periodo }}
          <span v-if="exp.atual" class="agora">em andamento</span>
        </p>
        <h3 class="cargo">{{ exp.cargo }}</h3>
        <p class="empresa">{{ exp.empresa }}</p>
        <p class="vinculo">{{ exp.vinculo }}</p>
        <ul class="itens">
          <li v-for="item in exp.itens" :key="item">{{ item }}</li>
        </ul>
        <ul class="stack">
          <li v-for="t in exp.stack" :key="t">{{ t }}</li>
        </ul>
      </div>
    </li>
  </ol>
</template>

<style scoped>
.linha {
  list-style: none;
  margin: 0;
  padding: 0;
}

.etapa {
  position: relative;
  padding: 0 0 44px 30px;
  border-left: 1px solid var(--linha);
}

.etapa:last-child {
  padding-bottom: 0;
  border-left-color: transparent;
}

.marco {
  position: absolute;
  left: -5px;
  top: 7px;
  width: 9px;
  height: 9px;
  background: var(--papel-fundo);
  border: 2px solid var(--tinta-suave);
  border-radius: 50%;
}

.marco.ativo {
  border-color: var(--ocre);
  background: var(--ocre);
}

.periodo {
  font-size: 0.8rem;
  color: var(--tinta-suave);
  letter-spacing: 0.01em;
}

.agora {
  color: var(--ocre);
  font-weight: 600;
  margin-left: 8px;
}

.cargo {
  font-size: 1.35rem;
  margin-top: 6px;
}

.empresa {
  font-weight: 600;
  color: var(--azul);
  margin-top: 2px;
}

.vinculo {
  font-size: 0.85rem;
  color: var(--tinta-suave);
}

.itens {
  margin-top: 14px;
  display: grid;
  gap: 9px;
  max-width: 66ch;
}

.itens li {
  position: relative;
  padding-left: 18px;
  font-size: 0.95rem;
}

.itens li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 11px;
  width: 8px;
  height: 1px;
  background: var(--azul-claro);
}

.stack {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 16px;
}

.stack li {
  font-size: 0.76rem;
  padding: 3px 9px;
  border: 1px solid var(--linha);
  color: var(--tinta-suave);
  background: var(--papel);
}
</style>
